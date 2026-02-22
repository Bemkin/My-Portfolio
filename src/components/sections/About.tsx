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
                    Hello! I'm Bemnet Kibret, a passionate full-stack web developer from Addis Ababa, Ethiopia. My journey into the world of technology began with a solid education at Addis Ababa Science and Technology University, where I developed a keen interest in building innovative digital solutions. This passion led me to Evangadi Technologies in 2024, where I underwent intensive full-stack web development training that transformed me from an enthusiast into a professional developer.
                </p>
                <p>
                    Currently, I work as a freelance developer and am an active builder in the ecosystem, maintaining **daily GitHub activity** across various production-ready projects. Beyond client work, I've launched several startups, applying my technical skills to create solutions that solve real-world problems. My technical expertise was further honed during my Backend Developer Internship at **MARVELS CREATIVE TECHNOLOGY** (March - June 2025), where I worked with cutting-edge technologies like TypeScript and Next.js to build scalable systems. My technical stack includes React, Next.js, Node.js, TypeScript, and high-performance databases like Supabase and PostgreSQL.
                </p>
                <p>
                    Beyond coding, I have a creative side as a professional DJ, where I curate soundscapes and create memorable experiences through music. This unique combination of technical precision and artistic creativity gives me a distinctive perspective on user experience design—I understand that great products should not only function flawlessly but also evoke emotion and delight.
                </p>
                <p>
                    I'm driven by the desire to build impactful web applications that solve real problems. Whether it's developing a complex inventory management system like **Senselet** (integrated with Chapa payments and Supabase) or creating intuitive AI-powered tools like **FormCheck AI** (leveraging MediaPipe AI), I approach each project with meticulous attention to detail, a commitment to clean code, and a focus on creating exceptional user experiences.
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
