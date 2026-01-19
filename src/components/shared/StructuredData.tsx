export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Bemnet Kibret",
        "url": "https://my-portfolio-theta-flame-45.vercel.app/",
        "image": "https://my-portfolio-theta-flame-45.vercel.app/images/my-avatar.png",
        "sameAs": [
            "https://www.instagram.com/bem__kin_/",
            "https://github.com/Bemkin",
            "https://www.linkedin.com/in/bemnet-kibret-054a792a9/"
        ],
        "jobTitle": "Full Stack Web Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": "Professional Portfolio of Bemnet Kibret, a Full Stack Developer specializing in React, Next.js, and Node.js.",
        "knowsAbout": [
            "Full Stack Development",
            "Web Design",
            "Graphic Design",
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "MySQL",
            "Firebase"
        ],
        "alumniOf": [
            {
                "@type": "CollegeOrUniversity",
                "name": "Addis Ababa Science and Technology University"
            }
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Addis Ababa",
            "addressCountry": "Ethiopia"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
