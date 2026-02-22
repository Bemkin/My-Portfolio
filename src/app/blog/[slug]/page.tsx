import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
    const params = await props.params;
    try {
        const post = await getPostBySlug('blog', params.slug) as any;
        const ogUrl = new URL('https://my-portfolio-theta-flame-45.vercel.app/api/og');
        ogUrl.searchParams.set('title', post.title);
        ogUrl.searchParams.set('type', 'Blog');
        ogUrl.searchParams.set('category', post.category);

        return {
            title: `${post.title} | Bemnet Kibret`,
            description: post.excerpt,
            openGraph: {
                title: post.title,
                description: post.excerpt,
                images: [ogUrl.toString()],
                type: 'article',
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: post.excerpt,
                images: [ogUrl.toString()],
            },
        };
    } catch (e) {
        return {
            title: 'Not Found',
        };
    }
}

interface Post {
    title: string;
    category: string;
    date: string;
    dateTime: string;
    image: string;
    excerpt: string;
    content: string;
}

export async function generateStaticParams() {
    const posts = await getPosts('blog');
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage(props: BlogPostPageProps) {
    const params = await props.params;
    let post: Post;

    try {
        post = await getPostBySlug('blog', params.slug) as unknown as Post;
    } catch (e) {
        notFound();
    }

    if (!post) {
        notFound();
    }

    return (
        <div style={{
            background: '#0f0f10',
            minHeight: '100vh',
            color: '#fafafa',
            padding: '60px 20px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <Link
                    href="/"
                    style={{
                        display: 'inline-block',
                        color: '#ffdb70',
                        textDecoration: 'none',
                        marginBottom: '30px',
                        fontSize: '14px'
                    }}
                >
                    ← Back to Portfolio
                </Link>

                <Image
                    src={post.image as string}
                    alt={post.title as string}
                    width={900}
                    height={500}
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '16px',
                        marginBottom: '40px'
                    }}
                    priority
                />

                <div style={{
                    background: '#1e1e1f',
                    borderRadius: '20px',
                    padding: '40px'
                }}>
                    <span style={{
                        fontSize: '12px',
                        color: '#ffdb70',
                        background: 'rgba(255, 184, 0, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        display: 'inline-block',
                        marginBottom: '15px'
                    }}>
                        {post.category as string}
                    </span>

                    <h1 style={{
                        fontSize: '32px',
                        marginBottom: '15px',
                        color: '#fafafa',
                        fontWeight: '600',
                        lineHeight: '1.3'
                    }}>
                        {post.title as string}
                    </h1>

                    <p style={{
                        fontSize: '18px',
                        color: '#d1d1d1',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        {post.excerpt as string}
                    </p>

                    <div className="mdx-content" style={{ color: '#d1d1d1', fontSize: '16px', lineHeight: '1.8' }}>
                        <MDXRemote
                            source={post.content}
                            components={{
                                h2: (props) => <h2 {...props} style={{ color: '#fafafa', fontSize: '24px', margin: '30px 0 15px', fontWeight: '600' }} />,
                                p: (props) => <p {...props} style={{ margin: '15px 0', color: '#d1d1d1' }} />,
                                ul: (props) => <ul {...props} style={{ margin: '15px 0', paddingLeft: '25px', listStyle: 'disc' }} />,
                                li: (props) => <li {...props} style={{ margin: '8px 0', color: '#d1d1d1' }} />,
                                strong: (props) => <strong {...props} style={{ color: '#fafafa' }} />,
                            }}
                        />
                    </div>

                    <div style={{
                        marginTop: '50px',
                        paddingTop: '30px',
                        borderTop: '1px solid #383838',
                        textAlign: 'center'
                    }}>
                        <Link
                            href="/#contact"
                            style={{
                                display: 'inline-block',
                                padding: '14px 30px',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                background: 'linear-gradient(to bottom right, #ffdb70, #e0a800)',
                                color: '#000',
                                fontWeight: '600'
                            }}
                        >
                            Let&apos;s Work Together
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
