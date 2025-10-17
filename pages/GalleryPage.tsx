
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import { GalleryImage } from '../types';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '../components/IconComponents';
import GalleryModal from '../components/GalleryModal';

const images: GalleryImage[] = [
    { id: 1, src: "https://picsum.photos/800/600?random=21", alt: "Students collaborating in a classroom", aspect: 'aspect-[4/3]' },
    { id: 2, src: "https://picsum.photos/600/800?random=22", alt: "A student reading in the school library", aspect: 'aspect-[3/4]' },
    { id: 3, src: "https://picsum.photos/800/800?random=23", alt: "A colorful student art project on display", aspect: 'aspect-square' },
    { id: 4, src: "https://picsum.photos/800/600?random=24", alt: "Students enjoying a sunny day on the playground", aspect: 'aspect-[4/3]' },
    { id: 5, src: "https://picsum.photos/800/800?random=25", alt: "A science experiment in the laboratory", aspect: 'aspect-square' },
    { id: 6, src: "https://picsum.photos/600/800?random=26", alt: "A teacher guiding students during a lesson", aspect: 'aspect-[3/4]' },
    { id: 7, src: "https://picsum.photos/600/800?random=27", alt: "The school football team celebrating a victory", aspect: 'aspect-[3/4]' },
    { id: 8, src: "https://picsum.photos/800/600?random=28", alt: "The main building of Better Seeds International School", aspect: 'aspect-[4/3]' },
    { id: 9, src: "https://picsum.photos/800/800?random=29", alt: "Students engaged in a music class", aspect: 'aspect-square' },
    { id: 10, src: "https://picsum.photos/800/600?random=30", alt: "Annual school sports day event", aspect: 'aspect-[4/3]' },
    { id: 11, src: "https://picsum.photos/600/800?random=31", alt: "A student presenting their project", aspect: 'aspect-[3/4]' },
    { id: 12, src: "https://picsum.photos/800/600?random=32", alt: "A group of students on a field trip", aspect: 'aspect-[4/3]' },
];

const whyItMattersPoints = [
    "Provides transparency and community engagement",
    "Highlights student achievements and school culture",
    "Demonstrates our commitment to holistic education",
    "Builds a sense of pride among parents, students, and staff",
];

const GalleryPage: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <HeroSection
                title="Our Gallery"
                subtitle="Celebrating the vibrant moments of learning, creativity, and community at Better Seeds International School."
                imageUrl="https://picsum.photos/1920/1080?image=40"
            />
            <SectionWrapper>
                 <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-serif font-bold text-brand-blue-dark">A Glimpse Into Our World</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our gallery captures the essence of life at Better Seeds. Explore moments of learning, creativity, and community in our classrooms, labs, sports fields, and cultural events.
                    </p>
                </div>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="mb-4 break-inside-avoid group overflow-hidden rounded-lg shadow-md cursor-pointer relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            onClick={() => openModal(index)}
                            role="button"
                            aria-label={`View image: ${image.alt}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
            
            <SectionWrapper className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8 }}
                    >
                        <img src="https://picsum.photos/800/600?image=202" alt="Students in assembly" className="rounded-lg shadow-xl" loading="lazy" />
                    </motion.div>
                    <motion.div
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-brand-blue-dark">More Than Just Pictures</h2>
                        <p className="mt-4 text-gray-600">Each photo tells a story of growth, collaboration, and discovery. Our gallery is a testament to the vibrant and enriching environment we cultivate.</p>
                        <ul className="mt-6 space-y-4">
                            {whyItMattersPoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </SectionWrapper>

             <SectionWrapper className="bg-brand-blue-dark text-white">
                 <div className="text-center max-w-3xl mx-auto">
                    <p className="text-2xl md:text-3xl font-serif italic">
                       “Every photograph reflects the dedication, creativity, and growth of our students — the future leaders of South Sudan and the world.”
                    </p>
                </div>
            </SectionWrapper>
            
            <GalleryModal 
                isOpen={modalIsOpen}
                images={images}
                currentIndex={currentImageIndex}
                onClose={closeModal}
                onPrev={showPrevImage}
                onNext={showNextImage}
            />
        </div>
    );
};

export default GalleryPage;
