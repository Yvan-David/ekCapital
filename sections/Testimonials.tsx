'use client';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'Before the programme, I was closing maybe 1 in 10 conversations. After two weeks applying the EK12PS™, I closed 4 deals in a single week. The field training makes you ready for real pushback.',
      author: 'Amina K.',
      role: 'B2C Sales Executive, Kigali',
      initials: 'AK',
    },
    {
      quote:
        'We brought Coach Ezra in to work with our commercial team. The most valuable part was not the content — it was watching how he reframes objections in real customer situations. Our managers now coach differently.',
      author: 'Jean-Paul M.',
      role: 'Commercial Director, Financial Services',
      initials: 'JP',
    },
    {
      quote:
        'I came in as a fresh graduate with no sales background. I left with a certification, a framework I can use anywhere, and a job offer. The placement network is real.',
      author: 'Grace N.',
      role: 'EKPCS™ Certified Graduate · Now at Umurava',
      initials: 'GN',
    },
  ];

  return (
    <section id="trust" className="bg-ek-deep px-[5%] py-28">
      {/* Section Tag */}
      <div className="inline-block font-syne text-xs font-bold tracking-[0.2em] uppercase text-ek-gold border-l-[3px] border-ek-gold pl-3.5 mb-5">
        Real Results
      </div>

      {/* Title */}
      <h2 className="font-syne font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-16">
        What Changes
        <br />
        After EK Capital.
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-ek-border overflow-hidden">
        {testimonials.map((testi, index) => (
          <div key={index} className="bg-ek-card p-10">
            {/* Quote */}
            <p className="font-dm-sans text-sm leading-relaxed text-ek-text mb-7 italic relative">
              <span
                className="font-bebas text-5xl text-ek-gold leading-none absolute -top-2 -left-1"
                style={{ verticalAlign: '-1rem' }}
              >
                "
              </span>
              {testi.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-11 h-11 rounded-full bg-ek-gold-dim border-2 border-ek-gold flex items-center justify-center flex-shrink-0">
                <span className="font-bebas text-lg text-ek-gold">
                  {testi.initials}
                </span>
              </div>

              {/* Name & Role */}
              <div>
                <div className="font-syne font-bold text-sm text-ek-white">
                  {testi.author}
                </div>
                <div className="font-dm-sans text-xs text-ek-text">
                  {testi.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}