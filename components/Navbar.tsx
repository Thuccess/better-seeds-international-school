import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { LogoIcon } from './IconComponents';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'News', path: '/news' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeLinkStyle = {
        color: '#c9a96a',
        fontWeight: '600',
    };
    
    const baseLinkClass = "relative text-gray-600 hover:text-brand-blue transition-colors duration-200 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full";
    const activeLinkClass = "text-brand-blue font-semibold after:w-full";


    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-lg' : 'bg-transparent'}`} aria-label="Main Navigation">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <NavLink to="/" className="flex items-center space-x-2" aria-label="Better Seeds Home Page">
                        <LogoIcon className="h-8 w-8 text-brand-blue" />
                        <span className="text-xl font-serif font-bold text-brand-blue-dark">Better Seeds</span>
                    </NavLink>

                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.name} 
                                to={link.path} 
                                className={({isActive}) => `${baseLinkClass} ${isActive ? activeLinkClass : ''}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    
                    <div className="hidden lg:block">
                        <Button to="/admissions" variant="primary">Apply Now</Button>
                    </div>

                    <div className="lg:hidden">
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                            className="text-gray-700 focus:outline-none"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white shadow-lg"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <NavLink 
                                    key={link.name} 
                                    to={link.path} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-600 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
                                    style={({ isActive }) => isActive ? activeLinkStyle : {}}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="pt-4">
                               <Button to="/admissions" variant="primary" onClick={() => setMobileMenuOpen(false)}>Apply Now</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
