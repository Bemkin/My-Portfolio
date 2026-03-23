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
                    Hello! I'm Bemnet Kibret, a passionate full-stack web developer and entrepreneur based in Addis Ababa, Ethiopia. My journey into tech began at **Addis Ababa Science and Technology University** and accelerated through intensive training at **Evangadi Technologies**, transforming my curiosity into a career building scalable, innovative digital solutions.
                </p>
                <p>
                    Today, I work as a freelance developer and an active builder in the startup ecosystem. My technical foundation is built on React, Next.js, Node.js, TypeScript, and high-performance databases like Supabase and PostgreSQL. I honed these skills practically during my Backend Developer Internship at **MARVELS CREATIVE TECHNOLOGY**, and I maintain **daily GitHub activity** pushing production-ready code.
                </p>
                <p>
                    I am driven by building impactful web applications that solve real, complex problems. Whether I am developing **Senselet**—a robust SaaS inventory management system integrated with Chapa payments—creating premium e-commerce platforms like **Kaffa Roasters**, or engineering gym software like a personal trainer CRM, I focus on clean architecture and meticulous attention to detail. I also build for the domains I live in; my dedication to bodybuilding directly inspired **FormCheck AI**, leveraging MediaPipe AI to solve real fitness challenges.
                </p>
                <p>
                    Beyond the terminal, I am a professional DJ performing under the name **kinkin**. Curating immersive Afro House and Techno soundscapes has given me a distinctive perspective on user experience design. I understand that just as a great DJ set controls the energy of a room, a great digital product should not only function flawlessly but evoke emotion, flow intuitively, and deliver absolute delight.
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
                <h3 className="h3 clients-title">Technologies I Love</h3>
                <motion.ul
                    className="clients-list has-scrollbar"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    style={{ paddingBottom: '20px' }}
                >
                    {[
                        { name: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/white' },
                        { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
                        { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6' },
                        { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
                        { name: 'Supabase', src: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
                        { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' }
                    ].map((tech, i) => (
                        <motion.li key={i} className="clients-item" variants={itemVariants} style={{ minWidth: '80px' }}>
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
                                    width={40}
                                    height={40}
                                    style={{
                                        height: '40px',
                                        width: 'auto',
                                        objectFit: 'contain'
                                    }}
                                    className={`tech-logo ${tech.name === 'Next.js' ? 'invert-on-light' : ''}`}
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
