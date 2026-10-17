'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="container medium page-hero" style={{ minHeight: '70vh' }}>
            <p className="eyebrow">Error</p>
            <h1 style={{ marginTop: '0.3em' }}>Something went wrong</h1>
            <p className="lead muted" style={{ marginTop: '0.75em', maxWidth: '28ch' }}>
                An unexpected error occurred while loading this page.
            </p>
            <div style={{ marginTop: '2.5em', display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
                <Button onClick={reset} magnetic>
                    Try again
                </Button>
                <Button href="/" magnetic>
                    Back to home
                </Button>
            </div>
        </section>
    );
}
