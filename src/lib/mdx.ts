import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project, BlogPost } from '@/types';
import { FEATURED_SLUGS } from '@/lib/site';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getPosts(type: 'blog' | 'projects') {
    const dir = path.join(contentDirectory, type);

    // Return empty array if directory doesn't exist (prevents Vercel read-only errors)
    if (!fs.existsSync(dir)) {
        return [];
    }

    const files = fs.readdirSync(dir);

    const posts = files
        .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
        .map((file) => {
            const filePath = path.join(dir, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContent);

            return {
                ...data,
                slug: file.replace(/\.mdx?$/, ''),
                content,
            };
        });

    return posts.sort((a: Record<string, unknown>, b: Record<string, unknown>) => {
        const aDate = typeof a.date === 'string' ? a.date : undefined;
        const bDate = typeof b.date === 'string' ? b.date : undefined;
        if (aDate && bDate) {
            return new Date(bDate).getTime() - new Date(aDate).getTime();
        }
        if (aDate) return -1;
        if (bDate) return 1;
        return 0;
    });
}

export async function getPostBySlug(type: 'blog' | 'projects', slug: string) {
    const filePath = path.join(contentDirectory, type, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        ...data,
        slug,
        content,
    };
}

export async function getProjects() {
    return (await getPosts('projects')) as unknown as Project[];
}

export async function getBlogPosts() {
    return (await getPosts('blog')) as unknown as BlogPost[];
}

/** Case studies split into the curated featured set (in FEATURED_SLUGS order) and the rest. */
export async function getCaseStudies() {
    const caseStudies = (await getProjects()).filter((p) => p.problem);
    const featured = FEATURED_SLUGS.map((slug) => caseStudies.find((p) => p.slug === slug)).filter(
        (p): p is Project => Boolean(p)
    );
    const others = caseStudies.filter((p) => !FEATURED_SLUGS.includes(p.slug));
    return { featured, others };
}
