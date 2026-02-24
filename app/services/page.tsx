"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    id: 'sales-strategy-architecture',
    title: 'Sales Strategy Architecture',
    shortDescription: 'Build a robust, scalable sales framework that drives consistent revenue growth.',
    fullDescription: 'Our Sales Strategy Architecture service transforms your sales approach from tactical execution to strategic mastery. We work with you to design a comprehensive sales framework that aligns with your business objectives, market dynamics, and growth trajectory. This includes customer segmentation, value proposition refinement, sales process optimization, and performance metrics that actually drive results.',
    benefits: [
      'Increase sales productivity by 40-60%',
      'Reduce sales cycle time',
      'Improve win rates and deal quality',
      'Create predictable revenue streams',
      'Build a scalable sales organization',
    ],
    image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NjE1ODkyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'cashflow-optimization',
    title: 'Cashflow Optimization',
    shortDescription: 'Transform your financial operations with strategic cashflow management.',
    fullDescription: 'Cashflow is the lifeblood of any business. Our Cashflow Optimization service provides you with the tools, systems, and strategies to ensure your business maintains healthy liquidity while maximizing growth opportunities. We analyze your entire cash conversion cycle, identify bottlenecks, and implement solutions that free up capital for strategic investments.',
    benefits: [
      'Improve cash conversion cycle by 30-50%',
      'Reduce working capital requirements',
      'Enhance financial forecasting accuracy',
      'Optimize payment terms and collections',
      'Create cash reserves for growth initiatives',
    ],
    image: 'https://images.unsplash.com/photo-1745970649913-2edb9dca4f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvYWNoaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjE1NzQ4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'executive-coaching',
    title: 'Executive Coaching',
    shortDescription: 'Personalized guidance to elevate your leadership capabilities.',
    fullDescription: 'Executive leadership is both an art and a science. Our Executive Coaching program provides CEOs and senior leaders with personalized guidance to enhance their strategic thinking, decision-making, and organizational impact. Through one-on-one sessions, we address your specific challenges, unlock your potential, and accelerate your journey to becoming a transformational leader.',
    benefits: [
      'Enhance strategic decision-making capabilities',
      'Develop executive presence and influence',
      'Navigate complex organizational challenges',
      'Build high-performing leadership teams',
      'Achieve better work-life integration',
    ],
    image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE2NjMxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'growth-systems-design',
    title: 'Growth Systems Design',
    shortDescription: 'Create integrated systems that automate growth and scale your business.',
    fullDescription: 'Sustainable growth requires more than just hard work—it requires intelligent systems. Our Growth Systems Design service helps you build integrated, automated processes that drive consistent results while freeing your team to focus on high-value activities. From lead generation to customer retention, we design systems that scale with your ambitions.',
    benefits: [
      'Automate repetitive business processes',
      'Scale operations without proportional cost increases',
      'Improve operational efficiency by 50-70%',
      'Enhance customer experience and retention',
      'Create sustainable competitive advantages',
    ],
    image: 'https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjB0ZWFtfGVufDF8fHx8MTc2MTY2NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'team-performance',
    title: 'Team Performance Acceleration',
    shortDescription: 'Unlock your team\'s full potential through strategic training and development.',
    fullDescription: 'Your success is directly tied to your team\'s capabilities. Our Team Performance Acceleration program provides comprehensive training and development that transforms good teams into great ones. We focus on practical skills, mindset shifts, and collaborative frameworks that drive measurable improvement in team performance and business results.',
    benefits: [
      'Increase team productivity and engagement',
      'Reduce turnover and improve retention',
      'Develop a culture of continuous improvement',
      'Enhance cross-functional collaboration',
      'Build future-ready leadership pipeline',
    ],
    image: 'https://images.unsplash.com/photo-1621359857151-a884d05f8667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYW5zZm9ybWF0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjE2NDUyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'market-expansion',
    title: 'Market Expansion Strategy',
    shortDescription: 'Strategic guidance for entering new markets and scaling geographically.',
    fullDescription: 'Expanding into new markets is one of the most effective growth strategies—and one of the riskiest. Our Market Expansion Strategy service provides you with the insights, frameworks, and execution support needed to successfully enter new markets, whether geographic, demographic, or product-based. We help you identify opportunities, mitigate risks, and execute with confidence.',
    benefits: [
      'Identify high-potential market opportunities',
      'Develop market entry strategies',
      'Minimize expansion risks and costs',
      'Accelerate time to market profitability',
      'Build sustainable competitive positioning',
    ],
    image: 'https://images.unsplash.com/photo-1581374820531-029275791beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBleGVjdXRpdmUlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjE2ODM3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Comprehensive solutions designed to transform your business from the inside out. 
            Each service is tailored to your unique challenges and growth objectives.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-orange-400 group-hover:gap-3 transition-all duration-300">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#0A1628] to-[#050b14] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Image */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <ImageWithFallback
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <h2 className="text-white mb-6">{selectedService.title}</h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <h3 className="text-white mb-4">Key Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group w-full md:w-auto"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}