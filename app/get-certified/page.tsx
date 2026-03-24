"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const phases = [
  { num: "01", title: "Foundation Week", desc: "Mindset, ICP, and prospecting. You build your first clean pipeline from zero." },
  { num: "02", title: "Skill Drilling", desc: "Opening, diagnosis, value-building, presentation. Drilled until automatic — not just understood." },
  { num: "03", title: "Field Training", desc: "You sell in real markets with real customers. This is where theory becomes skill." },
  { num: "04", title: "Objection Lab", desc: "Every objection your market throws is practised, recorded, and corrected live." },
  { num: "05", title: "Close Week", desc: "Closing, follow-up, and retention. You perform assessed closes in live conditions." },
  { num: "06", title: "Certification & Placement", desc: "EKPCS™ issued. Job placement process begins immediately with partner employers." },
];

const outcomes = [
  "EKPCS™ certification — recognised by partner employers across East Africa",
  "Full command of the EK12PS™ 12-point selling system",
  "Live field experience selling in real Rwanda market conditions",
  "Access to EK Capital alumni network and ongoing coaching",
  "Job placement support with vetted hiring partners",
  "Ability to sell B2B, B2C, or transition into sales leadership",
];

const whoItsFor = [
  { icon: "🎓", title: "Fresh Graduates", desc: "No sales experience needed. We start from zero and build to employed." },
  { icon: "🔄", title: "Career Switchers", desc: "Leaving your current field? Sales is the most recession-proof skill in any market." },
  { icon: "📈", title: "Salespeople Who've Plateaued", desc: "You're selling — but not growing. The system gives you the ceiling-breaker." },
  { icon: "💡", title: "Entrepreneurs", desc: "You built something. Now learn how to actually sell it — systematically." },
];

const placements = [
  { name: "Umurava", role: "Commercial roles" },
  { name: "Financial Services partners", role: "B2B/B2C sales" },
  { name: "Telecoms sector", role: "Field & inside sales" },
  { name: "FMCG companies", role: "Retail & distribution" },
];

