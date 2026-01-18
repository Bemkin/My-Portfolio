'use client';

interface ContactProps {
    active: boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Contact = ({ active, onSubmit }: ContactProps) => {
    return (
        <article className={`contact ${active ? 'active' : ''}`} data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127898.40847342223!2d38.66996901949423!3d9.015790471722732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85320d304e0b%3A0x4a073905c2829b78!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                        width="400" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form onSubmit={onSubmit} className="form" data-form>
                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
                        <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
                    </div>
                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
                    <button className="form-btn" type="submit" data-form-btn>
                        {/* @ts-ignore */}
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </article>
    );
};

export default Contact;
