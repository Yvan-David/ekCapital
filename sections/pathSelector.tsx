'use client';

export function PathSelector() {
  const segments = [
    {
      icon: '🏢',
      title: 'I Lead a Corporate Team',
      description:
        'CEO, COO, Sales Director. You need your team to close more deals, reduce churn, and hit targets. We build the system that makes that happen.',
      link: 'See Corporate Programs →',
      href: '/corporate-programs',
    },
    {
      icon: '📊',
      title: "I'm a Sales Leader",
      description:
        "You manage a team but results aren't consistent. You need a leadership system, not just inspiration. We give you frameworks that produce daily.",
      link: 'See Leadership Programs →',
      href: '/leadership-programme',
    },
    {
      icon: '🚀',
      title: "I'm a Founder / CEO",
      description:
        'You built the product. Now you need consistent revenue. We architect your entire sales system — from lead to close to repeat.',
      link: 'See CEO Advisory →',
      href: '/ceo-advisory',
    },
    {
      icon: '🎯',
      title: "I'm an Individual",
      description:
        'Graduate, professional, or career-switcher. You want to master sales, earn more, and get certified. Join our next cohort and get placed.',
      link: 'Join Next Cohort →',
      href: '/register-cohort',
    },
  ];

  return (
    <section className="bg-[#111111] px-[5%] py-28" id="who">
      {/* Section Tag */}
      <div className="inline-block font-['Syne'] text-xs font-bold tracking-[0.2em] uppercase text-[#C8A96E] border-l-[3px] border-[#C8A96E] pl-3.5 mb-5">
        Choose Your Path
      </div>

      {/* Title */}
      <h2 className="font-['Syne'] font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
        Who Are You Here For?
      </h2>

      {/* Subtitle */}
      <p className="text-base text-[#C8C2B8] max-w-[560px] leading-relaxed mb-12">
        Every programme is architected for a specific business stage. Select your path and
        we&apos;ll show you exactly what changes.
      </p>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-[#222222] overflow-hidden mt-12">
        {segments.map((segment, index) => (
          <a
            key={index}
            href={segment.href}
            onClick={(e) => {
              if (segment.href.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(segment.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="bg-[#161616] p-10 no-underline text-[#F5F0E8] flex flex-col transition-all duration-200 relative overflow-hidden hover:bg-[#1a1a1a] group cursor-pointer"
          >
            {/* Gold bar on hover - animates from left */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8A96E] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

            {/* Icon */}
            <div className="text-3xl mb-4">{segment.icon}</div>

            {/* Title */}
            <div className="font-['Syne'] font-bold text-xl mb-2">{segment.title}</div>

            {/* Description */}
            <div className="text-sm text-[#C8C2B8] leading-relaxed mb-6">
              {segment.description}
            </div>

            {/* Link */}
            <div className="font-['Syne'] font-bold text-xs tracking-[0.1em] uppercase text-[#C8A96E] flex items-center gap-1 mt-auto">
              {segment.link}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}