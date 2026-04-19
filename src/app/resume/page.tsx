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
                        Results-driven Full Stack Engineer and Performance Architect specializing in high-fidelity, cinematic web experiences. Expert in bridging 3D visualization (Three.js) and complex scrollytelling with robust, scalable backend systems. Proven track record of architecting mission-critical platforms like Ahun Watches and FitEthio, delivering software that prioritizes both technical precision and aesthetic excellence. Combines a deep engineering foundation with a unique perspective as a professional artist to build products that flow intuitively and perform flawlessly.
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
                            <li style={{ marginBottom: '6px' }}>Architecting and deploying high-performance full-stack solutions for elite clients and startups.</li>
                            <li style={{ marginBottom: '6px' }}>Successfully launched **Ahun Watches**, a premium horological platform featuring cinematic scrollytelling and high-fidelity asset rendering.</li>
                            <li style={{ marginBottom: '6px' }}>Developed **FitEthio**, a comprehensive CRM and landing experience for high-ticket fitness coaches with 3D anatomical visualizations.</li>
                            <li style={{ marginBottom: '6px' }}>Scaled **Senselet** from concept to a production-ready inventory intelligence system with real-time tracking and automated reporting.</li>
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

                {/* Certifications */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Certifications
                    </h2>
                    <div style={{ marginBottom: '15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <h3 style={{ fontSize: '17px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Full Stack Web Development (MERN)</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>2025</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#444', marginTop: '5px' }}>Evangadi Technologies • Certified Full Stack Engineer</p>
                    </div>
                </section>

                {/* Technical Skills */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Technical Skills
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Frontend Engineering</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>React, Next.js, TypeScript, Framer Motion, GSAP, 3D Web (Three.js), Tailwind CSS</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Backend & Infrastructure</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Node.js, Supabase, PostgreSQL, REST/GraphQL APIs, Performance Analysis, Edge Functions</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Niche Specializations</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Cinematic Scrollytelling, Responsive Layouts, 3D Asset Optimization, Payment Systems (Chapa)</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Tools & Workflow</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Git/GitHub, CI/CD, AI-Driven Development, High-Fidelity Design Systems</p>
                        </div>
                    </div>
                </section>

                {/* Key Projects */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Key Projects
                    </h2>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>Ahun Watches — Premium Horology Platform</h3>
                        <p style={{ fontSize: '14px', color: '#444', margin: '0 0 8px', lineHeight: '1.6' }}>
                            A high-end e-commerce experience for premium watches, featuring advanced scrollytelling, high-fidelity asset rendering, and a custom configuration engine.
                        </p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> Next.js, Framer Motion, GSAP, TypeScript, Supabase</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>FitEthio — Elite Fitness CRM</h3>
                        <p style={{ fontSize: '14px', color: '#444', margin: '0 0 8px', lineHeight: '1.6' }}>
                            The operating system for elite fitness coaches, featuring 3D anatomy visualizations, hyper-accurate biometrics tracking, and a "Command Center" dashboard.
                        </p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> Next.js, Three.js, TypeScript, Supabase, Framer Motion</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>Senselet — Inventory Intelligence</h3>
                        <p style={{ fontSize: '14px', color: '#444', margin: '0 0 8px', lineHeight: '1.6' }}>
                            Full-stack inventory management system with real-time tracking, low-stock alerts, and comprehensive reporting. Built with Next.js, Supabase, and Chapa integration.
                        </p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> Next.js, TypeScript, Supabase, Chapa, Tailwind CSS</p>
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
