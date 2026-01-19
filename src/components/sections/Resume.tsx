'use client';

import { motion } from 'framer-motion';
import { trackButtonClick } from '@/lib/analytics';

interface ResumeProps {
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

const Resume = ({ active }: ResumeProps) => {
    return (
        <article className={`resume ${active ? 'active' : ''}`} data-page="resume">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 className="h2 article-title">Resume</h2>
                <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="/resume.pdf"
                    download="Bemnet_Kibret_Resume.pdf"
                    className="btn-filled"
                    onClick={() => trackButtonClick('download_cv', 'resume_section')}
                    style={{
                        width: 'auto',
                        padding: '10px 20px',
                        fontSize: 'var(--fs-6)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textTransform: 'none',
                        marginTop: '-10px'
                    }}
                >
                    {/* @ts-ignore */}
                    <ion-icon name="download-outline" style={{ fontSize: '16px' }}></ion-icon>
                    <span>Download CV</span>
                </motion.a>
            </header>

            {/* Timeline Area */}
            <div className="timeline-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                {/* Education */}
                <section className="timeline">
                    <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <div className="icon-box">
                            {/* @ts-ignore */}
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list" style={{ marginLeft: '17px', borderLeft: '1px solid var(--jet)' }}>
                        {[
                            {
                                title: 'Evangadi Technologies',
                                date: '2024 — 2025',
                                text: 'I want to express my deepest gratitude to Evangadi Tech for providing me with the invaluable opportunity to learn full-stack web development.'
                            },
                            {
                                title: 'Addis Ababa Science and Technology University',
                                date: '2021 — 2023',
                                text: 'AASTU offers a solid education in science and technology, and I gained valuable knowledge during my time there.'
                            },
                            {
                                title: 'Ethio Parents School',
                                date: '2006 — 2021',
                                text: "The school's commitment to academic excellence and holistic development has truly shaped my journey."
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
                                <h4 className="h4 timeline-item-title" style={{ fontSize: 'var(--fs-6)', textTransform: 'none', marginBottom: '5px' }}>{item.title}</h4>
                                <span style={{ color: 'var(--vegas-gold)', fontWeight: 'var(--fw-400)', fontSize: 'var(--fs-7)' }}>{item.date}</span>
                                <p className="timeline-text" style={{ color: 'var(--light-gray)', fontSize: 'var(--fs-7)', marginTop: '8px', lineHeight: '1.6' }}>{item.text}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Experience */}
                <section className="timeline">
                    <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <div className="icon-box">
                            {/* @ts-ignore */}
                            <ion-icon name="briefcase-outline"></ion-icon>
                        </div>
                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list" style={{ marginLeft: '17px', borderLeft: '1px solid var(--jet)' }}>
                        {[
                            {
                                title: 'Freelancer',
                                date: '2024 — Present',
                                text: "As a junior freelancer specializing in web development, I've worked on a variety of exciting projects."
                            },
                            {
                                title: 'MARVELS CREATIVE TECHNOLOGY',
                                date: 'March — June 2025',
                                text: 'Backend developer internship building scalable systems with Typescript and Next.js.'
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
                                <h4 className="h4 timeline-item-title" style={{ fontSize: 'var(--fs-6)', textTransform: 'none', marginBottom: '5px' }}>{item.title}</h4>
                                <span style={{ color: 'var(--vegas-gold)', fontWeight: 'var(--fw-400)', fontSize: 'var(--fs-7)' }}>{item.date}</span>
                                <p className="timeline-text" style={{ color: 'var(--light-gray)', fontSize: 'var(--fs-7)', marginTop: '8px', lineHeight: '1.6' }}>{item.text}</p>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>

            {/* Skills */}
            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <motion.ul
                    className="skills-list content-card"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    style={{ marginBottom: '40px', cursor: 'default' }}
                >
                    {[
                        { name: 'Front-End Development', level: 80 },
                        { name: 'Back-End Development', level: 95 },
                        { name: 'Web design', level: 85 },
                        { name: 'Graphic design', level: 75 },
                        { name: 'Branding', level: 90 },
                        { name: 'WordPress', level: 60 },
                        { name: 'Frameworks and Libraries', level: 70 }
                    ].map((skill) => (
                        <motion.li key={skill.name} className="skills-item" variants={itemVariants} style={{ marginBottom: '20px' }}>
                            <div className="title-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <h5 className="h5">{skill.name}</h5>
                                <data value={skill.level} style={{ color: 'var(--light-gray)', fontSize: 'var(--fs-7)' }}>{skill.level}%</data>
                            </div>
                            <div className="skill-progress-bg" style={{ background: 'var(--jet)', height: '8px', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div
                                    className="skill-progress-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    style={{ background: 'var(--text-gradient-yellow)', height: '100%', borderRadius: 'inherit' }}
                                ></motion.div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </section>

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
                        { name: 'HTML5', icon: 'logo-html5' },
                        { name: 'CSS3', icon: 'logo-css3' },
                        { name: 'JavaScript', icon: 'logo-javascript' },
                        { name: 'React', icon: 'logo-react' },
                        { name: 'Next.js', icon: 'terminal-outline' },
                        { name: 'Node.js', icon: 'logo-nodejs' },
                        { name: 'TypeScript', icon: 'code-slash-outline' },
                        { name: 'Tailwind', icon: 'color-palette-outline' },
                        { name: 'MySQL', icon: 'server-outline' },
                        { name: 'Firebase', icon: 'flame-outline' },
                        { name: 'Stripe', icon: 'card-outline' },
                        { name: 'Python', icon: 'logo-python' },
                        { name: 'Git', icon: 'logo-github' },
                        { name: 'Three.js', icon: 'cube-outline' },
                        { name: 'Animation', icon: 'move-outline' }
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
                                {/* @ts-ignore */}
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
