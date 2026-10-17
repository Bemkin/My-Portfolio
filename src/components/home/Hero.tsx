'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, Globe } from '@/components/ui/Icons';
import { profile } from '@/lib/site';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const track = useRef<HTMLDivElement>(null);
    const section = useRef<HTMLElement>(null);
    const photo = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const el = track.current;
        if (!el) return;

        // Endless marquee; scrolling up reverses it, like a tape deck.
        let xPercent = 0;
        let direction = -1;
        const st = ScrollTrigger.create({
            trigger: document.documentElement,
            start: 0,
            end: 'max',
            onUpdate: (self) => {
                direction = self.direction === 1 ? -1 : 1;
            },
        });
        const tick = () => {
            xPercent += 0.04 * direction;
            if (xPercent <= -50) xPercent = 0;
            if (xPercent > 0) xPercent = -50;
            gsap.set(el, { xPercent });
        };
        gsap.ticker.add(tick);

        const parallax = gsap.to(photo.current, {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: { trigger: section.current, start: 'top top', end: 'bottom top', scrub: true },
        });

        return () => {
            gsap.ticker.remove(tick);
            st.kill();
            parallax.scrollTrigger?.kill();
            parallax.kill();
        };
    }, []);

    const name = `${profile.name} —`;

    return (
        <section ref={section} className="hero" aria-label="Introduction">
            <div ref={photo} style={{ position: 'absolute', inset: 0 }}>
                <Image
                    src={profile.portrait}
                    alt={`Portrait of ${profile.name}`}
                    width={1536}
                    height={2048}
                    priority
                    sizes="(max-width: 760px) 90vw, 50vw"
                    className="hero-photo"
                />
            </div>

            <div className="hero-location">
                <p>
                    Located
                    <br />
                    in {profile.location},
                    <br />
                    {profile.country}
                </p>
                <span className="hero-globe" aria-hidden="true">
                    <Globe />
                </span>
            </div>

            <div className="hero-role">
                <ArrowDownRight />
                <h1 style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'normal' }}>
                    Founding Full-Stack
                    <br />
                    &amp; AI Engineer
                </h1>
            </div>

            <div className="hero-marquee" aria-hidden="true">
                <div ref={track} className="hero-marquee-track">
                    <span>{name}</span>
                    <span>{name}</span>
                </div>
            </div>
        </section>
    );
}
