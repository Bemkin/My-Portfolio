import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
