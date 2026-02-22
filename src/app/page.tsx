import HomeClient from '@/components/HomeClient';
import { getPosts } from '@/lib/mdx';
import type { Project } from '@/types';

export default async function Page() {
    const projects = await getPosts('projects') as unknown as Project[];
    const posts = await getPosts('blog');

    return <HomeClient allProjects={projects} posts={posts} />;
}
