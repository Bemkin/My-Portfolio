import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullname, email, message } = body;

        if (!fullname || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const telegramMessage = `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`;
        const token = process.env.TELEGRAM_API_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token) {
            console.error('TELEGRAM_API_TOKEN not found in environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        if (!chatId) {
            console.error('TELEGRAM_CHAT_ID not found in environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
            }),
        });

        const data = await response.json();

        if (data.ok) {
            return NextResponse.json({
                message: 'Message sent to Telegram successfully!'
            });
        } else {
            console.error('Telegram API error:', data);
            return NextResponse.json(
                { error: 'Failed to send message to Telegram' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return NextResponse.json(
            { error: 'Error sending message to Telegram' },
            { status: 500 }
        );
    }
}
