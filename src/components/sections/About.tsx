'use client';

import Image from 'next/image';

interface Testimonial {
    name: string;
    text: string;
    avatar: string;
}

interface AboutProps {
    active: boolean;
    testimonials: Testimonial[];
    onTestimonialClick: (index: number) => void;
}

const About = ({ active, testimonials, onTestimonialClick }: AboutProps) => {
    return (
        <article className={`about ${active ? 'active' : ''}`} data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    I'm a versatile full-stack web developer proficient in developing and deploying complex web applications. With a strong foundation in both front-end and back-end technologies, I create seamless user experiences by blending creativity with technical expertise. My skills encompass HTML, CSS, JavaScript, React, Node.js, and various databases.
                </p>
                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
                </p>
                <p>
                    As I continue to grow as a web developer, my goal is to take on more challenging projects that push the boundaries of my skills and knowledge. I am eager to collaborate with clients who value innovation and creativity, and I look forward to building impactful web applications that make a difference.
                </p>
            </section>

            {/* Service */}
            <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Image src="/images/icon-dev.svg" alt="design icon" width={40} height={40} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web Development</h4>
                            <p className="service-item-text">High-quality development of sites at the professional level.</p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Image src="/images/icon-app.svg" alt="mobile app icon" width={40} height={40} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Mobile Apps</h4>
                            <p className="service-item-text">High-quality development of applications for iOS and Android.</p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <Image src="/images/icon-design.svg" alt="design icon" width={40} height={40} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">DJ</h4>
                            <p className="service-item-text">I Disk Jockey professionally</p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    {testimonials.map((testimonial, index) => (
                        <li key={index} className="testimonials-item" onClick={() => onTestimonialClick(index)}>
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <Image src={testimonial.avatar} alt={testimonial.name} width={60} height={60} />
                                </figure>
                                <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>
                                <div className="testimonials-text" data-testimonials-text>
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Clients */}
            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>
                <ul className="clients-list has-scrollbar">
                    {['logo-2-color.png', 'white primary whith purple logo.svg', 'logo-3-color.png', 'logo-4-color.png', 'logo-5-color.png', 'logo-6-color.png'].map((logo, i) => (
                        <li key={i} className="clients-item">
                            <a href="#">
                                <Image src={`/images/${logo}`} alt="client logo" width={100} height={40} />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default About;
