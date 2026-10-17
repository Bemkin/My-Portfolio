'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { greetings } from '@/lib/site';

const SEEN_KEY = 'bk_preloader_seen';

// Greeting cycle shown once per browser session. An inline script in the layout
// adds `no-preloader` to <html> before paint when it has already been seen.
export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [done, setDone] = useState(false);
    const root = useRef<HTMLDivElement>(null);
    const curve = useRef<SVGPathElement>(null);

    useEffect(() => {
        const skip =
            document.documentElement.classList.contains('no-preloader') ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (skip) {
            if (root.current) root.current.style.display = 'none';
            return;
        }
        try {
            sessionStorage.setItem(SEEN_KEY, '1');
        } catch {}

        let i = 0;
        let timer: ReturnType<typeof setTimeout>;
        const next = () => {
            i += 1;
            if (i < greetings.length) {
                setIndex(i);
                timer = setTimeout(next, 150);
            } else {
                exit();
            }
        };
        timer = setTimeout(next, 900);

        const exit = () => {
            const h = window.innerHeight;
            const tl = gsap.timeline({ onComplete: () => setDone(true) });
            tl.to(curve.current, {
                attr: { d: 'M0 0 L100 0 Q50 0 0 0 Z' },
                duration: 0.8,
                ease: 'power3.inOut',
            }, 0.2);
            tl.to(root.current, { y: -h, duration: 0.8, ease: 'power3.inOut' }, 0.2);
        };

        return () => clearTimeout(timer);
    }, []);

    if (done) return null;

    return (
        <div ref={root} className="preloader" aria-hidden="true">
            <p className="preloader-word">{greetings[index]}</p>
            <svg className="preloader-curve" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%' }}>
                <path ref={curve} d="M0 0 L100 0 Q50 100 0 0 Z" />
            </svg>
        </div>
    );
}
