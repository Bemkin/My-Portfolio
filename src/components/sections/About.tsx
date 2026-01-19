'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
    name: string;
    text: string;
    avatar: string;
}

interface AboutProps {
    active: boolean;
    testimonials: Testimonial[];
    onTestimonialClick: (index: number) => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const About = ({ active, testimonials, onTestimonialClick }: AboutProps) => {
    return (
        <article className={`about ${active ? 'active' : ''}`} data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    I'm a versatile full-stack web developer proficient in developing and deploying complex web applications. With a strong foundation in both front-end and back-end technologies, I create seamless user experiences by blending creativity with technical expertise. My skills encompass HTML, CSS, JavaScript, React, Node.js, and various databases.
                </p>
                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
                </p>
                <p>
                    As I continue to grow as a web developer, my goal is to take on more challenging projects that push the boundaries of my skills and knowledge. I am eager to collaborate with clients who value innovation and creativity, and I look forward to building impactful web applications that make a difference.
                </p>
            </section>

            {/* Service */}
            <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>
                <motion.ul
                    className="service-list"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
                >
                    {[
                        { title: 'Web Development', text: 'Modern, scalable web applications built with cutting-edge technologies like React and Next.js.', icon: '/images/icon-dev.svg' },
                        { title: 'Mobile Apps', text: 'Cross-platform mobile applications delivering seamless performance and native-like experiences.', icon: '/images/icon-app.svg' },
                        { title: 'Professional DJ', text: 'Professional Disk Jockey services, delivering curated soundscapes and high-energy music experiences.', icon: '/images/icon-music.svg' }
                    ].map((service, i) => (
                        <motion.li key={i} className="service-item content-card" variants={itemVariants} style={{ display: 'flex', textAlign: 'left', alignItems: 'flex-start', gap: '20px' }}>
                            <div className="service-icon-box" style={{ flexShrink: 0, marginTop: '5px' }}>
                                <Image src={service.icon} alt={service.title} width={40} height={40} />
                            </div>
                            <div className="service-content-box" style={{ textAlign: 'left' }}>
                                <h4 className="h4 service-item-title">{service.title}</h4>
                                <p className="service-item-text">{service.text}</p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <motion.ul
                    className="testimonials-list has-scrollbar"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    style={{ paddingBottom: '40px' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.li
                            key={index}
                            className="testimonials-item"
                            onClick={() => onTestimonialClick(index)}
                            variants={itemVariants}
                            style={{ minWidth: 'calc(50% - 10px)' }}
                        >
                            <div className="content-card" data-testimonials-item style={{ height: '100%' }}>
                                <figure className="testimonials-avatar-box" style={{ border: '4px solid var(--eerie-black-2)' }}>
                                    <Image src={testimonial.avatar} alt={testimonial.name} width={60} height={60} />
                                </figure>
                                <h4 className="h4 testimonials-item-title" data-testimonials-title style={{ marginTop: '10px' }}>{testimonial.name}</h4>
                                <div className="testimonials-text" data-testimonials-text>
                                    <p style={{ color: 'var(--light-gray-70)' }}>{testimonial.text}</p>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </section>

            {/* Collaborations & Technology */}
            <section className="clients">
                <h3 className="h3 clients-title">Collaborations & Tech</h3>
                <motion.ul
                    className="clients-list has-scrollbar"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    style={{ paddingBottom: '20px' }}
                >
                    {[
                        { name: 'Marvel', src: '/images/white primary whith purple logo.svg' },
                        { name: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/white' },
                        { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
                        { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6' },
                        { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                        { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' }
                    ].map((tech, i) => (
                        <motion.li key={i} className="clients-item" variants={itemVariants} style={{ minWidth: tech.name === 'Marvel' ? '120px' : '80px' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                                opacity: 0.8,
                                transition: '0.3s'
                            }} className="hover:opacity-100 transition-opacity cursor-default">
                                <Image
                                    src={tech.src}
                                    alt={tech.name}
                                    width={tech.name === 'Marvel' ? 120 : 40}
                                    height={tech.name === 'Marvel' ? 30 : 40}
                                    style={{
                                        height: tech.name === 'Marvel' ? '30px' : '40px',
                                        width: 'auto',
                                        objectFit: 'contain'
                                    }}
                                    className="tech-logo"
                                    unoptimized={tech.src.startsWith('http')}
                                />
                                <span style={{
                                    fontSize: 'var(--fs-8)',
                                    color: 'var(--light-gray-70)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>{tech.name}</span>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </section>
        </article>
    );
};

export default About;
