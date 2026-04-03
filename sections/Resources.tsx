'use client';

export function Resources() {
  const articles = [
    {
      tag: 'Sales Strategy · Africa',
      title:
        'Why African Sales Teams Fail: The 5 Structural Mistakes Killing Your Revenue',
      desc: 'Most sales problems aren\'t skill problems. They\'re system problems. Here\'s how to diagnose which one you have.',
    },
    {
      tag: 'B2B Closing · Corporate',
      title:
        'How to Close a Corporate Deal in Rwanda: A Field Guide for B2B Sales Professionals',
      desc: 'The cultural, structural, and commercial realities of enterprise selling in East Africa — and how to navigate each one.',
    },
    {
      tag: 'AI + Sales',
      title:
        'How African Sales Teams Are Using AI to Prospect Faster and Close Smarter',
      desc: 'A practical breakdown of the AI tools changing prospecting, qualification, and follow-up for sales teams in 2026.',
    },
    {
      tag: 'Sales Leadership',
      title:
        'The Manager Who Can\'t Coach: Why Most African Sales Leaders Are Stuck at the Same Level',
      desc: 'Motivation isn\'t management. Here\'s the difference between a sales manager and a true revenue leader.',
    },
    {
      tag: 'Career · Certification',
      title:
        'Sales as a Career in Africa: Why the Most Recession-Proof Skill is the One Nobody Teaches',
      desc: 'Every business needs someone who can close. Here\'s why building that skill is the best career decision you can make right now.',
    },
    {
      tag: 'Objection Handling',
      title:
        '"It\'s Too Expensive": The 7 Real Objections Behind That Phrase and How to Handle Each One',
      desc: 'Price objections are almost never about price. Here\'s what customers are actually saying — and how to respond.',
    },
  ];

  return (
    <section id="resources" className="bg-ek-deep px-[5%] py-28">
      {/* Section Tag */}
      <div className="inline-block font-syne text-xs font-bold tracking-[0.2em] uppercase text-ek-gold border-l-[3px] border-ek-gold pl-3.5 mb-5">
        Sales Intelligence
      </div>

      {/* Title */}
      <h2 className="font-syne font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
        Think Like a
        <br />
        Revenue Architect.
      </h2>

      {/* Subtitle */}
      <p className="font-dm-sans text-base text-ek-text max-w-[560px] leading-relaxed mb-12">
        Free resources from Coach Ezra's frontline experience building sales systems across
        Africa.
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-ek-border overflow-hidden">
        {articles.map((article, index) => (
          <a
            key={index}
            href="#"
            className="bg-ek-card p-9 no-underline text-ek-white flex flex-col transition-colors duration-200 hover:bg-[#181818] cursor-pointer"
          >
            {/* Tag */}
            <div className="font-syne text-xs font-bold tracking-[0.15em] uppercase text-ek-gold mb-3">
              {article.tag}
            </div>

            {/* Title */}
            <h3 className="font-syne font-bold text-sm leading-relaxed mb-3">
              {article.title}
            </h3>

            {/* Description */}
            <p className="font-dm-sans text-xs text-ek-text leading-relaxed flex-1">
              {article.desc}
            </p>

            {/* Read More */}
            <div className="font-syne text-xs font-bold tracking-[0.1em] uppercase text-ek-gold mt-4 flex items-center gap-1">
              Read Article →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}