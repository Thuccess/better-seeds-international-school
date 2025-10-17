
import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import { Testimonial, Program, FaqItem, BlogPost, CalendarEvent } from '../types';
import { motion } from 'framer-motion';
import { BookIcon, GlobeIcon, GraduationCapIcon, InstagramIcon, CheckCircleIcon } from '../components/IconComponents';
import BlogPostCard from '../components/BlogPostCard';
import FaqAccordion from '../components/FaqAccordion';

const programs: Program[] = [
    { title: 'Nursery School', description: 'A nurturing and stimulating environment for young learners, encouraging curiosity and foundational skills.', details: [], icon: GraduationCapIcon },
    { title: 'Primary School', description: 'Building strong literacy, numeracy, and creative skills through engaging and student-focused lessons.', details: [], icon: BookIcon },
    { title: 'Junior High School', description: 'Preparing learners for higher education and future success through rigorous academics and leadership training.', details: [], icon: GlobeIcon },
];

const testimonials: Testimonial[] = [
    {
        quote: "Better Seeds has been a transformative experience for our daughter. The teachers are dedicated, and the curriculum is challenging yet supportive.",
        name: "Eleanor Vance",
        role: "Parent of Grade 5 Student",
        avatarUrl: "https://picsum.photos/100/100?random=1"
    },
    {
        quote: "The global perspective my son has gained is invaluable. He is more confident, curious, and prepared for the future.",
        name: "Marcus Holloway",
        role: "Parent of Grade 8 Student",
        avatarUrl: "https://picsum.photos/100/100?random=2"
    },
    {
        quote: "As an alumnus, I can confidently say that the foundation I received at Better Seeds was instrumental in my university and career success.",
        name: "Aisha Khan",
        role: "Alumna, Class of 2018",
        avatarUrl: "https://picsum.photos/100/100?random=3"
    },
];

const latestPosts: BlogPost[] = [
    { id: 1, title: 'Annual Sports Day Highlights', excerpt: 'A fantastic showcase of talent, teamwork, and sportsmanship.', imageUrl: 'https://picsum.photos/600/400?random=31', category: 'Events', date: 'October 25, 2024', author: 'Admin', content: 'The air was electric with excitement during our Annual Sports Day. Students from all houses competed with vigor and sportsmanship. The day was filled with thrilling races, impressive team plays, and unforgettable moments of triumph. Congratulations to the Blue House for winning the overall championship this year!' },
    { id: 2, title: 'The Importance of STEM Education', excerpt: 'Preparing students for the future with integrated STEM principles.', imageUrl: 'https://picsum.photos/600/400?random=32', category: 'Academics', date: 'October 18, 2024', author: 'Dr. Evelyn Reed', content: 'In today\'s rapidly evolving world, a strong foundation in Science, Technology, Engineering, and Mathematics (STEM) is more crucial than ever. At Better Seeds, we are committed to integrating STEM principles across all subjects, encouraging students to think critically, solve complex problems, and become the innovators of tomorrow. Our new robotics lab is just one example of this commitment.' },
];

const upcomingEvents: CalendarEvent[] = [
    { date: '2024-11-04', title: 'Parent-Teacher Conferences (Primary)', category: 'Academic', description: 'An opportunity for parents to discuss student progress with teachers. Please book your slots in advance.' },
    { date: '2024-11-15', title: 'Inter-House Sports Competition', category: 'Sports', description: 'The annual track and field competition between the school houses. All are welcome to cheer on our athletes!' },
    { date: '2024-11-28', title: 'Thanksgiving Break Begins', category: 'Holiday', description: 'The school will be closed for the Thanksgiving holiday. Classes will resume on December 2nd.' },
    { date: '2024-12-12', title: 'Annual School Play', category: 'Event', description: 'Join us for a magical evening as our drama club presents "A Midsummer Night\'s Dream". Tickets are available at the front office.' },
];

const socialImages = [
    { id: 1, src: 'https://picsum.photos/500/500?random=41', alt: 'Students collaborating on a project' },
    { id: 2, src: 'https://picsum.photos/500/500?random=42', alt: 'A colorful art piece by a student' },
    { id: 3, src: 'https://picsum.photos/500/500?random=43', alt: 'School choir performing' },
    { id: 4, src: 'https://picsum.photos/500/500?random=44', alt: 'Students enjoying lunch time' },
    { id: 5, src: 'https://picsum.photos/500/500?random=45', alt: 'Science lab experiment in action' },
    { id: 6, src: 'https://picsum.photos/500/500?random=46', alt: 'Reading time in the school library' },
];

