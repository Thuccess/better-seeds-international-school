import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import BlogPostCard from '../components/BlogPostCard';
import { BlogPost } from '../types';
import { motion } from 'framer-motion';

const blogPosts: BlogPost[] = [
    { id: 1, title: 'Science Fair 2025 Highlights', excerpt: 'Showcasing student-led innovation projects that impressed judges and parents alike.', imageUrl: 'https://picsum.photos/600/400?random=31', category: 'Academic', date: 'November 5, 2024', author: 'Admin', content: 'Our annual Science Fair was a tremendous success, filled with innovative projects ranging from renewable energy models to robotics. Students demonstrated deep understanding and creativity, showcasing the strength of our STEM program. We congratulate all participants for their hard work and ingenuity.' },
    { id: 2, title: 'Annual Debate Competition Finals', excerpt: 'Encouraging critical thinking and public speaking, our debaters tackled complex global issues.', imageUrl: 'https://picsum.photos/600/400?random=32', category: 'Academic', date: 'October 28, 2024', author: 'Dr. Evelyn Reed', content: 'The final round of the Annual Debate Competition was a masterclass in eloquence and critical thinking. Participants argued passionately on pressing global topics, demonstrating remarkable research and public speaking skills. This event underscores our commitment to developing confident and articulate leaders.' },
    { id: 3, title: 'A Vibrant Celebration of Cultural Day', excerpt: 'Students showcased the rich diversity of our community through music, dance, and traditional attire.', imageUrl: 'https://picsum.photos/600/400?random=33', category: 'Events', date: 'October 22, 2024', author: 'Admin', content: 'Cultural Day was a colorful and joyous celebration of the diverse backgrounds that make up our school community. The campus was alive with traditional music, dance performances, and a feast of international cuisines. It was a beautiful reminder of the strength we find in our diversity.' },
    { id: 4, title: 'Victory at the Inter-School Football Tournament', excerpt: 'Our school team brought home the championship trophy after a thrilling final match.', imageUrl: 'https://picsum.photos/600/400?random=34', category: 'Sports', date: 'October 15, 2024', author: 'Coach Davies', content: 'Congratulations to the Better Seeds football team for their spectacular victory in the Inter-School Tournament! Their dedication, teamwork, and sportsmanship were on full display throughout the competition, culminating in a well-deserved championship. We are incredibly proud of our athletes.' },
    { id: 5, title: 'Community Clean-Up Drive A Success', excerpt: 'Students and staff came together to make a positive impact on our local environment.', imageUrl: 'https://picsum.photos/600/400?random=35', category: 'Community', date: 'October 8, 2024', author: 'Admin', content: 'As part of our commitment to social responsibility, students and staff participated in a massive clean-up drive in the surrounding neighborhood. The initiative was a great success, fostering a sense of community pride and environmental stewardship among our students.' },
    { id: 6, title: 'Parent-Teacher Conferences Strengthen Bonds', excerpt: 'A look at how we are strengthening collaboration for student success through productive conferences.', imageUrl: 'https://picsum.photos/600/400?random=36', category: 'Academic', date: 'October 2, 2024', author: 'Admin', content: 'Our recent Parent-Teacher Conferences provided a valuable platform for constructive dialogue between parents and educators. We believe that a strong partnership between home and school is essential for student success, and we thank all parents for their active participation.' },
];


const NewsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => ['All', ...new Set(blogPosts.map(post => post.category))], []);

    const filteredPosts = useMemo(() => {
        return blogPosts
            .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
            .filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            );
    }, [searchQuery, selectedCategory]);

    const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
    const otherPosts = filteredPosts.slice(1);

    return (
        <div>
            <HeroSection
                title="News & Events"
                subtitle="Stay informed about the milestones, achievements, and stories that shape our vibrant school community."
                imageUrl="https://picsum.photos/1920/1080?image=50"
            />
            <SectionWrapper>
                <div className="mb-12 max-w-2xl mx-auto">
                    {/* Category Filters */}
                    <div className="flex justify-center flex-wrap gap-2 mb-8">
                        {categories.map(category => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 ${
                                    selectedCategory === category
                                        ? 'bg-brand-blue text-white shadow'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <label htmlFor="search-news" className="sr-only">Search news</label>
                        <input
                            id="search-news"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search articles by keyword..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>
                </div>

                {filteredPosts.length > 0 ? (
                    <>
                        {/* Featured Post */}
                        {featuredPost && (
                             <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                                <Link to={`/news/${featuredPost.id}`} className="group block md:grid md:grid-cols-2 md:gap-8 items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                    <div className="overflow-hidden rounded-lg">
                                        <img src={`https://picsum.photos/1200/800?random=${featuredPost.id}`} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="mt-6 md:mt-0">
                                        <p className="text-sm font-semibold text-brand-gold">{featuredPost.category}</p>
                                        <h3 className="mt-2 text-3xl font-serif font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors">{featuredPost.title}</h3>
                                        <p className="mt-2 text-sm text-gray-500">{featuredPost.date} by {featuredPost.author}</p>
                                        <p className="mt-4 text-gray-600 line-clamp-3">{featuredPost.excerpt}</p>
                                        <div className="mt-6 font-semibold text-brand-blue group-hover:underline">
                                            Read More &rarr;
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )}
                        
                        {otherPosts.length > 0 && (
                            <>
                                <hr className="my-16 border-gray-200" />
                                <h2 className="text-3xl font-serif font-bold text-brand-blue-dark mb-8 text-center">More News</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {otherPosts.map((post, index) => (
                                        <motion.div
                                            key={post.id}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <BlogPostCard post={post} />
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="text-center text-gray-600 py-16">
                        <h2 className="text-2xl font-semibold">No Articles Found</h2>
                        <p className="mt-2">Try adjusting your search or category filter to find what you're looking for.</p>
                    </div>
                )}
            </SectionWrapper>
        </div>
    );
};

export default NewsPage;