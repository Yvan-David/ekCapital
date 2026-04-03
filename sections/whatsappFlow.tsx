'use client';

export function WhatsAppFlow() {
  const steps = [
    {
      num: '01',
      title: 'You Click WhatsApp',
      desc: 'Any button on this page opens a pre-loaded message — no typing needed.',
    },
    {
      num: '02',
      title: 'Instant Auto-Response',
      desc: 'You receive our overview and a 3-question qualification in under 2 minutes.',
    },
    {
      num: '03',
      title: 'Coach Ezra Qualifies',
      desc: 'A quick voice note or chat to understand your situation and recommend the right programme.',
    },
    {
      num: '04',
      title: 'Custom Offer Presented',
      desc: 'You receive a tailored programme recommendation with investment details and next steps.',
    },
    {
      num: '05',
      title: 'You Pay & Confirm',
      desc: 'MoMo, bank transfer, or corporate invoice. Your seat or engagement is locked immediately.',
    },
    {
      num: '06',
      title: 'You Start Growing',
      desc: 'Onboarding begins. Materials sent. Programme underway. Revenue moves.',
    },
  ];

  return (
    <section id="contact" className="bg-black px-[5%] py-28">
      {/* Section Tag */}
      <div className="inline-block font-syne text-xs font-bold tracking-[0.2em] uppercase text-ek-gold border-l-[3px] border-ek-gold pl-3.5 mb-5">
        Instant Access
      </div>

      {/* Title */}
      <h2 className="font-syne font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
        From First Message
        <br />
        to Enrolled in 24 Hours.
      </h2>

      {/* Subtitle */}
      <p className="font-dm-sans text-base text-ek-text max-w-[560px] leading-relaxed mb-12">
        No forms. No waiting. No bureaucracy. You message, we qualify, we close, you grow.
      </p>

      {/* Flow Steps */}
      <div className="flex flex-col md:flex-row gap-0 overflow-x-auto mb-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex-1 min-w-[200px] bg-ek-card border border-ek-border p-7 hover:border-ek-green transition-colors duration-200">
            {/* Number */}
            <div className="font-bebas text-4xl text-ek-border leading-none mb-2">
              {step.num}
            </div>

            {/* Title */}
            <h3 className="font-syne font-bold text-sm text-ek-white mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="font-dm-sans text-xs text-ek-text leading-relaxed">
              {step.desc}
            </p>

            {/* Arrow (hidden on last step) */}
            {index < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 w-6 h-6 bg-ek-green text-white flex items-center justify-center text-xs font-bold rounded-full z-10">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex gap-4 items-center justify-center flex-wrap">
        <a
          href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+increase+my+sales+performance+and+revenue.+Can+you+tell+me+more+about+EK+Capital+programmes%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ek-green text-white no-underline px-12 py-4 font-syne font-bold text-sm uppercase tracking-[0.05em] transition-all duration-200 hover:brightness-110 hover:-translate-y-1 inline-flex items-center gap-3 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_16px_50px_rgba(37,211,102,0.4)]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[22px] h-[22px]"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Start on WhatsApp — It's Free
        </a>
        <a
          href="tel:+250XXXXXXXXX"
          className="bg-transparent text-ek-white border border-ek-border px-8 py-4 font-syne font-bold text-sm uppercase tracking-[0.05em] no-underline transition-all duration-200 hover:border-ek-gold hover:text-ek-gold inline-flex items-center gap-2"
        >
          Or Call Directly
        </a>
      </div>
    </section>
  );
}