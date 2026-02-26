// "use client"
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, X } from 'lucide-react';
// import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
// import { motion, AnimatePresence } from 'motion/react';

// const services = [
//   {
//     id: 'sales-strategy-architecture',
//     title: 'Sales Strategy Architecture',
//     shortDescription: 'Build a robust, scalable sales framework that drives consistent revenue growth.',
//     fullDescription: 'Our Sales Strategy Architecture service transforms your sales approach from tactical execution to strategic mastery. We work with you to design a comprehensive sales framework that aligns with your business objectives, market dynamics, and growth trajectory. This includes customer segmentation, value proposition refinement, sales process optimization, and performance metrics that actually drive results.',
//     benefits: [
//       'Increase sales productivity by 40-60%',
//       'Reduce sales cycle time',
//       'Improve win rates and deal quality',
//       'Create predictable revenue streams',
//       'Build a scalable sales organization',
//     ],
//     image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NjE1ODkyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//   },
//   {
//     id: 'cashflow-optimization',
//     title: 'Cashflow Optimization',
//     shortDescription: 'Transform your financial operations with strategic cashflow management.',
//     fullDescription: 'Cashflow is the lifeblood of any business. Our Cashflow Optimization service provides you with the tools, systems, and strategies to ensure your business maintains healthy liquidity while maximizing growth opportunities. We analyze your entire cash conversion cycle, identify bottlenecks, and implement solutions that free up capital for strategic investments.',
//     benefits: [
//       'Improve cash conversion cycle by 30-50%',
//       'Reduce working capital requirements',
//       'Enhance financial forecasting accuracy',
//       'Optimize payment terms and collections',
//       'Create cash reserves for growth initiatives',
//     ],
//     image: 'https://images.unsplash.com/photo-1745970649913-2edb9dca4f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvYWNoaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjE1NzQ4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//   },
//   {
//     id: 'executive-coaching',
//     title: 'Executive Coaching',
//     shortDescription: 'Personalized guidance to elevate your leadership capabilities.',
//     fullDescription: 'Executive leadership is both an art and a science. Our Executive Coaching program provides CEOs and senior leaders with personalized guidance to enhance their strategic thinking, decision-making, and organizational impact. Through one-on-one sessions, we address your specific challenges, unlock your potential, and accelerate your journey to becoming a transformational leader.',
//     benefits: [
//       'Enhance strategic decision-making capabilities',
//       'Develop executive presence and influence',
//       'Navigate complex organizational challenges',
//       'Build high-performing leadership teams',
//       'Achieve better work-life integration',
//     ],
//     image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE2NjMxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//   },
//   {
//     id: 'growth-systems-design',
//     title: 'Growth Systems Design',
//     shortDescription: 'Create integrated systems that automate growth and scale your business.',
//     fullDescription: 'Sustainable growth requires more than just hard work—it requires intelligent systems. Our Growth Systems Design service helps you build integrated, automated processes that drive consistent results while freeing your team to focus on high-value activities. From lead generation to customer retention, we design systems that scale with your ambitions.',
//     benefits: [
//       'Automate repetitive business processes',
//       'Scale operations without proportional cost increases',
//       'Improve operational efficiency by 50-70%',
//       'Enhance customer experience and retention',
//       'Create sustainable competitive advantages',
//     ],
//     image: 'https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjB0ZWFtfGVufDF8fHx8MTc2MTY2NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//   },
//   {
//     id: 'team-performance',
//     title: 'Team Performance Acceleration',
//     shortDescription: 'Unlock your team\'s full potential through strategic training and development.',
//     fullDescription: 'Your success is directly tied to your team\'s capabilities. Our Team Performance Acceleration program provides comprehensive training and development that transforms good teams into great ones. We focus on practical skills, mindset shifts, and collaborative frameworks that drive measurable improvement in team performance and business results.',
//     benefits: [
//       'Increase team productivity and engagement',
//       'Reduce turnover and improve retention',
//       'Develop a culture of continuous improvement',
//       'Enhance cross-functional collaboration',
//       'Build future-ready leadership pipeline',
//     ],
//     image: 'https://images.unsplash.com/photo-1621359857151-a884d05f8667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYW5zZm9ybWF0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjE2NDUyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//   },
//   {
//     id: 'market-expansion',
//     title: 'Market Expansion Strategy',
//     shortDescription: 'Strategic guidance for entering new markets and scaling geographically.',
//     fullDescription: 'Expanding into new markets is one of the most effective growth strategies—and one of the riskiest. Our Market Expansion Strategy service provides you with the insights, frameworks, and execution support needed to successfully enter new markets, whether geographic, demographic, or product-based. We help you identify opportunities, mitigate risks, and execute with confidence.',
//     benefits: [
//       'Identify high-potential market opportunities',
//       'Develop market entry strategies',
//       'Minimize expansion risks and costs',
//       'Accelerate time to market profitability',
//       'Build sustainable competitive positioning',
//     ],
//     image: 'https://images.unsplash.com/photo-1581374820531-029275791beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBleGVjdXRpdmUlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjE2ODM3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//   },
// ];

