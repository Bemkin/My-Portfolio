'use client';

interface ResumeProps {
    active: boolean;
}

const Resume = ({ active }: ResumeProps) => {
    return (
        <article className={`resume ${active ? 'active' : ''}`} data-page="resume">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="h2 article-title">Resume</h2>
                <a
                    href="/resume.pdf"
                    download="Bemnet_Kibret_Resume.pdf"
                    className="form-btn"
                    style={{ width: 'auto', padding: '10px 20px', fontSize: 'var(--fs-6)', marginTop: '-10px' }}
                >
                    {/* @ts-ignore */}
                    <ion-icon name="download-outline"></ion-icon>
                    <span>Download CV</span>
                </a>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        {/* @ts-ignore */}
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Evangadi Technologies</h4>
                        <span>2024 — 2025</span>
                        <p className="timeline-text">
                            I want to express my deepest gratitude to Evangadi Tech for providing me with the invaluable opportunity to learn full-stack web development.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Addis Ababa Science and Technology University</h4>
                        <span>2021 — 2023</span>
                        <p className="timeline-text">
                            AASTU offers a solid education in science and technology, and I gained valuable knowledge during my time there.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Ethio Parents School</h4>
                        <span>2006 — 2021</span>
                        <p className="timeline-text">
                            The school's commitment to academic excellence and holistic development has truly shaped my journey.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        {/* @ts-ignore */}
                        <ion-icon name="briefcase-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Freelancer</h4>
                        <span>2024 — Present</span>
                        <p className="timeline-text">
                            As a junior freelancer specializing in web development, I've worked on a variety of exciting projects.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">MARVELS CREATIVE TECHNOLOGY</h4>
                        <span>March — June 2025</span>
                        <p className="timeline-text">
                            Backend developer internship building scalable systems with Typescript and Next.js.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    {[
                        { name: 'Front-End Development', level: 80 },
                        { name: 'Back-End Development', level: 95 },
                        { name: 'Branding', level: 90 },
                        { name: 'Frameworks and Libraries', level: 70 }
                    ].map((skill) => (
                        <li key={skill.name} className="skills-item">
                            <div className="title-wrapper">
                                <h5 className="h5">{skill.name}</h5>
                                <data value={skill.level}>{skill.level}%</data>
                            </div>
                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Resume;
