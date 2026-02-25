'use client';

import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-transparent via-[#0A1628]/30 to-transparent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-900/30 to-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-blue-900/30 to-indigo-900/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Coach Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/coach.jpeg"
                  alt="Coach - John Anderson"
                  width={1080}
                  height={1080}
                  priority
                  className="w-full h-auto"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-orange-500/30 border border-orange-400/20">
                <div className="text-center">
                  <div className="text-sm opacity-90">Over</div>
                  <div className="text-3xl">20 Years</div>
                  <div className="text-sm opacity-90">Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-white mb-6">
              Meet the Coach Behind SalesFlow
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-white/80">
                John Anderson is a globally recognized sales strategist and executive coach 
                who has helped hundreds of CEOs and business leaders transform their organizations 
                through innovative sales architecture and cashflow optimization.
              </p>
              
              <p className="text-white/80">
                With over 20 years of experience scaling businesses from startup to IPO, 
                John brings a unique blend of strategic vision and hands-on execution. His 
                methodology has generated over $2 billion in additional revenue for clients 
                across diverse industries.
              </p>
              
              <p className="text-white/80">
                His mission is simple: empower visionary leaders to build sustainable, 
                profitable businesses that create lasting impact in their industries and communities.
              </p>
            </div>

            {/* Values Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Integrity', icon: '🎯' },
                { label: 'Excellence', icon: '⭐' },
                { label: 'Impact', icon: '🚀' },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{value.icon}</div>
                  <div className="text-white/90 text-sm">{value.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 group"
              >
                Learn More About John
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}