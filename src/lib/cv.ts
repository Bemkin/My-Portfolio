// Mirrors Bemnet's real CV (Bemnet_Kibret_Founding_Full-Stack_Engineer_Resume.pdf, generated
// from the Cyborg pipeline's resumes.json). Keep this and public/resume.pdf in sync.

type Bullet = { label: string; text: string };
type Link = { label: string; href: string };

export const CV = {
    summary:
        'Founding full-stack and applied AI engineer who takes AI-native products from zero to production. Built Senselet, a retail inventory and ERP platform, alone end to end: a 33-tool Gemini agent with model failover, multi-tenant PostgreSQL with row-level security on every table, and an offline-first sync layer stress-tested against network failure. Works across TypeScript, React, Next.js, Node.js, Supabase and PostgreSQL, owning everything from schema design to deployment and tests.',

    experience: [
        {
            role: 'Founder & Lead Engineer',
            company: 'Senselet Technologies',
            link: { label: 'senselet.store', href: 'https://www.senselet.store/' } as Link | undefined,
            dates: 'December 2025 – Present',
            bullets: [
                { label: 'Zero-to-Production Platform', text: 'Designed and built Senselet solo: an AI-native inventory and ERP platform for retail, live in production (pre-revenue), with a React/TypeScript frontend and a Supabase backend of 21 TypeScript edge functions.' },
                { label: 'Agentic AI', text: 'Built a 33-tool Gemini function-calling agent that adjusts stock, transfers between branches, proposes purchase orders from sales velocity and reconciles invoices, with cascading failover across Gemini models and OpenRouter.' },
                { label: 'Multi-Tenant Data Security', text: "Modeled a 28-table PostgreSQL schema through 160 migrations, with row-level security on every table (131 policies) isolating each organization's data and masking costs from clerk roles." },
                { label: 'Offline-First Reliability', text: 'Built a client mutation queue with idempotency keys, exponential backoff and a dead-letter queue; stress-tested 2,500 operations on a simulated failing network with 0 lost writes, and fixed a duplicate-write edge case the test exposed.' },
                { label: 'Testing & Quality', text: 'Covered ~81k lines of TypeScript with 266 automated Vitest tests, including a 120-item barcode classification suite (GTIN, GS1 and store-issued codes).' },
            ] as Bullet[],
        },
        {
            role: 'Backend Developer (Contract)',
            company: 'Marvels Creative Technology',
            link: undefined as Link | undefined,
            dates: 'March 2025 – June 2025',
            bullets: [
                { label: 'API Development', text: 'Built RESTful API endpoints in TypeScript and Next.js for client applications, containerized with Docker.' },
                { label: 'Database Design', text: 'Designed PostgreSQL schemas and query workflows with Prisma ORM, enforcing strict data contracts and foreign-key integrity.' },
                { label: 'Testing', text: 'Wrote automated API test suites with Jest and Postman, run in GitHub Actions CI.' },
            ] as Bullet[],
        },
    ],

    projects: [
        {
            title: 'Igniyte Autonomous Lead Enrichment Pipeline',
            link: undefined as Link | undefined,
            tech: 'TypeScript, Node.js, Fastify, Playwright, Gemini, Render',
            bullets: [
                { label: 'Autonomous Media Triage & Qualification', text: 'Engineered an automated adverse-media monitoring pipeline using the Gemini Flash API and agency rule matrices to qualify B2B reputation risks across a pool of 1,290+ enterprises.' },
                { label: 'Headless Browser Injection & SSO', text: 'Built a Playwright auto-injector with persistent Microsoft Entra OAuth session handling to triage and submit 20+ daily approved leads directly into the Azure sales portal, eliminating manual review.' },
                { label: 'Microservice Architecture & Enrichment', text: 'Deployed a production Fastify REST microservice on Render integrating the RocketReach v2 API with credit safety floors, concurrency throttling, and permanent deduplication caching.' },
            ] as Bullet[],
        },
        {
            title: 'Cyborg Job Pipeline (open source)',
            link: { label: 'GitHub Repo', href: 'https://github.com/Bemkin/cyborg-job-pipeline' } as Link | undefined,
            tech: 'TypeScript, Node.js, Gemini, Telegram Bot API, Docker',
            bullets: [
                { label: 'Autonomous Sourcing', text: 'TypeScript/Node.js pipeline that sources remote engineering roles, identifies the decision-maker via RocketReach and drafts a tailored pitch with Gemini.' },
                { label: 'Human-in-the-Loop Dispatch', text: 'Telegram bot with inline actions: nothing sends until approved; emails go out via Gmail with the role-matched resume attached.' },
                { label: 'Open Source & Hardening', text: 'Open-sourced under MIT after hardening: owner-only bot access, required shared secrets, profile-driven config, Vitest tests and GitHub Actions CI; deployed on Render with Docker.' },
            ] as Bullet[],
        },
    ],

    skills: [
        { category: 'Languages & Core', items: 'TypeScript, Python, JavaScript (ES6+), SQL, HTML5, CSS3' },
        { category: 'Frontend & UI', items: 'React, Next.js, Tailwind CSS, Framer Motion, React Query' },
        { category: 'Backend & AI Systems', items: 'Node.js, Supabase Edge Functions (Deno), Express, Fastify, LLM Agents, Function Calling, Gemini API, OpenRouter, Webhooks' },
        { category: 'Databases & Cloud', items: 'PostgreSQL (RLS, migrations), Supabase, Prisma ORM, Docker, Render, AWS fundamentals (self-taught)' },
        { category: 'Tools & CI/CD', items: 'Git, GitHub Actions, Vitest, Jest, Playwright, Postman' },
    ],

    education: [
        { institution: 'Evangadi Tech', credential: 'Certification, Full Stack Web Development', dates: 'July 2024 – March 2025', place: 'Silver Spring, MD (Remote)' },
        { institution: 'Addis Ababa Science & Tech. University', credential: 'Engineering Coursework', dates: '2021 – 2023', place: 'Addis Ababa, Ethiopia' },
    ],
};
