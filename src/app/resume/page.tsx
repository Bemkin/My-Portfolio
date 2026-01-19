'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function ResumePage() {
    useEffect(() => {
        // Add print styles
        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                body { background: white !important; }
                .no-print { display: none !important; }
                .resume-container { 
                    max-width: 100% !important; 
                    padding: 0 !important;
                    background: white !important;
                }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            background: '#fafafa',
            padding: '40px 20px'
        }}>
            <div className="no-print" style={{
                maxWidth: '900px',
                margin: '0 auto 20px',
                display: 'flex',
                gap: '10px',
                justifyContent: 'flex-end'
            }}>
                <button
                    onClick={() => window.print()}
                    style={{
                        background: 'linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))',
                        color: '#1a1a1a',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    📄 Download PDF
                </button>
                <a
                    href="/"
                    style={{
                        background: '#2d2d2e',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '14px',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}
                >
                    ← Back to Portfolio
                </a>
            </div>

            <div className="resume-container" style={{
                maxWidth: '900px',
                margin: '0 auto',
                background: 'white',
                padding: '60px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                color: '#1a1a1a',
                lineHeight: '1.6'
            }}>
                {/* Header */}
                <header style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '3px solid #ffdb70', paddingBottom: '30px' }}>
                    <h1 style={{ fontSize: '42px', margin: '0 0 10px', fontWeight: '700', color: '#1a1a1a' }}>
                        Bemnet Kibret
                    </h1>
                    <p style={{ fontSize: '18px', color: '#666', margin: '0 0 15px', fontWeight: '500' }}>
                        Full Stack Web Developer
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '14px', color: '#666' }}>
                        <span>📧 bemnetkibret4@gmail.com</span>
                        <span>📱 +251 929 177 999</span>
                        <span>📍 Addis Ababa, Ethiopia</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px', fontSize: '14px' }}>
                        <a href="https://github.com/Bemkin" style={{ color: '#666', textDecoration: 'none' }}>🔗 GitHub</a>
                        <a href="https://www.linkedin.com/in/bemnet-kibret-054a792a9/" style={{ color: '#666', textDecoration: 'none' }}>🔗 LinkedIn</a>
                    </div>
                </header>

                {/* Professional Summary */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '15px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Professional Summary
                    </h2>
                    <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.7' }}>
                        Passionate full-stack web developer with expertise in building modern, scalable web applications using React, Next.js, TypeScript, and Node.js. Proven track record as a freelancer and entrepreneur, having built and launched several startups while delivering high-quality solutions for clients. Completed intensive training at Evangadi Technologies and gained valuable industry experience through a backend development internship at MARVELS CREATIVE TECHNOLOGY. Combines technical precision with creative artistry as a professional DJ, bringing a unique perspective to user experience design.
                    </p>
                </section>

                {/* Experience */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Experience
                    </h2>

                    <div style={{ marginBottom: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Freelance Full Stack Developer</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>2024 — Present</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#888', margin: '0 0 10px', fontStyle: 'italic' }}>Self-Employed</p>
                        <ul style={{ margin: '0', paddingLeft: '20px', color: '#444', fontSize: '14px' }}>
                            <li style={{ marginBottom: '6px' }}>Built and launched several startup applications including Senselet (inventory management system) and FormCheck AI (AI-powered form validation)</li>
                            <li style={{ marginBottom: '6px' }}>Developed modern, responsive web applications for diverse clients using React, Next.js, and TypeScript</li>
                            <li style={{ marginBottom: '6px' }}>Delivered end-to-end solutions from concept to deployment, ensuring exceptional user experiences</li>
                            <li style={{ marginBottom: '6px' }}>Managed project timelines, client communications, and technical implementations independently</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Backend Developer Intern</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>March — June 2025</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#888', margin: '0 0 10px', fontStyle: 'italic' }}>MARVELS CREATIVE TECHNOLOGY, Addis Ababa</p>
                        <ul style={{ margin: '0', paddingLeft: '20px', color: '#444', fontSize: '14px' }}>
                            <li style={{ marginBottom: '6px' }}>Built scalable backend systems using TypeScript and Next.js following modern development practices</li>
                            <li style={{ marginBottom: '6px' }}>Collaborated with senior developers on production-level applications</li>
                            <li style={{ marginBottom: '6px' }}>Gained hands-on experience with API design, database management, and system architecture</li>
                            <li style={{ marginBottom: '6px' }}>Contributed to code reviews and agile development workflows</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Professional DJ</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>2020 — Present</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#888', margin: '0 0 10px', fontStyle: 'italic' }}>Events & Entertainment</p>
                        <ul style={{ margin: '0', paddingLeft: '20px', color: '#444', fontSize: '14px' }}>
                            <li style={{ marginBottom: '6px' }}>Curate soundscapes and create memorable experiences for various events and venues</li>
                            <li style={{ marginBottom: '6px' }}>Developed creative perspective that enhances UX design approach in web development</li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Education
                    </h2>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Full Stack Web Development</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>2024 — 2025</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#888', margin: '0', fontStyle: 'italic' }}>Evangadi Technologies</p>
                        <p style={{ fontSize: '14px', color: '#444', margin: '8px 0 0' }}>Intensive training in modern web development technologies and best practices</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Science and Technology</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>2021 — 2023</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#888', margin: '0', fontStyle: 'italic' }}>Addis Ababa Science and Technology University</p>
                        <p style={{ fontSize: '14px', color: '#444', margin: '8px 0 0' }}>Foundation in science and technology principles</p>
                    </div>
                </section>

                {/* Technical Skills */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Technical Skills
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Frontend Development</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Framer Motion</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Backend Development</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Node.js, Express.js, REST APIs, Authentication, Server-Side Rendering</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Database & Tools</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>MySQL, PostgreSQL, Supabase, Firebase, Git, GitHub</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Additional Skills</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Responsive Design, API Integration, Payment Integration (Stripe), UI/UX Design</p>
                        </div>
                    </div>
                </section>

                {/* Key Projects */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Key Projects
                    </h2>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>Senselet - Inventory Intelligence</h3>
                        <p style={{ fontSize: '14px', color: '#444', margin: '0 0 8px', lineHeight: '1.6' }}>
                            Full-stack inventory management system with real-time tracking, low-stock alerts, and comprehensive reporting. Built with Next.js, TypeScript, Supabase, and Stripe integration.
                        </p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> Next.js, TypeScript, Supabase, Stripe, Tailwind CSS</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>FormCheck AI</h3>
                        <p style={{ fontSize: '14px', color: '#444', margin: '0 0 8px', lineHeight: '1.6' }}>
                            AI-powered form validation tool that provides intelligent feedback and suggestions for form submissions. Features real-time validation and custom rule configuration.
                        </p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> React, Node.js, OpenAI API, MongoDB</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>Trainer CRM</h3>
                        <p style={{ fontSize: '14px', color: '#444', margin: '0 0 8px', lineHeight: '1.6' }}>
                            Customer relationship management system for personal trainers featuring client management, session scheduling, and progress tracking.
                        </p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> Next.js, Firebase, React, TypeScript</p>
                    </div>
                </section>

                {/* Footer */}
                <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '12px', color: '#888' }}>
                    <p style={{ margin: 0 }}>References available upon request</p>
                </footer>
            </div>
        </div>
    );
}
