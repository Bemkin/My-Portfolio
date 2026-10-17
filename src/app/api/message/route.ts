import { NextResponse } from 'next/server';

const LIMITS = { fullname: 100, email: 200, company: 120, services: 200, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort per-instance rate limit: 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();
    return recent.length > MAX_PER_WINDOW;
}

function field(body: Record<string, unknown>, key: keyof typeof LIMITS) {
    const v = body[key];
    return typeof v === 'string' ? v.trim().slice(0, LIMITS[key]) : '';
}

export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Honeypot filled in: pretend success so bots don't retry.
    if (typeof body.website === 'string' && body.website.trim() !== '') {
        return NextResponse.json({ message: 'Message sent' });
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (rateLimited(ip)) {
        return NextResponse.json({ error: 'Too many messages. Please try again later or email me directly.' }, { status: 429 });
    }

    const fullname = field(body, 'fullname');
    const email = field(body, 'email');
    const company = field(body, 'company');
    const services = field(body, 'services');
    const message = field(body, 'message');

    if (!fullname || !email || !message) {
        return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
        return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const token = process.env.TELEGRAM_API_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
        console.error('Telegram environment variables are not configured');
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const text = [
        `Name: ${fullname}`,
        `Email: ${email}`,
        company && `Organization: ${company}`,
        services && `Services: ${services}`,
        `Message: ${message}`,
    ]
        .filter(Boolean)
        .join('\n');

    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }),
            signal: AbortSignal.timeout(10_000),
        });
        const data = await response.json();
        if (!data.ok) {
            console.error('Telegram API error:', data);
            return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
        }
        return NextResponse.json({ message: 'Message sent' });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
    }
}
