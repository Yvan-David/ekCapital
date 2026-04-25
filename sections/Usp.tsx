'use client';

export function USP() {
  const pillars = [
    { num: 'Field', label: 'Real-World Training' },
    { num: 'Africa', label: 'Built for This Market' },
    { num: 'EK12PS™', label: 'Proprietary System' },
    { num: 'EKPCS™', label: 'Certified Standard' },
  ];

  return (
    <section className="bg-ek-gold text-black text-center px-[5%] py-24">
      {/* Section Tag */}
      <div className="inline-block font-syne text-xs font-bold tracking-[0.2em] uppercase text-black text-opacity-50 border-l-[3px] border-black border-opacity-30 pl-3.5 mb-6">
        What Makes Us Different
      </div>

      {/* Main Heading */}
      <h2
        className="font-bebas text-[clamp(3rem,8vw,7rem)] leading-[0.9] mx-auto"
        style={{ maxWidth: '100%' }}
      >
        WE DON'T
        <br />
        TEACH THEORY.
      </h2>

      {/* Subheading */}
      <p className="font-syne font-bold text-2xl mt-2 mx-auto">
        We train in real markets. We fix real problems. We produce real revenue.
      </p>

      {/* Description */}
      <p className="font-dm-sans text-lg font-light text-black text-opacity-70 max-w-[500px] mx-auto mt-6">
        Every session is anchored in your actual business, your real customers, and the
        market conditions your team faces every day. We do what we say. We say only what we
        do.
      </p>

      {/* Pillars */}
      <div className="flex justify-center flex-wrap gap-0 mt-12 border-t-2 border-black border-opacity-15">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className={`py-8 px-12 text-center ${
              index < pillars.length - 1 ? 'border-r-2 border-black border-opacity-15' : ''
            }`}
          >
            <div
              className="font-bebas text-4xl leading-none block"
              style={{ color: 'inherit' }}
            >
              {pillar.num}
            </div>
            <div className="font-syne font-bold text-xs tracking-[0.1em] uppercase text-black text-opacity-70 mt-2">
              {pillar.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}