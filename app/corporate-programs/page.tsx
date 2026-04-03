"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";

const programmes = [
  {
    num: "01",
    tag: "🔥 Most Popular",
    type: "B2B",
    title: "B2B Sales Team Transformation",
    duration: "4–6 weeks",
    teamSize: "5–50 reps",
    investment: "2,800,000",
    problem:
      '"Our reps are pitching but not closing. Deals stall after the first meeting."',
    desc: "A structured immersion programme that rewires how your B2B salespeople think, talk, and close. Built on the EK12PS™ framework, anchored in your actual deal cycles — not classroom simulations.",
    outcomes: [
      "Improved close rates within the first programme cycle",
      "Unified value proposition across every rep",
      "Live objection handling trained in your exact market",
      "CRM adoption and pipeline discipline installed",
      "Post-training performance tracking included",
      "Deal velocity accelerated across the pipeline",
    ],
    ideal: ["Telecoms", "Financial Services", "Technology / SaaS", "Professional Services"],
    featured: true,
  },
  {
    num: "02",
    tag: "High Volume",
    type: "B2C",
    title: "B2C High-Volume Rep Programme",
    duration: "3–5 weeks",
    teamSize: "10–100+ reps",
    investment: "5,500,000",
    problem:
      '"We have a large field team but conversion is inconsistent. Some reps fly, most don\'t."',
    desc: "Designed for high-volume consumer-facing teams — field sales, retail, telecoms, FMCG. We standardise what your top performers do naturally and install it across your entire team.",
    outcomes: [
      "Standardised pitch and conversion process across all reps",
      "Floor-level conversion rates increase within 30 days",
      "Objection handling scripts built for your exact product",
      "Daily performance tracking and accountability cadence",
      "Rep motivation and retention improves measurably",
      "Manager coaching capability upgraded alongside team",
    ],
    ideal: ["FMCG / Retail", "Telecoms / CanalBox", "Banking & Insurance", "Consumer Tech"],
    featured: false,
  },
  {
    num: "03",
    tag: "Leadership",
    type: "MGT",
    title: "Sales Leadership Mastery",
    duration: "3–4 weeks",
    teamSize: "Managers & leads",
    investment: "1,200,000",
    problem:
      '"My managers motivate the team but can\'t build pipeline discipline or coach effectively."',
    desc: "For sales managers, team leads, and heads of sales. Converts motivators into revenue leaders. Covers pipeline management, coaching cadence, forecast accuracy, and accountability systems.",
    outcomes: [
      "Forecast accuracy improves within 60 days",
      "Weekly coaching cadence that develops reps, not just tracks them",
      "Accountability systems that don't kill morale",
      "Hiring and onboarding playbooks for faster rep ramp",
      "Pipeline review structure that produces decisions",
      "Clear dashboards connecting activity to revenue outcomes",
    ],
    ideal: ["All industries", "Any team with managers", "Scaling organisations", "Post-training reinforcement"],
    featured: false,
  },
  {
    num: "04",
    tag: "🏆 Best Value",
    type: "FULL",
    title: "Full Corporate Bundle",
    duration: "Ongoing",
    teamSize: "Entire organisation",
    investment: "9,500,000",
    problem:
      '"We need everything — team training, leadership, and advisory — not just one fix."',
    desc: "The complete commercial transformation. Team training + leadership mastery + Revenue Architecture advisory in one structured engagement. Built for companies serious about scale, not a one-off workshop.",
    outcomes: [
      "All B2B or B2C programme deliverables included",
      "Sales Leadership Mastery for your management layer",
      "Monthly Revenue Architecture advisory with Coach Ezra",
      "Full EK12PS™ system embedded across the organisation",
      "Unified messaging, pipeline discipline, and coaching cadence",
      "Ongoing performance tracking and quarterly reviews",
    ],
    ideal: ["Growth-stage companies", "Enterprise teams", "Post-funding scale-ups", "Multi-team operations"],
    featured: false,
    isBundle: true,
  },
];

