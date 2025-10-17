
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import { JobOpening } from '../types';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '../components/IconComponents';

const jobOpenings: JobOpening[] = [
    {
        id: 1,
        title: 'Mathematics Teacher (Senior School)',
        department: 'Academics',
        location: 'Kampala, Uganda',
        type: 'Full-time',
        summary: 'We are seeking an experienced and passionate Mathematics teacher to inspire senior secondary students and prepare them for national examinations.',
        responsibilities: [
            'Develop and implement engaging lesson plans.',
            'Assess and monitor student progress.',
            'Collaborate with colleagues to enhance the curriculum.',
            'Participate in extracurricular activities.'
        ],
        qualifications: [
            'Bachelor\'s degree in Mathematics or related field.',
            'Minimum 3 years of teaching experience.',
            'Strong understanding of the South Sudan curriculum.',
            'Excellent communication and classroom management skills.'
        ]
    },
    {
        id: 2,
        title: 'Science Lab Technician',
        department: 'Academics',
        location: 'Kampala, Uganda',
        type: 'Full-time',
        summary: 'A detail-oriented individual to manage our science laboratories, support teachers, and ensure a safe learning environment for students.',
        responsibilities: [
            'Prepare materials and equipment for science classes.',
            'Maintain laboratory inventory and safety standards.',
            'Assist students and teachers during practical sessions.',
            'Ensure all equipment is functioning correctly.'
        ],
        qualifications: [
            'Diploma or degree in a science-related field.',
            'Experience working in a laboratory setting, preferably in an educational institution.',
            'Strong organizational skills.',
            'Knowledge of safety protocols.'
        ]
    },
];

const whyWorkWithUs = [
    { title: "Professional Growth", description: "We invest in our staff with continuous training and development opportunities." },
    { title: "Supportive Community", description: "Join a collaborative and welcoming environment of passionate educators." },
    { title: "Modern Facilities", description: "Work in a well-equipped campus designed for 21st-century learning." },
    { title: "Impactful Work", description: "Make a real difference in the lives of students and the future of our nation." },
];

const CareersPage: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

    return (
        <div>
            <HeroSection
                title="Careers at Better Seeds"
                subtitle="Join our team of dedicated professionals and help us shape the next generation of leaders."
                imageUrl="https://picsum.photos/1920/1080?image=104"
            />

            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Why Work With Us?</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        At Better Seeds International School, we believe our staff is our greatest asset. We are committed to creating a supportive, dynamic, and rewarding work environment where educators and professionals can thrive.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyWorkWithUs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full text-center">
                                <h3 className="font-bold text-brand-blue-dark text-lg">{item.title}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
            
            <SectionWrapper className="bg-white">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Current Openings</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Explore our current vacancies and find the right opportunity for you. We are always looking for talented individuals to join our team.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                    {jobOpenings.map((job) => (
                        <Card key={job.id} className="p-6">
                            <div className="md:flex md:justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-brand-blue-dark">{job.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{job.department} | {job.location} | {job.type}</p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <Button onClick={() => setSelectedJob(job)} variant="secondary">View Details</Button>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">{job.summary}</p>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <p className="text-gray-600">Don't see a suitable role? We encourage you to send a speculative application.</p>
                    <Button to="/contact" variant="primary" className="mt-4">Submit Your CV</Button>
                </div>
            </SectionWrapper>

            {/* Job Detail Modal */}
            {selectedJob && (
                 <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedJob(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="job-title"
                    aria-describedby="job-details"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8 max-h-[80vh] overflow-y-auto">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 id="job-title" className="text-2xl font-serif font-bold text-brand-blue-dark">{selectedJob.title}</h2>
                                    <p id="job-details" className="text-gray-500 mt-1">{selectedJob.department} | {selectedJob.location} | {selectedJob.type}</p>
                                </div>
                                <button onClick={() => setSelectedJob(null)} className="text-gray-400 hover:text-gray-600 p-1 rounded-full -mt-2 -mr-2" aria-label="Close modal">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div className="mt-6 border-t pt-6 space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Responsibilities</h3>
                                    <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
                                        {selectedJob.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Qualifications</h3>
                                     <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
                                        {selectedJob.qualifications.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 flex justify-end space-x-4">
                            <Button onClick={() => setSelectedJob(null)} variant="secondary">Close</Button>
                            <Button to="/contact" variant="primary">Apply Now</Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default CareersPage;