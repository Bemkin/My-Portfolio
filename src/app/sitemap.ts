import { MetadataRoute } from 'next';
import { blogPosts, projects } from '@/lib/constants';
import { Project } from '@/types';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://my-portfolio-theta-flame-45.vercel.app';

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
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.dateTime),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic case study pages
    const caseStudyPages = (projects as Project[])
        .filter((project) => project.problem)
        .map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        }));

    return [...staticPages, ...blogPages, ...caseStudyPages];
}
