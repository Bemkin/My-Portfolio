'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/constants';

interface BlogProps {
    active: boolean;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Blog = ({ active }: BlogProps) => {
    return (
        <article className={`blog ${active ? 'active' : ''}`} data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>
            <section className="blog-posts">
                <motion.ul
                    className="blog-posts-list"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', display: 'grid', gap: '30px' }}
                >
                    {blogPosts.map((post, index) => (
                        <motion.li key={index} className="blog-post-item" variants={itemVariants}>
                            <Link href={`/blog/${post.slug}`} className="content-card" style={{ padding: '0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                                <figure className="blog-banner-box" style={{ margin: '0', borderRadius: '0' }}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: 'auto', transition: 'transform 0.5s ease' }}
                                        className="hover-zoom"
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="blog-content" style={{ padding: '25px', flexGrow: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div className="blog-meta" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--light-gray-70)', fontSize: 'var(--fs-8)' }}>
                                        <p className="blog-category">{post.category}</p>
                                        <span className="dot" style={{ width: '3px', height: '3px', background: 'var(--jet)', borderRadius: '50%' }}></span>
                                        <time dateTime={post.dateTime}>{post.date}</time>
                                    </div>
                                    <h3 className="h3 blog-item-title" style={{ fontSize: 'var(--fs-4)', lineHeight: '1.4', marginTop: '5px' }}>{post.title}</h3>
                                    <p className="blog-text" style={{ color: 'var(--light-gray)', fontSize: 'var(--fs-6)', lineHeight: '1.6', marginTop: '5px' }}>{post.excerpt}</p>
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </section>
        </article>
    );
};

export default Blog;
