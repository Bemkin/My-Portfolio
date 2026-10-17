// Single source of truth for personal details and resume content.

export const SITE_URL = 'https://my-portfolio-theta-flame-45.vercel.app';

export const profile = {
    name: 'Bemnet Kibret',
    firstName: 'Bemnet',
    role: 'Founding Full-Stack & AI Engineer',
    location: 'Addis Ababa',
    country: 'Ethiopia',
    timeZone: 'Africa/Addis_Ababa',
    email: 'bemnetkibret4@gmail.com',
    phone: '+251 92 917 7999',
    phoneHref: 'tel:+251929177999',
    portrait: '/images/hero-portrait.jpg',
};

export const socials = [
    { name: 'GitHub', href: 'https://github.com/Bemkin' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bemnet-kibret-054a792a9/' },
    { name: 'Instagram', href: 'https://www.instagram.com/bem__kin_/' },
];

export const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export const greetings = ['Hello', 'ሰላም', 'Bonjour', 'Hola', 'Ciao', 'Olá', 'Hallo', 'こんにちは', 'Selam'];

export const services = [
    {
        title: 'Product Engineering',
        text: 'Zero-to-production SaaS platforms with Next.js, TypeScript and PostgreSQL — from schema design and auth to deployment and observability.',
    },
    {
        title: 'Agentic AI Systems',
        text: 'LLM agents with tool calling, cascading model failover and evidence trails, wired into real business workflows rather than demos.',
    },
    {
        title: 'Cloud & Data Infrastructure',
        text: 'AWS, Supabase and Python services with idempotent pipelines, row-level security and offline-first sync built for messy real-world data.',
    },
];

export const experience = [
    {
        role: 'Founder & Lead Engineer',
        company: 'Senselet & Independent Solutions',
        date: '2024 — Present',
        points: [
            { title: 'Zero-to-production architecture', detail: 'Architected and deployed an AI-native enterprise ERP on AWS and Supabase, scaling across 3+ commercial retail clients and eliminating 20+ hours of weekly manual auditing across 10k+ active SKUs.' },
            { title: 'Agentic AI', detail: 'Engineered a 15-tool agentic backend using native JSON-schema function calling and cascading LLM failover; automated 90%+ of routine reorder and allocation decisions, cutting reconciliation from 45 min to under 30 sec.' },
            { title: 'Data integrity', detail: 'Designed an offline-first architecture with a dual-ID resolution layer in PostgreSQL; authored 157 strict migrations with org-scoped RLS for zero data loss across 5+ warehouse locations.' },
            { title: 'Pipelines & infrastructure', detail: 'Built containerized Python and Node.js services on AWS (ECS/Lambda) with idempotent webhook handlers, keeping execution under 500 ms with 99.9% deduplication reliability.' },
        ],
    },
    {
        role: 'Backend Developer (Contract)',
        company: 'Marvels Creative Technology',
        date: 'Mar 2025 — Jun 2025',
        points: [
            { title: 'API architecture', detail: 'Architected and optimized 20+ REST endpoints and server routes in TypeScript and Next.js, reducing response times by ~35% for enterprise client applications.' },
            { title: 'Databases', detail: 'Designed PostgreSQL schemas and query workflows with Prisma, enforcing strict data contracts and sub-100 ms average query latency.' },
            { title: 'Reliability', detail: 'Implemented automated API test suites with Jest and Postman in GitHub Actions CI/CD, maintaining 99.5%+ deployment stability.' },
        ],
    },
];

export const education = [
    { institution: 'Evangadi Technologies', degree: 'Full Stack Web Development (MERN) — Certified', date: '2024 — 2025' },
    { institution: 'Addis Ababa Science and Technology University', degree: 'Science and Technology', date: '2021 — 2023' },
];

export const stack = [
    'TypeScript', 'Python', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Supabase', 'AWS',
    'Docker', 'Prisma', 'Fastify', 'Jest', 'Tailwind CSS', 'Three.js', 'Git',
];

export const testimonials = [
    {
        name: 'Gemechis Kedir',
        text: 'Bemnet was hired to create a job application software. We were very pleased with the work done. He proved to be a highly skilled and reliable full-stack web developer.',
    },
];

export const resumePdf = '/resume.pdf';
export const resumeDownloadName = 'Bemnet-Kibret-Founding-Full-Stack-AI-Engineer-Resume.pdf';

const categoryLabels: Record<string, string> = {
    ai: 'AI',
    fullstack: 'Full-Stack',
    frontend: 'Frontend',
    mobile: 'Mobile',
    'ui/ux': 'UI/UX',
    ecommerce: 'E-commerce',
};

export function categoryLabel(cat: string) {
    return categoryLabels[cat.toLowerCase()] ?? cat;
}

export function categoriesOf(category: string | string[]) {
    return Array.isArray(category) ? category : [category];
}
