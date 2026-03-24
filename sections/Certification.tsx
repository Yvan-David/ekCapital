'use client';

export function Certification() {
  const features = [
    'Built on the complete EK12PS™ framework',
    'Assessed on live field performance, not written exams',
    'Recognised by Umurava and partner employers in East Africa',
    'Graduates placed in commercial roles across Rwanda and beyond',
  ];

  return (
    <section id="certification" className="bg-black px-[5%] py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Badge */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="w-56 h-56 border-4 border-ek-gold rounded-full flex flex-col items-center justify-center text-center flex-shrink-0 bg-ek-gold-dim relative"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 60% at 65% 50%, rgba(200,169,110,0.15) 0%, transparent 70%)',
            }}
          >
            {/* Inner dashed border */}
            <div
              className="absolute inset-2.5 rounded-full border border-dashed"
              style={{ borderColor: 'rgba(200,169,110,0.4)' }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="font-bebas text-2xl text-ek-gold tracking-wider">
                EKPCS™
              </div>
              <div className="font-syne text-xs font-bold tracking-[0.12em] uppercase text-ek-text mt-2 leading-relaxed">
                EK Capital
                <br />
                Performance
                <br />
                Certification
                <br />
                Standard
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="inline-block font-syne text-xs font-bold tracking-[0.2em] uppercase text-ek-gold border-l-[3px] border-ek-gold pl-3.5 mb-5">
            EKPCS™ Certification
          </div>

          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4">
            The African Standard
            <br />
            for Sales Excellence.
          </h2>

          <p className="font-dm-sans text-base text-ek-text leading-relaxed mb-8">
            The EKPCS™ (EK Capital Performance Certification System) is our proprietary
            standard for sales professionals across Africa. Certified individuals are
            recognised by partner employers as ready-to-perform — not just trained in
            theory.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 font-dm-sans text-sm text-ek-text">
                <span className="text-ek-gold font-bold">✓</span>
                {feature}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/get-certified"
            rel="noopener noreferrer"
            className="bg-ek-gold text-black px-8 py-4 font-syne font-bold text-sm uppercase tracking-[0.08em] no-underline transition-all duration-200 hover:bg-ek-gold-light hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Get EKPCS™ Certified →
          </a>
        </div>
      </div>
    </section>
  );
}