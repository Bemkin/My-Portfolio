'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <motion.div
                className="content-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', maxWidth: '500px', width: '100%', padding: '50px 30px' }}
            >
                <h1 style={{ fontSize: '80px', fontWeight: 'bold', color: 'var(--orange-yellow-crayola)', lineHeight: '1' }}>404</h1>
                <h2 className="h2" style={{ margin: '20px 0' }}>Page Not Found</h2>
                <p style={{ color: 'var(--light-gray)', marginBottom: '30px', fontSize: 'var(--fs-6)' }}>
                    Oops! The page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <Link href="/">
                    <button className="form-btn" style={{ margin: '0 auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Return Home</span>
                        {/* @ts-ignore */}
                        <ion-icon name="home-outline"></ion-icon>
                    </button>
                </Link>
            </motion.div>
        </main>
    );
}
