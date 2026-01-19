'use client';

import { motion } from 'framer-motion';

interface NavbarProps {
    activePage: string;
    onPageChange: (page: string) => void;
}

const Navbar = ({ activePage, onPageChange }: NavbarProps) => {
    const pages = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {pages.map((page) => (
                    <li className="navbar-item" key={page}>
                        <button
                            className={`navbar-link ${activePage === page.toLowerCase() ? 'active' : ''}`}
                            onClick={() => onPageChange(page.toLowerCase())}
                            style={{ position: 'relative' }}
                        >
                            <span style={{ position: 'relative', zIndex: 2 }}>{page}</span>
                            {activePage === page.toLowerCase() && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="nav-active-bg"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    style={{
                                        position: 'absolute',
                                        inset: '10px 0',
                                        background: 'rgba(255, 184, 0, 0.1)',
                                        borderRadius: '8px',
                                        zIndex: 1
                                    }}
                                />
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
