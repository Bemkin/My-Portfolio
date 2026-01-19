import { Project } from "@/types";

export const testimonials = [
    {
        name: 'Gemechis Kedir',
        text: 'Bemnet Kibret was hired to create a job application software. We were very pleased with the work done. He proved to be a highly skilled and reliable full-stack web developer.',
        avatar: '/images/avatar-1.png'
    },
];

export const projects: Project[] = [
    {
        title: 'Senselet - Inventory Intelligence',
        category: 'applications',
        slug: 'senselet',
        image: '/images/senselet-banner.png',
        link: 'https://www.senselet.store/',
        tech: ['Next.js', 'React', 'Tailwind', 'Telegram API'],
        description: 'A high-performance Retail Inventory Intelligence Platform featuring a Telegram Mini App for on-the-go management. Includes cognitive sales forecasting, digital twins for real-time tracking, and multi-warehouse global synchronization.',
        problem: 'Small and medium retail businesses in emerging markets struggle with fragmented inventory tracking, leading to frequent stockouts, overstocking, and a lack of real-time insights into their multi-warehouse operations.',
        solution: 'Senselet provides a unified "Digital Twin" of the business, combining a powerful web dashboard with a lightweight Telegram Mini App. It utilizes cognitive forecasting to predict stock needs and ensures seamless synchronization across multiple locations.',
        features: [
            'Real-time Multi-warehouse Sync',
            'Cognitive Sales Forecasting',
            'Telegram Mini App for Mobile Management',
            'Digital Twin Inventory Tracking',
            'Automated Low-stock Alerts'
        ],
        metrics: [
            { label: 'Inventory Accuracy', value: '99.9%' },
            { label: 'Forecast Precision', value: '85%+' },
            { label: 'Setup Time', value: '< 10 mins' }
        ]
    },
    {
        title: 'Trainer CRM - Fitness Management',
        category: 'applications',
        slug: 'trainer-crm',
        image: '/images/trainer-crm-banner.png',
        link: 'https://trainer-crm-amber.vercel.app/',
        tech: ['Next.js', 'React', 'Tailwind', 'PostgreSQL'],
        description: 'A comprehensive CRM platform with a companion mobile app designed for personal trainers. Streamlines client management, workout scheduling, and performance tracking with data-driven insights and effortless business automation.',
        problem: 'Personal trainers often juggle multiple apps, spreadsheets, and manual notebooks to track client progress, schedules, and payments, leading to administrative burnout and missed growth opportunities.',
        solution: 'Trainer CRM consolidates all aspects of a fitness business into one platform. From workout planning and progress tracking to automated billing and client messaging, it allows trainers to focus on what they do best: training.',
        features: [
            'Dynamic Workout Builder',
            'Client Progress Analytics',
            'Automated Billing & Reminders',
            'Scheduling & Calendar Sync',
            'Companion Mobile App'
        ],
        metrics: [
            { label: 'Admin Time Saved', value: '15h / week' },
            { label: 'Client Retention', value: '+30%' },
            { label: 'Active Users', value: '100+' }
        ]
    },
    {
        title: 'FormCheck AI - Workout Assistant',
        category: 'applications',
        slug: 'formcheck-ai',
        image: '/images/formcheck-hero.png',
        link: 'https://form-wiz-79.vercel.app/',
        tech: ['Next.js', 'React', 'Mediapipe AI', 'Tailwind'],
        description: 'An AI-powered exercise form analysis tool. Provides real-time technique feedback via live camera or video uploads to ensure safety and maximize efficiency. Leverages computer vision to track body mechanics and prevent training injuries.',
        problem: 'Working out without a coach increases the risk of injury due to poor form. Professional trainers are expensive, and many gym-goers lack access to real-time feedback on their squats, deadlifts, and other complex movements.',
        solution: 'FormCheck AI uses computer vision (MediaPipe) to track skeletal alignment in real-time. By comparing the user\'s movement against biomechanical models, it provides instant visual and audio feedback to correct form and prevent injuries.',
        features: [
            'Real-time Pose Estimation',
            'Instant Technique Feedback',
            'Pose Comparison with Pros',
            'Video Upload Analysis',
            'Workout Session History'
        ],
        metrics: [
            { label: 'Processing Speed', value: '30 FPS' },
            { label: 'Joint Accuracy', value: '95%' },
            { label: 'Injury Reduction', value: 'Significant' }
        ]
    },
    {
        title: 'Netflix Clone',
        category: 'web development',
        slug: 'netflix-clone',
        image: '/images/Screenshot 2025-01-12 181420.webp',
        link: 'https://kino-clone.netlify.app/',
        github: 'https://github.com/Bemkin/netflix-clone',
        tech: ['React', 'Firebase', 'TMDB API', 'Tailwind'],
        description: 'A fully functional Netflix clone featuring user authentication with Firebase, a dynamic movie database powered by the TMDB API, and a highly responsive UI built with Tailwind CSS. Users can browse categories, view trailers, and maintain a personal watchlist.'
    },
    {
        title: 'Amazon Clone',
        category: 'web development',
        slug: 'amazon-clone',
        image: '/images/Screenshot 2025-01-12 181738.webp',
        link: 'https://melodious-cuchufli-da626d.netlify.app/',
        github: 'https://github.com/Bemkin/amazon-clone',
        tech: ['React', 'Context API', 'Stripe', 'Node.js'],
        description: 'A comprehensive e-commerce platform that replicates the Amazon shopping experience. It includes a functional shopping cart, secure payment processing via Stripe, and a robust backend built with Node.js and Express to manage orders and user sessions.'
    },
    {
        title: 'Forum Page for Evangadi Tech',
        category: 'web development',
        slug: 'evangadi-forum',
        image: '/images/Screenshot 2025-01-21 140027.webp',
        link: 'https://evangadiforumclient2.netlify.app',
        github: 'https://github.com/Bemkin/evangadi-forum',
        tech: ['React', 'MySQL', 'Node.js', 'Express'],
        description: 'A dynamic community forum built for Evangadi Tech students. It features user registration, secure login, real-time discussions, and a structured database using MySQL. This project highlights full-stack integration and effective database management.'
    },
    {
        title: 'Apple Clone',
        category: 'applications',
        slug: 'apple-clone',
        image: '/images/Screenshot 2025-01-12 220551.webp',
        link: 'https://lighthearted-squirrel-57b7a4.netlify.app/',
        github: 'https://github.com/Bemkin/apple-clone',
        tech: ['React', 'GSAP', 'Three.js'],
        description: 'An immersive 3D web experience clone of the Apple website. Utilizing Three.js for 3D modeling and GSAP for scroll-triggered animations, this project demonstrates high-end interactive design and modern front-end performance techniques.'
    },
];

