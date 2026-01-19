'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Project } from '@/types';

interface PortfolioProps {
    active: boolean;
    portfolioFilter: string;
    setPortfolioFilter: (filter: string) => void;
    isFilterActive: boolean;
    setIsFilterActive: (active: boolean) => void;
    filteredProjects: Project[];
    handleProjectClick: (project: Project) => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Portfolio = ({
    active,
    portfolioFilter,
    setPortfolioFilter,
    isFilterActive,
    setIsFilterActive,
    filteredProjects,
    handleProjectClick
}: PortfolioProps) => {
    return (
        <article className={`portfolio ${active ? 'active' : ''}`} data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="filter-list">
                    {['All', 'Web development', 'Applications'].map((filter) => (
                        <li key={filter} className="filter-item">
                            <button
                                className={portfolioFilter === filter.toLowerCase() ? 'active' : ''}
                                onClick={() => setPortfolioFilter(filter.toLowerCase())}
                            >
                                {filter}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="filter-select-box">
                    <button className={`filter-select ${isFilterActive ? 'active' : ''}`} onClick={() => setIsFilterActive(!isFilterActive)}>
                        <div className="select-value">{portfolioFilter === 'all' ? 'Select category' : portfolioFilter}</div>
                        <div className="select-icon">
                            {/* @ts-ignore */}
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>
                    </button>
                    <ul className="select-list">
                        {['All', 'Web development', 'Applications'].map((filter) => (
                            <li key={filter} className="select-item">
                                <button onClick={() => { setPortfolioFilter(filter.toLowerCase()); setIsFilterActive(false); }}>{filter}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <motion.ul
                    className="project-list"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    key={portfolioFilter} // Force re-animation on filter change
                >
                    {filteredProjects.map((project, index) => (
                        <motion.li
                            key={index}
                            className="project-item active"
                            data-filter-item
                            data-category={project.category}
                            variants={itemVariants}
                            onClick={() => handleProjectClick(project)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="content-card" style={{ position: 'relative', padding: '0', overflow: 'hidden' }}>
                                <figure className="project-img" style={{ margin: '0', borderRadius: '0', position: 'relative' }}>
                                    <div className="project-item-icon-box">
                                        {/* @ts-ignore */}
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={300}
                                        height={200}
                                        style={{ width: '100%', height: 'auto' }}
                                        loading={index < 3 ? 'eager' : 'lazy'}
                                        priority={index === 0}
                                    />

                                    {project.problem && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            left: '15px',
                                            background: 'rgba(255, 154, 71, 0.9)',
                                            color: 'white',
                                            padding: '4px 12px',
                                            borderRadius: '8px',
                                            fontSize: '10px',
                                            fontWeight: 'bold',
                                            zIndex: 1,
                                            backdropFilter: 'blur(5px)',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                                        }}>
                                            CASE STUDY
                                        </div>
                                    )}
                                </figure>
                                <div style={{ padding: '20px' }}>
                                    <h3 className="project-title" style={{ fontSize: 'var(--fs-5)', marginBottom: '5px' }}>{project.title}</h3>
                                    <p className="project-category" style={{ fontSize: 'var(--fs-7)', color: 'var(--light-gray-70)' }}>{project.category}</p>

                                    {project.tech && (
                                        <div className="tech-stack" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    style={{
                                                        fontSize: '10px',
                                                        color: 'var(--orange-yellow-crayola)',
                                                        background: 'rgba(255, 184, 0, 0.1)',
                                                        padding: '2px 8px',
                                                        borderRadius: '4px',
                                                        border: '1px solid rgba(255, 184, 0, 0.2)',
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {project.github && (
                                    <motion.a
                                        whileHover={{ scale: 1.1, backgroundColor: 'var(--orange-yellow-crayola)', color: 'var(--eerie-black-1)' }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-icon-link"
                                        title="View Source Code"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            position: 'absolute',
                                            top: '15px',
                                            right: '15px',
                                            background: 'rgba(0,0,0,0.5)',
                                            backdropFilter: 'blur(4px)',
                                            color: 'var(--white-2)',
                                            width: '35px',
                                            height: '35px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '10px',
                                            fontSize: '18px',
                                            zIndex: 5,
                                            border: '1px solid var(--glass-border)',
                                        }}
                                    >
                                        {/* @ts-ignore */}
                                        <ion-icon name="logo-github"></ion-icon>
                                    </motion.a>
                                )}
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </section>
        </article>
    );
};

export default Portfolio;
