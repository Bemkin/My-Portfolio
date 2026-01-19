'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
    onClose: () => void;
}

const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000); // Auto-dismiss after 4 seconds

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    const bgColor = type === 'success'
        ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.95) 0%, rgba(21, 128, 61, 0.95) 100%)'
        : 'linear-gradient(135deg, rgba(239, 68, 68, 0.95) 0%, rgba(185, 28, 28, 0.95) 100%)';

    const icon = type === 'success' ? 'checkmark-circle' : 'close-circle';

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        background: bgColor,
                        color: 'white',
                        padding: '16px 24px',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        minWidth: '320px',
                        maxWidth: '500px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                >
                    <div style={{ fontSize: '24px', flexShrink: 0 }}>
                        {/* @ts-ignore */}
                        <ion-icon name={icon}></ion-icon>
                    </div>
                    <div style={{
                        flex: 1,
                        fontSize: 'var(--fs-6)',
                        fontWeight: '500',
                        lineHeight: '1.5'
                    }}>
                        {message}
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            padding: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            opacity: 0.8
                        }}
                    >
                        {/* @ts-ignore */}
                        <ion-icon name="close"></ion-icon>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