export const blogPosts = [
    {
        title: 'Scaling Retail Intelligence: The Journey of Senselet',
        slug: 'journey-of-senselet',
        category: 'Startup Insights',
        date: 'Jan 19, 2025',
        dateTime: '2025-01-19',
        image: '/images/senselet-banner.png',
        excerpt: 'How I built a solo, enterprise-grade inventory intelligence platform with cognitive forecasting and digital twins.',
        content: `
## The Vision Behind Senselet

Senselet was born from a simple observation: retail logistics is often fragmented and reactive. I set out to build a platform that doesn't just track inventory, but predicts its movement.

### Engineering the Digital Twin

The core of Senselet is its "Digital Twin" capability. This isn't just a 3D model—it's a real-time data representation of physical inventory across global warehouses. Synchronizing this data with sub-second latency required a robust architecture using Next.js and high-frequency API endpoints.

### Cognitive Sales Forecasting

By implementing weighted moving average algorithms and analyzing historical trends, Senselet provides "Cognitive Forecasting." This helps retailers anticipate stockouts before they happen, effectively democratizing enterprise-grade logistics for smaller businesses.

### The Solo Developer Challenge

Building Senselet as a solo project meant wearing every hat—Architect, Frontend Engineer, and DevOps. From designing the Tailwind-powered glassmorphism UI to integrating the Telegram API for instant stock alerts, every decision was aimed at creating a seamless, automated infrastructure.
        `
    },
    {
        title: 'Business Logic in Fitness: Building Trainer CRM',
        slug: 'building-trainer-crm',
        category: 'Product Engineering',
        date: 'Jan 18, 2025',
        dateTime: '2025-01-18',
        image: '/images/trainer-crm-banner.png',
        excerpt: 'A deep dive into the architecture of a full-stack CRM designed specifically for personal trainers and client tracking.',
        content: `
## Solving for Solopreneurs

Personal trainers often struggle with managing disparate data points—workout plans, client payments, and progress metrics. My goal with Trainer CRM was to unify these into a single, intuitive dashboard.

### Architecting for Scale

Using PostgreSQL and a robust backend architecture, I ensured that every piece of client data is secure and instantly accessible. The platform emphasizes "Data-Driven Fitness," allowing trainers to visualize client progress through automated charting and reporting.

### Localized Experience

One of the standout features of this project was the multilingual support, including full Amharic localization. This ensures that fitness professionals in different regions can manage their businesses in their native language, removing barriers to entry for modern business tools.

### Seamless Operations

From automated workout scheduling to integrated billing flows, Trainer CRM is built to maximize a trainer's time. By automating the "admin" side of fitness, trainers can focus on what they do best: transforming lives.
        `
    },
    {
        title: 'AI in the Gym: FormCheck AI & Computer Vision',
        slug: 'ai-in-gym-formcheck',
        category: 'AI & Innovation',
        date: 'Jan 17, 2025',
        dateTime: '2025-01-17',
        image: '/images/formcheck-hero.png',
        excerpt: 'Using computer vision to solve the problem of improper exercise technique in real-time.',
        content: `
## The Problem: Improper Form

In fitness, form is everything. Improper technique leads to injury and stalled progress. FormCheck AI was built to act as a virtual coach that never blinks.

### Integrating Mediapipe

By leveraging the Mediapipe framework, I implemented real-time body tracking directly in the browser. The application analyzes joint angles and movement planes to provide immediate feedback on squat depth, back posture, and more.

### Real-Time vs. Asynchronous Feedback

The app supports two modes: live camera analysis for instant correction, and video upload for detailed post-workout review. This flexibility ensures that whether you're at the gym or home, your technique remains flawless.

### Future of AI-Driven Fitness

FormCheck AI isn't just a gimmick; it's a look at the future of personalized training. By blending computer vision with a reactive Next.js frontend, I've created a tool that makes high-level coaching accessible to everyone with a smartphone.
        `
    }
];

