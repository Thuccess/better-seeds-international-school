
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import Card from './Card';

interface BlogPostCardProps {
    post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
    return (
        <Card className="flex flex-col">
            <Link to={`/news/${post.id}`} aria-label={`Read more about ${post.title}`}>
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-brand-gold">{post.category}</p>
                <h3 className="mt-2 text-xl font-serif font-bold text-brand-blue-dark hover:text-brand-blue transition-colors">
                    <Link to={`/news/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{post.date} by {post.author}</p>
                <p className="mt-4 text-gray-600 flex-grow">{post.excerpt}</p>
                 <div className="mt-6">
                    <Link to={`/news/${post.id}`} className="font-semibold text-brand-blue hover:underline">
                        Read More &rarr;
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default BlogPostCard;