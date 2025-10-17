import React from 'react';
import { motion } from 'framer-motion';
import Button, { ButtonProps } from './Button';

interface HeroSectionProps {
    title: React.ReactNode;
    subtitle: string;
    imageUrl: string;
    primaryCta?: ButtonProps;
    secondaryCta?: ButtonProps;
    isHomePage?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageUrl, primaryCta, secondaryCta, isHomePage = false }) => {
    const headerHeight = isHomePage ? 'h-screen min-h-[600px]' : 'h-[50vh] min-h-[400px]';
    const titleSize = isHomePage ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl';
    const bgGradient = isHomePage ? 'from-brand-blue-dark/80 via-brand-blue-dark/40' : 'from-brand-blue-dark/70 via-brand-blue-dark/40';

    return (
        <header className={`relative flex items-center justify-center text-white overflow-hidden pt-20 ${headerHeight}`}>
            <div className="absolute inset-0 z-0">
                <div 
                    className={`absolute inset-0 bg-cover bg-center ${isHomePage ? 'animate-kenburns' : ''}`}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <div className={`absolute inset-0 bg-gradient-to-t to-transparent ${bgGradient}`}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`font-serif font-bold text-shadow-lg ${titleSize}`}
                >
                    {title}
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 text-shadow"
                >
                    {subtitle}
                </motion.p>
                {isHomePage && (primaryCta || secondaryCta) && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-10 flex justify-center items-center flex-wrap gap-4"
                    >
                        {primaryCta && <Button {...primaryCta} />}
                        {secondaryCta && <Button {...secondaryCta} />}
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default HeroSection;
