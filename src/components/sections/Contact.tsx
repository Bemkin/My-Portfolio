import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactProps {
    active: boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    isSubmitting: boolean;
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Contact = ({ active, onSubmit, isSubmitting }: ContactProps) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    return (
        <article className={`contact ${active ? 'active' : ''}`} data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <motion.section
                className="mapbox"
                data-mapbox
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginBottom: '30px',
                    border: '1px solid var(--glass-border)',
                    height: '300px',
                    position: 'relative',
                    background: 'var(--onyx)'
                }}
            >
                {!isMapLoaded ? (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '15px',
                            cursor: 'pointer',
                            background: 'linear-gradient(to bottom right, var(--onyx), var(--eerie-black-2))'
                        }}
                        onClick={() => setIsMapLoaded(true)}
                    >
                        {/* @ts-ignore */}
                        <ion-icon name="map-outline" style={{ fontSize: '40px', color: 'var(--orange-yellow-crayola)', opacity: 0.6 }}></ion-icon>
                        <button
                            className="btn-filled"
                            style={{
                                padding: '10px 20px',
                                borderRadius: '8px',
                                fontSize: 'var(--fs-7)',
                                textTransform: 'none'
                            }}
                        >
                            Load Interactive Map
                        </button>
                        <p style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-8)' }}>Addis Ababa, Ethiopia</p>
                    </div>
                ) : (
                    <figure style={{ height: '100%' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127898.40847342223!2d38.66996901949423!3d9.015790471722732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85320d304e0b%3A0x4a073905c2829b78!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ filter: 'grayscale(1) invert(1) opacity(0.8)', border: 0 }}
                        ></iframe>
                    </figure>
                )}
            </motion.section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <motion.form
                    onSubmit={onSubmit}
                    className="form"
                    data-form
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <div className="input-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        <motion.input
                            variants={itemVariants}
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            data-form-input
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                padding: '15px 20px',
                                color: 'var(--white-2)',
                                outline: 'none'
                            }}
                        />
                        <motion.input
                            variants={itemVariants}
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            data-form-input
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                padding: '15px 20px',
                                color: 'var(--white-2)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <motion.textarea
                        variants={itemVariants}
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        data-form-input
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            padding: '15px 20px',
                            minHeight: '150px',
                            color: 'var(--white-2)',
                            outline: 'none',
                            resize: 'none'
                        }}
                    ></motion.textarea>

                    <motion.button
                        variants={itemVariants}
                        whileTap={{ scale: 0.98 }}
                        className="btn-filled"
                        type="submit"
                        data-form-btn
                        disabled={isSubmitting}
                        style={{
                            padding: '16px 35px',
                            borderRadius: '12px',
                            fontSize: 'var(--fs-6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            width: 'max-content',
                            alignSelf: 'flex-end',
                            textTransform: 'none',
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    style={{ fontSize: '18px', display: 'flex' }}
                                >
                                    {/* @ts-ignore */}
                                    <ion-icon name="sync-outline"></ion-icon>
                                </motion.div>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                {/* @ts-ignore */}
                                <ion-icon name="paper-plane" style={{ fontSize: '18px' }}></ion-icon>
                                <span>Send Message</span>
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </section>
        </article>
    );
};

export default Contact;
