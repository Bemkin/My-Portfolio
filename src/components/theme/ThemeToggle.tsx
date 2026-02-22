'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="theme-toggle"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 100,
                background: 'var(--onyx)',
                border: '1px solid var(--jet)',
                borderRadius: '12px',
                padding: '10px',
                color: 'var(--orange-yellow-crayola)',
                boxShadow: 'var(--shadow-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {/* @ts-ignore */}
            <ion-icon name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'} style={{ fontSize: '24px' }}></ion-icon>
        </motion.button>
    );
};

export default ThemeToggle;
