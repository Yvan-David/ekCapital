"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const programs = [
  {
    num: "01",
    tag: "🔥 Most Popular · Corporate",
    title: "Sales Team Transformation Programme",
    problem: '"Our team has great products but can\'t close consistently."',
    desc: "A structured immersion programme that rewires how your salespeople think, speak, and close. Built on the EK12PS™ framework and delivered in real market conditions — not a classroom simulation.",
    outcomes: [
      "Sales team closes more deals in the first 30 days",
      "Unified messaging across every rep and channel",
      "Live objection-handling in your actual market",
      "CRM adoption and pipeline discipline installed",
      "Post-training performance tracking included",
    ],
    cta: "Book Corporate Assessment",
    href: "/corporate-assessment",
    featured: true,
  },
  {
    num: "02",
    tag: "Leadership · Revenue Architecture",
    title: "Sales Leadership Mastery",
    problem: '"My managers motivate. They don\'t manage pipeline or coach effectively."',
    desc: "Designed for sales managers, team leads, and heads of sales. You'll learn to build dashboards that matter, run pipeline reviews that produce action, and coach reps to consistent performance.",
    outcomes: [
      "Forecast accuracy improves within 60 days",
      "Weekly coaching cadence that actually develops reps",
      "Accountability structures that don't kill morale",
      "Hiring and onboarding playbooks for new reps",
    ],
    cta: "Discuss Leadership Programme",
    href: "/leadership-programme",
    featured: false,
  },
  {
    num: "03",
    tag: "Advisory · CEO Retainer",
    title: "Revenue Architecture Consulting",
    problem: '"I don\'t know if my sales process, team structure, or pricing is broken — I just know revenue isn\'t where it should be."',
    desc: "Coach Ezra works directly with you as a Revenue Architect. We audit your entire commercial operation, identify the highest-leverage constraints, and rebuild what's broken — with you in the room.",
    outcomes: [
      "Full commercial audit and revenue gap analysis",
      "Sales process design and ICP refinement",
      "Pricing and packaging recommendations",
      "Monthly retainer with direct access to Coach Ezra",
    ],
    cta: "Apply for CEO Advisory",
    href: "/ceo-advisory",
    featured: false,
  },
  {
    num: "04",
    tag: "Individual · EKPCS™ Certified",
    title: "Professional Sales Certification (EKPCS™)",
    problem: '"I want a career in sales or to dramatically increase what I earn — but I\'ve never been trained properly."',
    desc: "A hands-on cohort programme that takes you through the EK12PS™ system, live market field work, role-plays, and full EKPCS™ certification. Graduates are placed with hiring partners across Rwanda and East Africa.",
    outcomes: [
      "EK Capital Performance Certification (EKPCS™)",
      "Live field training in real sales environments",
      "Job placement support with partner employers",
      "Alumni network and ongoing coaching access",
    ],
    cta: "Register for Next Cohort",
    href: "/register-cohort",
    featured: false,
  },
];

const ek12Steps = [
  { num: "01", name: "Mindset", desc: "Revenue psychology and selling as serving" },
  { num: "02", name: "ICP", desc: "Identifying the exact buyer worth pursuing" },
  { num: "03", name: "Prospecting", desc: "Building a pipeline that never runs dry" },
  { num: "04", name: "Opening", desc: "First contact that earns the conversation" },
  { num: "05", name: "Diagnosis", desc: "Ask what others are afraid to ask" },
  { num: "06", name: "Value Build", desc: "Translate features into business outcomes" },
  { num: "07", name: "Presentation", desc: "Show up like a solution, not a salesperson" },
  { num: "08", name: "Objections", desc: "Turn resistance into committed buyers" },
  { num: "09", name: "Closing", desc: "Ask for the decision with confidence" },
  { num: "10", name: "Follow-Up", desc: "The system that captures lost revenue" },
  { num: "11", name: "Retention", desc: "Customers that buy again and again" },
  { num: "12", name: "Referrals", desc: "Build a machine that sells itself" },
];

