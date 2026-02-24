import React from 'react';
import { Building2 } from 'lucide-react';

const partners = [
  'TechCorp',
  'Global Ventures',
  'Innovation Labs',
  'Enterprise Solutions',
  'Growth Partners',
  'Strategic Group',
];

export function PartnerLogos() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0A1628]/30 via-[#050b14]/20 to-[#0A1628]/30 border-y border-white/5 relative overflow-hidden">
      {/* Subtle Depth Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-center text-white/50 mb-12">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 opacity-60 hover:opacity-100"
            >
              <Building2 className="w-6 h-6" />
              <span className="tracking-wide">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
