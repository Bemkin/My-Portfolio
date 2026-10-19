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
        text: 'Zero-to-production products in TypeScript, React and PostgreSQL — from schema design and row-level security to deployment and tests.',
    },
    {
        title: 'Agentic AI Systems',
        text: 'LLM agents with function calling, cascading model failover and a human in the loop, wired into real workflows such as inventory, outreach and lead qualification.',
    },
    {
        title: 'Backend & Data Integrity',
        text: 'Supabase edge functions, Fastify and Node.js services with idempotent processing, offline sync queues and multi-tenant data isolation.',
    },
];

export const experience = [
    {
        role: 'Founder & Lead Engineer',
        company: 'Senselet Technologies',
        date: 'December 2025 — Present',
        points: [
            { title: 'Zero-to-production platform', detail: 'Designed and built Senselet solo: an AI-native inventory and ERP platform for retail, live in production (pre-revenue) at senselet.store, with a React/TypeScript frontend and a Supabase backend of 21 TypeScript edge functions.' },
            { title: 'Agentic AI', detail: 'Built a 33-tool Gemini function-calling agent that adjusts stock, transfers between branches, proposes purchase orders and reconciles invoices, with role-scoped tools and cascading failover across Gemini models and OpenRouter.' },
            { title: 'Multi-tenant data security', detail: 'Modeled a 28-table PostgreSQL schema through 160 migrations, with row-level security on every table (131 policies) isolating each organization’s data.' },
            { title: 'Offline-first reliability', detail: 'Built an offline mutation queue with idempotency keys, backoff and a dead-letter queue; a 2,500-operation test on a simulated failing network lost 0 writes, and the duplicate-write case it exposed now fails closed.' },
            { title: 'Testing & quality', detail: 'Covered ~81k lines of TypeScript with 266 automated Vitest tests, including a 120-item barcode classification suite (GTIN, GS1 and store-issued codes).' },
        ],
    },
    {
        role: 'Backend Developer (Contract)',
        company: 'Marvels Creative Technology',
        date: 'March 2025 — June 2025',
        points: [
            { title: 'APIs', detail: 'Built REST API endpoints in TypeScript and Next.js for client applications, containerized with Docker.' },
            { title: 'Databases', detail: 'Designed PostgreSQL schemas and query workflows with Prisma, enforcing data contracts and foreign-key integrity.' },
            { title: 'Testing', detail: 'Wrote automated API test suites with Jest and Postman, run in GitHub Actions CI.' },
        ],
    },
];

export const education = [
    { institution: 'Evangadi Tech', degree: 'Certification, Full Stack Web Development (remote, Silver Spring, MD)', date: 'July 2024 — March 2025' },
    { institution: 'Addis Ababa Science & Technology University', degree: 'Engineering Coursework', date: '2021 — 2023' },
];

export const stack = [
    'TypeScript', 'Python', 'React', 'Next.js', 'Vite', 'Node.js', 'Fastify', 'FastAPI', 'PostgreSQL',
    'Supabase', 'Gemini API', 'Playwright', 'Docker', 'Prisma', 'Vitest', 'Tailwind CSS', 'Three.js', 'React Native', 'Git',
];

export const testimonials = [
    {
        name: 'Gemechis Kedir',
        text: 'Bemnet was hired to create a job application software. We were very pleased with the work done. He proved to be a highly skilled and reliable full-stack web developer.',
    },
];

// Projects shown first, in this order. Senselet is the lead case study.
export const FEATURED_SLUGS = ['senselet', 'cyborg-job-pipeline', 'brain3-purchasing-agent', 'agy-telegram-bot', 'kaffa-roasters'];

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