// export default function ServicesPage() {
//   const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="py-32 bg-gradient-to-b from-[#0A1628]/60 via-[#050b14]/40 to-transparent relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-900/30 to-blue-900/30 rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white mb-6"
//           >
//             Our Services
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-white/80 max-w-2xl mx-auto"
//           >
//             Comprehensive solutions designed to transform your business from the inside out. 
//             Each service is tailored to your unique challenges and growth objectives.
//           </motion.p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group cursor-pointer"
//                 onClick={() => setSelectedService(service)}
//               >
//                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
//                   {/* Image */}
//                   <div className="relative h-64 overflow-hidden">
//                     <ImageWithFallback
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent"></div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <h3 className="text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <p className="text-white/70 mb-4">
//                       {service.shortDescription}
//                     </p>
//                     <div className="flex items-center gap-2 text-orange-400 group-hover:gap-3 transition-all duration-300">
//                       <span className="text-sm">Learn More</span>
//                       <ArrowRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Detail Modal */}
//       <AnimatePresence>
//         {selectedService && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
//             onClick={() => setSelectedService(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="bg-gradient-to-br from-[#0A1628] to-[#050b14] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedService(null)}
//                 className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
//               >
//                 <X className="w-5 h-5 text-white" />
//               </button>

//               {/* Image */}
//               <div className="relative h-80 overflow-hidden rounded-t-3xl">
//                 <ImageWithFallback
//                   src={selectedService.image}
//                   alt={selectedService.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent"></div>
//               </div>

//               {/* Content */}
//               <div className="p-8 md:p-12">
//                 <h2 className="text-white mb-6">{selectedService.title}</h2>
//                 <p className="text-white/80 mb-8 leading-relaxed">
//                   {selectedService.fullDescription}
//                 </p>

//                 <h3 className="text-white mb-4">Key Benefits</h3>
//                 <ul className="space-y-3 mb-8">
//                   {selectedService.benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mt-0.5">
//                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <span className="text-white/80">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group w-full md:w-auto"
//                 >
//                   Book Consultation
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

