import Hero from '@/components/home/Hero';
import WorkCard from '@/components/work/WorkCard';
import Button from '@/components/ui/Button';
import { getCaseStudies } from '@/lib/mdx';

export default async function HomePage() {
    const { featured, others } = await getCaseStudies();
    const [lead, ...rest] = featured;

    return (
        <>
            <Hero />

            <section className="section" aria-labelledby="intro-title">
                <div className="container medium intro-grid">
                    <h2 id="intro-title" className="intro-statement" data-reveal>
                        Helping founders and teams turn ambitious ideas into production software. Agentic AI, scalable
                        backends and fast interfaces — shipped from zero to real users, without the hand-waving.
                    </h2>
                    <div className="intro-side" data-reveal>
                        <p className="muted">
                            The combination of systems thinking, data integrity and AI-native tooling puts me in a
                            position to own a product end to end.
                        </p>
                        <Button href="/about" round magnetic>
                            About me
                        </Button>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }} aria-labelledby="work-title">
                <div className="container medium">
                    <p id="work-title" className="eyebrow" style={{ marginBottom: '2.5em' }}>
                        Selected work
                    </p>
                    <div className="work-grid">
                        {lead && <WorkCard project={lead} wide />}
                        {rest.map((p) => (
                            <WorkCard key={p.slug} project={p} />
                        ))}
                    </div>
                    <div className="center-btn">
                        <Button href="/work" magnetic>
                            All work <sup>{featured.length + others.length}</sup>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
