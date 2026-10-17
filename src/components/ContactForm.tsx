'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { trackFormSubmit } from '@/lib/analytics';

type Status = { type: 'success' | 'error'; message: string } | null;

const fields = [
    { name: 'fullname', label: 'What’s your name?', placeholder: 'Jane Doe *', type: 'text', autoComplete: 'name', maxLength: 100 },
    { name: 'email', label: 'What’s your email?', placeholder: 'jane@company.com *', type: 'email', autoComplete: 'email', maxLength: 200 },
    { name: 'company', label: 'What’s the name of your organization?', placeholder: 'Company or startup', type: 'text', autoComplete: 'organization', maxLength: 120 },
    { name: 'services', label: 'What services are you looking for?', placeholder: 'Product engineering, AI agents, backend…', type: 'text', autoComplete: 'off', maxLength: 200 },
];

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<Status>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        setSubmitting(true);
        setStatus(null);
        try {
            const res = await fetch('/api/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const body = await res.json().catch(() => ({}));
            if (res.ok) {
                setStatus({ type: 'success', message: 'Thanks — your message is on its way. I’ll get back to you soon.' });
                trackFormSubmit('contact_form', true);
                form.reset();
            } else {
                setStatus({ type: 'error', message: body.error || 'Something went wrong. Please email me directly.' });
                trackFormSubmit('contact_form', false);
            }
        } catch {
            setStatus({ type: 'error', message: 'Network error. Check your connection and try again.' });
            trackFormSubmit('contact_form', false);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={onSubmit} noValidate={false}>
            {fields.map((f, i) => (
                <div key={f.name} className="form-field">
                    <span className="num">0{i + 1}</span>
                    <div>
                        <label htmlFor={f.name}>{f.label}</label>
                        <input
                            id={f.name}
                            name={f.name}
                            type={f.type}
                            placeholder={f.placeholder}
                            autoComplete={f.autoComplete}
                            maxLength={f.maxLength}
                            required={f.name === 'fullname' || f.name === 'email'}
                        />
                    </div>
                </div>
            ))}
            <div className="form-field">
                <span className="num">05</span>
                <div>
                    <label htmlFor="message">Your message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Hello Bemnet, can you help me with … *" required maxLength={4000} />
                </div>
            </div>

            {/* Honeypot: hidden from people, filled in by bots. */}
            <div className="hp-field" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-3.5em' }}>
                <Button type="submit" round blue magnetic disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send it!'}
                </Button>
            </div>

            <p className={`form-status ${status?.type ?? ''}`} role="status" aria-live="polite">
                {status?.message}
            </p>
        </form>
    );
}
