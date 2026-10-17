import type { Metadata } from 'next';
import Link from 'next/link';
import WorkIndex from '@/components/work/WorkIndex';
import { projectHref, projectYear, shortTitle } from '@/components/work/WorkCard';
import { getCaseStudies } from '@/lib/mdx';

export const metadata: Metadata = {
    title: 'Work',
    description: 'Case studies in agentic AI, multi-tenant SaaS and web products by Bemnet Kibret.',
};

export default async function WorkPage() {
    const { featured, others } = await getCaseStudies();

    return (
        <div className="section" style={{ paddingTop: 0 }}>
            <header className="container medium page-hero" style={{ paddingBottom: 0 }}>
                <h1 data-reveal>Building production-grade products</h1>
            </header>
            <WorkIndex projects={featured} />

            {others.length > 0 && (
                <section className="container medium" style={{ marginTop: 'calc(var(--section-padding) * 0.7)' }} aria-labelledby="other-title">
                    <p id="other-title" className="eyebrow" style={{ marginBottom: '1.5em' }}>
                        Other projects · {others.length}
                    </p>
                    <ul className="other-list">
                        {others.map((p) => (
                            <li key={p.slug}>
                                <Link href={projectHref(p)} className="other-row">
                                    <h3>{shortTitle(p.title)}</h3>
                                    <span className="muted">{p.description || p.excerpt}</span>
                                    <span className="muted" style={{ textAlign: 'right' }}>{projectYear(p)}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}