/* ─── DATA ─── */
const services = [
  {
    id: 1,
    number: "01",
    title: "Business",
    accent: "Strategy",
    tagline: "From vision to execution",
    description: "We craft razor-sharp strategies that align your vision with market opportunity — building a precise roadmap that turns ambition into measurable, repeatable success.",
    bullets: ["Market positioning", "Competitive analysis", "90-day action plans", "KPI frameworks"],
    modalDesc: "Your business is only as strong as the strategy behind it. Our Business Strategy service gives you a battle-tested blueprint that aligns every decision with your long-term vision. We analyze your market, competitive landscape, and internal capabilities to build a precision roadmap that eliminates guesswork and creates unstoppable momentum.",
    keyBenefits: [
      "Gain crystal-clear direction with a 90-day execution plan",
      "Identify and eliminate the top bottlenecks holding you back",
      "Build a competitive moat that is hard to replicate",
      "Align your team around one unified growth strategy",
      "Track progress with custom KPI dashboards and weekly reviews",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Revenue",
    accent: "Scaling",
    tagline: "Past $1M, $10M, and beyond",
    description: "Unlock exponential revenue growth with proven systems. We identify your highest-leverage opportunities and build the sales engine to scale past every ceiling.",
    bullets: ["Sales funnel optimization", "Pricing strategy", "Revenue forecasting", "Team incentives"],
    modalDesc: "Revenue scaling is not about working harder — it is about working smarter with systems that compound over time. We dissect your entire revenue engine, from lead generation to close to upsell, and rebuild it for maximum efficiency. The result is a business that generates more revenue with less friction and greater predictability.",
    keyBenefits: [
      "Increase monthly recurring revenue by 30–50% within 6 months",
      "Build a repeatable, documented sales process your team can execute",
      "Optimize pricing to capture more value without losing clients",
      "Create multiple revenue streams to reduce single-source dependency",
      "Install forecasting systems so you always know what is coming next",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Leadership",
    accent: "Coaching",
    tagline: "Become the CEO your business needs",
    description: "Transform into a high-performance leader through elite 1-on-1 coaching. Sharpen your mindset, decision-making, and executive presence to lead at the highest level.",
    bullets: ["1-on-1 sessions", "Mindset mastery", "Executive presence", "Team leadership"],
    modalDesc: "The ceiling of your business is the ceiling of its leader. Our Leadership Coaching program is a transformative 1-on-1 engagement designed to close the gap between where you are and the leader your business demands you to be. We work on the mental models, habits, and communication styles that define world-class executives.",
    keyBenefits: [
      "Develop unshakeable clarity and confidence in high-stakes decisions",
      "Build an executive communication style that commands respect",
      "Create high-performance habits that multiply your daily output",
      "Learn how to delegate effectively and stop being the bottleneck",
      "Cultivate a winning team culture from the top down",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Marketing",
    accent: "Mastery",
    tagline: "Attract premium clients on autopilot",
    description: "Build a magnetic brand and marketing system that pulls ideal clients to you. From content strategy to paid acquisition — we make your brand impossible to ignore.",
    bullets: ["Brand positioning", "Content strategy", "Paid acquisition", "Conversion funnels"],
    modalDesc: "Most businesses waste money on marketing that does not convert. Our Marketing Mastery program rebuilds your entire customer acquisition engine from the ground up — starting with a brand positioning so sharp it instantly resonates with your ideal client, all the way through to automated funnels that work while you sleep.",
    keyBenefits: [
      "Create a brand message that attracts premium clients and repels the wrong ones",
      "Build a content system that generates inbound leads consistently",
      "Design paid acquisition campaigns with a proven positive ROI",
      "Implement conversion funnels that turn cold traffic into paying clients",
      "Establish a referral engine that compounds your client base month over month",
    ],
  },
];

const serviceIcons:any = {
  1: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <rect x="8" y="36" width="8" height="20" rx="2" fill="#f34900" opacity="0.3"/>
      <rect x="20" y="26" width="8" height="30" rx="2" fill="#f34900" opacity="0.55"/>
      <rect x="32" y="14" width="8" height="42" rx="2" fill="#f34900"/>
      <rect x="44" y="20" width="8" height="36" rx="2" fill="#f34900" opacity="0.7"/>
      <polyline points="12,32 24,22 36,10 48,16" stroke="#f34900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="32" r="3" fill="#f34900"/>
      <circle cx="24" cy="22" r="3" fill="#f34900"/>
      <circle cx="36" cy="10" r="3" fill="#f34900"/>
      <circle cx="48" cy="16" r="3" fill="#f34900"/>
    </svg>
  ),
  2: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <circle cx="32" cy="20" r="10" fill="none" stroke="#f34900" strokeWidth="2"/>
      <text x="32" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f34900" fontFamily="monospace">$</text>
      <path d="M20 32 Q10 42 14 54 Q20 62 32 58 Q44 62 50 54 Q54 42 44 32" fill="#f34900" opacity="0.15" stroke="#f34900" strokeWidth="1.5"/>
      <path d="M26 40 L22 56 L32 52 L42 56 L38 40" fill="#f34900" opacity="0.4"/>
      <circle cx="32" cy="52" r="3" fill="#f34900"/>
      <line x1="32" y1="30" x2="32" y2="40" stroke="#f34900" strokeWidth="2" strokeDasharray="3,2"/>
    </svg>
  ),
  3: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <circle cx="32" cy="16" r="9" fill="#f34900" opacity="0.9"/>
      <path d="M18 38 Q18 28 32 28 Q46 28 46 38 L46 42 L18 42 Z" fill="#f34900" opacity="0.7"/>
      <path d="M24 12 L27 7 L32 10 L37 7 L40 12" stroke="#f34900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="24" r="6" fill="#72756c" opacity="0.5"/>
      <path d="M6 38 Q6 30 14 30 Q22 30 22 38" fill="#72756c" opacity="0.4"/>
      <circle cx="50" cy="24" r="6" fill="#72756c" opacity="0.5"/>
      <path d="M42 38 Q42 30 50 30 Q58 30 58 38" fill="#72756c" opacity="0.4"/>
      <rect x="26" y="50" width="12" height="6" rx="2" fill="#f34900" opacity="0.8"/>
    </svg>
  ),
  4: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <path d="M14 24 L14 40 L26 40 L52 54 L52 10 L26 24 Z" fill="#f34900" opacity="0.8"/>
      <rect x="8" y="24" width="8" height="16" rx="2" fill="#f34900" opacity="0.5"/>
      <path d="M56 22 Q62 32 56 42" stroke="#f34900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M60 16 Q70 32 60 48" stroke="#f34900" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45"/>
      <circle cx="38" cy="32" r="5" fill="#1c2840"/>
      <text x="38" y="36" textAnchor="middle" fontSize="7" fill="#f34900" fontWeight="bold">!</text>
    </svg>
  ),
};

