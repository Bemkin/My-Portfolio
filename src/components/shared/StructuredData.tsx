export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Bemnet Kibret",
        "url": "https://my-portfolio-theta-flame-45.vercel.app/",
        "image": "https://my-portfolio-theta-flame-45.vercel.app/images/pfp.jpg",
        "sameAs": [
            "https://www.instagram.com/bem__kin_/",
            "https://github.com/Bemkin",
            "https://www.linkedin.com/in/bemnet-kibret-054a792a9/"
        ],
        "jobTitle": "Fullstack Software Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": "Professional Portfolio of Bemnet Kibret, a Fullstack Software Engineer specializing in end-to-end SaaS platforms and high-performance backend systems.",
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