export default function ProgramsPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen font-[family-name:var(--font-dm-sans)]">
      {/* Back to Home */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#1a1a1a]">
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-6 py-4 text-[#C8C2B8] hover:text-[#C8A96E] transition-colors duration-200 font-[family-name:var(--font-syne)] font-bold text-[0.72rem] tracking-[0.2em] uppercase"
        >
          <span className="text-base leading-none">←</span>
          Back to Home
        </Link>
      </div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-[5%] overflow-hidden">
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(200,169,110,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,169,110,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 text-xs font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
            Revenue Programs
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] leading-[0.88] text-[#F5F0E8] mb-6">
            FOUR SYSTEMS.<br />
            <span className="text-[#C8A96E]">ONE GOAL:</span><br />
            <span style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}>REVENUE.</span>
          </h1>
          <p className="text-[#C8C2B8] text-lg max-w-xl leading-relaxed">
            Every programme is built on the <strong className="text-[#F5F0E8]">EK12PS™</strong> — our 12-point selling system that takes salespeople from inconsistent to unstoppable.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-[5%] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[#222] overflow-hidden">
          {programs.map((p) => (
            <div
              key={p.num}
              className={`relative p-10 flex flex-col transition-colors duration-200 ${
                p.featured
                  ? "bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.2)]"
                  : "bg-[#161616] hover:bg-[#181818]"
              }`}
            >
              <span className="absolute top-6 right-8 font-[family-name:var(--font-bebas)] text-6xl text-[#222] leading-none select-none">
                {p.num}
              </span>
              <div className="text-[#C8A96E] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-4">
                {p.tag}
              </div>
              <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-xl leading-snug mb-4">
                {p.title}
              </h2>
              <p className="text-[0.85rem] text-[#666] mb-4 px-3 py-3 bg-[rgba(204,51,51,0.06)] border-l-2 border-[#CC3333] italic leading-relaxed">
                {p.problem}
              </p>
              <p className="text-[0.9rem] text-[#C8C2B8] leading-relaxed mb-5">{p.desc}</p>
              <ul className="mb-8 flex flex-col">
                {p.outcomes.map((o, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[0.85rem] text-[#C8C2B8] py-2 border-b border-[#222] last:border-0"
                  >
                    <span className="text-[#C8A96E] flex-shrink-0 mt-0.5">→</span>
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href={p.href}
                  className="inline-block bg-[#C8A96E] text-[#0A0A0A] px-6 py-3 font-[family-name:var(--font-syne)] font-extrabold text-[0.82rem] tracking-[0.06em] uppercase transition-all duration-200 hover:bg-[#E8C98A] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,169,110,0.3)]"
                >
                  → {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EK12PS Framework */}
      <section className="px-[5%] pb-24 bg-[#111]">
        <div className="pt-20">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            The Foundation
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-3">
            The EK12PS™ System
          </h2>
          <p className="text-[#C8C2B8] text-sm max-w-lg leading-relaxed mb-12">
            Twelve phases. One complete selling architecture. This is what every programme is built on.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-[#222] overflow-hidden">
            {ek12Steps.map((s, i) => (
              <div key={i} className="p-5 border-r border-b border-[#222] last:border-r-0 bg-[#0A0A0A] hover:bg-[#161616] transition-colors">
                <div className="font-[family-name:var(--font-bebas)] text-3xl text-[#C8A96E] leading-none mb-2">{s.num}</div>
                <div className="font-[family-name:var(--font-syne)] font-bold text-[0.85rem] text-[#F5F0E8] mb-1">{s.name}</div>
                <div className="text-[0.75rem] text-[#C8C2B8] leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-[5%] py-24 text-center relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-[family-name:var(--font-bebas)] text-[20vw] text-[rgba(200,169,110,0.03)] whitespace-nowrap">
            CLOSE
          </span>
        </div>
        <div className="relative z-10">
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(2rem,5vw,4rem)] mb-4 leading-tight">
            Not Sure Which Programme?
          </h2>
          <p className="text-[#C8C2B8] text-sm max-w-md mx-auto leading-relaxed mb-10">
            One WhatsApp message is enough. Coach Ezra qualifies you and recommends the right path — in under 24 hours.
          </p>
          <a
            href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+find+the+right+programme+for+me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 font-[family-name:var(--font-syne)] font-extrabold text-base uppercase tracking-wide transition-all duration-200 hover:brightness-110 hover:-translate-y-1 shadow-[0_0_40px_rgba(37,211,102,0.25)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask Coach Ezra Directly
          </a>
        </div>
      </section>
    </main>
  );
}