export const lifePhotos = [
    {
        id: 1,
        title: 'Mainstage Groove',
        image: '/images/dj-life-1.jpg',
        category: 'Performance',
        description: 'Capturing the peak energy during a professional DJ set.'
    },
    {
        id: 2,
        title: 'The Blue Hour',
        image: '/images/dj-life-2.jpg',
        category: 'Creative',
        description: 'Deep house vibes during a sundowner session.'
    },
    {
        id: 3,
        title: 'The Lab',
        image: '/images/the-lab-event.jpg',
        category: 'Live',
        description: 'An electrifying session at The Lab, where rhythm meets raw energy.'
    }
];

export const spotifyPlaylists = [
    {
        id: 1,
        title: 'Deep House Curation',
        embedUrl: 'https://open.spotify.com/embed/playlist/60xP6PmZNJxMkUTLJAS2zy?utm_source=generator'
    },
    {
        id: 2,
        title: 'Techno Explorations',
        embedUrl: 'https://open.spotify.com/embed/playlist/3Ih9XuB4zPAk5g8tUeF32l?utm_source=generator'
    },
    {
        id: 3,
        title: 'Club Staples',
        embedUrl: 'https://open.spotify.com/embed/playlist/5zo5BaMcyCnXkPTGLQ0JtP?utm_source=generator'
    }
];

export const resumePdf = '/Bemnet Kibret _ Full Stack Web Developer & Professional DJ.pdf';
