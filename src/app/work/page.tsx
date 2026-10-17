import type { Metadata } from 'next';
import WorkIndex from '@/components/work/WorkIndex';
import { getProjects } from '@/lib/mdx';

export const metadata: Metadata = {
    title: 'Work',
    description: 'Case studies in agentic AI, SaaS platforms and high-craft web products by Bemnet Kibret.',
};

export default async function WorkPage() {
    const projects = (await getProjects()).filter((p) => p.problem);

    return (
        <div className="section" style={{ paddingTop: 0 }}>
            <header className="container medium page-hero" style={{ paddingBottom: 0 }}>
                <h1 data-reveal>Building production-grade products</h1>
            </header>
            <WorkIndex projects={projects} />
        </div>
    );
}
