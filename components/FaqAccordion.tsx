
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaqItem } from '../types';

interface FaqAccordionProps {
    items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 transition-colors duration-200"
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
                    >
                        <span className="flex-1 pr-4">{item.question}</span>
                        <motion.div
                            className="flex-shrink-0"
                            animate={{ rotate: openIndex === index ? 45 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                            <motion.div
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: 'auto' },
                                    collapsed: { opacity: 0, height: 0 },
                                }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden bg-gray-50/50"
                            >
                                <div className="p-5 pt-2 text-gray-600">
                                    <p>{item.answer}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;
