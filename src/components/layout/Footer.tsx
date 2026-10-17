'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button, { Roll } from '@/components/ui/Button';
import { ArrowDownRight } from '@/components/ui/Icons';
import { profile, socials } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger);

function LocalTime() {
    const [time, setTime] = useState('');
    useEffect(() => {
        const fmt = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: profile.timeZone,
            timeZoneName: 'short',
        });
        const update = () => setTime(fmt.format(new Date()));
        update();
        const id = setInterval(update, 30_000);
        return () => clearInterval(id);
    }, []);
    return <time suppressHydrationWarning>{time || '—'}</time>;
}

export default function Footer() {
    const pathname = usePathname();
    const curve = useRef<HTMLDivElement>(null);
    const shape = useRef<HTMLDivElement>(null);
    const darkPage = pathname === '/contact';

    // The page's bottom edge bulges into the footer and flattens as you scroll in.
    useEffect(() => {
        if (darkPage || !shape.current || !curve.current) return;
        const tween = gsap.fromTo(
            shape.current,
            { scaleY: 1 },
            {
                scaleY: 0,
                ease: 'none',
                scrollTrigger: { trigger: curve.current, start: 'top bottom', end: 'bottom top', scrub: true },
            }
        );
        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [darkPage, pathname]);

    if (pathname === '/resume') return null;

    return (
        <div className="footer-wrap">
            {!darkPage && (
                <div ref={curve} className="footer-curve" aria-hidden="true">
                    <div ref={shape} className="footer-curve-shape" />
                </div>
            )}
            <footer className="site-footer theme-dark">
                <div className="container medium">
                    <h2 className="footer-title">
                        <span className="footer-avatar">
                            <Image src={profile.portrait} alt="" width={120} height={120} />
                        </span>
                        <span>Let&rsquo;s work</span>
                        <span style={{ flexBasis: '100%' }}>together</span>
                    </h2>
                    <ArrowDownRight className="footer-arrow" />

                    <div className="footer-cta-row">
                        <div className="stripe" />
                        <div className="footer-cta-btn">
                            <Button href="/contact" round blue magnetic>
                                Get in touch
                            </Button>
                        </div>
                    </div>

                    <div className="footer-pills">
                        <Button href={`mailto:${profile.email}`} external magnetic>
                            {profile.email}
                        </Button>
                        <Button href={profile.phoneHref} external magnetic>
                            {profile.phone}
                        </Button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-group">
                        <div>
                            <p className="eyebrow">Version</p>
                            <p>{new Date().getFullYear()} © Edition</p>
                        </div>
                        <div>
                            <p className="eyebrow">Local time</p>
                            <p><LocalTime /></p>
                        </div>
                    </div>
                    <div>
                        <p className="eyebrow">Socials</p>
                        <div className="footer-bottom-group" style={{ gap: '1.75em' }}>
                            {socials.map((s) => (
                                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: '0.6em' }}>
                                    <Roll>{s.name}</Roll>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
