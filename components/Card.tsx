
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`bg-white rounded-xl shadow-lg overflow-hidden h-full ${onClick ? 'cursor-pointer' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export default Card;
