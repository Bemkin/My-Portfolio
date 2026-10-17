import Button from '@/components/ui/Button';

export default function NotFound() {
    return (
        <section className="container medium page-hero" style={{ minHeight: '70vh' }}>
            <p className="eyebrow">404</p>
            <h1 style={{ marginTop: '0.3em' }}>This page doesn&rsquo;t exist</h1>
            <p className="lead muted" style={{ marginTop: '0.75em', maxWidth: '28ch' }}>
                It may have moved, or the link might be out of date.
            </p>
            <div style={{ marginTop: '2.5em' }}>
                <Button href="/" magnetic>
                    Back to home
                </Button>
            </div>
        </section>
    );
}
