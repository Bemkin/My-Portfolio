'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { trackButtonClick } from '@/lib/analytics';
import { resumePdf, resumeDownloadName } from '@/lib/constants';
import GitHubActivity from './GitHubActivity';

interface ResumeProps {
    active: boolean;
    onCertClick?: () => void;
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

const Resume = ({ active, onCertClick }: ResumeProps) => {
    return (
        <article className={`resume ${active ? 'active' : ''}`} data-page="resume">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
                <h2 className="h2 article-title">Resume</h2>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        href={resumePdf}
                        download={resumeDownloadName}
                        className="btn-filled"
                        onClick={() => trackButtonClick('download_cv_pdf', 'resume_section')}
                        style={{
                            width: 'auto',
                            padding: '10px 20px',
                            fontSize: 'var(--fs-6)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            textTransform: 'none',
                            textDecoration: 'none'
                        }}
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="download-outline" style={{ fontSize: '16px' }}></ion-icon>
                        <span>Download CV</span>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        href="/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-filled"
                        onClick={() => trackButtonClick('view_live_cv', 'resume_section')}
                        style={{
                            width: 'auto',
                            padding: '10px 20px',
                            fontSize: 'var(--fs-6)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            textTransform: 'none',
                            background: 'var(--onyx)',
                            border: '1px solid var(--jet)',
                            color: 'var(--white-2)',
                            textDecoration: 'none'
                        }}
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="document-text-outline" style={{ fontSize: '16px' }}></ion-icon>
                        <span>View Live CV</span>
                    </motion.a>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-filled"
                        onClick={() => {
                            trackButtonClick('print_cv', 'resume_section');
                            window.open('/resume?print=true', '_blank');
                        }}
                        style={{
                            width: 'auto',
                            padding: '10px 18px',
                            fontSize: 'var(--fs-6)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            textTransform: 'none',
                            background: 'transparent',
                            border: '1px solid var(--jet)',
                            color: 'var(--light-gray-70)'
                        }}
                    >
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="print-outline" style={{ fontSize: '16px' }}></ion-icon>
                        <span>Print</span>
                    </motion.button>
                </div>
            </header>

            {/* Timeline Area */}
            <div className="timeline-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                {/* Education */}
                <section className="timeline">
                    <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <div className="icon-box">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list" style={{ marginLeft: '17px', borderLeft: '1px solid var(--jet)' }}>
                        {[
                            {
                                institution: 'Evangadi Technologies',
                                date: '2024 — 2025',
                                degree: 'Full Stack Web Development (MERN)'
                            },
                            {
                                institution: 'Addis Ababa Science and Technology University',
                                date: '2021 — 2023',
                                degree: 'Science and Technology'
                            },
                            {
                                institution: 'Ethio Parents School',
                                date: '2006 — 2021',
                                degree: 'Primary & Secondary Education'
                            }
                        ].map((item, i) => (
                            <li key={i} className="timeline-item" style={{ position: 'relative', paddingLeft: '30px', marginBottom: '25px' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '4px',
                                    left: '-6px',
                                    width: '11px',
                                    height: '11px',
                                    background: 'var(--text-gradient-yellow)',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 0 4px var(--eerie-black-1)'
                                }}></div>
                                <h4 className="h4 timeline-item-title" style={{ fontSize: 'var(--fs-6)', textTransform: 'none', marginBottom: '3px' }}>{item.institution}</h4>
                                <span style={{ color: 'var(--vegas-gold)', fontWeight: 'var(--fw-400)', fontSize: 'var(--fs-7)', display: 'block', marginBottom: '3px' }}>{item.degree}</span>
                                <span style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-8)' }}>{item.date}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Experience */}
                <section className="timeline">
                    <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <div className="icon-box">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="briefcase-outline"></ion-icon>
                        </div>
                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list" style={{ marginLeft: '17px', borderLeft: '1px solid var(--jet)' }}>
                        {[
                            {
                                role: 'Founder & Lead Engineer',
                                company: 'Senselet & Independent Solutions (Startup Venture)',
                                date: '2024 — Present',
                                points: [
                                    {
                                        title: 'Zero-to-Production Architecture',
                                        detail: 'Architected and deployed an AI-native enterprise ERP from the ground up on AWS and Supabase, scaling across 3+ commercial retail clients to eliminate 20+ hours of weekly manual auditing across 10k+ active SKUs.'
                                    },
                                    {
                                        title: 'High-Stakes Decisioning & Agentic AI',
                                        detail: 'Engineered a proprietary 15-tool agentic backend using native JSON-schema function calling and cascading LLM failover; automated 90%+ of routine reorder and financial allocation decisions, cutting reconciliation turnaround from 45 min to <30 sec.'
                                    },
                                    {
                                        title: 'Mission-Critical Data Integrity',
                                        detail: 'Designed an offline-first architecture utilizing a Dual-ID resolution layer via PostgreSQL; authored 157 strict migrations with org-scoped RLS to guarantee 0% data loss across 5+ warehouse locations and high-value stock matrices.'
                                    },
                                    {
                                        title: 'Real-Time Data Pipelines & Cloud Infrastructure',
                                        detail: 'Built containerized Python and Node.js microservices on AWS (ECS/Lambda) with idempotent webhook handlers, maintaining sub-500ms execution latency and 99.9% deduplication reliability.'
                                    },
                                    {
                                        title: 'High-Velocity Engineering Ownership',
                                        detail: 'Spearheaded rapid zero-to-one product iterations, combining domain-driven system design with modern AI-assisted tooling (Cursor, Claude) to model complex database schemas and ship production features 3x faster.'
                                    }
                                ]
                            },
                            {
                                role: 'Backend Developer (Contract)',
                                company: 'Marvels Creative Technology',
                                date: 'March 2025 — June 2025',
                                points: [
                                    {
                                        title: 'API & Microservice Architecture',
                                        detail: 'Architected and optimized 20+ RESTful API endpoints and server-side routes using TypeScript and Next.js, reducing server response times by ~35% for enterprise client applications.'
                                    },
                                    {
                                        title: 'Database & Data Pipelines',
                                        detail: 'Designed PostgreSQL schemas and query workflows using Prisma, ensuring strict data contracts, foreign key integrity, and sub-100ms average query latency.'
                                    },
                                    {
                                        title: 'Testing & Reliability',
                                        detail: 'Implemented automated API test suites using Jest and Postman within GitHub Actions CI/CD pipelines, maintaining 99.5%+ deployment stability across production rollouts.'
                                    },
                                    {
                                        title: 'Tech Stack',
                                        detail: 'TypeScript, Next.js API Routes, PostgreSQL, Prisma ORM, Node.js, Jest, Docker.'
                                    }
                                ]
                            }
                        ].map((item, i) => (
                            <li key={i} className="timeline-item" style={{ position: 'relative', paddingLeft: '30px', marginBottom: '30px' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '4px',
                                    left: '-6px',
                                    width: '11px',
                                    height: '11px',
                                    background: 'var(--text-gradient-yellow)',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 0 4px var(--eerie-black-1)'
                                }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '5px', marginBottom: '4px' }}>
                                    <h4 className="h4 timeline-item-title" style={{ fontSize: 'var(--fs-6)', textTransform: 'none', margin: 0 }}>{item.role}</h4>
                                    <span style={{ color: 'var(--vegas-gold)', fontWeight: 'var(--fw-400)', fontSize: 'var(--fs-7)' }}>{item.date}</span>
                                </div>
                                <span style={{ color: 'var(--vegas-gold)', fontSize: 'var(--fs-7)', display: 'block', marginBottom: '8px', opacity: 0.9 }}>{item.company}</span>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {item.points.map((pt, idx) => (
                                        <li key={idx} style={{ color: 'var(--light-gray)', fontSize: 'var(--fs-7)', lineHeight: '1.6', position: 'relative', paddingLeft: '14px' }}>
                                            <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--vegas-gold)' }}>•</span>
                                            <strong style={{ color: 'var(--white-2)', fontWeight: 'var(--fw-600)' }}>{pt.title}: </strong>
                                            {pt.detail}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>

            {/* Certifications */}
            <section className="timeline" style={{ marginBottom: '40px' }}>
                <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                    <div className="icon-box">
                        {/* @ts-expect-error: ion-icon custom element */}
                        <ion-icon name="ribbon-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Certifications</h3>
                </div>

                <div className="cert-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <motion.div
                        className="content-card"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        style={{
                            padding: '25px',
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'center',
                            cursor: 'pointer',
                            border: '1px solid var(--jet)',
                            transition: 'var(--transition-1)'
                        }}
                        onClick={onCertClick}
                    >
                        <div className="icon-box" style={{ flexShrink: 0, width: '60px', height: '60px', background: 'var(--onyx)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                unoptimized
                                src="https://cdn.simpleicons.org/mongodb/47A248"
                                alt="Evangadi"
                                width={35}
                                height={35}
                            />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <h4 className="h4" style={{ fontSize: 'var(--fs-6)', marginBottom: '5px', textTransform: 'none' }}>Full Stack Web Development (MERN)</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ color: 'var(--vegas-gold)', fontSize: 'var(--fs-7)' }}>Evangadi Technologies</span>
                                <span style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-8)' }}>Sept 2025</span>
                            </div>
                        </div>
                        <div style={{ color: 'var(--vegas-gold)', fontSize: '20px' }}>
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="eye-outline"></ion-icon>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* GitHub Activity */}
            <GitHubActivity username="Bemkin" />

            {/* Tech Stack Grid */}
            <section className="skill">
                <h3 className="h3 skills-title">Technical Stack</h3>
                <motion.ul
                    className="tech-stack-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                        gap: '15px',
                        marginTop: '20px'
                    }}
                >
                    {[
                        { name: 'TypeScript', icon: 'code-slash-outline' },
                        { name: 'Python', icon: 'logo-python' },
                        { name: 'Next.js', icon: 'terminal-outline' },
                        { name: 'React', icon: 'logo-react' },
                        { name: 'Node.js', icon: 'logo-nodejs' },
                        { name: 'PostgreSQL', icon: 'server-outline' },
                        { name: 'Supabase', icon: 'server-outline' },
                        { name: 'AWS', icon: 'cloud-outline' },
                        { name: 'Docker', icon: 'cube-outline' },
                        { name: 'Prisma', icon: 'server-outline' },
                        { name: 'Jest', icon: 'shield-checkmark-outline' },
                        { name: 'Fastify', icon: 'flash-outline' },
                        { name: 'Three.js', icon: 'cube-outline' },
                        { name: 'Tailwind CSS', icon: 'color-palette-outline' },
                        { name: 'Git', icon: 'logo-github' }
                    ].map((tech) => (
                        <motion.li
                            key={tech.name}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                color: 'var(--orange-yellow-crayola)',
                                borderColor: 'var(--orange-yellow-crayola)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)'
                            }}
                            className="content-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '15px',
                                cursor: 'default',
                                color: 'var(--white-2)',
                                border: '1px solid transparent',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ fontSize: '28px', color: 'inherit' }}>
                                {/* @ts-expect-error: ion-icon custom element */}
                                <ion-icon name={tech.icon}></ion-icon>
                            </div>
                            <span style={{ fontSize: 'var(--fs-8)', fontWeight: 'var(--fw-500)', color: 'inherit' }}>{tech.name}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </section>
        </article>
    );
};

export default Resume;
