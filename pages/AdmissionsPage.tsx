
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { FaqItem } from '../types';
import { CheckCircleIcon } from '../components/IconComponents';
import FaqAccordion from '../components/FaqAccordion';
import UniformModal from '../components/UniformModal';

const steps = [
    { number: '01', title: 'Inquiry and School Visit', description: 'Contact us or visit our campus to learn about our programs, facilities, and the Better Seeds difference. We offer scheduled tours and information sessions.' },
    { number: '02', title: 'Application Submission', description: 'Complete the online application form or download a physical copy. Submit it along with all required documents to our admissions office.' },
    { number: '03', 'title': 'Entrance Assessment', 'description': 'Applicants are invited for a grade-appropriate assessment to evaluate their academic readiness and potential. This may include a written test and an informal interview.' },
    { number: '04', title: 'Admission Decision', description: 'The admissions committee reviews each application holistically. Successful applicants will receive an official admission offer via email.' },
    { number: '05', title: 'Enrollment & Orientation', description: 'Upon acceptance, complete the enrollment process by paying the required fees. New students and parents will be invited to an orientation session before school starts.' },
];

const requiredDocuments = [
    "Completed Application Form",
    "Copy of Birth Certificate",
    "Recent Academic Reports/Transcripts",
    "Two Passport-sized Photographs",
    "Health and Immunization Record"
];

const faqItems: FaqItem[] = [
    { question: "What is the admission deadline?", answer: "Admissions are on a rolling basis, but we recommend applying early as spaces are limited. Key deadlines for each academic year are posted on our website." },
    { question: "Is financial aid available?", answer: "Yes, we offer a limited number of need-based scholarships and bursaries. Please contact the admissions office for more information on the application process." },
    { question: "Do you accept transfer students?", answer: "Yes, we welcome transfer students. The application process includes a review of previous academic records and may require an entrance assessment." },
];

const AdmissionsPage: React.FC = () => {
    const [isUniformModalOpen, setIsUniformModalOpen] = useState(false);

    return (
        <div>
            <HeroSection
                title="Admissions"
                subtitle="Join our community of learners, thinkers, and leaders. Begin your journey at Better Seeds International School today."
                imageUrl="https://picsum.photos/1920/1080?image=30"
            />
            
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Our Admission Process</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our streamlined process is designed to be clear and supportive, ensuring a smooth transition for new students and families into our school community.
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="relative border-l-2 border-brand-gold/50 ml-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="mb-10 ml-12"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                            >
                                <div className="absolute -left-[1.6rem] flex-shrink-0">
                                    <div className="bg-brand-gold text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg ring-8 ring-gray-50/50">
                                        {step.number}
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 w-full">
                                    <h3 className="text-2xl font-serif font-bold text-brand-blue">{step.title}</h3>
                                    <p className="mt-2 text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-brand-blue-dark">Application Requirements</h2>
                        <p className="mt-4 text-gray-600">To ensure a smooth application process, please prepare the following documents.</p>
                        <ul className="mt-6 space-y-3">
                            {requiredDocuments.map((doc, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                    <CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-0.5 flex-shrink-0"/>
                                    <span>{doc}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="mt-8 flex space-x-4">
                            <Button onClick={() => alert('Placeholder for form download.')} variant="primary">Download Form</Button>
                            <Button to="/contact" variant="secondary">Contact Admissions</Button>
                        </div>
                    </motion.div>
                     <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                     >
                         <div className="bg-brand-blue/5 p-8 rounded-lg">
                            <h3 className="text-2xl font-serif font-bold text-brand-blue-dark mb-4">Tuition & Fees</h3>
                            <p className="text-gray-600 mb-6">We are committed to providing exceptional value in education. Our fee structure is transparent and covers tuition, learning materials, and access to core facilities. For a detailed schedule, please download our fee structure document.</p>
                            <Button onClick={() => alert('Placeholder for fee schedule download.')} variant="secondary">Download Fee Schedule</Button>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
            
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1"
                    >
                        <h2 className="text-3xl font-serif font-bold text-brand-blue-dark">School Uniforms</h2>
                        <p className="mt-4 text-gray-600">
                            Our school uniform fosters a sense of identity, pride, and community among students. It ensures that students are neat, well-groomed, and ready to focus on learning. We have distinct uniforms for regular school days and for sports activities.
                        </p>
                        <p className="mt-2 text-gray-600">
                            All uniform items can be purchased from the official school store to ensure consistency in quality and design.
                        </p>
                        <div className="mt-8">
                            <Button onClick={() => setIsUniformModalOpen(true)} variant="primary">
                                View Uniform Guidelines
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://picsum.photos/400/500?random=111" alt="Student in regular school uniform" className="rounded-lg shadow-lg w-full h-full object-cover" loading="lazy" />
                            <img src="https://picsum.photos/400/500?random=112" alt="Student in sports uniform" className="rounded-lg shadow-lg w-full h-full object-cover mt-8" loading="lazy" />
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Frequently Asked Questions</h2>
                         <p className="mt-4 text-lg text-gray-600">Find answers to common inquiries about our admissions process.</p>
                    </div>
                    <FaqAccordion items={faqItems} />
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-brand-blue-dark text-white">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to Join Us?</h2>
                    <p className="mt-4 text-lg text-gray-300">
                       Take the first step toward a world-class education. Join a community that values academic excellence, character development, and holistic growth.
                    </p>
                    <div className="mt-8 flex justify-center items-center flex-wrap gap-4">
                        <Button to="/contact" variant="primary" className="bg-white text-brand-blue hover:bg-gray-200">Apply Today</Button>
                        <Button to="/contact" variant="outline">Schedule a Visit</Button>
                    </div>
                </div>
            </SectionWrapper>

            <UniformModal isOpen={isUniformModalOpen} onClose={() => setIsUniformModalOpen(false)} />
        </div>
    );
};

export default AdmissionsPage;
