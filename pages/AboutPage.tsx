
import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { StaffMember } from '../types';
import { motion } from 'framer-motion';

const staff: StaffMember[] = [
    { name: 'Dr. Alistair Finch', role: 'Director', imageUrl: 'https://picsum.photos/400/400?random=4', bio: 'Guides the institution with a focus on excellence, innovation, and nurturing every student’s potential.' },
    { name: 'Ms. Beatrice Thorne', role: 'Deputy Director', imageUrl: 'https://picsum.photos/400/400?random=5', bio: 'Oversees daily operations and curriculum implementation, ensuring a seamless educational experience.' },
    { name: 'Mr. Charles Sterling', role: 'Head of Academics', imageUrl: 'https://picsum.photos/400/400?random=6', bio: 'Leads our academic programs, fostering a culture of intellectual curiosity and high achievement.' },
    { name: 'Mrs. Diana Vance', role: 'Head of Student Affairs', imageUrl: 'https://picsum.photos/400/400?random=7', bio: 'Dedicated to the well-being and holistic development of our student community.' },
];

const values = [
    { name: 'Excellence', description: 'Striving for the highest standards in teaching, learning, and personal development.', icon: '🏆' },
    { name: 'Integrity', description: 'Fostering honesty, ethical behavior, and respect in all our students and staff.', icon: '🤝' },
    { name: 'Innovation', description: 'Encouraging creativity, critical thinking, and problem-solving.', icon: '💡' },
    { name: 'Community', description: 'Building a supportive and inclusive community for students, staff, and parents.', icon: '🌍' },
    { name: 'Resilience', description: 'Developing persistence and adaptability in the face of challenges.', icon: '💪' },
];

const historyMilestones = [
    { year: "2010", title: "Foundation of Better Seeds", description: "Established with a vision to provide world-class education in Kampala, Uganda, opening its doors to the first cohort of 50 students." },
    { year: "2014", title: "First Junior High Graduation", description: "Celebrated the graduation of our inaugural junior high class, setting a new standard for academic achievement in the region." },
    { year: "2017", title: "Campus Expansion", description: "Completed a major campus expansion, adding a new science wing, a modern library, and enhanced sports facilities to support our growing student body." },
    { year: "2020", title: "Introduction of Global Programs", description: "Launched international exchange programs and a globally-focused curriculum to foster cultural awareness and a broader worldview among students." },
    { year: "2023", title: "Community Leadership Award", description: "Recognized with a national award for excellence in community service and leadership development, highlighting our commitment to social responsibility." },
];


const AboutPage: React.FC = () => {
    return (
        <div>
            <HeroSection
                title="About Better Seeds"
                subtitle="Rooted in tradition, reaching for the future. Discover the principles that guide our institution."
                imageUrl="https://picsum.photos/1920/1080?image=10"
            />
            
            <SectionWrapper>
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Our Mission & Vision</h2>
                     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-gold"
                        >
                           <h3 className="text-2xl font-serif font-bold text-brand-blue-dark mb-3">Our Mission</h3>
                           <p className="text-gray-600">To provide a world-class education that develops intellect, character, and global awareness, nurturing responsible and compassionate individuals who contribute positively to society.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-blue"
                        >
                           <h3 className="text-2xl font-serif font-bold text-brand-blue-dark mb-3">Our Vision</h3>
                           <p className="text-gray-600">To be a leading international school that inspires excellence, innovation, and integrity, preparing learners to thrive in an ever-evolving global landscape.</p>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>
            
            <SectionWrapper className="bg-white">
                <div className="text-center max-w-4xl mx-auto">
                     <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Our Journey Through Time</h2>
                     <p className="mt-4 text-lg text-gray-600">From our humble beginnings, Better Seeds has grown into a beacon of educational excellence. Explore the key milestones that have shaped our history and defined our path.</p>
                </div>
                <div className="relative mt-16 max-w-3xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-brand-gold/30" aria-hidden="true"></div>
                    {historyMilestones.map((item, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1 }}
                            className="relative mb-12 flex items-center"
                        >
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                                <p className="text-lg font-bold text-brand-gold">{item.year}</p>
                                <h3 className="text-xl font-serif font-bold text-brand-blue-dark mt-1">{item.title}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                            </div>
                            <div className="w-1/2 order-1">
                                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                                    <div className="bg-brand-gold h-4 w-4 rounded-full ring-8 ring-white"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper>
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Our Core Values</h2>
                    <p className="mt-4 text-lg text-gray-600">These guiding principles are the bedrock of our community, shaping every aspect of life and learning at Better Seeds.</p>
                </div>
                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {values.map((value, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 text-center h-full">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-brand-blue-dark">{value.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{value.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Meet Our Leadership Team</h2>
                    <p className="mt-4 text-lg text-gray-600">
                       Our leadership team is comprised of dedicated educators and administrators committed to fostering an environment of excellence and support for every student.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staff.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="text-center">
                                <img src={member.imageUrl} alt={member.name} className="w-full h-56 object-cover" loading="lazy" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-brand-blue-dark">{member.name}</h3>
                                    <p className="text-brand-gold font-semibold">{member.role}</p>
                                    <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-brand-blue-dark text-white">
                 <div className="text-center max-w-3xl mx-auto">
                    <p className="text-2xl md:text-3xl font-serif italic">
                        “We sow the seeds of knowledge, character, and leadership — nurturing learners today to become the global leaders of tomorrow.”
                    </p>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default AboutPage;