import HomeClient from '@/components/HomeClient';
import { getPosts } from '@/lib/mdx';
import type { Project, BlogPost } from '@/types';

export default async function Page() {
    const projects = await getPosts('projects') as unknown as Project[];
    const posts = await getPosts('blog') as unknown as BlogPost[];

    return <HomeClient allProjects={projects} posts={posts} />;
}
