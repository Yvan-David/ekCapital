'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1628]/70 via-[#050b14]/50 to-black text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Premium Texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-4">SalesFlow</h3>
            <p className="text-white/70 mb-6 max-w-sm">
              Transforming businesses through strategic sales architecture and cashflow optimization.
            </p>
            
            {/* Founder Signature */}
            <div className="flex items-center gap-4 mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE2NjMxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Founder"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white">John Anderson</p>
                <p className="text-white/60 text-sm">Founder & CEO Coach</p>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Sales Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Cashflow Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Executive Coaching
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Growth Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors duration-300">
                  Team Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-white/70 hover:text-white transition-colors duration-300">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/70 hover:text-white transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/60 mt-0.5" />
                <a
                  href="mailto:hello@salesflow.com"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  hello@salesflow.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/60 mt-0.5" />
                <a
                  href="tel:+1234567890"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 mt-0.5" />
                <span className="text-white/70">
                  New York, NY 10001
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 SalesFlow. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}