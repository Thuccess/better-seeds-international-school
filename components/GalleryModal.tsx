
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '../types';

interface GalleryModalProps {
    isOpen: boolean;
    images: GalleryImage[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.95 },
};

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, images, currentIndex, onClose, onPrev, onNext }) => {
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                onPrev();
            } else if (e.key === 'ArrowRight') {
                onNext();
            } else if (e.key === 'Escape') {
                onClose();
            }
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onPrev, onNext, onClose]);

    const [direction, setDirection] = React.useState(0);
    const image = images[currentIndex];

    const handleNext = () => {
        setDirection(1);
        onNext();
    };

    const handlePrev = () => {
        setDirection(-1);
        onPrev();
    };
    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="gallery-image-alt"
                >
                    <motion.div
                        variants={modalVariants}
                        className="relative w-full h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose} 
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-30 bg-black/50 p-2 rounded-full" 
                            aria-label="Close gallery"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center overflow-hidden">
                           <AnimatePresence initial={false} custom={direction}>
                                <motion.img
                                    key={currentIndex}
                                    src={image.src}
                                    alt={image.alt}
                                    id="gallery-image-alt"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                            </AnimatePresence>
                        </div>
                        
                        {/* Image Info */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-lg z-20 text-center">
                            <p className="text-sm font-light">{image.alt}</p>
                            <p className="text-xs text-gray-300 mt-1">{currentIndex + 1} / {images.length}</p>
                        </div>
                        
                        {/* Prev Button */}
                        <button 
                            onClick={handlePrev} 
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-30 bg-black/50 p-3 rounded-full"
                            aria-label="Previous image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        {/* Next Button */}
                        <button 
                            onClick={handleNext} 
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-30 bg-black/50 p-3 rounded-full"
                            aria-label="Next image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GalleryModal;
