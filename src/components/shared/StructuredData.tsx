export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Bemnet Kibret",
        "url": "https://my-portfolio-theta-flame-45.vercel.app/",
        "image": "https://my-portfolio-theta-flame-45.vercel.app/images/hero-portrait.jpg",
        "sameAs": [
            "https://www.instagram.com/bem__kin_/",
            "https://github.com/Bemkin",
            "https://www.linkedin.com/in/bemnet-kibret-054a792a9/"
        ],
        "jobTitle": "Founding Full-Stack & AI Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "Senselet Technologies"
        },
        "description": "Professional Portfolio of Bemnet Kibret, a Founding Full-Stack & AI Engineer specializing in zero-to-production architectures, agentic AI backends, multi-tenant PostgreSQL/Supabase systems, and TypeScript/React frontends.",
        "knowsAbout": [
            "Agentic AI",
            "Full Stack Development",
            "Python",
            "TypeScript",
            "Next.js",
            "React",
            "PostgreSQL",
            "Supabase",
            "Docker",
            "LLM Function Calling",
            "System Architecture"
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
