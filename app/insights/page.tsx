"use client"
import  { useState } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const categories = ['All', 'Leadership', 'Growth', 'Strategy', 'Sales'];

const blogPosts = [
  {
    id: 1,
    title: 'The CEO\'s Guide to Strategic Sales Architecture',
    excerpt: 'Learn how to build a sales framework that scales with your business and drives sustainable revenue growth.',
    category: 'Strategy',
    author: 'John Anderson',
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1730382625230-3756013c515c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbGVhZGVyc2hpcHxlbnwxfHx8fDE3NjE2ODQwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    id: 2,
    title: 'Cashflow Optimization: The Hidden Growth Lever',
    excerpt: 'Discover how optimizing your cash conversion cycle can unlock millions in working capital for strategic investments.',
    category: 'Growth',
    author: 'John Anderson',
    date: 'March 10, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1758518729912-bf3a84c400e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBncm93dGglMjBzdWNjZXNzfGVufDF8fHx8MTc2MTY4NDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
  {
    id: 3,
    title: '5 Leadership Traits of High-Growth CEOs',
    excerpt: 'What separates good leaders from great ones? Explore the mindset and behaviors that drive exceptional business results.',
    category: 'Leadership',
    author: 'John Anderson',
    date: 'March 5, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjE2ODQwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
  {
    id: 4,
    title: 'Building Sales Systems That Scale',
    excerpt: 'Move beyond individual heroics to create repeatable, scalable systems that drive consistent sales performance.',
    category: 'Sales',
    author: 'John Anderson',
    date: 'February 28, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NjE1ODkyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
  {
    id: 5,
    title: 'The Art of Strategic Decision Making',
    excerpt: 'Master the frameworks and mental models that help CEOs make better decisions faster in uncertain environments.',
    category: 'Leadership',
    author: 'John Anderson',
    date: 'February 22, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NjE2ODM3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
  {
    id: 6,
    title: 'From Startup to Scale-up: Navigating the Transition',
    excerpt: 'The challenges you face at $1M are different from those at $10M. Here\'s how to navigate critical growth inflection points.',
    category: 'Growth',
    author: 'John Anderson',
    date: 'February 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1621359857151-a884d05f8667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYW5zZm9ybWF0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjE2NDUyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0A1628]/60 via-[#050b14]/40 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-900/30 to-blue-900/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-6"
          >
            Insights & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Expert insights on sales strategy, leadership, and business growth from 
            industry leaders and practitioners.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/insights/${featuredPost.id}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-96 lg:h-full overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 via-transparent to-transparent lg:block hidden"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 lg:pl-0">
                    <div className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-sm mb-4">
                      {featuredPost.category}
                    </div>
                    <h2 className="text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-white/60 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-orange-400 group-hover:gap-3 transition-all duration-300">
                      <span>Read Article</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/insights/${post.id}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-white/70 mb-4 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-white/60 text-xs mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-orange-400 text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}