const auditAreas = [
  {
    title: "Sales Process",
    items: ["Pipeline visibility", "Forecasting accuracy", "Deal velocity", "Objection handling", "Closing consistency"],
  },
  {
    title: "Team Performance",
    items: ["Individual rep metrics", "Activity vs outcomes", "Skill gaps by rep", "Morale & retention risk", "Growth potential"],
  },
  {
    title: "Business Context",
    items: ["Market & competition", "Customer profile (ICP)", "Sales cycle length", "Pricing & packaging", "Revenue targets"],
  },
  {
    title: "Leadership",
    items: ["Coaching capability", "Accountability systems", "Performance tracking", "Team development", "Vision alignment"],
  },
];

const paymentMethods = [
  { icon: "📱", label: "MTN MoMo", desc: "Instant. Seat locked immediately." },
  { icon: "🏦", label: "Bank Transfer", desc: "I&M Bank Rwanda. Full details on confirmation." },
  { icon: "📋", label: "Corporate Invoice", desc: "Net 14 or Net 30. Formal invoicing available." },
  { icon: "🤝", label: "MOU / Partnership", desc: "Multi-cohort & long-term billing structures." },
];

type Tab = "programmes" | "audit" | "payment";

export default function CorporateProgramsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("programmes");
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <main className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen font-[family-name:var(--font-dm-sans)]">

      {/* ── BACK TO HOME ── */}
      {/* <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1a1a1a]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-4 text-[#C8C2B8] hover:text-[#C8A96E] transition-colors duration-200 font-[family-name:var(--font-syne)] font-bold text-[0.72rem] tracking-[0.2em] uppercase"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div> */}

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 px-[5%] overflow-hidden bg-[#111]">
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(200,169,110,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(200,169,110,0.06)_0%,transparent_70%)] pointer-events-none" />
        {/* BG word */}
        <div className="absolute right-[-1rem] bottom-0 pointer-events-none select-none overflow-hidden">
          <span className="font-[family-name:var(--font-bebas)] text-[18vw] text-[rgba(200,169,110,0.04)] leading-none">
            CORP
          </span>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 text-xs font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
            For CEOs · COOs · Sales Directors
          </div>

          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,10vw,8rem)] leading-[0.88] mb-6">
            CORPORATE<br />
            <span className="text-[#C8A96E]">SALES</span><br />
            <span style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}>PROGRAMMES</span>
          </h1>

          <p className="text-[#C8C2B8] text-base leading-relaxed max-w-xl mb-10">
            Custom-built revenue programmes for African companies who need their teams to close more deals, build pipeline discipline, and hit targets — consistently.
          </p>

          {/* Quick proof strip */}
          <div className="flex flex-wrap gap-0 border border-[#222] overflow-hidden w-fit">
            {[
              ["B2B", "Enterprise deal cycles"],
              ["B2C", "High-volume rep teams"],
              ["50+", "Corporate programmes"],
              ["RWF", "Local invoicing available"],
            ].map(([num, label]) => (
              <div key={num} className="bg-[#0A0A0A] px-6 py-4 border-r border-[#222] last:border-r-0 text-center">
                <div className="font-[family-name:var(--font-bebas)] text-2xl text-[#C8A96E] leading-none">{num}</div>
                <div className="font-[family-name:var(--font-syne)] text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#555] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <div className="sticky top-[49px] z-40 bg-[#0A0A0A] border-b border-[#222] px-[5%]">
        <div className="flex gap-0 overflow-x-auto">
          {(["programmes", "audit", "payment"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-[family-name:var(--font-syne)] font-bold text-[0.75rem] tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-150 border-b-2 ${
                activeTab === tab
                  ? "text-[#C8A96E] border-[#C8A96E]"
                  : "text-[#555] border-transparent hover:text-[#C8C2B8]"
              }`}
            >
              {tab === "programmes" && "All Programmes"}
              {tab === "audit" && "What We Audit"}
              {tab === "payment" && "Payment Options"}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB: PROGRAMMES ── */}
      {activeTab === "programmes" && (
        <section className="px-[5%] py-16 bg-[#0A0A0A]">

          {/* Accordion-style programme cards */}
          <div className="flex flex-col gap-px border border-[#222] overflow-hidden mb-16">
            {programmes.map((prog, i) => (
              <div
                key={i}
                className={`transition-colors duration-200 ${
                  prog.isBundle
                    ? "bg-[rgba(200,169,110,0.06)]"
                    : expanded === i
                    ? "bg-[#161616]"
                    : "bg-[#111] hover:bg-[#141414]"
                }`}
              >
                {/* Card Header — always visible */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center gap-4 px-8 py-6 text-left group"
                >
                  {/* Type badge */}
                  <span className={`font-[family-name:var(--font-bebas)] text-xs tracking-[0.15em] px-2 py-1 border flex-shrink-0 ${
                    prog.isBundle
                      ? "border-[#C8A96E] text-[#C8A96E]"
                      : "border-[#333] text-[#555]"
                  }`}>
                    {prog.type}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="text-[#C8A96E] text-[0.68rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase">
                        {prog.tag}
                      </span>
                      <span className="text-[#333] text-xs">·</span>
                      <span className="text-[#555] text-[0.72rem] font-[family-name:var(--font-syne)]">{prog.duration}</span>
                      <span className="text-[#333] text-xs">·</span>
                      <span className="text-[#555] text-[0.72rem] font-[family-name:var(--font-syne)]">{prog.teamSize}</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-lg text-[#F5F0E8] leading-snug">
                      {prog.title}
                    </h2>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0 hidden sm:block">
                    <div className="font-[family-name:var(--font-bebas)] text-2xl text-[#C8A96E] leading-none">
                      {prog.investment}
                    </div>
                    <div className="text-[#555] text-[0.65rem] font-[family-name:var(--font-syne)] uppercase tracking-wider mt-0.5">RWF</div>
                  </div>

                  {/* Toggle */}
                  <span className={`text-[#C8A96E] text-xl flex-shrink-0 ml-2 transition-transform duration-200 ${
                    expanded === i ? "rotate-45" : ""
                  }`}>+</span>
                </button>

                {/* Expanded body */}
                {expanded === i && (
                  <div className="px-8 pb-8 border-t border-[#1e1e1e]">
                    {/* Problem quote */}
                    <p className="text-[0.85rem] text-[#666] italic border-l-2 border-[#CC3333] pl-4 py-3 bg-[rgba(204,51,51,0.05)] mb-6 mt-6">
                      {prog.problem}
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                      {/* Left: desc + outcomes */}
                      <div>
                        <p className="text-[0.9rem] text-[#C8C2B8] leading-relaxed mb-6">{prog.desc}</p>
                        <div className="text-[#C8A96E] text-[0.68rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-3">
                          Key Outcomes
                        </div>
                        <ul className="flex flex-col gap-0">
                          {prog.outcomes.map((o, oi) => (
                            <li
                              key={oi}
                              className="flex items-start gap-3 text-[0.83rem] text-[#C8C2B8] py-2.5 border-b border-[#1e1e1e] last:border-0"
                            >
                              <CheckCircle size={14} className="text-[#C8A96E] flex-shrink-0 mt-0.5" />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: ideal for + price + cta */}
                      <div>
                        <div className="bg-[#0A0A0A] border border-[#222] p-6 mb-4">
                          <div className="text-[#C8A96E] text-[0.68rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-3">
                            Ideal For
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {prog.ideal.map((ind) => (
                              <span
                                key={ind}
                                className="bg-[#161616] border border-[#222] px-3 py-1 text-[0.75rem] text-[#C8C2B8] font-[family-name:var(--font-syne)]"
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-[#0A0A0A] border border-[#222] p-6 mb-4">
                          <div className="text-[#555] text-[0.68rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-2">
                            Investment (RWF)
                          </div>
                          <div className="font-[family-name:var(--font-bebas)] text-4xl text-[#C8A96E] leading-none mb-1">
                            {prog.investment}
                          </div>
                          <p className="text-[#555] text-[0.72rem] font-[family-name:var(--font-syne)]">
                            Final figure scoped to team size & engagement
                          </p>
                        </div>

                        <div className="flex flex-col gap-3">
                          <a
                            href={`https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I%27m+interested+in+the+${encodeURIComponent(prog.title)}+programme+for+my+company.+Can+we+discuss%3F`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#C8A96E] text-[#0A0A0A] py-3.5 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
                          >
                            <MessageCircle size={15} />
                            Enquire on WhatsApp
                          </a>
                          <Link
                            href="/request-proposal"
                            className="flex items-center justify-center gap-2 border border-[#222] text-[#C8C2B8] py-3.5 font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-wide transition-all hover:border-[#C8A96E] hover:text-[#C8A96E]"
                          >
                            Request Full Proposal
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Comparison strip */}
          <div className="mb-16">
            <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-6">
              Quick Comparison
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#222] text-sm">
                <thead>
                  <tr className="bg-[#111]">
                    <th className="text-left px-5 py-3 font-[family-name:var(--font-syne)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#C8A96E] border-b border-r border-[#222]">Programme</th>
                    <th className="text-left px-5 py-3 font-[family-name:var(--font-syne)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#C8A96E] border-b border-r border-[#222]">Duration</th>
                    <th className="text-left px-5 py-3 font-[family-name:var(--font-syne)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#C8A96E] border-b border-r border-[#222]">Team</th>
                    <th className="text-left px-5 py-3 font-[family-name:var(--font-syne)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#C8A96E] border-b border-[#222]">Investment (RWF)</th>
                  </tr>
                </thead>
                <tbody>
                  {programmes.map((p, i) => (
                    <tr
                      key={i}
                      onClick={() => { setActiveTab("programmes"); setExpanded(i); }}
                      className={`cursor-pointer border-b border-[#1a1a1a] last:border-0 transition-colors hover:bg-[#161616] ${p.isBundle ? "bg-[rgba(200,169,110,0.05)]" : "bg-[#0A0A0A]"}`}
                    >
                      <td className="px-5 py-4 border-r border-[#1a1a1a]">
                        <span className={`font-[family-name:var(--font-syne)] font-bold text-sm ${p.isBundle ? "text-[#C8A96E]" : "text-[#F5F0E8]"}`}>
                          {p.title}
                        </span>
                      </td>
                      <td className="px-5 py-4 border-r border-[#1a1a1a] text-[#C8C2B8] font-[family-name:var(--font-syne)] text-[0.82rem]">{p.duration}</td>
                      <td className="px-5 py-4 border-r border-[#1a1a1a] text-[#C8C2B8] font-[family-name:var(--font-syne)] text-[0.82rem]">{p.teamSize}</td>
                      <td className={`px-5 py-4 font-[family-name:var(--font-syne)] font-extrabold text-[0.9rem] ${p.isBundle ? "text-[#C8A96E]" : "text-[#F5F0E8]"}`}>
                        {p.investment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border border-[rgba(200,169,110,0.2)] bg-[rgba(200,169,110,0.05)] p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-lg text-[#F5F0E8] mb-1">
                Not sure which programme fits?
              </h3>
              <p className="text-[#C8C2B8] text-sm">
                One call with Coach Ezra and you'll know exactly what your team needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I%27d+like+to+understand+which+corporate+programme+is+right+for+my+team."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C8A96E] text-[#0A0A0A] px-7 py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
              >
                <MessageCircle size={15} />
                Ask Coach Ezra
              </a>
              <Link
                href="/corporate-assessment"
                className="inline-flex items-center gap-2 border border-[#222] text-[#F5F0E8] px-7 py-4 font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-wide hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all"
              >
                Book Assessment →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── TAB: AUDIT ── */}
      {activeTab === "audit" && (
        <section className="px-[5%] py-16 bg-[#0A0A0A]">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            Corporate Sales Audit
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-3">
            What We Examine<br />Before We Prescribe.
          </h2>
          <p className="text-[#C8C2B8] text-sm max-w-xl leading-relaxed mb-12">
            Every corporate engagement begins with an audit. No generic recommendations. No off-the-shelf programmes. We diagnose before we prescribe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-[#222] overflow-hidden mb-12">
            {auditAreas.map((area, i) => (
              <div key={i} className="bg-[#111] p-8 hover:bg-[#161616] transition-colors">
                <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-base text-[#C8A96E] mb-5 uppercase tracking-[0.08em]">
                  {area.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[0.83rem] text-[#C8C2B8] py-1.5 border-b border-[#1e1e1e] last:border-0">
                      <span className="text-[#C8A96E] text-xs flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-6">
            Assessment Timeline
          </div>
          <div className="flex flex-col gap-px border border-[#222] overflow-hidden max-w-2xl mb-12">
            {[
              { day: "Day 1", event: "Assessment call booked. Coach Ezra confirms availability." },
              { day: "Days 2–5", event: "Data collection & analysis — team calls, CRM review, performance metrics." },
              { day: "Days 6–7", event: "Custom proposal delivered: findings, recommendations, investment, expected ROI." },
              { day: "Day 8+", event: "Programme onboarding begins (if approved). Revenue starts moving." },
            ].map((t, i) => (
              <div key={i} className="flex gap-6 items-start bg-[#111] hover:bg-[#161616] transition-colors px-6 py-4 border-b border-[#1e1e1e] last:border-0">
                <span className="font-[family-name:var(--font-syne)] font-extrabold text-[#C8A96E] text-sm flex-shrink-0 w-20">{t.day}</span>
                <span className="text-[0.85rem] text-[#C8C2B8] leading-relaxed">{t.event}</span>
              </div>
            ))}
          </div>

          <Link
            href="/corporate-assessment"
            className="inline-flex items-center gap-2 bg-[#C8A96E] text-[#0A0A0A] px-8 py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
          >
            Book Your Assessment →
          </Link>
        </section>
      )}

      {/* ── TAB: PAYMENT ── */}
      {activeTab === "payment" && (
        <section className="px-[5%] py-16 bg-[#0A0A0A]">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            Frictionless Payment
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-3">
            Pay Your Way.
          </h2>
          <p className="text-[#C8C2B8] text-sm max-w-lg leading-relaxed mb-12">
            No payment barrier between you and your next level. We accept what works in your world — from instant MoMo to formal corporate invoicing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-[#222] overflow-hidden mb-12">
            {paymentMethods.map((m, i) => (
              <div key={i} className="bg-[#111] p-8 hover:bg-[#161616] transition-colors">
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-base text-[#F5F0E8] mb-2">{m.label}</h3>
                <p className="text-[0.83rem] text-[#C8C2B8] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing table */}
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-6">
            Investment Reference (RWF)
          </div>
          <div className="border border-[#222] overflow-hidden max-w-xl mb-6">
            {[
              { label: "B2B Sales Team Transformation", price: "2,800,000" },
              { label: "B2C High-Volume Rep Programme", price: "5,500,000" },
              { label: "Sales Leadership Mastery", price: "1,200,000" },
              { label: "Full Corporate Bundle", price: "9,500,000", featured: true },
            ].map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 py-4 border-b border-[#1e1e1e] last:border-0 transition-colors ${
                  row.featured ? "bg-[rgba(200,169,110,0.08)]" : "bg-[#111] hover:bg-[#161616]"
                }`}
              >
                <span className={`font-[family-name:var(--font-syne)] font-semibold text-sm ${row.featured ? "text-[#C8A96E]" : "text-[#C8C2B8]"}`}>
                  {row.label}
                </span>
                <span className={`font-[family-name:var(--font-syne)] font-extrabold text-sm ${row.featured ? "text-[#C8A96E]" : "text-[#F5F0E8]"}`}>
                  {row.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[#555] text-xs max-w-xl leading-relaxed mb-8 font-[family-name:var(--font-syne)]">
            All investments are scoped to team size, programme duration, and engagement complexity. Final figures are confirmed in your custom proposal.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+request+a+corporate+proposal+for+my+organisation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8A96E] text-[#0A0A0A] px-8 py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
            >
              Request Full Proposal →
            </a>
            <Link
              href="/corporate-assessment"
              className="inline-flex items-center gap-2 border border-[#222] text-[#F5F0E8] px-8 py-4 font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-wide hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all"
            >
              Book Assessment First
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}