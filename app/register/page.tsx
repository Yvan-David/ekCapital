'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function RegisterPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const heroRef = useRef(null);

  const whyJoin = [
    {
      // icon: '🎯',
      title: 'Personal Attention',
      description: 'Get 1-on-1 coaching directly from John Anderson and his elite team. Your success is our priority.',
    },
    {
      // icon: '📚',
      title: 'Proven Frameworks',
      description: 'Get straight to what works. Battle-tested strategies that have generated $2B+ in revenue for our clients.',
    },
    {
      // icon: '🔧',
      title: 'Customized Plan',
      description: 'No cookie-cutter approach. We build a personalized implementation plan specific to your business.',
    },
    {
      // icon: '🚀',
      title: 'Immediate Results',
      description: 'Start immediately upon approval. See tangible progress in the first 90 days.',
    },
  ];

  const faqs = [
    {
      question: 'How does the coaching work?',
      answer: 'After your application is approved, we schedule your first session within 24 hours. You\'ll work directly with John\'s team on a customized plan tailored to your business. Sessions are scheduled around your availability.'
    },
    {
      question: 'When can I start?',
      answer: 'You can start immediately after your application is approved. We review applications daily and get back to qualified candidates within 24 hours.'
    },
    {
      question: 'Is this right for my business?',
      answer: 'Our coaching is designed for CEOs and founders doing $1M+ in revenue who want accelerated growth. If you\'re scaling a business and want expert guidance, this is for you.'
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We\'re confident in our methodology. Try the first session. If you don\'t see value, we offer a full refund.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Pricing depends on your business size and goals. We offer flexible payment plans tailored to your situation. We\'ll discuss pricing during the application review.'
    },
    {
      question: 'Can I pause or cancel anytime?',
      answer: 'Yes. We want you to have a positive experience. You can pause or adjust your coaching plan anytime based on your needs.'
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A1628' }}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(243, 73, 0, 0.15) 0%, rgba(30, 58, 95, 0.15) 100%)',
            animationDuration: '8s' 
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.15) 0%, rgba(79, 70, 229, 0.15) 100%)',
            animationDuration: '10s' 
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[600px] flex items-center justify-center pt-32 pb-20 overflow-hidden z-10">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full border"
              style={{ borderColor: 'rgba(243, 73, 0, 0.5)', backgroundColor: 'rgba(243, 73, 0, 0.1)' }}
            >
              <span style={{ color: '#f34900' }} className="text-sm font-semibold"> Accepting Applications</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span style={{ color: '#ffffff' }}>Ready to Scale Your</span>
              <br />
              <span 
                style={{
                  backgroundImage: 'linear-gradient(to right, #f34900, #d94000)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  display: 'inline-block',
                  color: 'transparent'
                }}
              >
                Business?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Get personalized 1-on-1 coaching from John Anderson and his team. The same strategies that have helped 500+ CEOs scale to 8-figures. Start immediately upon approval.
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              href="https://tally.so/r/KYM58K" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg transition-all duration-300 group"
                style={{
                  boxShadow: '0 0 40px rgba(243, 73, 0, 0.2)'
                }}
              >
                Apply Now
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.a>

            {/* Stats Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-8"
            >
              {[
                { value: '500+', label: 'CEOs Coached' },
                { value: '$2B+', label: 'Revenue Generated' },
                { value: '98%', label: 'Success Rate' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div style={{ color: '#f34900' }} className="text-3xl font-bold">{stat.value}</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="relative py-24 px-6 z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(243, 73, 0, 0.2) 0%, transparent 100%)' }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16"
            style={{ color: '#ffffff' }}
          >
            Why Choose SalesFlow Coaching?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whyJoin.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: hoveredCard === index ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                  borderColor: hoveredCard === index ? 'rgba(243, 73, 0, 0.5)' : 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.div
                  animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-7xl mb-6"
                >
                  {/* {item.icon} */}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="leading-relaxed">
                  {item.description}
                </p>
                
                {hoveredCard === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '40px' }}
                    className="h-1 mt-6 rounded-full"
                    style={{ background: 'linear-gradient(to right, #f34900, #d94000)' }}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ color: '#ffffff' }} className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="text-xl mb-10 max-w-2xl mx-auto">
              Fill out your application form below. We'll review your information and reach out within 24 hours to schedule your first coaching session.
            </p>
            <motion.a 
              href="https://tally.so/r/KYM58K" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg transition-all duration-300 group"
                style={{
                  boxShadow: '0 10px 30px rgba(243, 73, 0, 0.2)'
                }}
              >
                Open Application Form
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, transparent 100%)' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
            style={{ color: '#ffffff' }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div 
            className="rounded-2xl p-8 border space-y-2"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-6 text-left group rounded-lg transition-all duration-200"
                  style={{ backgroundColor: expandedFaq === index ? 'rgba(255, 255, 255, 0.08)' : 'transparent' }}
                >
                  <span style={{ color: '#ffffff' }} className="text-lg font-semibold flex-1">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: '#f34900' }}
                    className="text-2xl flex-shrink-0 font-light"
                  >
                    +
                  </motion.span>
                </button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedFaq === index ? 1 : 0,
                    height: expandedFaq === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-0">
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 z-10 overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(243, 73, 0, 0.25) 0%, rgba(30, 58, 95, 0.25) 100%)' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ color: '#ffffff' }} className="text-5xl font-bold mb-6">
              Your Next Level Awaits
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }} className="text-xl mb-10 max-w-2xl mx-auto">
              Join 500+ CEOs who have transformed their businesses with personalized coaching from John Anderson.
            </p>
            <motion.a 
              href="https://tally.so/r/KYM58K" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl transition-all duration-300 hover:scale-105 group"
                style={{
                  boxShadow: '0 20px 40px rgba(243, 73, 0, 0.25)'
                }}
              >
                Claim Your Spot Now
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
