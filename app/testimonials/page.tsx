"use client"
import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Quote } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'CEO, TechVentures Inc.',
    company: 'TechVentures',
    videoThumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwY2VvfGVufDF8fHx8MTc2MTY4Mzc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'Working with John transformed our entire sales organization. We went from $5M to $22M in annual revenue in just 18 months.',
    result: '340% Revenue Growth',
    videoUrl: '#',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'Founder & CEO, ScaleCo',
    company: 'ScaleCo',
    videoThumbnail: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NjE2ODM3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The cashflow optimization strategies we implemented freed up $2.3M in working capital. Game-changing for our growth plans.',
    result: '$2.3M Capital Freed',
    videoUrl: '#',
  },
  {
    id: 3,
    name: 'Jennifer Park',
    title: 'CEO, Innovation Labs',
    company: 'Innovation Labs',
    videoThumbnail: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHdvbWFufGVufDF8fHx8MTc2MTY4Mzc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'John\'s executive coaching helped me become the leader my company needed. Our team alignment and execution improved dramatically.',
    result: '95% Team Satisfaction',
    videoUrl: '#',
  },
  {
    id: 4,
    name: 'David Thompson',
    title: 'CEO, Growth Partners',
    company: 'Growth Partners',
    videoThumbnail: 'https://images.unsplash.com/photo-1619380061814-58f03707f082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMGNlb3xlbnwxfHx8fDE3NjE2ODM3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The growth systems we built together allowed us to scale from 20 to 150 employees without losing our culture or efficiency.',
    result: '650% Team Growth',
    videoUrl: '#',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    title: 'Founder, Enterprise Solutions',
    company: 'Enterprise Solutions',
    videoThumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2MTY4Mzc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The market expansion strategy we developed opened three new geographic markets and doubled our addressable market.',
    result: '2x Market Expansion',
    videoUrl: '#',
  },
  {
    id: 6,
    name: 'Robert Kim',
    title: 'CEO, Strategic Group',
    company: 'Strategic Group',
    videoThumbnail: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzJTIwbWFufGVufDF8fHx8MTc2MTY4Mzc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'SalesFlow\'s methodology transformed our approach to sales. We achieved profitability 6 months ahead of projections.',
    result: 'Early Profitability',
    videoUrl: '#',
  },
];

export default function TestimonialsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
            Real Leaders. Real Results.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Hear from CEOs and executives who have transformed their businesses with SalesFlow. 
            Their success stories speak to our commitment to delivering measurable results.
          </motion.p>
        </div>
      </section>

      {/* TikTok-Style Vertical Video Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-300" style={{ aspectRatio: '9/16' }}>
                  {/* Video Thumbnail */}
                  <ImageWithFallback
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/60 to-transparent"></div>

                  {/* Play Button */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredId === testimonial.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 transform scale-100 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Result Badge */}
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full mb-4">
                      <span className="text-white text-sm">{testimonial.result}</span>
                    </div>

                    {/* Quote */}
                    <div className="mb-4 relative">
                      <Quote className="w-6 h-6 text-orange-500 mb-2 opacity-50" />
                      <p className="text-white text-sm leading-relaxed line-clamp-3">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Name & Title */}
                    <div>
                      <h3 className="text-white mb-1">{testimonial.name}</h3>
                      <p className="text-white/70 text-sm">{testimonial.title}</p>
                      <p className="text-white/50 text-sm">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 ring-2 ring-orange-500/50 rounded-2xl transition-opacity duration-300 ${hoveredId === testimonial.id ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#0A1628]/30 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '500+', label: 'Satisfied Clients' },
              { metric: '$2B+', label: 'Revenue Generated' },
              { metric: '98%', label: 'Success Rate' },
              { metric: '4.9/5', label: 'Average Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white mb-6">Share Your Success Story</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Have you worked with SalesFlow? We'd love to hear about your transformation 
              and share your success with our community.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group"
            >
              Submit Your Story
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}