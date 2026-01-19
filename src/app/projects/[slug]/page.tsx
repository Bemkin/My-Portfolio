import { Project } from '@/types';
import { projects } from '@/lib/constants';
import { notFound } from 'next/navigation';
import CaseStudyClient from '@/components/case-study/CaseStudyClient';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project || !project.problem) {
        notFound();
    }

    return <CaseStudyClient project={project} />;
}
