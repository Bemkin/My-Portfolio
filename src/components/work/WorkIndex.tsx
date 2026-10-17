'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import Button from '@/components/ui/Button';
import { GridIcon, ListIcon } from '@/components/ui/Icons';
import WorkCard, { projectHref, projectYear, shortTitle } from './WorkCard';
import { categoriesOf, categoryLabel } from '@/lib/site';
import type { Project } from '@/types';

export default function WorkIndex({ projects }: { projects: Project[] }) {
    const [view, setView] = useState<'list' | 'grid'>('list');
    const [hovered, setHovered] = useState<number | null>(null);
    const preview = useRef<HTMLDivElement>(null);
    const cursor = useRef<HTMLDivElement>(null);

    const visible = projects;

    // Floating preview follows the cursor over the list.
    useEffect(() => {
        if (!preview.current || !cursor.current) return;
        const px = gsap.quickTo(preview.current, 'left', { duration: 0.8, ease: 'power3' });
        const py = gsap.quickTo(preview.current, 'top', { duration: 0.8, ease: 'power3' });
        const cx = gsap.quickTo(cursor.current, 'left', { duration: 0.45, ease: 'power3' });
        const cy = gsap.quickTo(cursor.current, 'top', { duration: 0.45, ease: 'power3' });
        const move = (e: MouseEvent) => {
            px(e.clientX);
            py(e.clientY);
            cx(e.clientX);
            cy(e.clientY);
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <>
            <div className="container medium" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2em', flexWrap: 'wrap' }}>
                <p className="eyebrow">Selected work · {projects.length}</p>
                <div className="view-toggle only-desktop" role="group" aria-label="Layout">
                    <Button onClick={() => { setView('list'); setHovered(null); }} active={view === 'list'} ariaLabel="List view" ariaPressed={view === 'list'}>
                        <ListIcon />
                    </Button>
                    <Button onClick={() => { setView('grid'); setHovered(null); }} active={view === 'grid'} ariaLabel="Grid view" ariaPressed={view === 'grid'}>
                        <GridIcon />
                    </Button>
                </div>
            </div>

            <div className="container medium" style={{ marginTop: '5em' }}>
                {view === 'list' && (
                    <div className="only-desktop work-list-wrap">
                        <div className="work-list-head eyebrow">
                            <span>Project</span>
                            <span>Focus</span>
                            <span>Stack</span>
                            <span className="work-row-year">Year</span>
                        </div>
                        <ul className="work-list" onMouseLeave={() => setHovered(null)}>
                            {visible.map((p, i) => (
                                <li key={p.slug}>
                                    <Link
                                        href={projectHref(p)}
                                        className="work-row"
                                        onMouseEnter={() => setHovered(i)}
                                        onFocus={() => setHovered(null)}
                                        {...(!p.problem ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    >
                                        <h3>{shortTitle(p.title)}</h3>
                                        <span>{categoriesOf(p.category).slice(0, 2).map(categoryLabel).join(' & ')}</span>
                                        <span className="muted">{(p.tech ?? []).slice(0, 2).join(', ')}</span>
                                        <span className="work-row-year">{projectYear(p)}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className={view === 'list' ? 'work-grid only-mobile-grid' : 'work-grid'}>
                    {visible.map((p) => (
                        <WorkCard key={p.slug} project={p} reveal={false} />
                    ))}
                </div>
            </div>

            <div ref={preview} className={`work-preview${hovered !== null && view === 'list' ? ' is-visible' : ''}`} aria-hidden="true">
                <div className="work-preview-track" style={{ transform: `translateY(${-(hovered ?? 0) * 100}%)` }}>
                    {visible.map((p) => (
                        <div key={p.slug} className="work-preview-item">
                            <Image src={p.image} alt="" width={600} height={400} sizes="26em" loading="eager" />
                        </div>
                    ))}
                </div>
            </div>
            <div ref={cursor} className={`work-preview-cursor${hovered !== null && view === 'list' ? ' is-visible' : ''}`} aria-hidden="true">
                View
            </div>
        </>
    );
}
