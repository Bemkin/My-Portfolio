import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/constants';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage(props: BlogPostPageProps) {
    const params = await props.params;
    const post = blogPosts.find((p) => p.slug === params.slug);

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
                    src={post.image}
                    alt={post.title}
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
                        {post.category}
                    </span>

                    <h1 style={{
                        fontSize: '32px',
                        marginBottom: '15px',
                        color: '#fafafa',
                        fontWeight: '600',
                        lineHeight: '1.3'
                    }}>
                        {post.title}
                    </h1>

                    <p style={{
                        fontSize: '18px',
                        color: '#d1d1d1',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        {post.excerpt}
                    </p>

                    <div style={{ color: '#d1d1d1', fontSize: '16px', lineHeight: '1.8' }}>
                        {post.content.split('\n\n').map((para, i) => {
                            para = para.trim();
                            if (!para) return null;

                            if (para.startsWith('## ')) {
                                return (
                                    <h2 key={i} style={{
                                        color: '#fafafa',
                                        fontSize: '24px',
                                        margin: '30px 0 15px',
                                        fontWeight: '600'
                                    }}>
                                        {para.replace('## ', '')}
                                    </h2>
                                );
                            }

                            if (para.startsWith('- ')) {
                                const items = para.split('\n');
                                return (
                                    <ul key={i} style={{ margin: '15px 0', paddingLeft: '25px', listStyle: 'disc' }}>
                                        {items.map((item, j) => (
                                            <li key={j} style={{ margin: '8px 0', color: '#d1d1d1' }}>
                                                {item.replace('- ', '').split('**').map((part, k) =>
                                                    k % 2 === 0 ? part : <strong key={k} style={{ color: '#fafafa' }}>{part}</strong>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }

                            return (
                                <p key={i} style={{ margin: '15px 0', color: '#d1d1d1' }}>
                                    {para.split('**').map((part, k) =>
                                        k % 2 === 0 ? part : <strong key={k} style={{ color: '#fafafa' }}>{part}</strong>
                                    )}
                                </p>
                            );
                        })}
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
