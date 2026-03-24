'use client';

export  function Corporate() {
  const problems = [
    {
      icon: '📉',
      title: 'Your close rate is under 20%',
      fix: 'We install the EK12PS™ and typically see measurable improvement within the first programme cycle.',
    },
    {
      icon: '🔄',
      title: 'Reps are busy, not productive',
      fix: 'We redesign activity metrics so effort connects directly to revenue outcomes.',
    },
    {
      icon: '🗣️',
      title: 'No consistent sales messaging',
      fix: 'We build your unified value proposition, objection library, and pitch playbook.',
    },
    {
      icon: '🏃',
      title: 'High rep turnover and low morale',
      fix: 'Our programmes rebuild confidence, skill, and earning potential — making great reps want to stay.',
    },
  ];

  const metrics = [
    { label: 'B2B', sublabel: 'Enterprise Deal Cycles Covered' },
    { label: 'B2C', sublabel: 'High-Volume Rep Team Systems' },
    { label: '3–12', sublabel: 'Month B2B Cycle Architecture' },
    { label: '50+', sublabel: 'Rep Team B2C Programmes' },
    { label: 'RWF', sublabel: 'Local Currency Invoicing' },
    { label: 'MOU', sublabel: 'Partnership Framework Available' },
  ];

  return (
    <section id="corporate" className="bg-ek-deep px-[5%] py-28 relative overflow-hidden">
      {/* Background text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          fontSize: '20rem',
          fontFamily: 'Bebas Neue',
          color: 'rgba(200,169,110,0.03)',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        CEO
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Column */}
        <div>
          <div className="inline-block font-syne text-xs font-bold tracking-[0.2em] uppercase text-ek-gold border-l-[3px] border-ek-gold pl-3.5 mb-5">
            For CEOs · COOs · Sales Directors
          </div>

          <h2 className="font-syne font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
            Your Revenue Problem
            <br />
            Has a Name.
          </h2>

          <p className="font-dm-sans text-base text-ek-text leading-relaxed mb-8">
            Inconsistent pipelines. Reps who pitch but don't close. Leaders who manage
            activity but not outcomes. These are fixable problems — if you work with someone
            who's actually solved them before.
          </p>

          {/* Problems */}
          <div className="space-y-0 mb-8">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-4 py-4 border-b border-ek-border">
                <div className="text-2xl flex-shrink-0 mt-1">{problem.icon}</div>
                <div>
                  <div className="font-syne font-bold text-sm text-ek-white mb-1">
                    {problem.title}
                  </div>
                  <div className="font-dm-sans text-xs text-ek-text">
                    {problem.fix}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/corporate-assessment"
              rel="noopener noreferrer"
              className="bg-ek-gold text-black px-8 py-4 font-syne font-bold text-sm uppercase tracking-[0.08em] no-underline transition-all duration-200 hover:bg-ek-gold-light hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Get a Corporate Assessment →
            </a>
            <a
              href="/programs"
              className="bg-transparent text-ek-white border border-ek-border px-8 py-4 font-syne font-bold text-sm uppercase tracking-[0.05em] no-underline transition-all duration-200 hover:border-ek-gold hover:text-ek-gold inline-flex items-center gap-2 cursor-pointer"
            >
              View All Programmes
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-px border border-ek-border overflow-hidden mb-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-ek-card p-8 text-center hover:bg-[#1a1a1a] transition-colors duration-200"
              >
                <div className="font-bebas text-4xl text-ek-gold leading-none block mb-1">
                  {metric.label}
                </div>
                <div className="font-syne text-xs font-bold tracking-[0.1em] uppercase text-ek-text mt-1 block">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="bg-ek-card border border-ek-border p-6">
            <div className="font-syne text-xs font-bold tracking-[0.15em] uppercase text-ek-gold mb-4">
              Investment Reference (RWF)
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between font-dm-sans text-sm py-2 border-b border-ek-border">
                <span className="text-ek-text">B2B Sales Programme</span>
                <span className="font-syne font-bold text-ek-white">2,800,000</span>
              </div>
              <div className="flex justify-between font-dm-sans text-sm py-2 border-b border-ek-border">
                <span className="text-ek-text">B2C Team Programme</span>
                <span className="font-syne font-bold text-ek-white">5,500,000</span>
              </div>
              <div className="flex justify-between font-dm-sans text-sm py-2 border-b border-ek-border">
                <span className="text-ek-text">Leadership Programme</span>
                <span className="font-syne font-bold text-ek-white">1,200,000</span>
              </div>
              <div className="flex justify-between font-dm-sans text-sm py-3">
                <span className="font-syne font-bold text-ek-gold">Full Bundle</span>
                <span className="font-syne font-bold text-ek-gold">9,500,000</span>
              </div>
            </div>

            <a
              href="/request-propasal"
              rel="noopener noreferrer"
              className="w-full bg-ek-gold text-black px-8 py-4 font-syne font-bold text-sm uppercase tracking-[0.08em] text-center no-underline transition-all duration-200 hover:bg-ek-gold-light block"
            >
              Request Full Proposal →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}