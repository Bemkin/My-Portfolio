'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <motion.div
                className="content-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', maxWidth: '500px', width: '100%', padding: '50px 30px' }}
            >
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255, 90, 90, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto'
                }}>
                    {/* @ts-ignore */}
                    <ion-icon name="alert-circle-outline" style={{ fontSize: '40px', color: '#ff5a5a' }}></ion-icon>
                </div>

                <h2 className="h2" style={{ margin: '0 0 20px 0' }}>Something went wrong!</h2>
                <p style={{ color: 'var(--light-gray)', marginBottom: '30px', fontSize: 'var(--fs-6)' }}>
                    An unexpected error occurred. We have been notified and are looking into it.
                </p>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        className="form-btn"
                        onClick={() => reset()}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--onyx)', color: 'var(--white-2)' }}
                    >
                        <span>Try Again</span>
                        {/* @ts-ignore */}
                        <ion-icon name="refresh-outline"></ion-icon>
                    </button>

                    <Link href="/">
                        <button className="form-btn" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>Return Home</span>
                            {/* @ts-ignore */}
                            <ion-icon name="home-outline"></ion-icon>
                        </button>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
