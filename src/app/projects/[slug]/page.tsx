import { Project } from '@/types';
import { getPostBySlug, getPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import CaseStudyClient from '@/components/case-study/CaseStudyClient';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const project = await getPostBySlug('projects', slug) as any;
        const ogUrl = new URL('https://my-portfolio-theta-flame-45.vercel.app/api/og');
        ogUrl.searchParams.set('title', project.title);
        ogUrl.searchParams.set('type', 'Case Study');
        ogUrl.searchParams.set('category', Array.isArray(project.category) ? project.category[0] : project.category);

        return {
            title: `${project.title} | Case Study`,
            description: project.excerpt || project.description,
            openGraph: {
                title: project.title,
                description: project.excerpt || project.description,
                images: [ogUrl.toString()],
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: project.title,
                description: project.excerpt || project.description,
                images: [ogUrl.toString()],
            },
        };
    } catch (e) {
        return {
            title: 'Not Found',
        };
    }
}

export async function generateStaticParams() {
    const projects = await getPosts('projects');
    return projects.map((project: any) => ({
        slug: project.slug,
    }));
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let project;

    try {
        project = await getPostBySlug('projects', slug) as unknown as Project;
    } catch (e) {
        notFound();
    }

    if (!project || !project.problem) {
        notFound();
    }

    return <CaseStudyClient project={project} />;
}
