import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ArrowDownRight } from '@/components/ui/Icons';
import { education, experience, profile, resumeDownloadName, resumePdf, services, stack, testimonials } from '@/lib/site';

export const metadata: Metadata = {
    title: 'About',
    description: 'Bemnet Kibret is a Founding Full-Stack & AI Engineer based in Addis Ababa, building agentic AI systems and zero-to-production SaaS platforms.',
};

export default function AboutPage() {
    return (
        <>
            <header className="container medium page-hero">
                <h1 data-reveal style={{ maxWidth: '16ch' }}>
                    Helping teams ship production software from zero to scale
                </h1>
            </header>

            <section className="container medium" style={{ paddingBottom: 'var(--section-padding)' }}>
                <div className="stripe" style={{ marginBottom: '4em' }} />
                <div className="about-split">
                    <div className="about-copy" data-reveal>
                        <ArrowDownRight className="footer-arrow-inline" />
                        <p className="lead" style={{ fontSize: 'clamp(1.35em, 2.2vw, 1.75em)', lineHeight: 1.4 }}>
                            I&rsquo;m a Founding Full-Stack &amp; AI Engineer who architects end-to-end SaaS platforms, agentic AI
                            systems and high-performance web applications.
                        </p>
                        <p className="muted">
                            My path started at Addis Ababa Science and Technology University and was sharpened through intensive
                            training at Evangadi Technologies. Since then I&rsquo;ve built REST APIs as a contract backend developer at
                            Marvels Creative Technology, and founded Senselet — an AI-native inventory platform for retail, live at
                            senselet.store, with a 33-tool AI agent and row-level security on every table.
                        </p>
                        <p className="muted">
                            I work across PostgreSQL and Supabase backends, Node.js and Python services, and TypeScript and React
                            interfaces. AI-assisted tooling is part of my daily workflow, and I back the paths that move stock, money
                            and messages with automated tests.
                        </p>
                        <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap', marginTop: '2.5em' }}>
                            <Button href={resumePdf} download={resumeDownloadName} magnetic className="is-dark">
                                Download CV
                            </Button>
                            <Button href="/resume" magnetic>
                                View live CV
                            </Button>
                        </div>
                    </div>
                    <div className="about-photo" data-reveal>
                        <Image src={profile.portrait} alt={`Portrait of ${profile.name}`} width={1536} height={2048} sizes="(max-width: 900px) 100vw, 45vw" />
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }} aria-labelledby="services-title">
                <div className="container medium">
                    <h2 id="services-title" className="display" style={{ fontSize: 'clamp(2em, 4.5vw, 3.75em)', marginBottom: '1.5em' }} data-reveal>
                        I can help you with…
                    </h2>
                    <div className="services">
                        {services.map((s, i) => (
                            <div key={s.title} className="service" data-reveal>
                                <p className="service-num">0{i + 1}</p>
                                <h3>{s.title}</h3>
                                <p className="muted">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }} aria-labelledby="exp-title">
                <div className="container medium">
                    <p id="exp-title" className="eyebrow" style={{ marginBottom: '2em' }}>Experience</p>
                    <ol className="timeline">
                        {experience.map((job) => (
                            <li key={job.company} data-reveal>
                                <div>
                                    <h3>{job.role}</h3>
                                    <p className="muted" style={{ marginTop: '0.5em' }}>{job.company}</p>
                                    <p className="muted">{job.date}</p>
                                </div>
                                <ul>
                                    {job.points.map((pt) => (
                                        <li key={pt.title}>
                                            <strong>{pt.title}.</strong> <span className="muted">{pt.detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>

                    <p className="eyebrow" style={{ margin: '5em 0 2em' }}>Education</p>
                    <ol className="timeline">
                        {education.map((ed) => (
                            <li key={ed.institution} data-reveal>
                                <div>
                                    <h3>{ed.institution}</h3>
                                    <p className="muted" style={{ marginTop: '0.5em' }}>{ed.date}</p>
                                </div>
                                <p className="muted" style={{ fontSize: '1.1em' }}>{ed.degree}</p>
                            </li>
                        ))}
                    </ol>

                    <p className="eyebrow" style={{ margin: '5em 0 2em' }}>Stack</p>
                    <div className="stack" data-reveal>
                        {stack.map((t) => (
                            <span key={t} className="tag">{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {testimonials.length > 0 && (
                <section className="section" style={{ paddingTop: 0 }} aria-label="Testimonial">
                    <div className="container medium">
                        <div className="stripe" style={{ marginBottom: '4em' }} />
                        {testimonials.map((t) => (
                            <figure key={t.name} data-reveal>
                                <blockquote className="quote">&ldquo;{t.text}&rdquo;</blockquote>
                                <figcaption className="muted" style={{ marginTop: '1.5em' }}>— {t.name}</figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
