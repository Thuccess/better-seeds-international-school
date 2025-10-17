import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarEvent } from '../types';

interface EventModalProps {
    event: CalendarEvent | null;
    onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
    return (
        <AnimatePresence>
            {event && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="event-title"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="bg-white rounded-lg shadow-xl w-full max-w-lg relative"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 id="event-title" className="text-2xl font-serif font-bold text-brand-blue-dark">{event.title}</h2>
                                    <p className="text-gray-500 mt-1">
                                        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full -mt-2 -mr-2" aria-label="Close modal">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div className="mt-6 border-t pt-6">
                                <p className="text-gray-700">{event.description || 'No further details available for this event.'}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EventModal;