const process = [
  { step: "01", title: "Discovery Call", desc: "We dig deep into your business, goals, bottlenecks, and ambitions in a focused 60-minute session." },
  { step: "02", title: "Strategy Build", desc: "Our team builds a custom blueprint tailored to your exact business model and growth stage." },
  { step: "03", title: "Execution", desc: "We work side-by-side with you, implementing frameworks, tracking metrics, and iterating fast." },
  { step: "04", title: "Scale & Sustain", desc: "Once the engine is running, we optimize for compounding growth and long-term sustainability." },
];

const stats = [
  { value: "$250M+", label: "Revenue Generated" },
  { value: "300+", label: "Businesses Coached" },
  { value: "94%", label: "Client Success Rate" },
  { value: "8 Yrs", label: "In The Trenches" },
];

const faqs = [
  { q: "Who is this coaching for?", a: "Our programs are designed for founders, entrepreneurs, and business owners generating $100K–$10M+ who are ready to break through to the next level." },
  { q: "How long are the coaching engagements?", a: "Most clients work with us for 3–12 months. We offer intensive 90-day sprints and longer-term partnerships depending on your goals." },
  { q: "What results can I realistically expect?", a: "Most clients see measurable revenue improvements within 60–90 days. Long-term, we aim for 2–5x growth milestones within 12 months." },
  { q: "Do you work with teams or just founders?", a: "Both. We coach individual founders and also run team-wide workshops and leadership development programs." },
];

