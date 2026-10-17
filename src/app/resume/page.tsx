'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { resumePdf, resumeDownloadName } from '@/lib/site';

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
                        Founding Full-Stack & AI Engineer who takes data-heavy products from zero to production. I build PostgreSQL/Supabase backends, TypeScript and React frontends, and LLM agents with function calling and multi-model failover. Founder of Senselet, a multi-tenant inventory platform with a 33-tool AI agent, 160 Postgres migrations and row-level security on all 28 tables (131 policies), and author of open-source automation tools that keep a human in the loop.
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
                                Founder & Lead Engineer <span style={{ fontWeight: '400', color: '#4b5563' }}>| Senselet Technologies</span>
                            </h3>
                            <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>Dec 2025 – Present</span>
                        </div>
                        <ul style={{ margin: '8px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>
                                <strong>Product &amp; Architecture:</strong> Built Senselet (senselet.store), a multi-tenant, multi-branch inventory platform on React (Vite), Supabase Postgres and 21 TypeScript edge functions, with HMAC-verified Chapa subscriptions and a Telegram bot.
                            </li>
                            <li>
                                <strong>Agentic AI:</strong> Engineered a 33-tool Gemini function-calling agent with role-scoped tool access (admin, manager, clerk) and cascading failover across Gemini models and OpenRouter, covering reorder triggers, purchase-order approval and invoice reconciliation.
                            </li>
                            <li>
                                <strong>Data Integrity:</strong> Modeled a 28-table schema through 160 migrations with row-level security on every table (131 policies). Built an offline mutation queue with idempotency keys, backoff and a dead-letter queue; a 2,500-operation test on a simulated failing network lost 0 writes, and the duplicate-write case it exposed now fails closed.
                            </li>
                            <li>
                                <strong>AI Features &amp; Quality:</strong> Shipped receipt OCR, AI-assisted CSV column mapping and barcode/GTIN catalog lookup, backed by 266 automated Vitest tests; Telegram webhooks are processed exactly once via an insert-first claim on a unique index.
                            </li>
                            <li>
                                <strong>Independent Work:</strong> Built a lead qualification and enrichment service for a client (TypeScript, Fastify, Gemini, RocketReach, Lemlist) and open-sourced personal automation tools, using AI-assisted development throughout.
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
                                <strong>APIs:</strong> Built and optimized REST API endpoints and server-side routes in TypeScript and Next.js for client applications.
                            </li>
                            <li>
                                <strong>Databases:</strong> Designed PostgreSQL schemas and query workflows with Prisma, enforcing data contracts and foreign-key integrity.
                            </li>
                            <li>
                                <strong>Testing:</strong> Added automated API tests with Jest and Postman running in GitHub Actions CI.
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
                                <strong>What it does:</strong> Open-source Telegram bot and Mini App that drive a local Google Antigravity coding agent from a phone: plan-and-approve flow, git diffs and push, dev-server control, and a Cloudflare tunnel for previews.
                            </li>
                            <li>
                                <strong>Engineering:</strong> Playwright mobile (390×844) and desktop (1280×800) screenshots, automatic fallback to a second Gemini model on rate limits, an audit log of every prompt, and 18 automated tests; bot commands are restricted to an allowlisted Telegram user.
                            </li>
                            <li style={{ color: '#6b7280', fontSize: '12.5px' }}>
                                <strong>Tech:</strong> Python 3.12, python-telegram-bot, FastAPI, Google Antigravity SDK, Playwright, Cloudflare Tunnel.
                            </li>
                        </ul>
                    </div>

                    {/* Project 2 */}
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                            <h3 style={{ fontSize: '14.5px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                Cyborg Job Pipeline – Human-in-the-Loop Sourcing &amp; 1-Tap Outreach
                            </h3>
                        </div>
                        <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <li>
                                <strong>What it does:</strong> Daily pipeline that sources roles from RemoteOK and LinkedIn (Playwright), finds the hiring manager or founder via RocketReach, and drafts a 3-sentence Gemini pitch matched to one of three role tracks; every email waits for approval in Telegram.
                            </li>
                            <li>
                                <strong>Engineering:</strong> Free-webmail and company-domain guards with optional NeverBounce/Verimail checks, an owner-only bot with secret-protected cloud sync, Gmail delivery with the track's PDF resume, Docker on Render, Vitest and GitHub Actions CI.
                            </li>
                            <li style={{ color: '#6b7280', fontSize: '12.5px' }}>
                                <strong>Tech:</strong> TypeScript, Node.js, Google Gemini, RocketReach API, Playwright, Telegram Bot API, Nodemailer, Docker.
                            </li>
                        </ul>
                    </div>

                    {/* Project 3 */}
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                            <h3 style={{ fontSize: '14.5px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                CoachTrack ET – Pitch-Side Soccer Timesheet & Billing TMA
                            </h3>
                        </div>
                        <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <li>
                                <strong>What it does:</strong> Zero-dependency Telegram Mini App for youth soccer coaches: a session timer that survives app restarts, decimal hours rounded to 0.01 hr (including across midnight), and 1-tap rain cancellations.
                            </li>
                            <li>
                                <strong>Engineering:</strong> Parent statements shared to Telegram chats, CSV timesheet export, Google Sheets logging through an Apps Script webhook, and a first-run onboarding wizard.
                            </li>
                            <li style={{ color: '#6b7280', fontSize: '12.5px' }}>
                                <strong>Tech:</strong> Vanilla JavaScript, Telegram Mini App SDK, Google Apps Script, localStorage.
                            </li>
                        </ul>
                    </div>

                    {/* Project 4 */}
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                            <h3 style={{ fontSize: '14.5px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                Lead Qualification &amp; Enrichment Pipeline
                            </h3>
                        </div>
                        <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <li>
                                <strong>What it does:</strong> Client service that monitors a pool of about 1,290 companies, qualifies leads with Gemini plus a deterministic rules matrix, enriches contacts through RocketReach and routes them into Lemlist campaigns.
                            </li>
                            <li>
                                <strong>Engineering:</strong> Enrichment cache with a daily credit cap, Retry-After-aware backoff, campaign dedup and a domain firewall, a secret-gated REST API and a cron scheduler with catch-up runs.
                            </li>
                            <li style={{ color: '#6b7280', fontSize: '12.5px' }}>
                                <strong>Tech:</strong> TypeScript, Node.js, Fastify, Google Gemini, RocketReach API, Lemlist API, Playwright, node-cron.
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
                            <span>TypeScript, JavaScript, Python, SQL, HTML, CSS</span>
                        </div>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>Frameworks & Libraries:</strong>
                            <span>React, Next.js, Vite, Node.js, Express, Fastify, FastAPI, React Native (Expo), Three.js / React Three Fiber, GSAP, Tailwind CSS</span>
                        </div>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>AI & Agentic Systems:</strong>
                            <span>LLM function calling, multi-model failover, structured JSON output, human-in-the-loop agents, Gemini, OpenRouter, MediaPipe pose estimation</span>
                        </div>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>Databases & Cloud:</strong>
                            <span>PostgreSQL, Supabase (RLS, Edge Functions, Realtime), Docker, Render, Vercel, Cloudflare Tunnel</span>
                        </div>
                        <div>
                            <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>Architecture & Workflows:</strong>
                            <span>Multi-tenant design, row-level security, Vitest, GitHub Actions CI, AI-assisted development</span>
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
