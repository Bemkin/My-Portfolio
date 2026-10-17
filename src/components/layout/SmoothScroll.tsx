'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export function getLenis() {
    return lenis;
}

export default function SmoothScroll() {
    const pathname = usePathname();

    // One Lenis instance for the app, driven by GSAP's ticker so ScrollTrigger stays in sync.
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        lenis.on('scroll', ScrollTrigger.update);
        const tick = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tick);
            lenis?.destroy();
            lenis = null;
        };
    }, []);

    // On every route: jump to top (or the hash target) and arm reveal-on-scroll.
    useEffect(() => {
        const hash = window.location.hash;
        const target = hash ? document.querySelector(hash) : null;
        if (target instanceof HTMLElement) {
            if (lenis) lenis.scrollTo(target, { immediate: true });
            else target.scrollIntoView();
        } else if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }

        const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)');
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        io.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px' }
        );
        els.forEach((el) => io.observe(el));

        const refresh = setTimeout(() => ScrollTrigger.refresh(), 200);
        return () => {
            io.disconnect();
            clearTimeout(refresh);
        };
    }, [pathname]);

    return null;
}
