'use client';

export  function Footer() {
  return (
    <footer className="bg-black border-t border-ek-border px-[5%] pt-16 pb-8">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div>
          <div className="font-bebas text-3xl tracking-[0.08em] text-ek-gold block mb-3">
            EK <span className="text-ek-white">Capital</span>
          </div>
          <p className="font-dm-sans text-xs text-ek-text leading-relaxed mb-4">
            Africa's sales performance authority. We build revenue systems for companies and
            careers that last. Headquartered in Kigali, Rwanda. Expanding Pan-Africa.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="font-syne font-semibold text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-syne font-semibold text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-syne font-semibold text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Programmes Column */}
        <div>
          <h4 className="font-syne font-bold text-xs tracking-[0.12em] uppercase text-ek-gold mb-5">
            Programmes
          </h4>
          <ul className="list-none space-y-2.5">
            <li>
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white cursor-pointer"
              >
                Sales Team Transformation
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white cursor-pointer"
              >
                Sales Leadership Mastery
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white cursor-pointer"
              >
                Revenue Architecture
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white cursor-pointer"
              >
                EKPCS™ Certification
              </a>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-syne font-bold text-xs tracking-[0.12em] uppercase text-ek-gold mb-5">
            Company
          </h4>
          <ul className="list-none space-y-2.5">
            <li>
              <a
                href="#"
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white"
              >
                About Coach Ezra
              </a>
            </li>
            <li>
              <a
                href="#framework"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#framework')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white cursor-pointer"
              >
                EK12PS™ System
              </a>
            </li>
            <li>
              <a
                href="#certification"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#certification')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white cursor-pointer"
              >
                EKPCS™ Standard
              </a>
            </li>
            <li>
              <a
                href="#resources"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#resources')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white cursor-pointer"
              >
                Sales Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-syne font-bold text-xs tracking-[0.12em] uppercase text-ek-gold mb-5">
            Contact
          </h4>
          <ul className="list-none space-y-2.5">
            <li>
              <a
                href="https://wa.me/250XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white"
              >
                WhatsApp Direct
              </a>
            </li>
            <li>
              <a
                href="tel:+250XXXXXXXXX"
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white"
              >
                Call Us
              </a>
            </li>
            <li>
              <span className="font-dm-sans text-xs text-ek-text">
                Kigali, Rwanda
              </span>
            </li>
            <li>
              <a
                href="#"
                className="font-dm-sans text-xs text-ek-text no-underline transition-colors duration-200 hover:text-ek-white"
              >
                Corporate Enquiries
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-ek-border pt-8 flex justify-between items-center flex-wrap gap-4">
        <p className="font-dm-sans text-xs text-[#555]">
          © 2026 EK Capital Group Ltd. All rights reserved. Kigali, Rwanda.
        </p>
        <p className="font-dm-sans text-xs text-[#555]">
          EK12PS™ and EKPCS™ are proprietary systems of EK Capital Group Ltd.
        </p>
      </div>
    </footer>
  );
}