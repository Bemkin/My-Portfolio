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
            className="theme-toggle navbar-link"
            style={{
                fontSize: '20px',
                color: 'var(--light-gray)',
                transition: 'color var(--transition-1)',
                padding: '15px 5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {/* @ts-ignore */}
            <ion-icon name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'}></ion-icon>
        </motion.button>
    );
};

export default ThemeToggle;
