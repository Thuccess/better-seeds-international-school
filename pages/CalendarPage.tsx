import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import EventModal from '../components/EventModal';
import { CalendarEvent } from '../types';

const events: CalendarEvent[] = [
    { date: '2024-11-04', title: 'Parent-Teacher Conferences (Primary)', category: 'Academic', description: 'An opportunity for parents to discuss student progress with teachers for grades 1-6. Please book your slots in advance through the parent portal.' },
    { date: '2024-11-05', title: 'Parent-Teacher Conferences (Junior High)', category: 'Academic', description: 'An opportunity for parents to discuss student progress with teachers for grades 7-9. Please book your slots in advance through the parent portal.' },
    { date: '2024-11-15', title: 'Inter-House Sports Competition', category: 'Sports', description: 'The annual track and field competition between the school houses. All are welcome to cheer on our athletes at the main sports ground!' },
    { date: '2024-11-28', title: 'Thanksgiving Break Begins', category: 'Holiday', description: 'The school will be closed for the Thanksgiving holiday. Classes will resume on December 2nd. We wish our community a restful break.' },
    { date: '2024-12-02', title: 'Classes Resume', category: 'Academic', description: 'All classes resume as per the normal schedule.' },
    { date: '2024-12-12', title: 'Annual School Play', category: 'Event', description: 'Join us for a magical evening as our drama club presents "A Midsummer Night\'s Dream". Tickets are available at the front office.' },
    { date: '2024-12-20', title: 'End of Term / Winter Break Begins', category: 'Holiday', description: 'The first term ends. The school will be closed for Winter Break and will reopen on January 6th, 2025.' },
    { date: '2025-01-06', title: 'Start of New Term', category: 'Academic', description: 'Welcome back! The second term of the academic year begins today.' },
];

const categoryColors: { [key in CalendarEvent['category']]: string } = {
    Academic: 'bg-blue-100 text-blue-800 border-blue-500',
    Holiday: 'bg-green-100 text-green-800 border-green-500',
    Event: 'bg-purple-100 text-purple-800 border-purple-500',
    Sports: 'bg-yellow-100 text-yellow-800 border-yellow-500',
};

const CalendarPage: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    const handleEventClick = (event: CalendarEvent) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    const eventsByMonth = events.reduce((acc, event) => {
        const month = new Date(event.date).toLocaleString('default', { month: 'long', year: 'numeric' });
        if (!acc[month]) {
            acc[month] = [];
        }
        acc[month].push(event);
        return acc;
    }, {} as Record<string, CalendarEvent[]>);

    return (
        <div>
            <HeroSection
                 title="School Calendar"
                 subtitle="Stay up-to-date with all the important dates, holidays, and events for the academic year."
                 imageUrl="https://picsum.photos/1920/1080?image=102"
            />
            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
                        <div key={month} className="mb-12">
                            <h2 className="text-3xl font-serif font-bold text-brand-blue-dark mb-6 border-b-2 border-brand-gold pb-2">{month}</h2>
                            <div className="space-y-4">
                                {monthEvents.sort((a,b) => new Date(a.date).getDate() - new Date(b.date).getDate()).map((event, index) => (
                                    <button 
                                        key={index} 
                                        onClick={() => handleEventClick(event)}
                                        className={`w-full flex items-start md:items-center p-4 bg-white rounded-lg shadow-sm border-l-4 ${categoryColors[event.category].split(' ')[2]} text-left hover:shadow-md hover:border-brand-gold transition-all duration-200`}
                                        aria-label={`View details for ${event.title}`}
                                    >
                                        <div className="text-center md:w-24 flex-shrink-0">
                                            <p className="text-3xl font-bold text-brand-blue-dark">{new Date(event.date).getDate()}</p>
                                            <p className="text-sm text-gray-500">{new Date(event.date).toLocaleString('default', { weekday: 'short' })}</p>
                                        </div>
                                        <div className="ml-4 flex-grow">
                                            <h3 className="font-bold text-lg text-gray-800">{event.title}</h3>
                                        </div>
                                        <div className="hidden sm:block ml-4">
                                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[event.category]}`}>{event.category}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
            <EventModal event={selectedEvent} onClose={handleCloseModal} />
        </div>
    );
};

export default CalendarPage;