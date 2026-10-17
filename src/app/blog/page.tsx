import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '@/components/ui/Icons';
import { getBlogPosts } from '@/lib/mdx';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Notes from Bemnet Kibret on AI-assisted engineering, product building and shipping SaaS.',
};

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <>
            <header className="container medium page-hero">
                <h1 data-reveal>Notes on building things</h1>
            </header>
            <section className="container medium" style={{ paddingBottom: 'var(--section-padding)' }}>
                <ul className="blog-list">
                    {posts.map((post) => (
                        <li key={post.slug} data-reveal>
                            <Link href={`/blog/${post.slug}`} className="blog-row">
                                <div className="blog-row-media">
                                    <Image src={post.image} alt="" width={560} height={420} sizes="14em" />
                                </div>
                                <div>
                                    <p className="eyebrow">{post.category} · {post.date}</p>
                                    <h3>{post.title}</h3>
                                    <p className="muted">{post.excerpt}</p>
                                </div>
                                <ArrowUpRight className="footer-arrow-inline" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
