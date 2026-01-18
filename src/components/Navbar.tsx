'use client';

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
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
