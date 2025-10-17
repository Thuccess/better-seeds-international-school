
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface UniformModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const UniformModal: React.FC<UniformModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="uniform-guidelines-title"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="bg-white rounded-lg shadow-xl w-full max-w-3xl relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
                            <div className="flex justify-between items-start">
                                <h2 id="uniform-guidelines-title" className="text-2xl font-serif font-bold text-brand-blue-dark">School Uniform Guidelines</h2>
                                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full -mt-2 -mr-2" aria-label="Close modal">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="mt-6 border-t pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-brand-blue mb-3">Regular School Uniform</h3>
                                    <img src="https://picsum.photos/400/500?random=111" alt="Student in regular school uniform" className="rounded-lg shadow-md w-full object-cover mb-4" loading="lazy" />
                                    <div className="space-y-3 text-gray-700">
                                        <div>
                                            <h4 className="font-semibold">Boys:</h4>
                                            <ul className="list-disc list-inside text-sm">
                                                <li>Blue short-sleeved shirt with school logo</li>
                                                <li>Khaki shorts (Primary) or trousers (Junior High)</li>
                                                <li>Black leather shoes and navy blue socks</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Girls:</h4>
                                            <ul className="list-disc list-inside text-sm">
                                                <li>Blue short-sleeved blouse with school logo</li>
                                                <li>Khaki plaid skirt or pinafore</li>
                                                <li>Black leather shoes and white socks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-green mb-3">Sports Uniform (PE Kit)</h3>
                                     <img src="https://picsum.photos/400/500?random=112" alt="Student in sports uniform" className="rounded-lg shadow-md w-full object-cover mb-4" loading="lazy" />
                                    <div className="space-y-3 text-gray-700">
                                        <div>
                                            <h4 className="font-semibold">All Students:</h4>
                                            <ul className="list-disc list-inside text-sm">
                                                <li>House-colored t-shirt with school logo</li>
                                                <li>Navy blue sports shorts</li>
                                                <li>White sports shoes (trainers) and white socks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 border-t pt-6">
                                <h3 className="text-xl font-bold text-brand-blue-dark mb-3">General Guidelines</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                                    <li>Uniforms must be clean, neat, and worn correctly at all times.</li>
                                    <li>Only official school uniform items purchased from the school store are permitted.</li>
                                    <li>Hair should be neat and tidy. Extreme hairstyles or colors are not allowed.</li>
                                    <li>Minimal jewelry is permitted (e.g., small stud earrings).</li>
                                    <li>All items of clothing must be clearly labeled with the student's name.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 flex justify-end">
                            <Button onClick={onClose} variant="secondary">Close</Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UniformModal;
