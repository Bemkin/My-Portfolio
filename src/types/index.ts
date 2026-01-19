// Type definitions for portfolio data structures

export interface Project {
    title: string;
    category: string;
    image: string;
    link: string;
    github?: string;
    tech?: string[];
    description?: string;
    slug: string;
    problem?: string;
    solution?: string;
    features?: string[];
    metrics?: { label: string; value: string }[];
    screenshots?: string[];
}

export interface LifePhoto {
    id: number;
    title: string;
    image: string;
    category: string;
    description: string;
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

export interface SpotifyPlaylist {
    id: number;
    title: string;
    embedUrl: string;
}
