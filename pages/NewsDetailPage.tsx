
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { BlogPost } from '../types';

// This data would typically come from an API call based on the postId.
// For this prototype, we'll filter the complete static list.
const blogPosts: BlogPost[] = [
    { id: 1, title: 'Science Fair 2025 Highlights', excerpt: 'Showcasing student-led innovation projects that impressed judges and parents alike.', imageUrl: 'https://picsum.photos/1200/600?random=31', category: 'Academic Achievements', date: 'November 5, 2024', author: 'Admin', content: 'Our annual Science Fair was a tremendous success, filled with innovative projects ranging from renewable energy models to robotics. Students demonstrated deep understanding and creativity, showcasing the strength of our STEM program. We congratulate all participants for their hard work and ingenuity.' },
    { id: 2, title: 'Annual Debate Competition Finals', excerpt: 'Encouraging critical thinking and public speaking, our debaters tackled complex global issues.', imageUrl: 'https://picsum.photos/1200/600?random=32', category: 'Academic Achievements', date: 'October 28, 2024', author: 'Dr. Evelyn Reed', content: 'The final round of the Annual Debate Competition was a masterclass in eloquence and critical thinking. Participants argued passionately on pressing global topics, demonstrating remarkable research and public speaking skills. This event underscores our commitment to developing confident and articulate leaders.' },
    { id: 3, title: 'A Vibrant Celebration of Cultural Day', excerpt: 'Students showcased the rich diversity of our community through music, dance, and traditional attire.', imageUrl: 'https://picsum.photos/1200/600?random=33', category: 'Cultural', date: 'October 22, 2024', author: 'Admin', content: 'Cultural Day was a colorful and joyous celebration of the diverse backgrounds that make up our school community. The campus was alive with traditional music, dance performances, and a feast of international cuisines. It was a beautiful reminder of the strength we find in our diversity.' },
    { id: 4, title: 'Victory at the Inter-School Football Tournament', excerpt: 'Our school team brought home the championship trophy after a thrilling final match.', imageUrl: 'https://picsum.photos/1200/600?random=34', category: 'Sports', date: 'October 15, 2024', author: 'Coach Davies', content: 'Congratulations to the Better Seeds football team for their spectacular victory in the Inter-School Tournament! Their dedication, teamwork, and sportsmanship were on full display throughout the competition, culminating in a well-deserved championship. We are incredibly proud of our athletes.' },
    { id: 5, title: 'Community Clean-Up Drive A Success', excerpt: 'Students and staff came together to make a positive impact on our local environment.', imageUrl: 'https://picsum.photos/1200/600?random=35', category: 'Community Engagement', date: 'October 8, 2024', author: 'Admin', content: 'As part of our commitment to social responsibility, students and staff participated in a massive clean-up drive in the surrounding neighborhood. The initiative was a great success, fostering a sense of community pride and environmental stewardship among our students.' },
    { id: 6, title: 'Parent-Teacher Conferences Strengthen Bonds', excerpt: 'A look at how we are strengthening collaboration for student success through productive conferences.', imageUrl: 'https://picsum.photos/1200/600?random=36', category: 'Academic Achievements', date: 'October 2, 2024', author: 'Admin', content: 'Our recent Parent-Teacher Conferences provided a valuable platform for constructive dialogue between parents and educators. We believe that a strong partnership between home and school is essential for student success, and we thank all parents for their active participation.' },
];

const NewsDetailPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const post = blogPosts.find(p => p.id === parseInt(postId || ''));

    useEffect(() => {
        if (post) {
            const originalTitle = document.title;
            const metaDescription = document.querySelector('meta[name="description"]');
            const originalDescription = metaDescription ? metaDescription.getAttribute('content') : '';

            document.title = `${post.title} | Better Seeds International School`;
            if (metaDescription) {
                metaDescription.setAttribute('content', post.excerpt);
            }

            const updateMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
                let element = document.querySelector(`meta[${attr}='${value}']`) as HTMLMetaElement;
                if (!element) {
                    element = document.createElement('meta');
                    element.setAttribute(attr, value);
                    document.head.appendChild(element);
                }
                element.setAttribute('content', content);
            };

            // Set Open Graph tags
            updateMetaTag('property', 'og:title', post.title);
            updateMetaTag('property', 'og:description', post.excerpt);
            updateMetaTag('property', 'og:image', post.imageUrl);
            updateMetaTag('property', 'og:url', window.location.href);
            updateMetaTag('property', 'og:type', 'article');
            
            // Set Twitter Card tags
            updateMetaTag('name', 'twitter:card', 'summary_large_image');
            updateMetaTag('name', 'twitter:title', post.title);
            updateMetaTag('name', 'twitter:description', post.excerpt);
            updateMetaTag('name', 'twitter:image', post.imageUrl);

            // Cleanup function to restore original meta tags on unmount
            return () => {
                document.title = originalTitle;
                if (metaDescription && originalDescription) {
                    metaDescription.setAttribute('content', originalDescription);
                }
                // Reset to general site meta tags
                updateMetaTag('property', 'og:title', 'Better Seeds International School');
                updateMetaTag('property', 'og:description', 'Nurturing global leaders of tomorrow through academic excellence and character development in Kampala, Uganda.');
                updateMetaTag('property', 'og:image', 'https://picsum.photos/1200/630?image=29');
                updateMetaTag('property', 'og:url', window.location.origin);
                updateMetaTag('property', 'og:type', 'website');
                
                updateMetaTag('name', 'twitter:title', 'Better Seeds International School');
                updateMetaTag('name', 'twitter:description', 'Nurturing global leaders of tomorrow through academic excellence and character development in Kampala, Uganda.');
                updateMetaTag('name', 'twitter:image', 'https://picsum.photos/1200/630?image=29');
            };
        }
    }, [post]);

    if (!post) {
        return (
            <div className="py-24 text-center">
                <h1 className="text-3xl font-bold">Post not found</h1>
                <p className="text-gray-600 mt-2">The article you are looking for does not exist.</p>
                <Link to="/news" className="text-brand-blue hover:underline mt-4 inline-block">&larr; Back to All News</Link>
            </div>
        );
    }

    return (
        <div>
            <div className="relative h-[40vh] min-h-[300px] flex items-end text-white">
                <div className="absolute inset-0 z-0">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                     <p className="text-brand-gold font-semibold">{post.category}</p>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mt-2">{post.title}</h1>
                     <p className="mt-4 text-gray-300">
                        {post.date} by <span className="font-semibold text-white">{post.author}</span>
                    </p>
                </div>
            </div>
            <SectionWrapper>
                <div className="max-w-3xl mx-auto">
                    <div className="text-gray-800 leading-relaxed space-y-6 text-lg">
                        <p className="text-xl text-gray-600 font-semibold">{post.excerpt}</p>
                        <p>{post.content}</p>
                    </div>
                    <div className="text-center mt-16">
                        <Link to="/news" className="font-semibold text-brand-blue hover:underline">
                            &larr; Back to All News
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default NewsDetailPage;