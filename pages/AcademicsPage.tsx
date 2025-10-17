
import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import { BookIcon, GlobeIcon, GraduationCapIcon, FlaskIcon, BriefcaseIcon, CheckCircleIcon } from '../components/IconComponents';
import { motion } from 'framer-motion';

const seniorStreams = [
    {
        title: 'Science Stream',
        icon: FlaskIcon,
        description: 'Advanced Mathematics, Physics, Chemistry, Biology. Focus on laboratory work and research projects.',
    },
    {
        title: 'Arts / Humanities Stream',
        icon: BookIcon,
        description: 'History, Geography, Literature, Economics, Religious Studies. Emphasis on critical analysis and communication skills.',
    },
    {
        title: 'Commercial / Business Stream',
        icon: BriefcaseIcon,
        description: 'Business Studies, Accounting, Economics, Entrepreneurship. Focus on practical applications and project-based learning.',
    },
];

const coCurricular = [
    { title: 'Sports', description: 'Football, basketball, athletics, and inter-school competitions.' },
    { title: 'Arts & Music', description: 'Drama, choir, visual arts, and creative clubs.' },
    { title: 'Clubs & Societies', description: 'Debate, Science Club, ICT Club, Community Service initiatives.' },
    { title: 'Leadership', description: 'Student council, mentorship, and character-building workshops.' },
];

const studentSupport = [
    { title: 'Academic Mentoring', description: 'One-on-one guidance and tutoring for challenging subjects.' },
    { title: 'Career Counseling', description: 'Guidance for higher education and future career planning.' },
    { title: 'Library & Resource Center', description: 'Access to textbooks, journals, and digital resources.' },
    { title: 'ICT Integration', description: 'Modern labs and practical tech applications to enhance learning.' },
];


const AcademicsPage: React.FC = () => {
    return (
        <div>
            <HeroSection
                title="Academics & Programs"
                subtitle="Empowering students with knowledge, skills, and character for a successful future."
                imageUrl="https://picsum.photos/1920/1080?image=24"
            />
            
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Our Academic Philosophy</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We believe education should develop not only knowledge but also critical thinking, creativity, and character. Our programs align with national standards while preparing students for a global future, fostering a lifelong love of learning and a commitment to excellence.
                    </p>
                </div>
            </SectionWrapper>
            
            <SectionWrapper className="bg-white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Core Academic Streams</h2>
                     <p className="mt-4 text-lg text-gray-600">We offer a structured curriculum for junior and senior secondary levels, providing a strong foundation in core subjects and specialized streams.</p>
                </div>

                {/* Junior Secondary */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-12 mb-20"
                >
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-brand-blue/10 rounded-full">
                                <GraduationCapIcon className="h-8 w-8 text-brand-blue" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-blue-dark">Junior Secondary (Grades 7–9)</h3>
                        </div>
                        <p className="text-gray-600 mb-4">The junior program builds essential knowledge and skills in subjects like English, Mathematics, General Science, and Social Studies, preparing students for senior studies.</p>
                        <h4 className="font-bold text-gray-800 mb-2">Key Highlights:</h4>
                        <ul className="space-y-2">
                            {['Interactive lessons and group projects', 'Emphasis on problem-solving skills', 'Development of leadership and teamwork'].map((item, i) => (
                                <li key={i} className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-2 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <img src={`https://picsum.photos/800/600?random=10`} alt="Junior Secondary Students" className="rounded-lg shadow-xl" loading="lazy" />
                    </div>
                </motion.div>

                 {/* Senior Secondary */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <div className="p-3 bg-brand-blue/10 rounded-full">
                            <GlobeIcon className="h-8 w-8 text-brand-blue" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-brand-blue-dark">Senior Secondary (Grades 10–12)</h3>
                    </div>
                     <p className="mt-2 text-lg text-gray-600">The senior program provides specialized streams to prepare students for national examinations and tertiary education.</p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {seniorStreams.map((stream, index) => (
                        <motion.div key={stream.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <Card className="p-8 text-center h-full">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-brand-blue/10 rounded-full">
                                        <stream.icon className="h-8 w-8 text-brand-blue" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-brand-blue-dark">{stream.title}</h3>
                                <p className="mt-2 text-gray-600 text-sm">{stream.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Co-Curricular Programs</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Education extends beyond textbooks. Our co-curricular activities promote holistic development, teamwork, and leadership skills.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coCurricular.map((item, index) => (
                         <motion.div key={item.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <Card className="p-6 h-full">
                                <h3 className="font-bold text-brand-blue-dark text-lg">{item.title}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                            </Card>
                         </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                     >
                        <h2 className="text-3xl font-serif font-bold text-brand-blue-dark">Student Support & Enrichment</h2>
                        <p className="mt-4 text-gray-600">We provide robust support systems to ensure every student reaches their full potential, both academically and personally.</p>
                         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {studentSupport.map(item => (
                                <div key={item.title} className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                         <img src="https://picsum.photos/800/600?random=11" alt="Student Support" className="rounded-lg shadow-xl" loading="lazy" />
                    </motion.div>
                </div>
            </SectionWrapper>
            
            <SectionWrapper className="bg-brand-blue text-white">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to Excel?</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Discover how our academic programs can shape your child's future. Explore our curriculum in detail or contact our admissions team to learn more.
                    </p>
                    <div className="mt-8 flex justify-center items-center flex-wrap gap-4">
                        <Button to="/admissions" variant="primary" className="bg-white text-brand-blue hover:bg-gray-200">Admissions Info</Button>
                        <Button to="/contact" variant="outline">Contact Us</Button>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default AcademicsPage;