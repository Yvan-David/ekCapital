"use client"
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Target, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Page() {
  const coreValues = [
    {
      icon: Target,
      title: 'Integrity',
      description: 'We operate with unwavering honesty and transparency in every engagement.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver world-class solutions that exceed expectations and drive results.',
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'We create lasting transformation that extends beyond immediate financial gains.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We collaborate deeply with clients to ensure sustainable success.',
    },
  ];

  const achievements = [
    { metric: '$2B+', label: 'Revenue Generated' },
    { metric: '500+', label: 'Companies Transformed' },
    { metric: '20+', label: 'Years of Experience' },
    { metric: '98%', label: 'Client Success Rate' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0A1628]/60 via-[#050b14]/40 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-900/30 to-blue-900/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <ImageWithFallback
                    src="/coach.jpeg"
                    alt="Esdras Karekezi"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-white mb-6">The Visionary Behind EK CAPITAL Group</h1>
              <p className="text-white/80 mb-6">
                Esdras Karekezi is more than a business coach—he's a transformation catalyst
                who has dedicated his career to helping visionary leaders unlock their full potential.
              </p>
              <p className="text-white/80 mb-6">
                Starting his career in the trenches of enterprise sales, John quickly recognized
                the gap between strategy and execution. This insight led him to develop the
                SalesFlow methodology, a comprehensive framework that has since revolutionized
                how businesses approach sales and cashflow management.
              </p>
              <p className="text-white/80">
                Today, Esdras works exclusively with CEOs and executive teams who are ready to
                break through growth plateaus and build organizations that create lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#0A1628]/30 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Proven Track Record</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="text-5xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <div className="text-white/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Core Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The principles that guide every decision and every client engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                    <value.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#0A1628]/40 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white mb-6">Our Vision</h2>
            <p className="text-white/80 mb-8">
              To empower a global community of visionary leaders who build sustainable,
              profitable businesses that create positive impact for their teams, customers,
              and communities. We believe that business success and social responsibility
              are not mutually exclusive—they're interdependent.
            </p>
            <Link href={'/schedule'}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

          </motion.div>
        </div>
      </section>
    </div>
  );
}