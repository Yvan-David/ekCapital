"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const modules = [
  { num: "01", title: "Pipeline Management", desc: "Build dashboards that reflect reality. Run reviews that produce decisions, not just updates." },
  { num: "02", title: "Coaching Cadence", desc: "A weekly rhythm that develops reps without micromanaging. Coaching for performance, not compliance." },
  { num: "03", title: "Forecast Accuracy", desc: "Stop guessing. Learn the discipline of stage-based forecasting that holds within ±10%." },
  { num: "04", title: "Accountability Systems", desc: "Structures that create ownership without killing morale. Reps run toward targets, not away from managers." },
  { num: "05", title: "Rep Development", desc: "Identify who is coachable, who needs redeployment, and how to build the right team around you." },
  { num: "06", title: "Hiring & Onboarding", desc: "Build the playbook for bringing on new reps who hit targets in 30 days, not 90." },
];

const symptoms = [
  "Your team hits activity targets but misses revenue targets",
  "You coach by feel — not by a repeatable system",
  "Pipeline reviews feel like update meetings, not action sessions",
  "You can't forecast next month with confidence",
  "Top reps leave because they're not developing",
  "New reps take 3–4 months to become productive",
];

const outcomes = [
  "Forecast accuracy improves within 60 days",
  "A weekly coaching cadence your reps respect and respond to",
  "Accountability frameworks that don't kill morale or trust",
  "Hiring and onboarding playbooks for consistent rep ramp-up",
  "A pipeline review structure that produces decisions, not reports",
  "Personal leadership positioning as a Revenue Leader — not just a manager",
];

export default function LeadershipProgrammePage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen font-[family-name:var(--font-dm-sans)]">
      {/* Back to Home Tobe done later*/}
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-[5%] overflow-hidden bg-[#111]">
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(200,169,110,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden">
          <span className="font-[family-name:var(--font-bebas)] text-[18vw] text-[rgba(200,169,110,0.04)] leading-none">LEAD</span>
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 text-xs font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
            Leadership · Revenue Architecture
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,10vw,8rem)] leading-[0.88] mb-6">
            SALES<br />
            <span className="text-[#C8A96E]">LEADERSHIP</span><br />
            <span style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}>MASTERY</span>
          </h1>
          <p className="text-[#C8C2B8] text-base leading-relaxed max-w-xl mb-4">
            For sales managers, team leads, and heads of sales who need to stop managing activity and start driving <strong className="text-[#F5F0E8]">consistent revenue outcomes.</strong>
          </p>
          <p className="text-[0.85rem] text-[#666] italic border-l-2 border-[#CC3333] pl-4 bg-[rgba(204,51,51,0.05)] py-3 pr-4 max-w-xl">
            "My managers motivate. They don't manage pipeline or coach effectively."
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I%27m+a+sales+leader+and+want+to+discuss+the+Leadership+Mastery+Programme."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8A96E] text-[#0A0A0A] px-8 py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
            >
              Discuss This Programme →
            </a>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border border-[#222] text-[#F5F0E8] px-8 py-4 font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-wide hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all"
            >
              All Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* Symptom Check */}
      <section className="px-[5%] py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl">
          <div className="border-l-[3px] border-[#CC3333] pl-3 text-[#CC3333] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            Symptom Check
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-8 leading-tight">
            Does Any of This<br />Sound Familiar?
          </h2>
          <div className="flex flex-col gap-px">
            {symptoms.map((s, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#111] border border-[#222] px-6 py-4 hover:bg-[#161616] transition-colors">
                <span className="text-[#CC3333] flex-shrink-0 font-bold text-lg">✗</span>
                <p className="text-[0.87rem] text-[#C8C2B8] font-[family-name:var(--font-syne)] font-semibold">{s}</p>
              </div>
            ))}
          </div>
          <p className="text-[#555] text-sm mt-4 font-[family-name:var(--font-syne)]">
            If 3 or more of these match — this programme was built for you.
          </p>
        </div>
      </section>

      {/* Programme Modules */}
      <section className="px-[5%] py-20 bg-[#111]">
        <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
          Programme Modules
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-10 leading-tight">
          Six Competencies.<br />One Revenue Leader.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#222] overflow-hidden">
          {modules.map((m, i) => (
            <div key={i} className="relative bg-[#0A0A0A] p-8 hover:bg-[#161616] transition-colors overflow-hidden">
              <span className="absolute top-4 right-6 font-[family-name:var(--font-bebas)] text-6xl text-[#1a1a1a] leading-none select-none">
                {m.num}
              </span>
              <div className="font-[family-name:var(--font-bebas)] text-4xl text-[#C8A96E] leading-none mb-3">{m.num}</div>
              <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-base mb-2">{m.title}</h3>
              <p className="text-[0.82rem] text-[#C8C2B8] leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-[5%] py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            What You Walk Away With
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-8 leading-tight">
            Measurable Outcomes<br />Within 60 Days.
          </h2>
          <div className="flex flex-col gap-px">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#111] border border-[#222] px-6 py-4 hover:bg-[#161616] transition-colors">
                <span className="text-[#C8A96E] flex-shrink-0 font-[family-name:var(--font-syne)] font-bold mt-0.5">→</span>
                <p className="text-[0.87rem] text-[#C8C2B8] leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="px-[5%] py-16 bg-[#111] border-t border-[#222]">
        <div className="max-w-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="text-[#555] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-2">
              Investment Reference (RWF)
            </div>
            <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#C8A96E] leading-none">1,200,000</div>
            <div className="text-[#C8C2B8] text-xs mt-2 font-[family-name:var(--font-syne)]">
              Corporate invoice · MoMo · Bank transfer · MOU available
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-auto sm:min-w-[280px]">
            <a
              href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+discuss+the+Sales+Leadership+Mastery+Programme+and+its+investment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C8A96E] text-[#0A0A0A] w-full py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
            >
              Discuss This Programme →
            </a>
            <Link
              href="/request-proposal"
              className="flex items-center justify-center gap-2 border border-[#222] text-[#F5F0E8] w-full py-4 font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-wide hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all"
            >
              Request Full Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}