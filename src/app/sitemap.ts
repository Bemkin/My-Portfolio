import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/mdx';
import { Project } from '@/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://my-portfolio-theta-flame-45.vercel.app';

    const [blogPosts, projects] = await Promise.all([
        getPosts('blog'),
        getPosts('projects')
    ]);

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
    ];

    // Dynamic blog pages
    const blogPages = blogPosts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.dateTime),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic case study pages
    const caseStudyPages = (projects as any[])
        .filter((project) => project.problem)
        .map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        }));

    return [...staticPages, ...blogPages, ...caseStudyPages];
}
