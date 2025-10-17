import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    to?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    className = '',
    to,
    type = 'button',
    disabled = false
}) => {
    const baseClasses = 'px-6 py-3 font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center text-center';
    
    const variantClasses = {
        primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-md hover:shadow-lg',
        secondary: 'bg-gray-100 text-brand-blue-dark hover:bg-gray-200',
        outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-blue-dark',
    };
    
    const disabledClasses = 'disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none';

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

    const motionProps = {
        whileHover: { scale: disabled ? 1 : 1.05 },
        whileTap: { scale: disabled ? 1 : 0.95 },
    };

    if (to && !disabled) {
        return (
            <Link to={to} className={combinedClasses} onClick={onClick}>
                <motion.div {...motionProps}>
                    {children}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.button
            {...motionProps}
            type={type}
            className={combinedClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
};

export default Button;