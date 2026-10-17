import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/ui/Button';
import { getBlogPosts, getPostBySlug } from '@/lib/mdx';
import { SITE_URL } from '@/lib/site';
import type { BlogPost } from '@/types';

type Params = { params: Promise<{ slug: string }> };

async function loadPost(slug: string) {
    try {
        return (await getPostBySlug('blog', slug)) as unknown as BlogPost;
    } catch {
        return null;
    }
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const post = await loadPost(slug);
    if (!post) return { title: 'Not Found' };

    const og = new URL('/api/og', SITE_URL);
    og.searchParams.set('title', post.title);
    og.searchParams.set('type', 'Blog');
    og.searchParams.set('category', post.category);

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: { title: post.title, description: post.excerpt, images: [og.toString()], type: 'article' },
        twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [og.toString()] },
    };
}

export default async function BlogPostPage({ params }: Params) {
    const { slug } = await params;
    const post = await loadPost(slug);
    if (!post) notFound();

    return (
        <article>
            <header className="container small page-hero">
                <p className="eyebrow" data-reveal>{post.category} · {post.date}</p>
                <h1 data-reveal style={{ marginTop: '0.3em', maxWidth: '18ch', fontSize: 'clamp(2.4em, 6vw, 5em)' }}>{post.title}</h1>
                <p className="lead muted" data-reveal style={{ marginTop: '0.8em', maxWidth: '40ch' }}>{post.excerpt}</p>
            </header>

            <div className="cs-hero-media" data-reveal>
                <Image src={post.image} alt="" width={1600} height={1000} priority sizes="(max-width: 1200px) 90vw, 64em" />
            </div>

            <section className="container small section">
                <div className="prose" style={{ margin: '0 auto' }}>
                    <MDXRemote source={post.content} options={{ mdxOptions: { format: 'md' } }} />
                </div>
                <div className="center-btn">
                    <Button href="/contact" magnetic className="is-dark">Let&rsquo;s work together</Button>
                </div>
            </section>
        </article>
    );
}
