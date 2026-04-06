"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type DropdownItem = {
  label: string;
  href: string;
  highlight?: boolean;
};

type NavLink = {
  label: string;
  href: string;
  dropdown?: {
    columns: DropdownItem[][];
  };
};

const navLinks: NavLink[] = [
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: {
      columns: [
        [
          {
            label: "Sales Team Transformation Program",
            href: "/corporate-assessment",
          },
          { label: "Sales Leadership Mastery", href: "/leadership-programme" },

          // { label: 'Executive Briefings', href: '#executive-briefings' },
        ],
        [
          { label: "Revenue Architecture Consulting", href: "/ceo-advisory" },
          {
            label: "Professional Sales Certification (EKPCS™)",
            href: "/register-cohort",
          },
          // { label: 'Capital Coaching', href: '#capital-coaching' },
          // { label: 'Financial Assessment', href: '#financial-assessment' },
          // { label: 'EK Framework™', href: '#ek-framework' },
          // { label: 'Strategy Reinforcement', href: '#strategy-reinforcement' },
          { label: "See All Solutions", href: "#solutions", highlight: true },
        ],
      ],
    },
  },
  {
    label: "Sales Team Transformation Program",
    href: "/corporate-assessment",
    // dropdown: {
    //   columns: [
    //     [
    //       { label: 'Corporate Programs', href: '#corporate-programs' },
    //       { label: 'Leadership Development', href: '#leadership-development' },
    //       { label: 'Team Finance Training', href: '#team-finance' },
    //     ],
    //     [
    //       { label: 'Enterprise Solutions', href: '#enterprise' },
    //       { label: 'Group Workshops', href: '#group-workshops' },
    //       { label: 'See All Corporate', href: '#all-corporate', highlight: true },
    //     ],
    //   ],
    // },
  },
  // {
  //   label: 'Results',
  //   href: '#trust',
  //   dropdown: {
  //     columns: [
  //       [
  //         { label: 'Client Success Stories', href: '#success-stories' },
  //         { label: 'Case Studies', href: '#case-studies' },
  //         { label: 'ROI Calculator', href: '#roi' },
  //       ],
  //       [
  //         { label: 'Testimonials', href: '#testimonials' },
  //         { label: 'Industry Awards', href: '#awards' },
  //         { label: 'See All Results', href: '#all-results', highlight: true },
  //       ],
  //     ],
  //   },
  // },
  {
    label: "Industries",
    href: "#industries",
    dropdown: {
      columns: [
        [
          { label: "Agriculture", href: "#real-estate" },
          { label: "Construction", href: "#technology" },
          { label: "Energy & Utilities", href: "#healthcare" },
          { label: "Manufacturing", href: "#healthcare" },
          { label: "Professional Services", href: "#healthcare" },
        ],
        [
          { label: "Aviation", href: "#financial-services" },
          { label: "Distribution", href: "#manufacturing" },
          { label: "Logistics", href: "#manufacturing" },
          { label: "Medical", href: "#manufacturing" },
          { label: "Software & Technology", href: "#manufacturing" },
          {
            label: "See All Industries",
            href: "#all-industries",
            highlight: true,
          },
        ],
      ],
    },
  },
  {
    label: "Resources",
    href: "#resources",
    dropdown: {
      columns: [
        [
          { label: "Blog & Articles", href: "#blog" },
          { label: "Whitepapers", href: "#whitepapers" },
          { label: "Webinars", href: "#webinars" },
        ],
        [
          { label: "Free Tools", href: "#tools" },
          { label: "Newsletter", href: "#newsletter" },
          {
            label: "See All Resources",
            href: "#all-resources",
            highlight: true,
          },
        ],
      ],
    },
  },
  { label: "About", href: "#about" },
  // { label: 'Contact', href: '#contact' },
];

