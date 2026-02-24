import React, { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Play, Pause } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO, TechVentures',
    quote: 'SalesFlow transformed our entire revenue strategy. We saw 300% growth in just 6 months.',
    image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE2NjMxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Founder, Growth Dynamics',
    quote: 'The cashflow optimization alone saved us $2M annually. Absolutely game-changing.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMGxlYWRlcnxlbnwxfHx8fDE3NjE1NjY0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Jennifer Park',
    title: 'CEO, Innovation Hub',
    quote: 'Working with SalesFlow gave us the clarity and systems to scale confidently.',
    image: 'https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjB0ZWFtfGVufDF8fHx8MTc2MTY2NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'David Thompson',
    title: 'Executive Director, Strategic Corp',
    quote: 'The executive coaching helped me become the leader my company needed. Invaluable.',
    image: 'https://images.unsplash.com/photo-1745970649913-2edb9dca4f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvYWNoaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjE1NzQ4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Testimonials() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A1628]/60 via-[#050b14]/40 to-[#0A1628]/50 relative overflow-hidden">
      {/* Premium Depth Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Real Leaders. Real Results.</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from the executives who transformed their businesses with SalesFlow
          </p>
        </div>

        {/* TikTok Style Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setPlayingIndex(index)}
              onMouseLeave={() => setPlayingIndex(null)}
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-blue-400/50">
                {/* Background Image */}
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${playingIndex === index ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                    {playingIndex === index ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                </div>
                
                {/* Neon Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(96,165,250,0.5)]"></div>
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/90 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-white">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                
                {/* Playing Indicator */}
                {playingIndex === index && (
                  <div className="absolute top-4 right-4">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white rounded-full animate-pulse"
                          style={{
                            height: '20px',
                            animationDelay: `${i * 0.15}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
