'use client';

import { useEffect } from 'react';
import Link from 'next/link';

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
                <Link
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
                </Link>
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
                        Founder & Lead Full-Stack Engineer
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
                        Results-driven Founder and Lead Full-Stack Engineer specializing in architecting end-to-end SaaS platforms and data-intensive applications. Expert in bridging scalable server-side infrastructure (PostgreSQL, Supabase, Node.js) with high-performance frontends (Next.js, TypeScript). Proven track record of designing complex relational databases, offline-first architectures, and automated data pipelines—the exact foundational layers required to deploy, scale, and collaborate with autonomous AI agents. Passionate about leveraging high-agency engineering to build products that globally elevate how individuals and teams work.
                    </p>
                </section>

                {/* Experience */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Experience
                    </h2>

                    <div style={{ marginBottom: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Founder & Lead Engineer</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>2024 — Present</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#888', margin: '0 0 10px', fontStyle: 'italic' }}>Senselet & Independent Solutions</p>
                        <ul style={{ margin: '0', paddingLeft: '20px', color: '#444', fontSize: '14px' }}>
                            <li style={{ marginBottom: '6px' }}>Architected and deployed a production-ready, AI-enabled enterprise ERP (Senselet) from the ground up, managing the entire software lifecycle and product roadmap.</li>
                            <li style={{ marginBottom: '6px' }}>Engineered an offline-first architecture utilizing a Dual-ID resolution layer via PostgreSQL and Supabase, ensuring absolute data integrity across complex syncs and variant matrices.</li>
                            <li style={{ marginBottom: '6px' }}>Built and deployed automated microservices and high-availability webhook pipelines, establishing robust infrastructure for programmatic workflows and real-time data enrichment.</li>
                            <li style={{ marginBottom: '6px' }}>Integrated secure local and international payment gateways (Chapa, Stripe) into scalable, multi-tenant e-commerce and SaaS architectures.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Backend Developer Intern</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>March — June 2025</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#888', margin: '0 0 10px', fontStyle: 'italic' }}>MARVELS CREATIVE TECHNOLOGY, Addis Ababa</p>
                        <ul style={{ margin: '0', paddingLeft: '20px', color: '#444', fontSize: '14px' }}>
                            <li style={{ marginBottom: '6px' }}>Engineered and optimized scalable backend systems using TypeScript and Next.js within a fast-paced, production-grade environment.</li>
                            <li style={{ marginBottom: '6px' }}>Collaborated with senior engineering teams to design RESTful API endpoints and refine server-side logic.</li>
                            <li style={{ marginBottom: '6px' }}>Improved overall system reliability by contributing to core data pipelines and participating in rigorous code reviews.</li>
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
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Science and Technology</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>2021 — 2023</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#888', margin: '0', fontStyle: 'italic' }}>Addis Ababa Science and Technology University</p>
                    </div>
                </section>

                {/* Certifications */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Certifications
                    </h2>
                    <div style={{ marginBottom: '15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <h3 style={{ fontSize: '17px', fontWeight: '600', margin: 0, color: '#1a1a1a' }}>Certified Full Stack Engineer</h3>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>2025</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#444', marginTop: '5px' }}>Evangadi Technologies</p>
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
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>React, Next.js, TypeScript, Tailwind CSS, State Management</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Backend & Infrastructure</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Node.js, PostgreSQL, Supabase, REST/GraphQL APIs, Microservices Architecture, Webhooks, Data Pipelines</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Tools & Workflow</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Git/GitHub, CI/CD, High-Fidelity System Design, AI-Driven Development</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>Niche Specializations</h4>
                            <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Relational Database Design, Offline-First Architecture, Automated Workflows, Secure Payment Systems</p>
                        </div>
                    </div>
                </section>

                {/* Key Projects */}
                <section style={{ marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', borderBottom: '2px solid #ffdb70', paddingBottom: '8px', fontWeight: '600' }}>
                        Key Projects
                    </h2>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>Senselet - AI-Ready Enterprise ERP</h3>
                        <p style={{ fontSize: '13px', color: '#666', margin: '0 0 8px' }}><strong>Impact:</strong> Architected a multi-location inventory intelligence platform handling complex multi-dimensional tracking (variants, sizes). Engineered robust backend database triggers and offline queues to ensure zero data loss—laying the scalable groundwork required for seamless AI agent integration and automation.</p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> Next.js, TypeScript, Supabase, PostgreSQL, Chapa</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>Automated Data Enrichment Pipeline</h3>
                        <p style={{ fontSize: '13px', color: '#666', margin: '0 0 8px' }}><strong>Impact:</strong> Built, secured, and deployed a production-ready microservice to automate data collection and processing. Managed parallel pilot testing schedules and ensured high-availability webhooks for continuous, agent-like automated workflows.</p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> Node.js, REST APIs, Webhooks, Render</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 6px', color: '#1a1a1a' }}>FitEthio - Elite CRM Dashboard</h3>
                        <p style={{ fontSize: '13px', color: '#666', margin: '0 0 8px' }}><strong>Impact:</strong> Combined complex user state management with high-performance frontends to deliver a comprehensive management dashboard and client portal for elite fitness coaches.</p>
                        <p style={{ fontSize: '13px', color: '#666', margin: 0 }}><strong>Tech:</strong> Next.js, TypeScript, Three.js, Framer Motion</p>
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
