'use client';

import Image from 'next/image';

interface BlogProps {
    active: boolean;
}

const Blog = ({ active }: BlogProps) => {
    const posts = [
        {
            title: 'Top Programming Languages for 2025',
            category: 'Coding Trends',
            date: 'Jan 13, 2025',
            dateTime: '2025-01-13',
            image: '/images/Top-Programming-languages-for-2025.webp',
            link: 'https://www.pluralsight.com/resources/blog/upskilling/top-programming-languages-2025',
            text: 'Discover the top programming languages predicted to dominate in 2025, including Python, Rust, and Go. Learn about their unique features and how they\'re shaping the future of software development.'
        },
        {
            title: 'AI and Machine Learning Trends',
            category: 'Coding Trends',
            date: 'Jan 13, 2025',
            dateTime: '2025-01-13',
            image: '/images/1937493-what-is-7.webp',
            link: 'https://www.techtarget.com/searchenterpriseai/tip/9-top-AI-and-machine-learning-trends',
            text: 'Explore the latest trends in artificial intelligence and machine learning, including advancements in deep learning, natural language processing, and computer vision. Learn how these technologies are transforming industries.'
        },
        {
            title: 'The Future of Web Development',
            category: 'Coding Trends',
            date: 'Jan 13, 2025',
            dateTime: '2025-01-13',
            image: '/images/The-Future-of-Web-Development-[Top-Trends-and-Predictions].webp',
            link: 'https://www.nividasoftware.com/blog/detail/how-the-future-of-web-development-will-change-till-2030',
            text: 'Dive into the future of web development with the rise of new frameworks, progressive web apps, and the increasing importance of responsive design. Stay ahead of the curve with these cutting-edge trends.'
        },
        {
            title: 'Security Best Practices',
            category: 'Coding Trends',
            date: 'Jan 13, 2025',
            dateTime: '2025-01-13',
            image: '/images/Top-Network-Security-best-practices.webp',
            link: 'https://www.cisa.gov/topics/cybersecurity-best-practices',
            text: 'Learn about the latest security best practices for developers, including secure coding techniques, vulnerability management, and the importance of regular security audits.'
        },
        {
            title: 'The Rise of Serverless Architecture',
            category: 'Coding Trends',
            date: 'Jan 13, 2025',
            dateTime: '2025-01-13',
            image: '/images/The-Rise-of-Serverless-Architectures.jpg',
            link: 'https://www.stan.vision/journal/the-rise-of-serverless-architecture-in-2024-transforming-modern-web-development#:~:text=Serverless%20architecture%20played%20a%20pivotal,innovate%20faster%20and%20more%20effectively.',
            text: 'Discover how serverless architecture is revolutionizing the way applications are built and deployed. Learn about its benefits, challenges, and best practices for implementation.'
        },
        {
            title: 'The Future of IoT',
            category: 'Coding Trends',
            date: 'Jan 13, 2025',
            dateTime: '2025-01-13',
            image: '/images/960x0.webp',
            link: 'https://www.antino.com/blog/top-9-iot-trends#:~:text=The%20future%20of%20IoT%20is,data%20analytics%2C%20and%20expanded%20interoperability.',
            text: 'Explore the latest trends in the Internet of Things (IoT), including advancements in smart devices, edge computing, and the integration of AI and IoT for smarter solutions.'
        }
    ];

    return (
        <article className={`blog ${active ? 'active' : ''}`} data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>
            <section className="blog-posts">
                <ul className="blog-posts-list">
                    {posts.map((post, index) => (
                        <li key={index} className="blog-post-item">
                            <a href={post.link} target="_blank" rel="noopener noreferrer">
                                <figure className="blog-banner-box">
                                    <Image src={post.image} alt={post.title} width={400} height={300} loading="lazy" />
                                </figure>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p className="blog-category">{post.category}</p>
                                        <span className="dot"></span>
                                        <time dateTime={post.dateTime}>{post.date}</time>
                                    </div>
                                    <h3 className="h3 blog-item-title">{post.title}</h3>
                                    <p className="blog-text">{post.text}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Blog;
