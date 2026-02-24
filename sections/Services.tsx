'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

const services = [
  {
    title: 'Sales Strategy Architecture',
    description: 'Build a robust, scalable sales framework that drives consistent revenue growth and market leadership.',
    image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NjE1ODkyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Cashflow Optimization',
    description: 'Transform your financial operations with strategic cashflow management that ensures long-term sustainability.',
    image: 'https://images.unsplash.com/photo-1745970649913-2edb9dca4f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvYWNoaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjE1NzQ4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Executive Coaching',
    description: 'Personalized guidance to elevate your leadership capabilities and drive organizational transformation.',
    image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE2NjMxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Growth Systems Design',
    description: 'Create integrated systems that automate growth, optimize operations, and scale your business efficiently.',
    image: 'https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjB0ZWFtfGVufDF8fHx8MTc2MTY2NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A1628]/50 via-[#050b14]/30 to-transparent relative overflow-hidden">
      {/* Subtle Lighting Depth */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Instagram Story Style Cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-80 snap-center group cursor-pointer"
            >
              <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105" style={{ height: '520px' }}>
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/60 to-transparent"></div>
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ring-2 ring-orange-500/50"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Learn More Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm">Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}