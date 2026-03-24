'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Corporate', href: '#corporate' },
    { label: 'Results', href: '#trust' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#222222] px-[5%] h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-['Bebas_Neue'] text-2xl tracking-[0.08em] text-[#C8A96E] no-underline"
        >
          EK <span className="text-[#F5F0E8]">Capital</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-[#C8C2B8] no-underline text-sm font-['Syne'] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 hover:text-[#C8A96E]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#C8A96E] text-black px-3.5 py-2.5 font-['Syne'] font-bold text-xs tracking-[0.08em] uppercase no-underline transition-all duration-200 hover:bg-[#E8C98A] hover:-translate-y-0.5"
        >
          Book Strategy Call →
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#C8A96E] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#C8A96E] transition-all duration-300 ${isOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#C8A96E] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 md:hidden bg-[#111111] border-b border-[#222222] z-40 animate-slideDown">
          <div className="px-[5%] py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                  setIsOpen(false);
                }}
                className="text-[#C8C2B8] no-underline text-sm font-['Syne'] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 hover:text-[#C8A96E]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+book+a+strategy+call."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C8A96E] text-black px-3.5 py-2.5 font-['Syne'] font-bold text-xs tracking-[0.08em] uppercase no-underline transition-all duration-200 hover:bg-[#E8C98A] text-center"
            >
              Book Strategy Call →
            </a>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}