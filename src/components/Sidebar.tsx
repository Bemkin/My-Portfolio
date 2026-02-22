'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { trackExternalLink } from '@/lib/analytics';
import Modal from './shared/Modal';

interface SidebarProps {
    active: boolean;
    onToggle: () => void;
}

const Sidebar = ({ active, onToggle }: SidebarProps) => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    return (
        <>
            <motion.aside
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`sidebar ${active ? 'active' : ''}`}
                data-sidebar
            >
                <div className="sidebar-info">
                    <figure
                        className="avatar-box cursor-zoom-in"
                        onClick={() => setIsImageModalOpen(true)}
                        style={{ cursor: 'zoom-in' }}
                    >
                        <Image
                            src="/images/bemnet-avatar.jpg"
                            alt="Bemnet Kibret"
                            width={150}
                            height={150}
                            priority
                            className="rounded-2xl shadow-xl transition-transform duration-500 hover:scale-110"
                        />
                    </figure>

                    <div className="info-content">
                        <h1 className="name" title="Bemnet Kibret">Bemnet Kibret</h1>
                        <p className="title">Full Stack Web developer</p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="info_more-btn"
                        onClick={onToggle}
                    >
                        <span className="sr-only">Show Contacts</span>
                        <motion.div
                            animate={{ rotate: active ? 180 : 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* @ts-ignore */}
                            <ion-icon name="chevron-down"></ion-icon>
                        </motion.div>
                    </motion.button>
                </div>

                <div
                    className={`sidebar-info_more ${active ? 'visible' : ''}`}
                    style={{
                        overflow: 'hidden',
                        transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out',
                        maxHeight: active ? '1000px' : undefined // Let CSS handle mobile/desktop defaults
                    }}
                >
                    <div className="separator"></div>
                    <ul className="contacts-list">
                        {[
                            { title: 'Email', value: 'bemnetkibret4@gmail.com', href: 'mailto:bemnetkibret4@gmail.com', icon: 'mail-outline' },
                            { title: 'Phone', value: '+251929177999', href: 'tel:+251929177999', icon: 'phone-portrait-outline' },
                            { title: 'Birthday', value: 'August 27, 2003', icon: 'calendar-outline' },
                            { title: 'Location', value: 'Addis Ababa, Ethiopia', icon: 'location-outline' }
                        ].map((contact, i) => (
                            <motion.li
                                key={i}
                                className="contact-item"
                                initial={false}
                                animate={active ? { x: 0, opacity: 1 } : {}}
                            >
                                <div className="icon-box">
                                    {/* @ts-ignore */}
                                    <ion-icon name={contact.icon}></ion-icon>
                                </div>
                                <div className="contact-info">
                                    <p className="contact-title">{contact.title}</p>
                                    {contact.href ? (
                                        <a
                                            href={contact.href}
                                            className="contact-link"
                                            onClick={() => trackExternalLink(contact.href!, contact.title.toLowerCase())}
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="contact-link whitespace-nowrap">{contact.value}</span>
                                    )}
                                </div>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="separator"></div>

                    <ul className="social-list">
                        {[
                            { href: 'https://www.instagram.com/bem__kin_/', icon: 'logo-instagram', name: 'instagram' },
                            { href: 'https://github.com/Bemkin', icon: 'logo-github', name: 'github' },
                            { href: 'https://www.linkedin.com/in/bemnet-kibret-054a792a9/', icon: 'logo-linkedin', name: 'linkedin' }
                        ].map((social, i) => (
                            <motion.li key={i} className="social-item" whileHover={{ y: -3 }}>
                                <a
                                    href={social.href}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackExternalLink(social.href, `social_${social.name}`)}
                                >
                                    {/* @ts-ignore */}
                                    <ion-icon name={social.icon}></ion-icon>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.aside>

            <Modal
                isOpen={isImageModalOpen}
                onClose={() => setIsImageModalOpen(false)}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '15px',
                    maxWidth: '90vw',
                    maxHeight: '85vh'
                }}>
                    <Image
                        src="/images/bemnet-avatar.jpg"
                        alt="Bemnet Kibret"
                        width={800}
                        height={800}
                        className="rounded-2xl shadow-2xl"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '80vh',
                            objectFit: 'contain',
                            boxShadow: '0 0 40px rgba(0,0,0,0.5)'
                        }}
                    />
                </div>
            </Modal>
        </>
    );
};

export default Sidebar;
