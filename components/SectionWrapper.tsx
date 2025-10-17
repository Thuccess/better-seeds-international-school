
import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`py-16 md:py-24 ${className}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </motion.section>
    );
};

export default SectionWrapper;
