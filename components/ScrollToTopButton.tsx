import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from './IconComponents';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-brand-blue text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-blue-dark focus:ring-opacity-50 z-40"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Scroll to top"
                >
                    <ArrowUpIcon className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;