/* ─── MODAL ─── */
function ServiceModal({ service, onClose }: number| any) {
  useEffect(() => {
    const onKey = (e:any) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed", inset: 0,
        background: "rgba(8,12,20,0.88)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        animation: "backdropIn 0.2s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#1c2840",
          border: "1px solid rgba(243,73,0,0.25)",
          borderRadius: "14px",
          width: "100%", maxWidth: "620px",
          maxHeight: "88vh",
          position: "relative",
          display: "flex", flexDirection: "column",
          boxShadow: "0 48px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(243,73,0,0.1)",
          animation: "modalIn 0.3s cubic-bezier(0.23,1,0.32,1)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #f34900, rgba(243,73,0,0.2))", borderRadius: "14px 14px 0 0", zIndex: 1 }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            width: "36px", height: "36px",
            borderRadius: "50%",
            border: "1.5px solid rgba(114,117,108,0.3)",
            background: "#131b2a",
            color: "#72756c",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", zIndex: 10,
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#f34900"; e.currentTarget.style.color = "#f34900"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(114,117,108,0.3)"; e.currentTarget.style.color = "#72756c"; }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Scrollable body */}
        <div style={{ overflowY: "auto", padding: "40px 40px 44px", scrollbarWidth: "thin", scrollbarColor: "rgba(243,73,0,0.3) transparent" }}>

          {/* Icon + Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "24px", paddingRight: "40px" }}>
            <div style={{ width: "60px", height: "60px", background: "rgba(243,73,0,0.12)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {serviceIcons[service.id]}
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#f34900", marginBottom: "6px", fontFamily: "'Syne', sans-serif" }}>
                {service.number} — {service.tagline}
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", letterSpacing: "2px", color: "#c8c6bf", lineHeight: 1 }}>
                {service.title} <span style={{ color: "#f34900" }}>{service.accent}</span>
              </h2>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(243,73,0,0.4), rgba(114,117,108,0.1), transparent)", marginBottom: "22px" }} />

          {/* Description */}
          <p style={{ fontSize: "14px", color: "#72756c", lineHeight: 1.85, marginBottom: "28px", fontFamily: "'Syne', sans-serif" }}>
            {service.modalDesc}
          </p>

          {/* Key Benefits */}
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#c8c6bf", marginBottom: "16px", fontFamily: "'Syne', sans-serif" }}>
            Key Benefits
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "13px", marginBottom: "36px", padding: 0 }}>
            {service.keyBenefits.map((b:any, i:any) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "13px", fontSize: "14px", color: "#72756c", lineHeight: 1.55, fontFamily: "'Syne', sans-serif" }}>
                <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#f34900", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1.5 5.5L4 8.5L9.5 2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#f34900", color: "#fff",
              fontFamily: "'Syne', sans-serif",
              fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
              padding: "15px 30px", borderRadius: "4px", textDecoration: "none",
              boxShadow: "0 8px 24px rgba(243,73,0,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(243,73,0,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(243,73,0,0.35)"; }}
          >
            Book Consultation
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&display=swap');

        @keyframes backdropIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .sp-page {
          background: #131b2a;
          font-family: 'Syne', sans-serif;
          color: #c8c6bf;
          overflow-x: hidden;
          /* ── Navbar space: adjust 80px to match your actual navbar height ── */
          padding-top: 80px;
          /* ── Footer space: adjust 60px to match your actual footer ── */
          padding-bottom: 60px;
        }

        /* HERO */
        .sp-hero {
          position: relative;
          padding: 80px 5vw 90px;
          overflow: hidden;
        }
        .sp-hero-bg {
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 50% at 80% 40%, rgba(243,73,0,0.1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(36,51,82,0.7) 0%, transparent 60%);
        }
        .sp-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(114,117,108,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(114,117,108,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .sp-hero-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; }
        .sp-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
          color: #f34900; margin-bottom: 20px;
        }
        .sp-eyebrow::before { content: ''; display: block; width: 28px; height: 2px; background: #f34900; }
        .sp-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 9vw, 108px);
          line-height: 0.95; color: #c8c6bf; letter-spacing: 2px; margin-bottom: 28px;
        }
        .sp-hero-title em { font-style: normal; color: #f34900; }
        .sp-hero-title .outline { font-style: normal; -webkit-text-stroke: 1.5px rgba(200,198,191,0.3); color: transparent; }
        .sp-hero-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .sp-hero-desc { font-size: 16px; color: #72756c; max-width: 480px; line-height: 1.75; }
        .sp-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .sp-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #f34900; color: #fff;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 15px 30px; border-radius: 4px; border: none; cursor: pointer;
          text-decoration: none; transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 8px 24px rgba(243,73,0,0.3);
        }
        .sp-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(243,73,0,0.45); background: #d94000; }
        .sp-btn-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #c8c6bf;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 15px 30px; border-radius: 4px;
          border: 1.5px solid rgba(200,198,191,0.2);
          cursor: pointer; text-decoration: none; transition: border-color 0.2s, color 0.2s;
        }
        .sp-btn-ghost:hover { border-color: #f34900; color: #f34900; }
        .sp-hero-stats {
          display: flex; margin-top: 64px;
          border-top: 1px solid rgba(114,117,108,0.2); padding-top: 44px;
        }
        .sp-hstat { flex: 1; padding-right: 28px; border-right: 1px solid rgba(114,117,108,0.15); margin-right: 28px; }
        .sp-hstat:last-child { border-right: none; margin-right: 0; }
        .sp-hstat-val { font-family: 'Bebas Neue', sans-serif; font-size: 40px; color: #f34900; line-height: 1; letter-spacing: 2px; }
        .sp-hstat-label { font-size: 11px; color: #72756c; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 4px; }

        /* SERVICES */
        .sp-services { padding: 90px 5vw; background: #1c2840; position: relative; }
        .sp-services::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(243,73,0,0.4), transparent); }
        .sp-section-hdr {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: 56px; max-width: 1100px; margin-left: auto; margin-right: auto;
          gap: 24px; flex-wrap: wrap;
        }
        .sp-section-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(36px, 5vw, 58px); color: #c8c6bf; letter-spacing: 2px; line-height: 1; }
        .sp-section-title em { font-style: normal; color: #f34900; }
        .sp-section-desc { font-size: 14px; color: #72756c; max-width: 320px; line-height: 1.7; text-align: right; }
        .sp-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3px; max-width: 1100px; margin: 0 auto; }

        /* ── KEY FIX: cards use z-index stacking, no overflow:hidden, pseudo-elements are pointer-events:none ── */
        .sp-card {
          background: #131b2a;
          padding: 44px 40px;
          position: relative;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s cubic-bezier(0.23,1,0.32,1), background 0.3s;
        }
        .sp-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(243,73,0,0.05) 0%, transparent 50%);
          opacity: 0; transition: opacity 0.35s;
          pointer-events: none; /* ← CRITICAL: prevents blocking clicks */
        }
        .sp-card::after {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 3px;
          background: #f34900;
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
          pointer-events: none; /* ← CRITICAL */
        }
        .sp-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 32px 72px rgba(0,0,0,0.5), 0 0 0 1px rgba(243,73,0,0.15); background: #243352; z-index: 5; }
        .sp-card:hover::before { opacity: 1; }
        .sp-card:hover::after { transform: scaleY(1); }

        .sp-card-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 28px; }
        .sp-card-num { font-family: 'Bebas Neue', sans-serif; font-size: 13px; letter-spacing: 3px; color: #f34900; opacity: 0.55; }
        .sp-card-icon-box { width: 54px; height: 54px; background: rgba(243,73,0,0.1); border-radius: 12px; padding: 9px; transition: background 0.3s; display: flex; align-items: center; justify-content: center; }
        .sp-card:hover .sp-card-icon-box { background: rgba(243,73,0,0.2); }
        .sp-card-title { font-family: 'Bebas Neue', sans-serif; font-size: 34px; letter-spacing: 2px; color: #c8c6bf; line-height: 1; margin-bottom: 6px; }
        .sp-card-title em { font-style: normal; color: #f34900; }
        .sp-card-tagline { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #72756c; margin-bottom: 18px; }
        .sp-card-desc { font-size: 14px; color: #72756c; line-height: 1.75; margin-bottom: 24px; }
        .sp-bullets { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 30px; }
        .sp-pill {
          font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;
          color: #72756c; background: rgba(114,117,108,0.1); padding: 5px 11px;
          border-radius: 2px; border: 1px solid rgba(114,117,108,0.15);
          transition: color 0.25s, border-color 0.25s, background 0.25s;
        }
        .sp-card:hover .sp-pill { color: #f34900; border-color: rgba(243,73,0,0.25); background: rgba(243,73,0,0.06); }

        /* ── Learn More button — explicitly on top with z-index ── */
        .sp-learn-btn {
          position: relative; z-index: 10; /* sits above ::before and ::after */
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: #72756c; background: none; border: none; cursor: pointer; padding: 0;
          font-family: 'Syne', sans-serif; transition: color 0.25s, gap 0.25s;
        }
        .sp-card:hover .sp-learn-btn { color: #f34900; gap: 13px; }

        /* PROCESS */
        .sp-process { padding: 90px 5vw; background: #131b2a; }
        .sp-process-inner { max-width: 1100px; margin: 0 auto; }
        .sp-process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px; margin-top: 52px; position: relative; }
        .sp-process-grid::before { content: ''; position: absolute; top: 34px; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, rgba(243,73,0,0.3), rgba(243,73,0,0.3), transparent); pointer-events: none; }
        .sp-pitem { padding: 32px 26px; background: #1c2840; transition: background 0.3s; }
        .sp-pitem:hover { background: #243352; }
        .sp-pstep { width: 50px; height: 50px; border-radius: 50%; border: 2px solid #f34900; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue', sans-serif; font-size: 17px; letter-spacing: 2px; color: #f34900; margin-bottom: 22px; background: #131b2a; position: relative; z-index: 1; transition: background 0.3s, color 0.3s; }
        .sp-pitem:hover .sp-pstep { background: #f34900; color: #fff; }
        .sp-ptitle { font-family: 'Bebas Neue', sans-serif; font-size: 21px; letter-spacing: 2px; color: #c8c6bf; margin-bottom: 10px; }
        .sp-pdesc { font-size: 13px; color: #72756c; line-height: 1.7; }

        /* STATS */
        .sp-stats { background: #f34900; padding: 60px 5vw; }
        .sp-stats-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); }
        .sp-sitem { padding: 0 28px; border-right: 1px solid rgba(255,255,255,0.2); text-align: center; }
        .sp-sitem:last-child { border-right: none; }
        .sp-sval { font-family: 'Bebas Neue', sans-serif; font-size: 50px; color: #fff; letter-spacing: 3px; line-height: 1; }
        .sp-slabel { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-top: 5px; }

        /* FAQ */
        .sp-faq { padding: 90px 5vw; background: #1c2840; position: relative; }
        .sp-faq::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(243,73,0,0.4), transparent); }
        .sp-faq-inner { max-width: 800px; margin: 0 auto; }
        .sp-faq-list { margin-top: 52px; display: flex; flex-direction: column; gap: 3px; }
        .sp-fitem { background: #131b2a; cursor: pointer; border-left: 3px solid transparent; transition: border-color 0.25s, background 0.25s; }
        .sp-fitem.open { background: #243352; border-left-color: #f34900; }
        .sp-fq { display: flex; align-items: center; justify-content: space-between; padding: 22px 26px; font-size: 15px; font-weight: 700; color: #c8c6bf; gap: 16px; }
        .sp-ficon { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid rgba(243,73,0,0.35); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #f34900; font-size: 18px; line-height: 1; transition: transform 0.3s; }
        .sp-fitem.open .sp-ficon { transform: rotate(45deg); background: #f34900; color: #fff; border-color: #f34900; }
        .sp-fa { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.23,1,0.32,1); font-size: 14px; color: #72756c; line-height: 1.8; padding: 0 26px; }
        .sp-fitem.open .sp-fa { max-height: 160px; padding: 0 26px 22px; }

        /* CTA */
        .sp-cta { padding: 90px 5vw; background: #131b2a; position: relative; overflow: hidden; text-align: center; }
        .sp-cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(243,73,0,0.09) 0%, transparent 70%); pointer-events: none; }
        .sp-cta-ghost-text { position: absolute; font-family: 'Bebas Neue', sans-serif; font-size: clamp(90px, 18vw, 200px); letter-spacing: 8px; color: rgba(114,117,108,0.04); top: 50%; left: 50%; transform: translate(-50%,-50%); white-space: nowrap; pointer-events: none; user-select: none; }
        .sp-cta-inner { position: relative; z-index: 2; max-width: 660px; margin: 0 auto; }
        .sp-cta-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(40px, 7vw, 76px); color: #c8c6bf; letter-spacing: 3px; line-height: 1; margin-bottom: 18px; }
        .sp-cta-title em { font-style: normal; color: #f34900; }
        .sp-cta-sub { font-size: 15px; color: #72756c; line-height: 1.7; margin-bottom: 36px; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .sp-process-grid { grid-template-columns: repeat(2, 1fr); }
          .sp-process-grid::before { display: none; }
        }
        @media (max-width: 768px) {
          .sp-page { padding-top: 70px; }
          .sp-grid { grid-template-columns: 1fr; }
          .sp-section-desc { text-align: left; }
          .sp-hero-stats { flex-wrap: wrap; gap: 28px; }
          .sp-hstat { flex: 1 1 40%; border-right: none; margin-right: 0; border-bottom: 1px solid rgba(114,117,108,0.15); padding-bottom: 20px; }
          .sp-hero-row { flex-direction: column; align-items: flex-start; }
          .sp-section-hdr { flex-direction: column; align-items: flex-start; }
          .sp-stats-inner { grid-template-columns: repeat(2, 1fr); gap: 28px; }
          .sp-sitem { border-right: none; }
        }
        @media (max-width: 560px) {
          .sp-process-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sp-page">

        {/* MODAL */}
        {activeService && (
          <ServiceModal
            service={activeService}
            onClose={() => setActiveService(null)}
          />
        )}

        {/* HERO */}
        <section className="sp-hero">
          <div className="sp-hero-bg" />
          <div className="sp-hero-grid" />
          <div className="sp-hero-inner">
            <div className="sp-eyebrow">Our Services</div>
            <h1 className="sp-hero-title">
              We Build <em>Businesses</em><br />
              That <span className="outline">Scale</span>
            </h1>
            <div className="sp-hero-row">
              <p className="sp-hero-desc">
                From raw ambition to seven-figure clarity — our coaching programs are built for founders who are done playing small and ready to lead at the highest level.
              </p>
              <div className="sp-cta-row">
                <a href="#services" className="sp-btn">
                  Explore Services
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="#contact" className="sp-btn-ghost">Book a Call</a>
              </div>
            </div>
            <div className="sp-hero-stats">
              {stats.map((s, i) => (
                <div className="sp-hstat" key={i}>
                  <div className="sp-hstat-val">{s.value}</div>
                  <div className="sp-hstat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="sp-services" id="services">
          <div className="sp-section-hdr">
            <div>
              <div className="sp-eyebrow">What We Do</div>
              <h2 className="sp-section-title">Our <em>Core</em> Services</h2>
            </div>
            <p className="sp-section-desc">Four high-impact programs, each engineered to unlock a specific dimension of your growth.</p>
          </div>
          <div className="sp-grid">
            {services.map((s) => (
              <div className="sp-card" key={s.id}>
                <div className="sp-card-top">
                  <span className="sp-card-num">{s.number}</span>
                  <div className="sp-card-icon-box">{serviceIcons[s.id]}</div>
                </div>
                <h3 className="sp-card-title">{s.title} <em>{s.accent}</em></h3>
                <div className="sp-card-tagline">{s.tagline}</div>
                <p className="sp-card-desc">{s.description}</p>
                <div className="sp-bullets">
                  {s.bullets.map((b, i) => <span className="sp-pill" key={i}>{b}</span>)}
                </div>
                <button
                  type="button"
                  className="sp-learn-btn"
                  onClick={() => setActiveService(s as any)}
                >
                  Learn More
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="sp-process">
          <div className="sp-process-inner">
            <div className="sp-section-hdr" style={{ marginLeft: 0, marginRight: 0 }}>
              <div>
                <div className="sp-eyebrow">How We Work</div>
                <h2 className="sp-section-title">The <em>Process</em></h2>
              </div>
              <p className="sp-section-desc" style={{ textAlign: "left" }}>A battle-tested four-step framework that gets you from where you are to where you need to be — fast.</p>
            </div>
            <div className="sp-process-grid">
              {process.map((p, i) => (
                <div className="sp-pitem" key={i}>
                  <div className="sp-pstep">{p.step}</div>
                  <div className="sp-ptitle">{p.title}</div>
                  <p className="sp-pdesc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="sp-stats">
          <div className="sp-stats-inner">
            {stats.map((s, i) => (
              <div className="sp-sitem" key={i}>
                <div className="sp-sval">{s.value}</div>
                <div className="sp-slabel">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="sp-faq">
          <div className="sp-faq-inner">
            <div className="sp-eyebrow">FAQ</div>
            <h2 className="sp-section-title">Common <em>Questions</em></h2>
            <div className="sp-faq-list">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className={`sp-fitem${openFaq === i ? " open" : ""}`}
                  onClick={() => setOpenFaq(openFaq as any === i as any ? null : i as any)}
                >
                  <div className="sp-fq">
                    <span>{f.q}</span>
                    <div className="sp-ficon">+</div>
                  </div>
                  <div className="sp-fa">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sp-cta" id="contact">
          <div className="sp-cta-ghost-text">SCALE</div>
          <div className="sp-cta-inner">
            <div className="sp-eyebrow" style={{ justifyContent: "center" }}>Ready?</div>
            <h2 className="sp-cta-title">Let's Build Something <em>Extraordinary</em></h2>
            <p className="sp-cta-sub">Book a free 30-minute discovery call. No pitch, no pressure — just a straight conversation about where you are and where you want to go.</p>
            <a href="#" className="sp-btn" style={{ fontSize: 14, padding: "17px 40px" }}>
              Book Free Call
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
