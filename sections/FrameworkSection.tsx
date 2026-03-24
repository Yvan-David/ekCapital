'use client';

export  function FrameworkSection() {
  const steps = [
    { num: '01', name: 'Mindset', desc: 'Revenue psychology and selling as serving' },
    { num: '02', name: 'ICP', desc: 'Identifying the exact buyer worth pursuing' },
    { num: '03', name: 'Prospecting', desc: 'Building a pipeline that never runs dry' },
    { num: '04', name: 'Opening', desc: 'First contact that earns the conversation' },
    { num: '05', name: 'Diagnosis', desc: 'Ask what others are afraid to ask' },
    { num: '06', name: 'Value Build', desc: 'Translate features into business outcomes' },
    { num: '07', name: 'Presentation', desc: 'Show up like a solution, not a salesperson' },
    { num: '08', name: 'Objections', desc: 'Turn resistance into committed buyers' },
    { num: '09', name: 'Closing', desc: 'Ask for the decision with confidence' },
    { num: '10', name: 'Follow-Up', desc: 'The system that captures lost revenue' },
    { num: '11', name: 'Retention', desc: 'Customers that buy again and again' },
    { num: '12', name: 'Referrals', desc: 'Build a machine that sells itself' },
  ];

  return (
    <section id="framework" className="bg-black px-[5%] py-28">
      {/* Section Tag */}
      <div className="inline-block font-syne text-xs font-bold tracking-[0.2em] uppercase text-ek-gold border-l-[3px] border-ek-gold pl-3.5 mb-5">
        Our Method
      </div>

      {/* Title */}
      <h2 className="font-syne font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
        The EK12PS™ System
      </h2>

      {/* Subtitle */}
      <p className="font-dm-sans text-base text-ek-text max-w-[560px] leading-relaxed mb-16">
        Twelve phases. One complete selling architecture. This is what every programme is
        built on — and why our results are consistent.
      </p>

      {/* Steps Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px border border-ek-border overflow-hidden">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-black border-r border-ek-border p-8 text-center last:border-r-0"
          >
            {/* Number */}
            <div className="font-bebas text-4xl text-ek-gold leading-none mb-2">
              {step.num}
            </div>

            {/* Name */}
            <h3 className="font-syne font-bold text-sm mb-2 text-ek-white">
              {step.name}
            </h3>

            {/* Description */}
            <p className="font-dm-sans text-xs text-ek-text leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}