export default function GetCertifiedPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen font-[family-name:var(--font-dm-sans)]">
      {/* Back to Home Tobe done later*/}
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-[5%] overflow-hidden">
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(200,169,110,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(200,169,110,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-5xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 text-xs font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
              Individual · EKPCS™ Certified
            </div>
            <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,9vw,7rem)] leading-[0.88] mb-6">
              GET<br />
              <span className="text-[#C8A96E]">EKPCS™</span><br />
              <span style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}>CERTIFIED</span>
            </h1>
            <p className="text-[#C8C2B8] text-base leading-relaxed mb-6 max-w-md">
              Africa's professional standard for sales performance. Get trained, assessed in the field, certified, and placed — in one cohort.
            </p>
            <p className="text-[0.85rem] text-[#666] italic border-l-2 border-[#CC3333] pl-4 bg-[rgba(204,51,51,0.05)] py-3 pr-4 max-w-md">
              "I want a career in sales or to dramatically increase what I earn — but I've never been trained properly."
            </p>
          </div>

          {/* Cert Badge + CTA */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-52 h-52 border-[3px] border-[#C8A96E] rounded-full flex flex-col items-center justify-center text-center bg-[rgba(200,169,110,0.08)]">
              <div className="absolute inset-3 rounded-full border border-dashed border-[rgba(200,169,110,0.35)]" />
              <div className="relative font-[family-name:var(--font-bebas)] text-[2rem] text-[#C8A96E] tracking-widest leading-tight">
                EKPCS™
              </div>
              <div className="relative font-[family-name:var(--font-syne)] text-[0.6rem] font-bold tracking-[0.12em] uppercase text-[#C8C2B8] mt-1 leading-snug px-4">
                EK Capital<br />Performance<br />Certification<br />Standard
              </div>
            </div>
            <div className="w-full max-w-sm flex flex-col gap-3">
              <a
                href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+register+for+the+next+EKPCS+certification+cohort."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#C8A96E] text-[#0A0A0A] w-full py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
              >
                Register for Next Cohort →
              </a>
              <div className="flex items-center justify-center gap-2 bg-[rgba(204,51,51,0.08)] border border-[rgba(204,51,51,0.2)] py-3">
                <span className="text-[#CC3333] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.1em] uppercase">
                  🔥 3 Seats Remaining — March 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-[5%] py-20 bg-[#111]">
        <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
          Who Should Apply
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-10 leading-tight">
          Built for Anyone<br />Starting or Restarting.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[#222] overflow-hidden">
          {whoItsFor.map((item, i) => (
            <div key={i} className="bg-[#0A0A0A] p-7 hover:bg-[#161616] transition-colors">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-base mb-2">{item.title}</h3>
              <p className="text-[0.82rem] text-[#C8C2B8] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programme Phases */}
      <section className="px-[5%] py-20 bg-[#0A0A0A]">
        <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
          Programme Structure
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-10 leading-tight">
          Six Phases.<br />One Transformation.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#222] overflow-hidden">
          {phases.map((phase, i) => (
            <div key={i} className="relative bg-[#111] p-8 hover:bg-[#161616] transition-colors overflow-hidden">
              <span className="absolute top-4 right-6 font-[family-name:var(--font-bebas)] text-6xl text-[#1a1a1a] leading-none select-none">
                {phase.num}
              </span>
              <div className="font-[family-name:var(--font-bebas)] text-4xl text-[#C8A96E] leading-none mb-3">{phase.num}</div>
              <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-base mb-2">{phase.title}</h3>
              <p className="text-[0.82rem] text-[#C8C2B8] leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-[5%] py-20 bg-[#111]">
        <div className="max-w-3xl">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            What You Graduate With
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-8 leading-tight">
            Six Outcomes.<br />Zero Fluff.
          </h2>
          <div className="flex flex-col gap-px">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#0A0A0A] border border-[#222] px-6 py-4 hover:bg-[#161616] transition-colors">
                <span className="text-[#C8A96E] flex-shrink-0 font-[family-name:var(--font-syne)] font-bold text-sm mt-0.5">→</span>
                <p className="text-[0.87rem] text-[#C8C2B8] leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="px-[5%] py-16 bg-[#0A0A0A]">
        <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-6">
          Graduate Placement Partners
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[#222] overflow-hidden mb-4">
          {placements.map((p, i) => (
            <div key={i} className="bg-[#111] p-6 text-center hover:bg-[#161616] transition-colors">
              <div className="font-[family-name:var(--font-syne)] font-extrabold text-sm text-[#F5F0E8] mb-1">{p.name}</div>
              <div className="text-[0.75rem] text-[#C8C2B8]">{p.role}</div>
            </div>
          ))}
        </div>
        <p className="text-[#555] text-xs font-[family-name:var(--font-syne)]">
          Placement network is active and growing. Graduates are introduced to partners after certification — not promised before.
        </p>
      </section>

      {/* Final CTA */}
      <section className="px-[5%] py-24 bg-[#C8A96E] text-[#0A0A0A] text-center">
        <div className="font-[family-name:var(--font-syne)] text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[rgba(0,0,0,0.5)] mb-4">
          Next Cohort · March 2026
        </div>
        <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] mb-4">
          SEATS ARE<br />FILLING FAST.
        </h2>
        <p className="text-[rgba(0,0,0,0.6)] text-base max-w-sm mx-auto mb-8">
          Only 3 seats left in the March cohort. The next one isn't until later in 2026. Don't miss it.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+register+for+the+next+EKPCS+certification+cohort+and+get+certified."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0A0A0A] text-[#C8A96E] px-10 py-5 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:-translate-y-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Secure My Seat — WhatsApp
          </a>
          <Link
            href="/programs"
            className="inline-block border-2 border-[rgba(0,0,0,0.3)] text-[#0A0A0A] px-8 py-5 font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-wide hover:border-[#0A0A0A] transition-all"
          >
            View All Programmes
          </Link>
        </div>
      </section>
    </main>
  );
}