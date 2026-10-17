import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/ui/Button';
import { getPostBySlug, getProjects } from '@/lib/mdx';
import { projectYear, shortTitle } from '@/components/work/WorkCard';
import { SITE_URL, categoriesOf, categoryLabel } from '@/lib/site';
import type { Project } from '@/types';

type Params = { params: Promise<{ slug: string }> };

async function loadProject(slug: string) {
    try {
        const project = (await getPostBySlug('projects', slug)) as unknown as Project;
        return project.problem ? project : null;
    } catch {
        return null;
    }
}

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.filter((p) => p.problem).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const project = await loadProject(slug);
    if (!project) return { title: 'Not Found' };

    const description = project.excerpt || project.description;
    const og = new URL('/api/og', SITE_URL);
    og.searchParams.set('title', project.title);
    og.searchParams.set('type', 'Case Study');
    og.searchParams.set('category', categoriesOf(project.category)[0]);

    return {
        title: `${shortTitle(project.title)} — Case Study`,
        description,
        openGraph: { title: project.title, description, images: [og.toString()], type: 'article' },
        twitter: { card: 'summary_large_image', title: project.title, description, images: [og.toString()] },
    };
}

export default async function CaseStudyPage({ params }: Params) {
    const { slug } = await params;
    const project = await loadProject(slug);
    if (!project) notFound();

    const all = (await getProjects()).filter((p) => p.problem);
    const idx = all.findIndex((p) => p.slug === slug);
    const next = all[(idx + 1) % all.length];
    const shots = (project.screenshots ?? []).filter((s) => s !== project.image);

    return (
        <article>
            <header className="container medium page-hero">
                <p className="eyebrow" data-reveal>Case study</p>
                <h1 data-reveal style={{ marginTop: '0.3em', maxWidth: '14ch' }}>{shortTitle(project.title)}</h1>
                {(project.excerpt || project.description) && (
                    <p className="lead muted" data-reveal style={{ marginTop: '0.8em', maxWidth: '40ch' }}>
                        {project.excerpt || project.description}
                    </p>
                )}
            </header>

            <div className="container medium">
                <div className="meta-row" data-reveal>
                    <div>
                        <p className="eyebrow">Focus</p>
                        <p>{categoriesOf(project.category).map(categoryLabel).join(', ')}</p>
                    </div>
                    {project.tech && (
                        <div>
                            <p className="eyebrow">Stack</p>
                            <p>{project.tech.slice(0, 4).join(', ')}</p>
                        </div>
                    )}
                    <div>
                        <p className="eyebrow">Year</p>
                        <p>{projectYear(project)}</p>
                    </div>
                    <div>
                        <p className="eyebrow">Links</p>
                        <p style={{ display: 'flex', gap: '1.25em', flexWrap: 'wrap' }}>
                            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="nav-dot">Live site ↗</a>}
                            {project.github && project.github !== project.link && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="nav-dot">Source ↗</a>
                            )}
                            {!project.link && !project.github && <span className="muted">Private client work</span>}
                        </p>
                    </div>
                </div>
            </div>

            {project.video ? (
                <figure className="cs-hero-media cs-hero-video" style={{ marginTop: '5em' }} data-reveal>
                    <video
                        poster={project.videoPoster}
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={`${shortTitle(project.title)} demo video`}
                    >
                        {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
                        <source src={project.video} type="video/mp4" />
                    </video>
                    {project.videoCaption && <figcaption className="muted">{project.videoCaption}</figcaption>}
                </figure>
            ) : (
                <div className="cs-hero-media" style={{ marginTop: '5em' }} data-reveal>
                    <Image src={project.image} alt={`${shortTitle(project.title)} preview`} width={1600} height={1000} priority sizes="(max-width: 1200px) 90vw, 64em" />
                </div>
            )}

            <section className="section">
                <div className="container medium" style={{ display: 'grid', gap: '5em' }}>
                    <div className="cs-two-col" data-reveal>
                        <p className="eyebrow">The problem</p>
                        <p className="lead">{project.problem}</p>
                    </div>
                    {project.solution && (
                        <div className="cs-two-col" data-reveal>
                            <p className="eyebrow">The solution</p>
                            <p className="lead muted">{project.solution}</p>
                        </div>
                    )}
                    {project.metrics && project.metrics.length > 0 && (
                        <div className="metrics" data-reveal>
                            {project.metrics.map((m) => (
                                <div key={m.label} style={{ paddingTop: '1.5em', borderTop: '1px solid var(--color-border)' }}>
                                    <p className="eyebrow">{m.label}</p>
                                    <p className="metric-value">{m.value}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {project.features && project.features.length > 0 && (
                        <div className="cs-two-col" data-reveal>
                            <p className="eyebrow">Key features</p>
                            <ol className="feature-list">
                                {project.features.map((f) => <li key={f}>{f}</li>)}
                            </ol>
                        </div>
                    )}
                </div>
            </section>

            {shots.length > 0 && (
                <section className="container medium" style={{ paddingBottom: 'var(--section-padding)' }}>
                    <div className="shots">
                        {shots.map((src) => (
                            <figure key={src} data-reveal>
                                <Image src={src} alt="" width={1400} height={900} sizes="(max-width: 760px) 90vw, 60vw" />
                            </figure>
                        ))}
                    </div>
                </section>
            )}

            {project.content?.trim() && (
                <section className="container medium" style={{ paddingBottom: 'var(--section-padding)' }}>
                    <div className="stripe" style={{ marginBottom: '3em' }} />
                    <div className="cs-two-col">
                        <p className="eyebrow">Deep dive</p>
                        <div className="prose">
                            <MDXRemote source={project.content} options={{ mdxOptions: { format: 'md' } }} />
                        </div>
                    </div>
                </section>
            )}

            {next && next.slug !== slug && (
                <section className="container medium" style={{ paddingBottom: 'calc(var(--section-padding) * 0.6)' }}>
                    <div className="stripe" style={{ marginBottom: '4em' }} />
                    <Link href={`/projects/${next.slug}`} className="next-project">
                        <p className="eyebrow">Next case</p>
                        <h2>{shortTitle(next.title)}</h2>
                    </Link>
                    <div className="center-btn" style={{ marginTop: '3em' }}>
                        <Button href="/work" magnetic>All work</Button>
                    </div>
                </section>
            )}
        </article>
    );
}
