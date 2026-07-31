import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/mdx';

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
    const blogPages = blogPosts.map((post: { slug: string; dateTime?: string }) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.dateTime ? new Date(post.dateTime) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic case study pages
    const caseStudyPages = (projects as { slug: string; problem?: string }[])
        .filter((project) => project.problem)
        .map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        }));

    return [...staticPages, ...blogPages, ...caseStudyPages];
}
