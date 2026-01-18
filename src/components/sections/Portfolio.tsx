'use client';

import Image from 'next/image';

interface Project {
    title: string;
    category: string;
    image: string;
    link: string;
}

interface PortfolioProps {
    active: boolean;
    portfolioFilter: string;
    setPortfolioFilter: (filter: string) => void;
    isFilterActive: boolean;
    setIsFilterActive: (active: boolean) => void;
    filteredProjects: Project[];
}

const Portfolio = ({
    active,
    portfolioFilter,
    setPortfolioFilter,
    isFilterActive,
    setIsFilterActive,
    filteredProjects
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

                <ul className="project-list">
                    {filteredProjects.map((project, index) => (
                        <li key={index} className="project-item active" data-filter-item data-category={project.category}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        {/* @ts-ignore */}
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>
                                    <Image src={project.image} alt={project.title} width={300} height={200} />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Portfolio;
