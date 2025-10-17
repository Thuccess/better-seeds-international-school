// FIX: Import React to provide the 'React' namespace for React.ComponentType
import React from 'react';

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    avatarUrl: string;
}

export interface StaffMember {
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
}

export interface Program {
    title: string;
    description: string;
    details: string[];
    icon: React.ComponentType<{ className?: string }>;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    aspect: 'aspect-square' | 'aspect-[4/3]' | 'aspect-[3/4]';
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    date: string;
    author: string;
    content?: string;
}

export interface CalendarEvent {
    date: string; // e.g., "2024-10-26"
    title: string;
    category: 'Academic' | 'Holiday' | 'Event' | 'Sports';
    description?: string;
}

export interface JobOpening {
    id: number;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    summary: string;
    responsibilities: string[];
    qualifications: string[];
}
