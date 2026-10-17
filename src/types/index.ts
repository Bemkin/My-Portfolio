// Type definitions for portfolio data structures

export interface Project {
    title: string;
    category: string | string[];
    image: string;
    link: string;
    github?: string;
    tech?: string[];
    description?: string;
    excerpt?: string;
    slug: string;
    date?: string;
    problem?: string;
    content?: string;
    solution?: string;
    features?: string[];
    metrics?: { label: string; value: string }[];
    screenshots?: string[];
    video?: string;
    videoWebm?: string;
    videoPoster?: string;
    videoCaption?: string;
}

export interface Testimonial {
    name: string;
    text: string;
    avatar: string;
}

export interface BlogPost {
    title: string;
    slug: string;
    category: string;
    date: string;
    dateTime: string;
    image: string;
    excerpt: string;
    content: string;
}