export function Header() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(
    null,
  );
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const handleNavClick = (e: React.MouseEvent, link: NavLink, index: number) => {
  //   if (link.dropdown) {
  //     e.preventDefault();
  //     setOpenIndex(openIndex === index ? null : index);
  //   } else {
  //     e.preventDefault();
  //     const element = document.querySelector(link.href);
  //     if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     setOpenIndex(null);
  //   }
  // };

  const handleNavClick = (
    e: React.MouseEvent,
    link: NavLink,
    index: number,
  ) => {
    if (link.dropdown) {
      e.preventDefault();
      setOpenIndex(openIndex === index ? null : index);
      return;
    }

    // No dropdown → handle navigation
    if (link.href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // route navigation
      router.push(link.href);
    }

    setOpenIndex(null);
  };
  const handleDropdownItemClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Let Next.js handle routing
      router.push(href);
    }

    setOpenIndex(null);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="relative z-50 bg-black/95 backdrop-blur-md border-b border-[#222222] px-[5%] h-16 flex items-center justify-between overflow-visible"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-['Bebas_Neue'] text-2xl tracking-[0.08em] text-[#C8A96E] no-underline"
        >
          EK <span className="text-[#F5F0E8]">Capital</span>
        </Link>

        {/* Desktop Navigation + CTA grouped right */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <ul className="flex gap-12 list-none items-center">
            {navLinks.map((link, index) => (
              <li key={link.href} className="relative">
                <button
                  onClick={(e) => handleNavClick(e, link, index)}
                  className={`flex items-center text-[13px] font-['Syne'] font-semibold tracking-[0.08em] transition-colors duration-200 bg-transparent border-none cursor-pointer py-1 ${
                    openIndex === index
                      ? "text-[#C8A96E]"
                      : "text-[#C8C2B8] hover:text-[#C8A96E]"
                  }`}
                >
                  {link.label}
                </button>

                {/* Dropdown Panel */}

                {link.dropdown && openIndex === index && (
                  <div
                    className="absolute top-full mt-3 bg-white shadow-2xl border border-gray-100 z-50 animate-dropDown"
                    style={{ minWidth: "480px", left: "50%" }}
                  >
                    {/* Gold accent bar */}
                    <div className="h-0.5 w-full bg-[#C8A96E]" />

                    <div
                      className="p-6 grid gap-x-8"
                      style={{
                        gridTemplateColumns: `repeat(${link.dropdown.columns.length}, 1fr)`,
                      }}
                    >
                      {link.dropdown.columns.map((col, colIdx) => (
                        <ul
                          key={colIdx}
                          className="list-none flex flex-col gap-1"
                        >
                          {col.map((item, itemIdx) => (
                            <li key={`${colIdx}-${itemIdx}`}>
                              <a
                                href={item.href}
                                onClick={(e) =>
                                  handleDropdownItemClick(e, item.href)
                                }
                                className={`block py-2 px-2 text-sm font-['Syne'] font-medium tracking-wide no-underline transition-colors duration-150 rounded ${
                                  item.highlight
                                    ? "text-[#C8A96E] font-bold hover:text-[#b8994e]"
                                    : "text-gray-700 hover:text-[#C8A96E] hover:bg-gray-50"
                                }`}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C8A96E] text-black px-3.5 py-2.5 font-['Syne'] font-bold text-xs tracking-[0.08em] uppercase no-underline transition-all duration-200 hover:bg-[#E8C98A] hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book Strategy Call →
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#C8A96E] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#C8A96E] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#C8A96E] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#222222] z-40 animate-slideDown overflow-y-auto">
          <div className="px-[5%] py-4 flex flex-col">
            {navLinks.map((link, index) => (
              <div key={link.href}>
                <button
                  onClick={(e) => {
                    if (link.dropdown) {
                      setMobileExpandedIndex(
                        mobileExpandedIndex === index ? null : index,
                      );
                    } else {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element)
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      setMobileOpen(false);
                    }
                  }}
                  className="w-full flex items-center justify-between py-3 text-[#C8C2B8] text-sm font-['Syne'] font-semibold tracking-[0.08em] uppercase bg-transparent border-none cursor-pointer text-left hover:text-[#C8A96E] transition-colors duration-200 border-b border-[#222222]"
                >
                  {link.label}
                </button>

                {/* Mobile Dropdown Items */}
                {link.dropdown && mobileExpandedIndex === index && (
                  <div className="bg-[#0a0a0a] px-4 py-2 flex flex-col gap-1 animate-slideDown">
                    {link.dropdown.columns.flat().map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleDropdownItemClick(e, item.href)}
                        className={`py-2 text-sm font-['Syne'] no-underline transition-colors duration-150 ${
                          item.highlight
                            ? "text-[#C8A96E] font-bold"
                            : "text-[#8a8580] hover:text-[#C8A96E]"
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+book+a+strategy+call."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#C8A96E] text-black px-3.5 py-2.5 font-['Syne'] font-bold text-xs tracking-[0.08em] uppercase no-underline transition-all duration-200 hover:bg-[#E8C98A] text-center"
            >
              Book Strategy Call →
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes dropDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-dropDown {
          animation: dropDown 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
