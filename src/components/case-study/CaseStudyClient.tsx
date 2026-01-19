'use client';

import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CaseStudyClientProps {
    project: Project;
}

export default function CaseStudyClient({ project }: CaseStudyClientProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20
            }
        },
    };

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            minHeight: '100vh'
        }}>
            <div className="main-content" style={{
                margin: '0 auto',
                width: '100%',
                maxWidth: '1000px',
                minWidth: '0',
                position: 'relative'
            }}>
                {/* Background Decorative Elements */}
                <div style={{
                    position: 'fixed',
                    top: '10%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    background: 'var(--text-gradient-yellow)',
                    filter: 'blur(150px)',
                    opacity: 0.05,
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'fixed',
                    bottom: '10%',
                    left: '5%',
                    width: '400px',
                    height: '400px',
                    background: 'var(--orange-yellow-crayola)',
                    filter: 'blur(180px)',
                    opacity: 0.03,
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />

                <article className="portfolio active" data-page="portfolio" style={{ padding: '30px' }}>
                    <header style={{
                        marginBottom: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Link href="/?page=portfolio" className="form-btn" style={{
                                padding: '12px 24px',
                                borderRadius: '14px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: 'var(--fs-7)',
                                fontWeight: '600',
                                background: 'var(--onyx)',
                                border: '1px solid var(--jet)',
                                color: 'var(--white-2)'
                            }}>
                                {/* @ts-expect-error */}
                                <ion-icon name="chevron-back-outline"></ion-icon>
                                Back to Portfolio
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
                        >
                            <h2 className="h2 article-title" style={{
                                margin: 0,
                                fontSize: 'var(--fs-1)',
                                background: 'var(--text-gradient-yellow)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>
                                Case Study Explorer
                            </h2>
                        </motion.div>
                    </header>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="case-study-content"
                    >
                        {/* Hero Section - Immersive Design */}
                        <motion.section variants={itemVariants} className="content-card" style={{
                            marginBottom: '40px',
                            padding: 0,
                            overflow: 'hidden',
                            border: '1px solid hsla(0, 0%, 100%, 0.1)',
                            background: 'var(--eerie-black-2)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}>
                            <div className="case-study-hero" style={{
                                position: 'relative',
                                width: '100%',
                                minHeight: 'clamp(350px, 50vh, 500px)',
                                display: 'flex',
                                alignItems: 'flex-end'
                            }}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority
                                    style={{ objectFit: 'cover', opacity: 0.4 }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, var(--eerie-black-2) 20%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%)',
                                    zIndex: 1
                                }} />

                                <div className="hero-content" style={{
                                    position: 'relative',
                                    zIndex: 2,
                                    padding: 'clamp(30px, 8%, 60px) clamp(20px, 5%, 50px)',
                                    width: '100%'
                                }}>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        style={{
                                            color: 'var(--orange-yellow-crayola)',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            fontSize: '13px',
                                            letterSpacing: '3px',
                                            marginBottom: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <span style={{ width: '30px', height: '2px', background: 'var(--orange-yellow-crayola)' }} />
                                        {project.category}
                                    </motion.p>

                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="h1"
                                        style={{
                                            color: 'white',
                                            marginBottom: '25px',
                                            fontSize: 'clamp(28px, 6vw, 56px)',
                                            lineHeight: '1.2',
                                            fontWeight: '800'
                                        }}
                                    >
                                        {project.title}
                                    </motion.h1>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
                                    >
                                        {project.tech?.map((t) => (
                                            <span key={t} style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                color: 'var(--light-gray)',
                                                padding: '6px 16px',
                                                borderRadius: '10px',
                                                fontSize: '13px',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                fontWeight: '500'
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Metrics Grid - Dashboard Style */}
                        {project.metrics && (
                            <motion.section variants={itemVariants} style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '24px',
                                marginBottom: '40px'
                            }}>
                                {project.metrics.map((m, i) => (
                                    <motion.div
                                        key={m.label}
                                        whileHover={{ y: -5, borderColor: 'var(--orange-yellow-crayola)' }}
                                        className="content-card"
                                        style={{
                                            textAlign: 'center',
                                            padding: '35px 25px',
                                            background: 'var(--bg-gradient-jet)',
                                            border: '1px solid var(--jet)',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '80px',
                                            height: '80px',
                                            background: 'var(--orange-yellow-crayola)',
                                            filter: 'blur(50px)',
                                            opacity: 0.1
                                        }} />
                                        <h3 style={{
                                            color: 'var(--orange-yellow-crayola)',
                                            fontSize: '36px',
                                            fontWeight: '800',
                                            marginBottom: '10px',
                                            letterSpacing: '-1px'
                                        }}>
                                            {m.value}
                                        </h3>
                                        <p style={{
                                            color: 'var(--light-gray-70)',
                                            fontSize: '14px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: '600'
                                        }}>
                                            {m.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.section>
                        )}

                        {/* Problem & Solution - Glassmorphism Side-by-Side */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '30px',
                            marginBottom: '40px'
                        }}>
                            <motion.section variants={itemVariants} className="content-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '12px',
                                    background: 'rgba(255, 154, 71, 0.1)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '20px'
                                }}>
                                    {/* @ts-expect-error */}
                                    <ion-icon name="help-circle-outline" style={{ color: 'var(--orange-yellow-crayola)', fontSize: '24px' }}></ion-icon>
                                </div>
                                <h3 className="h3" style={{ marginBottom: '20px', fontWeight: '700' }}>The Challenge</h3>
                                <p style={{ color: 'var(--light-gray)', lineHeight: '1.8', fontSize: '16px' }}>{project.problem}</p>
                            </motion.section>

                            <motion.section variants={itemVariants} className="content-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '12px',
                                    background: 'rgba(255, 184, 0, 0.1)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '20px'
                                }}>
                                    {/* @ts-expect-error */}
                                    <ion-icon name="bulb-outline" style={{ color: 'var(--orange-yellow-crayola)', fontSize: '24px' }}></ion-icon>
                                </div>
                                <h3 className="h3" style={{ marginBottom: '20px', fontWeight: '700' }}>The Solution</h3>
                                <p style={{ color: 'var(--light-gray)', lineHeight: '1.8', fontSize: '16px' }}>{project.solution}</p>
                            </motion.section>
                        </div>

                        {/* Key Features - Modern Grid */}
                        {project.features && (
                            <motion.section variants={itemVariants} className="content-card" style={{
                                marginBottom: '40px',
                                background: 'var(--bg-gradient-onyx)',
                                padding: '40px'
                            }}>
                                <h3 className="h3" style={{ marginBottom: '30px', textAlign: 'center' }}>Technological Pillars</h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '20px'
                                }}>
                                    {project.features.map((f) => (
                                        <div key={f} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            color: 'var(--white-2)',
                                            background: 'rgba(0,0,0,0.2)',
                                            padding: '15px 20px',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}>
                                            {/* @ts-expect-error */}
                                            <ion-icon name="checkmark-done-outline" style={{ color: 'var(--orange-yellow-crayola)', fontSize: '22px' }}></ion-icon>
                                            <span style={{ fontSize: '15px', fontWeight: '500' }}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Call to Action - Final Impact */}
                        <motion.section
                            variants={itemVariants}
                            className="content-card"
                            style={{
                                textAlign: 'center',
                                padding: '60px 40px',
                                background: 'var(--bg-gradient-yellow-2)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '400px',
                                height: '400px',
                                background: 'var(--orange-yellow-crayola)',
                                filter: 'blur(100px)',
                                opacity: 0.1,
                                zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h3 className="h3" style={{ marginBottom: '15px', fontSize: '28px' }}>Project Availability</h3>
                                <p style={{ color: 'var(--light-gray)', marginBottom: '35px', maxWidth: '600px', marginInline: 'auto' }}>
                                    Explore the live application or review the codebase on GitHub.
                                </p>

                                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="form-btn"
                                        style={{
                                            padding: '16px 40px',
                                            borderRadius: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            boxShadow: '0 10px 30px rgba(255, 184, 0, 0.2)'
                                        }}
                                    >
                                        {/* @ts-expect-error */}
                                        <ion-icon name="rocket-outline"></ion-icon>
                                        Launch Project
                                    </motion.a>

                                    {project.github && (
                                        <motion.a
                                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="form-btn"
                                            style={{
                                                padding: '16px 40px',
                                                borderRadius: '14px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                background: 'transparent',
                                                border: '1px solid var(--jet)',
                                                color: 'var(--white-2)',
                                                fontSize: '16px',
                                                fontWeight: '600'
                                            }}
                                        >
                                            {/* @ts-expect-error */}
                                            <ion-icon name="logo-github"></ion-icon>
                                            Inspect Source
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    </motion.div>
                </article>
            </div>
        </div>
    );
}

