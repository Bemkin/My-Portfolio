'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Pulls its child toward the cursor while hovered, then springs back.
export default function Magnetic({
    children,
    strength = 0.35,
    className = '',
}: {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const xTo = gsap.quickTo(el, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
        const yTo = gsap.quickTo(el, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

        const onMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            xTo((e.clientX - (rect.left + rect.width / 2)) * strength);
            yTo((e.clientY - (rect.top + rect.height / 2)) * strength);
        };
        const onLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, [strength]);

    return (
        <div ref={ref} className={`magnetic ${className}`}>
            {children}
        </div>
    );
}
