'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, socials, profile } from '@/lib/site';
import { Roll } from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';
import { getLenis } from './SmoothScroll';

const DARK_TOP_ROUTES = ['/', '/contact'];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    // Menu state is keyed to the route it was opened on, so navigating closes it.
    const [openOn, setOpenOn] = useState<string | null>(null);
    const open = openOn === pathname;
    const setOpen = (next: boolean | ((o: boolean) => boolean)) =>
        setOpenOn((typeof next === 'function' ? next(open) : next) ? pathname : null);
    const onDark = DARK_TOP_ROUTES.includes(pathname);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 120);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const lenis = getLenis();
        if (open) lenis?.stop();
        else lenis?.start();
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenOn(null);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    if (pathname === '/resume') return null;

    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>
            <header className={`site-header${onDark ? ' on-dark' : ''}`}>
                <Magnetic strength={0.2}>
                    <Link href="/" className="logo" aria-label={`${profile.name}, home`}>
                        <span className="logo-copy">©</span>
                        <span className="logo-slide logo-code"><span>Code by</span></span>
                        <span className="logo-short">{profile.firstName}</span>
                        <span className="logo-slide logo-full"><span>&nbsp;Kibret</span></span>
                    </Link>
                </Magnetic>
                <nav className="site-nav" aria-label="Primary">
                    <ul>
                        {navLinks.map((l) => (
                            <li key={l.href}>
                                <Magnetic strength={0.3}>
                                    <Link href={l.href} className={`nav-dot${isActive(l.href) ? ' active' : ''}`}>
                                        <Roll>{l.label}</Roll>
                                    </Link>
                                </Magnetic>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <button
                type="button"
                className={`menu-toggle${scrolled ? ' is-visible' : ''}${open ? ' is-open' : ''}`}
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="menu-panel"
                aria-label={open ? 'Close menu' : 'Open menu'}
            >
                <span className="btn-fill" aria-hidden="true" />
                <span className="menu-lines" aria-hidden="true" />
            </button>

            <div className={`menu-overlay${open ? ' is-open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />

            <aside id="menu-panel" className={`menu-panel${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
                <svg className="menu-panel-curve" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d={open ? 'M100 0 L100 100 L100 100 Q100 50 100 0 Z' : 'M100 0 L100 100 Q0 50 100 0 Z'} style={{ transition: 'd 0.9s cubic-bezier(.7,0,.3,1)' }} />
                </svg>
                <nav aria-label="Menu">
                    <p className="eyebrow">Navigation</p>
                    <ul>
                        <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                        {navLinks.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className={isActive(l.href) ? 'active' : ''}>{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <p className="eyebrow">Socials</p>
                    <div className="menu-socials">
                        {socials.map((s) => (
                            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                                <Roll>{s.name}</Roll>
                            </a>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
