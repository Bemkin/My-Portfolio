'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { resumePdf, resumeDownloadName } from '@/lib/site';
import { CV } from '@/lib/cv';

const H2: React.CSSProperties = { fontSize: '17px', color: '#111827', marginBottom: '10px', borderBottom: '1.5px solid #e5e7eb', paddingBottom: '4px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' };
const UL: React.CSSProperties = { margin: '8px 0 0', paddingLeft: '18px', color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' };
const LINK: React.CSSProperties = { color: '#1f2937', fontWeight: '500', fontSize: '12.5px' };

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
                        <span>Addis Ababa, Ethiopia (UTC+3 | Open to Remote)</span>
                        <span>•</span>
                        <a href="https://my-portfolio-theta-flame-45.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937', fontWeight: '600' }}>Portfolio</a>
                        <span>•</span>
                        <a href="https://github.com/Bemkin" target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937', fontWeight: '600' }}>GitHub</a>
                        <span>•</span>
                        <a href="https://www.linkedin.com/in/bemnet-kibret-054a792a9/" target="_blank" rel="noopener noreferrer" style={{ color: '#1f2937', fontWeight: '600' }}>LinkedIn</a>
                    </div>
                </header>

                {/* Professional Summary */}
                <section style={{ marginBottom: '28px' }}>
                    <h2 style={H2}>Professional Summary</h2>
                    <p style={{ color: '#374151', fontSize: '13.5px', lineHeight: '1.65', margin: 0, textAlign: 'justify' }}>
                        {CV.summary}
                    </p>
                </section>

                {/* Experience */}
                <section style={{ marginBottom: '28px' }}>
                    <h2 style={{ ...H2, marginBottom: '14px' }}>Experience</h2>
                    {CV.experience.map((job) => (
                        <div key={job.company} style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px', gap: '12px', flexWrap: 'wrap' }}>
                                <h3 style={{ fontSize: '15px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                    {job.role} <span style={{ fontWeight: '400', color: '#4b5563' }}>| {job.company}</span>
                                    {job.link && (
                                        <a href={job.link.href} target="_blank" rel="noopener noreferrer" style={LINK}> [{job.link.label}]</a>
                                    )}
                                </h3>
                                <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>{job.dates}</span>
                            </div>
                            <ul style={UL}>
                                {job.bullets.map((b) => (
                                    <li key={b.label}>
                                        <strong>{b.label}:</strong> {b.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Key Projects */}
                <section style={{ marginBottom: '28px' }}>
                    <h2 style={{ ...H2, marginBottom: '14px' }}>Key Projects</h2>
                    {CV.projects.map((p) => (
                        <div key={p.title} style={{ marginBottom: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px', gap: '12px', flexWrap: 'wrap' }}>
                                <h3 style={{ fontSize: '14.5px', fontWeight: '700', margin: 0, color: '#111827' }}>
                                    {p.title}
                                    {p.link && (
                                        <a href={p.link.href} target="_blank" rel="noopener noreferrer" style={LINK}> [{p.link.label}]</a>
                                    )}
                                </h3>
                                <span style={{ fontSize: '12.5px', color: '#6b7280' }}>{p.tech}</span>
                            </div>
                            <ul style={{ ...UL, gap: '4px' }}>
                                {p.bullets.map((b) => (
                                    <li key={b.label}>
                                        <strong>{b.label}:</strong> {b.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Technical Skills */}
                <section style={{ marginBottom: '28px' }}>
                    <h2 style={{ ...H2, marginBottom: '12px' }}>Technical Skills</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '13px', color: '#374151' }}>
                        {CV.skills.map((s) => (
                            <div key={s.category}>
                                <strong style={{ color: '#111827', width: '185px', display: 'inline-block' }}>{s.category}:</strong>
                                <span>{s.items}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section style={{ marginBottom: '20px' }}>
                    <h2 style={{ ...H2, marginBottom: '12px' }}>Education</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {CV.education.map((e) => (
                            <div key={e.institution} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '13px', gap: '12px', flexWrap: 'wrap' }}>
                                <div>
                                    <strong style={{ color: '#111827' }}>{e.institution}</strong> | <span>{e.credential}</span>
                                </div>
                                <span style={{ color: '#6b7280', fontWeight: '500' }}>{e.dates} | {e.place}</span>
                            </div>
                        ))}
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
