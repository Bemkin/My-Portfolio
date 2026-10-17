import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { ArrowDownRight } from '@/components/ui/Icons';
import { Roll } from '@/components/ui/Button';
import { profile, socials } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Start a project with Bemnet Kibret — product engineering, agentic AI systems and cloud infrastructure.',
};

export default function ContactPage() {
    return (
        <div className="theme-dark" style={{ paddingBottom: 'var(--section-padding)' }}>
            <header className="container medium page-hero" style={{ display: 'flex', justifyContent: 'space-between', gap: '2em', alignItems: 'flex-start' }}>
                <h1 data-reveal style={{ maxWidth: '12ch' }}>Let&rsquo;s start a project together</h1>
                <div className="contact-avatar" data-reveal>
                    <Image src={profile.portrait} alt="" width={240} height={240} />
                </div>
            </header>

            <div className="container medium contact-split">
                <ContactForm />
                <aside data-reveal>
                    <ArrowDownRight className="footer-arrow-inline" />
                    <div className="contact-detail">
                        <p className="eyebrow">Contact details</p>
                        <a href={`mailto:${profile.email}`}><Roll>{profile.email}</Roll></a>
                        <a href={profile.phoneHref}><Roll>{profile.phone}</Roll></a>
                    </div>
                    <div className="contact-detail">
                        <p className="eyebrow">Based in</p>
                        <p>{profile.location}, {profile.country}<br />Working with teams worldwide</p>
                    </div>
                    <div className="contact-detail">
                        <p className="eyebrow">Socials</p>
                        {socials.map((s) => (
                            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"><Roll>{s.name}</Roll></a>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}
