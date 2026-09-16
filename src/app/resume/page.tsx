'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { resumePdf, resumeDownloadName } from '@/lib/constants';

export default function ResumePage() {
    useEffect(() => {
        // Add print styles
        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                @page {
                    margin: 12mm 14mm;
                    size: letter portrait;
                }
                body {
                    background: white !important;
                    color: #111 !important;
                    font-size: 13px !important;
                }
                .no-print { display: none !important; }
                .resume-container { 
                    max-width: 100% !important; 
                    padding: 0 !important;
                    background: white !important;
                    box-shadow: none !important;
                    color: #111 !important;
                }
                a { color: inherit !important; text-decoration: none !important; }
            }
        `;
        document.head.appendChild(style);

        // Auto-trigger print if ?print=true parameter is present
        let printTimer: NodeJS.Timeout | undefined;
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('print') === 'true') {
                printTimer = setTimeout(() => {
                    window.print();
                }, 400);
            }
        }

        return () => {
            document.head.removeChild(style);
            if (printTimer) clearTimeout(printTimer);
        };
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0e0e11',
            padding: '40px 20px',
            color: '#1a1a1a'
        }}>
            {/* Action Bar (Hidden on Print) */}
            <div className="no-print" style={{
                maxWidth: '900px',
                margin: '0 auto 20px',
                display: 'flex',
                gap: '12px',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <Link
                    href="/"
                    style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#eee',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        fontWeight: '500',
                        cursor: 'pointer',
                        fontSize: '14px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease'
                    }}
                >
                    ← Back to Portfolio
                </Link>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                        href={resumePdf}
                        download={resumeDownloadName}
                        style={{
                            background: 'linear-gradient(135deg, hsl(45, 100%, 72%) 0%, hsl(35, 100%, 64%) 100%)',
                            color: '#121212',
                            padding: '10px 22px',
                            borderRadius: '8px',
                            border: 'none',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '14px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 15px rgba(255, 219, 112, 0.25)'
                        }}
                    >
                        <span>📥</span> Download PDF
                    </a>
                    <button
                        onClick={() => window.print()}
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            color: '#eee',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            fontWeight: '500',
                            cursor: 'pointer',
                            fontSize: '14px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        <span>🖨️</span> Print / Save as PDF
                    </button>
                </div>
            </div>

            {/* Resume Sheet Container */}
            <div className="resume-container" style={{
                maxWidth: '900px',
                margin: '0 auto',
                background: '#ffffff',
                padding: '55px 65px',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.45)',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                color: '#1a1a1a',
                lineHeight: '1.55'
            }}>
                {/* Header */}
                <header style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '2.5px solid #d97706', paddingBottom: '24px' }}>
                    <h1 style={{ fontSize: '36px', margin: '0 0 6px', fontWeight: '800', letterSpacing: '0.04em', color: '#111827', textTransform: 'uppercase' }}>
                        Bemnet Kibret
                    </h1>
                    <p style={{ fontSize: '16px', color: '#b45309', margin: '0 0 12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Founding Full-Stack & AI Engineer
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', fontSize: '13px', color: '#4b5563', fontWeight: '500' }}>
                        <span>bemnetkibret4@gmail.com</span>
                        <span>•</span>
                        <span>+251 929 177 999</span>
                        <span>•</span>
                        <span>Addis Ababa, Ethiopia</span>
                        <span>•</span>
                        <a href="https://github.com/Bemkin" target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937', fontWeight: '600' }}>GitHub</a>
                        <span>•</span>
                        <a href="https://www.linkedin.com/in/bemnet-kibret-054a792a9/" target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937', fontWeight: '600' }}>LinkedIn</a>
                    </div>
                </header>

                {/* Professional Summary */}
                <section style={{ marginBottom: '28px' }}>
                    <h2 style={{ fontSize: '17px', color: '#111827', marginBottom: '10px', borderBottom: '1.5px solid #e5e7eb', paddingBottom: '4px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Professional Summary
                    </h2>
                    <p style={{ color: '#374151', fontSize: '13.5px', lineHeight: '1.65', margin: 0, textAlign: 'justify' }}>
                        High-agency Founding Full-Stack & AI Engineer specializing in taking complex, data-intensive platforms from zero to production. Expert in bridging scalable cloud infrastructure (Python, PostgreSQL, Supabase, AWS) with high-performance frontends (TypeScript, Next.js). Proven track record of architecting agentic backends for high-stakes real-time decisioning, resilient retrieval pipelines (RAG), and offline-first database systems across 157 strict migrations. Passionate about owning the full software lifecycle from day zero to replace manual operational bottlenecks with auditable, autonomous software.
                    </p>
                </section>

                {/* Experience */}
                <section style={{ marginBottom: '28px' }}>
                    <h2 style={{ fontSize: '17px', color: '#111827', marginBottom: '14px', borderBottom: '1.5px solid #e5e7eb', paddingBottom: '4px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Experience
                    </h2>

                    {/* Experience 1 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                Founder & Lead Engineer <span style={{ fontWeight: '400', color: '#4b5563' }}>| Senselet & Independent Solutions (Startup Venture)</span>
                            </h3>
                            <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>2024 – Present</span>
                        </div>
                        <ul style={{ margin: '8px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>
                                <strong>Zero-to-Production Architecture:</strong> Architected and deployed an AI-native enterprise ERP from the ground up on AWS and Supabase, scaling across 3+ commercial retail clients to eliminate 20+ hours of weekly manual auditing across 10k+ active SKUs.
                            </li>
                            <li>
                                <strong>High-Stakes Decisioning & Agentic AI:</strong> Engineered a proprietary 15-tool agentic backend using native JSON-schema function calling and cascading LLM failover; automated 90%+ of routine reorder and financial allocation decisions, cutting reconciliation turnaround from 45 min to &lt;30 sec.
                            </li>
                            <li>
                                <strong>Mission-Critical Data Integrity:</strong> Designed an offline-first architecture utilizing a Dual-ID resolution layer via PostgreSQL; authored 157 strict migrations with org-scoped RLS to guarantee 0% data loss across 5+ warehouse locations and high-value stock matrices.
                            </li>
                            <li>
                                <strong>Real-Time Data Pipelines & Cloud Infrastructure:</strong> Built containerized Python and Node.js microservices on AWS (ECS/Lambda) with idempotent webhook handlers, maintaining sub-500ms execution latency and 99.9% deduplication reliability.
                            </li>
                            <li>
                                <strong>High-Velocity Engineering Ownership:</strong> Spearheaded rapid zero-to-one product iterations, combining domain-driven system design with modern AI-assisted tooling (Cursor, Claude) to model complex database schemas and ship production features 3x faster.
                            </li>
                        </ul>
                    </div>

                    {/* Experience 2 */}
                    <div style={{ marginBottom: '15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                Backend Developer (Contract) <span style={{ fontWeight: '400', color: '#4b5563' }}>| Marvels Creative Technology</span>
                            </h3>
                            <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>March 2025 – June 2025</span>
                        </div>
                        <ul style={{ margin: '8px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>
                                <strong>API & Microservice Architecture:</strong> Architected and optimized 20+ RESTful API endpoints and server-side routes using TypeScript and Next.js, reducing server response times by ~35% for enterprise client applications.
                            </li>
                            <li>
                                <strong>Database & Data Pipelines:</strong> Designed PostgreSQL schemas and query workflows using Prisma, ensuring strict data contracts, foreign key integrity, and sub-100ms average query latency.
                            </li>
                            <li>
                                <strong>Testing & Reliability:</strong> Implemented automated API test suites using Jest and Postman within GitHub Actions CI/CD pipelines, maintaining 99.5%+ deployment stability across production rollouts.
                            </li>
                            <li>
                                <strong>Tech Stack:</strong> TypeScript, Next.js API Routes, PostgreSQL, Prisma ORM, Node.js, Jest, Docker.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Key AI & Infrastructure Projects */}
                <section style={{ marginBottom: '28px' }}>
                    <h2 style={{ fontSize: '17px', color: '#111827', marginBottom: '14px', borderBottom: '1.5px solid #e5e7eb', paddingBottom: '4px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Key AI & Infrastructure Projects
                    </h2>

                    {/* Project 1 */}
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                            <h3 style={{ fontSize: '14.5px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                AGY Telegram Bot – Mobile AI Agent Cockpit
                            </h3>
                        </div>
                        <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <li>
                                <strong>Impact & Outcome:</strong> Built and open-sourced a mobile command center bridging Telegram to autonomous AI coding agents; automated 100+ remote agent workflows, cutting approval-to-deployment turnaround by 40% with sub-2s streaming response latency.
                            </li>
                            <li>
                                <strong>AI Evaluation & Infrastructure:</strong> Implemented automated Playwright visual verification checkpoints, structured LLM output evaluation frameworks, and a cascading model router with dynamic Cloudflare HTTPS tunneling.
                            </li>
                            <li style={{ color: '#6b7280', fontSize: '12.5px' }}>
                                <strong>Tech:</strong> Python 3.12, Google Antigravity SDK, Playwright, LLM Evaluation Frameworks, Telegram Mini App API.
                            </li>
                        </ul>
                    </div>

                    {/* Project 2 */}
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                            <h3 style={{ fontSize: '14.5px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                Automated Data Enrichment & Retrieval Pipeline
                            </h3>
                        </div>
                        <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <li>
                                <strong>Impact & Retrieval Optimization:</strong> Built and deployed a production microservice processing 5,000+ records with semantic search indexing and RAG retrieval pipelines, achieving 99.2% extraction accuracy and cutting per-record enrichment cost by ~65%.
                            </li>
                            <li>
                                <strong>System Design & Verification:</strong> Integrated signature-verified webhook receivers, automated precision/recall evaluation routines for Gemini Flash Lite structured outputs, and idempotent PostgreSQL persistence.
                            </li>
                            <li style={{ color: '#6b7280', fontSize: '12.5px' }}>
                                <strong>Tech:</strong> Python, TypeScript, Node.js, Vector Embeddings / Semantic Search, REST APIs, Webhooks, AWS.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Technical Skills */}
                <section style={{ marginBottom: '28px' }}>
                    <h2 style={{ fontSize: '17px', color: '#111827', marginBottom: '12px', borderBottom: '1.5px solid #e5e7eb', paddingBottom: '4px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Technical Skills
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '13px', color: '#374151' }}>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>Languages & Core:</strong>
                            <span>TypeScript, JavaScript, Python, SQL, HTML5, CSS3, Tailwind CSS</span>
                        </div>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>Frameworks & Libraries:</strong>
                            <span>Next.js, React, Node.js, Express, Fastify, Three.js</span>
                        </div>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>AI & Agentic Systems:</strong>
                            <span>Agentic Workflows, Function Calling, Custom Orchestration, LLM Evaluation, RAG, Vector Stores, Semantic Search</span>
                        </div>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>Databases & Cloud:</strong>
                            <span>PostgreSQL, Supabase (RLS, Edge Functions), AWS (ECS, Lambda), Docker, Render, Vercel, Cloudflare</span>
                        </div>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>Architecture & Workflows:</strong>
                            <span>System Design, Microservices, Offline-First Sync, High-Availability Webhooks, CI/CD, AI-Assisted Tooling (Cursor, Claude)</span>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '17px', color: '#111827', marginBottom: '12px', borderBottom: '1.5px solid #e5e7eb', paddingBottom: '4px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Education & Credentials
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '13px' }}>
                            <div>
                                <strong style={{ color: '#111827' }}>Evangadi Technologies</strong> — <span>Full Stack Web Development (MERN)</span>
                            </div>
                            <span style={{ color: '#6b7280', fontWeight: '500' }}>2024 — 2025</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '13px' }}>
                            <div>
                                <strong style={{ color: '#111827' }}>Addis Ababa Science and Technology University</strong> — <span>Science and Technology</span>
                            </div>
                            <span style={{ color: '#6b7280', fontWeight: '500' }}>2021 — 2023</span>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer style={{ marginTop: '35px', paddingTop: '15px', borderTop: '1px solid #e5e7eb', textAlign: 'center', fontSize: '11.5px', color: '#9ca3af' }}>
                    <p style={{ margin: 0 }}>Portfolio: <a href="https://my-portfolio-theta-flame-45.vercel.app" style={{ color: '#6b7280', textDecoration: 'underline' }}>my-portfolio-theta-flame-45.vercel.app</a> • References available upon request</p>
                </footer>
            </div>
        </div>
    );
}
