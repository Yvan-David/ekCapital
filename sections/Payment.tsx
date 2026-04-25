'use client';

export function Payment() {
  const methods = [
    {
      icon: '📱',
      title: 'Mobile Money (MoMo)',
      desc: 'MTN MoMo instant payment. Confirmation within minutes. Seat locked immediately.',
    },
    {
      icon: '🏦',
      title: 'Bank Transfer',
      desc: 'I&M Bank Rwanda. Full banking details provided on confirmation. Suitable for larger corporate investments.',
    },
    {
      icon: '📋',
      title: 'Corporate Invoice',
      desc: 'Formal invoice and payment terms for corporate engagements. Net 14 or net 30 available on assessment.',
    },
    {
      icon: '🤝',
      title: 'MOU / Partnership',
      desc: 'For multi-cohort or long-term corporate partnerships. Structured agreement with milestone-based billing.',
    },
  ];

  return (
    <section id="payment" className="bg-black px-[5%] py-28">
      {/* Section Tag */}
      <div className="inline-block font-syne text-xs font-bold tracking-[0.2em] uppercase text-ek-gold border-l-[3px] border-ek-gold pl-3.5 mb-5">
        Frictionless Payment
      </div>

      {/* Title */}
      <h2 className="font-syne font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
        Pay Your Way.
      </h2>

      {/* Subtitle */}
      <p className="font-dm-sans text-base text-ek-text max-w-[560px] leading-relaxed mb-12">
        No payment barrier between you and your next level. We accept what works in your
        world.
      </p>

      {/* Payment Methods Grid */}
      <div className="flex flex-wrap gap-px border border-ek-border overflow-hidden">
        {methods.map((method, index) => (
          <div
            key={index}
            className="bg-ek-card p-8 flex-1 min-w-[220px] text-center hover:bg-[#181818] transition-colors duration-200"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{method.icon}</div>

            {/* Title */}
            <h3 className="font-syne font-bold text-sm text-ek-white mb-2">
              {method.title}
            </h3>

            {/* Description */}
            <p className="font-dm-sans text-xs text-ek-text leading-relaxed">
              {method.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}