const HomePage: React.FC = () => {

    const faqItems: FaqItem[] = [
        { question: "What is the student-teacher ratio?", answer: "We maintain a low student-teacher ratio to ensure personalized attention and meaningful learning experiences." },
        { question: "What curriculum do you follow?", answer: "Better Seeds follows the South Sudan National Curriculum enriched with international learning methodologies and global perspectives." },
        { question: "Are extracurricular activities available?", answer: "Yes. We offer a wide range of co-curricular programs in sports, arts, music, leadership, and community service." },
    ];
    
    const whyChooseUsPoints = [
        { title: "Holistic Education", description: "Balancing academic rigor with arts, sports, and character development." },
        { title: "Expert Faculty", description: "Passionate, experienced educators dedicated to student success." },
        { title: "Global Perspective", description: "Fostering cultural awareness to prepare students for an interconnected world." },
        { title: "Modern Facilities", description: "A safe, stimulating, and well-equipped learning environment." },
    ];

    return (
        <div>
            <HeroSection
                isHomePage={true}
                title={<>Nurturing <span className="text-brand-gold">Tomorrow’s Leaders</span></>}
                subtitle="At Better Seeds International School, we cultivate intellect, character, and a global perspective — preparing students for a future without boundaries."
                imageUrl="https://picsum.photos/1920/1080?image=29"
                primaryCta={{ children: 'Discover Our Programs', to: '/academics', variant: 'primary' }}
                secondaryCta={{ children: 'Admission Process', to: '/admissions', variant: 'outline' }}
            />

            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Welcome to Better Seeds</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Better Seeds International School is an institution dedicated to fostering academic excellence, moral integrity, and social responsibility. We provide a dynamic and inclusive learning environment that encourages curiosity, creativity, and lifelong learning — nurturing every student to reach their fullest potential.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                    >
                        <img src="https://picsum.photos/800/600?image=201" alt="Happy students learning" className="rounded-lg shadow-xl" loading="lazy" />
                    </motion.div>
                    <motion.div
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-brand-blue-dark">Why Choose Better Seeds?</h2>
                        <p className="mt-4 text-gray-600">We provide more than just an education; we offer an experience that shapes confident, compassionate, and capable global citizens.</p>
                        <ul className="mt-6 space-y-4">
                            {whyChooseUsPoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{point.title}</h4>
                                        <p className="text-gray-600">{point.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                         <div className="mt-8">
                            <Button to="/about" variant="secondary">Learn More About Us</Button>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Academic Programs</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our structured academic pathway ensures a seamless and progressive learning journey — from early years to junior high.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <Card key={program.title} className="p-8 text-center">
                           <div className="flex justify-center mb-4">
                                <div className="p-4 bg-brand-blue/10 rounded-full">
                                    <program.icon className="h-8 w-8 text-brand-blue"/>
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-blue-dark">{program.title}</h3>
                            <p className="mt-2 text-gray-600">{program.description}</p>
                            <div className="mt-6">
                                <Button to="/academics" variant="secondary">Learn More</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">What Our Community Says</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Their voices define our success. Here’s what parents and alumni say about their Better Seeds experience:
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="p-6 flex flex-col">
                            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            <div className="mt-4 flex items-center">
                                <img src={testimonial.avatarUrl} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                                <div className="ml-4">
                                    <p className="font-bold text-brand-blue-dark">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Latest News */}
                    <div className="lg:col-span-3">
                         <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Latest News</h2>
                            <p className="mt-2 text-lg text-gray-600">Stay up-to-date with our school's stories and achievements.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {latestPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
                        </div>
                         <div className="mt-8">
                            <Button to="/news" variant="secondary">View All News</Button>
                        </div>
                    </div>
                    {/* Upcoming Events */}
                    <div className="lg:col-span-2">
                         <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Upcoming Events</h2>
                            <p className="mt-2 text-lg text-gray-600">Mark your calendars for these important dates.</p>
                        </div>
                        <div className="space-y-4">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm border-l-4 border-brand-gold">
                                    <div className="text-center w-16 flex-shrink-0">
                                        <p className="text-sm font-bold text-brand-blue-dark">{new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
                                        <p className="text-2xl font-bold text-gray-700">{new Date(event.date).getDate()}</p>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-gray-800">{event.title}</h3>
                                        <p className="text-sm text-gray-500">{event.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                         <div className="mt-8">
                            <Button to="/calendar" variant="secondary">View Full Calendar</Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Follow Our Journey</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Get a daily glimpse into life at Better Seeds. Follow us on social media for moments of learning, joy, and community.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {socialImages.map(image => (
                        <motion.a 
                            key={image.id}
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <InstagramIcon className="w-8 h-8 text-white"/>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </SectionWrapper>

             <SectionWrapper>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue-dark">Frequently Asked Questions</h2>
                         <p className="mt-4 text-lg text-gray-600">Find answers to common inquiries about our institution.</p>
                    </div>
                    <FaqAccordion items={faqItems} />
                </div>
            </SectionWrapper>
            
            <SectionWrapper className="bg-brand-blue-dark text-white">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Begin Your Journey With Us</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Take the first step toward a world-class education for your child. Join a community that values academic excellence, integrity, and holistic development.
                    </p>
                    <div className="mt-8 flex justify-center items-center flex-wrap gap-4">
                        <Button to="/admissions" variant="primary">Apply Today</Button>
                        <Button to="/contact" variant="outline">Contact Us</Button>
                    </div>
                </div>
            </SectionWrapper>

        </div>
    );
};

export default HomePage;