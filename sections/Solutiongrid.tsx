'use client';

import Link from 'next/link';

export function SolutionsGrid() {
  const solutions = [
    {
      number: '01',
      tag: '🔥 Most Popular · Corporate',
      title: 'Sales Team Transformation Programme',
      problem: "Our team has great products but can't close consistently.",
      description:
        'A structured immersion programme that rewires how your salespeople think, speak, and close. Built on the EK12PS™ framework and delivered in real market conditions — not a classroom simulation.',
      outcomes: [
        'Sales team closes more deals in the first 30 days',
        'Unified messaging across every rep and channel',
        'Live objection-handling in your actual market',
        'CRM adoption and pipeline discipline installed',
        'Post-training performance tracking included',
      ],
      cta: '→ Book Corporate Assessment',
      href: '/corporate-assessment',
    },
    {
      number: '02',
      tag: 'Leadership · Revenue Architecture',
      title: 'Sales Leadership Mastery',
      problem: "My managers motivate. They don't manage pipeline or coach effectively.",
      description:
        "Designed for sales managers, team leads, and heads of sales. You'll learn to build dashboards that matter, run pipeline reviews that produce action, and coach reps to consistent performance.",
      outcomes: [
        'Forecast accuracy improves within 60 days',
        'Weekly coaching cadence that actually develops reps',
        "Accountability structures that don't kill morale",
        'Hiring and onboarding playbooks for new reps',
      ],
      cta: '→ Discuss Leadership Programme',
      href: '/leadership-programme',
    },
    {
      number: '03',
      tag: 'Advisory · CEO Retainer',
      title: 'Revenue Architecture Consulting',
      problem:
        "I don't know if my sales process, team structure, or pricing is broken — I just know revenue isn't where it should be.",
      description:
        'Coach Ezra works directly with you as a Revenue Architect. We audit your entire commercial operation, identify the highest-leverage constraints, and rebuild what\'s broken — with you in the room.',
      outcomes: [
        'Full commercial audit and revenue gap analysis',
        'Sales process design and ICP refinement',
        'Pricing and packaging recommendations',
        'Monthly retainer with direct access to Coach Ezra',
      ],
      cta: '→ Apply for CEO Advisory',
      href: '/ceo-advisory',
    },
    {
      number: '04',
      tag: 'Individual · EKPCS™ Certified',
      title: 'Professional Sales Certification (EKPCS™)',
      problem:
        "I want a career in sales or to dramatically increase what I earn — but I've never been trained properly.",
      description:
        'A hands-on cohort programme that takes you through the EK12PS™ system, live market field work, role-plays, and full EKPCS™ certification. Graduates are placed with hiring partners across Rwanda and East Africa.',
      outcomes: [
        'EK Capital Performance Certification (EKPCS™)',
        'Live field training in real sales environments',
        'Job placement support with partner employers',
        'Alumni network and ongoing coaching access',
      ],
      cta: '→ Register for Next Cohort',
      href: '/register-cohort',
    },
  ];

  return (
    <section id="solutions" className="py-28 px-[5%] bg-ek-black">
      <div className="mb-12">
        <div className="font-syne text-xs font-bold tracking-[0.2em] text-ek-gold border-l-[3px] border-ek-gold pl-2 mb-6 uppercase">
          Revenue Programs
        </div>

        <h2 className="font-bebas text-5xl md:text-6xl leading-tight mb-6 text-ek-white">
          Four Systems.
          <br />
          One Goal: Revenue.
        </h2>

        <p className="font-dm-sans text-base text-ek-text max-w-[600px] leading-relaxed">
          Every programme is built on the EK12PS™ — our 12-point selling system
          that takes salespeople from inconsistent to unstoppable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border-[1.5px] border-ek-border overflow-hidden mt-16">
        {solutions.map((solution, index) => {
          const cardClasses = `
            group relative overflow-hidden transition-all duration-300 p-8
            hover:bg-ek-gold-dim hover:border hover:border-ek-gold hover:border-opacity-40
            hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(200,169,110,0.15)]
          `;

          return (
            <div key={index} className={cardClasses}>
              {/* Solution Number - Top Right */}
              <div className="font-bebas text-6xl text-ek-border leading-none absolute top-4 right-6 opacity-60 transition-all duration-300 group-hover:text-ek-gold group-hover:opacity-80">
                {solution.number}
              </div>

              {/* Solution Tag */}
              <div className="font-syne text-xs font-bold tracking-[0.15em] text-ek-gold mb-3 uppercase transition-all duration-300">
                {solution.tag}
              </div>

              {/* Solution Title */}
              <h3 className="font-syne text-xl font-bold mb-4 leading-snug text-ek-white pr-8 transition-all duration-300 group-hover:text-ek-white">
                {solution.title}
              </h3>

              {/* Problem Box */}
              <div className="text-xs text-ek-text mb-5 p-3 bg-ek-red bg-opacity-10 border-l-[2px] border-ek-red italic font-dm-sans transition-all duration-300 group-hover:bg-ek-red/15">
                &quot;{solution.problem}&quot;
              </div>

              {/* Description */}
              <p className="font-dm-sans text-sm text-ek-text leading-relaxed mb-6 transition-all duration-300 group-hover:text-ek-white/85">
                {solution.description}
              </p>

              {/* Outcomes List */}
              <ul className="mb-8 space-y-0">
                {solution.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="font-dm-sans text-xs text-ek-text py-2 flex items-start gap-2 border-b border-ek-border last:border-b-0 transition-all duration-300 group-hover:text-ek-white/80 group-hover:border-ek-border/70"
                  >
                    <span className="text-ek-gold flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={solution.href}
                className="inline-block bg-ek-gold text-ek-black px-4 py-2.5 font-syne font-black text-xs tracking-[0.08em] uppercase hover:bg-ek-gold-light transition-all duration-200"
              >
                {solution.cta}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}