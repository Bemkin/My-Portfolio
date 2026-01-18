'use client';

import Image from 'next/image';

interface SidebarProps {
    active: boolean;
    onToggle: () => void;
}

const Sidebar = ({ active, onToggle }: SidebarProps) => {
    return (
        <aside className={`sidebar ${active ? 'active' : ''}`} data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <Image src="/images/2M0A8352.JPG" alt="Bemnet Kibret" width={80} height={80} />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Bemnet Kibret">Bemnet Kibret</h1>
                    <p className="title">Full Stack Web developer</p>
                </div>

                <button className="info_more-btn" onClick={onToggle}>
                    <span>Show Contacts</span>
                    {/* @ts-ignore */}
                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* @ts-ignore */}
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:bemnetkibret4@gmail.com" className="contact-link">bemnetkibret4@gmail.com</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            {/* @ts-ignore */}
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+251929177999" className="contact-link">+251929177999</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            {/* @ts-ignore */}
                            <ion-icon name="calendar-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="2003-08-27">August 27, 2003</time>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            {/* @ts-ignore */}
                            <ion-icon name="location-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Addis Ababa, Ethiopia</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://www.instagram.com/bem__kin_/" className="social-link" target="_blank" rel="noopener noreferrer">
                            {/* @ts-ignore */}
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://github.com/Bemkin" className="social-link" target="_blank" rel="noopener noreferrer">
                            {/* @ts-ignore */}
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/bemnet-kibret-054a792a9/" className="social-link" target="_blank" rel="noopener noreferrer">
                            {/* @ts-ignore */}
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
