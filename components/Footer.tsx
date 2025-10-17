
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './IconComponents';

const Footer: React.FC = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Academics', path: '/academics' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Gallery', path: '/gallery' },
    ];
    
    const resourceLinks = [
        { name: 'News & Events', path: '/news' },
        { name: 'School Calendar', path: '/calendar' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Parent Portal', path: '#' }, // Placeholder
    ];

    const socialLinks = [
        { Icon: FacebookIcon, href: 'https://facebook.com', name: 'Facebook' },
        { Icon: TwitterIcon, href: 'https://twitter.com', name: 'Twitter' },
        { Icon: InstagramIcon, href: 'https://instagram.com', name: 'Instagram' },
        { Icon: LinkedinIcon, href: 'https://linkedin.com', name: 'LinkedIn' },
    ];

    return (
        <footer className="bg-brand-blue-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* School Info & Newsletter */}
                    <div className="md:col-span-4">
                        <Link to="/" className="flex items-center space-x-3 mb-4">
                            <LogoIcon className="h-10 w-10 text-white" />
                            <span className="text-2xl font-serif font-bold">Better Seeds</span>
                        </Link>
                        <p className="text-gray-300 text-sm mb-6">Nurturing global leaders of tomorrow through academic excellence and character development.</p>
                        
                        <h4 className="font-semibold mb-2">Subscribe to our Newsletter</h4>
                        <form className="flex">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 text-sm text-gray-800 bg-white border-transparent rounded-l-md focus:ring-2 focus:ring-brand-gold focus:outline-none"
                            />
                            <button type="submit" className="px-4 py-2 bg-brand-gold text-white font-semibold rounded-r-md hover:bg-yellow-600 transition-colors">
                                Sign Up
                            </button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Resources */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {resourceLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info & Social */}
                    <div className="md:col-span-3">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <address className="not-italic text-sm text-gray-300 space-y-2">
                            <p>Kampala, Uganda</p>
                            <p>Email: <a href="mailto:info@betterseeds.edu" className="hover:text-white">info@betterseeds.edu</a></p>
                            <p>Phone: <a href="tel:+2561234567890" className="hover:text-white">(+256) 123-456-7890</a></p>
                        </address>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map(({ Icon, href, name }, index) => (
                                <a 
                                    key={index} 
                                    href={href} 
                                    aria-label={`Follow us on ${name}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <Icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 md:flex md:justify-between md:items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Better Seeds International School. All Rights Reserved.</p>
                     <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;