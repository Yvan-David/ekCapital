"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const problems = [
  { icon: "📉", label: "Close rate under 20%" },
  { icon: "🔄", label: "Reps are busy, not productive" },
  { icon: "🗣️", label: "No consistent sales messaging" },
  { icon: "🏃", label: "High rep turnover & low morale" },
  { icon: "📊", label: "No pipeline visibility" },
  { icon: "🎯", label: "Missing revenue targets" },
];

const programmes = [
  { label: "B2B Sales Programme", price: "2,800,000 RWF" },
  { label: "B2C Team Programme", price: "5,500,000 RWF" },
  { label: "Leadership Programme", price: "1,200,000 RWF" },
  { label: "Full Bundle", price: "9,500,000 RWF", featured: true },
];

const steps = [
  { num: "01", title: "Assessment Call", desc: "Coach Ezra reviews your team structure, current performance, and growth targets." },
  { num: "02", title: "Diagnosis Report", desc: "You receive a written breakdown of revenue constraints and programme recommendations." },
  { num: "03", title: "Custom Proposal", desc: "A tailored programme scope, timeline, and investment — built for your business." },
  { num: "04", title: "Programme Begins", desc: "Kick-off within 5–10 business days. Revenue starts moving immediately." },
];

export default function CorporateAssessmentPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );

  const waMessage = encodeURIComponent(
    `Hi Coach Ezra, I want to book a Corporate Sales Assessment. Our main challenges are: ${
      selected.length ? selected.join(", ") : "to be discussed"
    }. Please tell me more.`
  );

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(200,169,110,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-5xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 text-xs font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
              For CEOs · COOs · Sales Directors
            </div>
            <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,9vw,7rem)] leading-[0.88] mb-6">
              GET A<br />
              <span className="text-[#C8A96E]">CORPORATE</span><br />
              <span style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}>ASSESSMENT</span>
            </h1>
            <p className="text-[#C8C2B8] text-base leading-relaxed max-w-md">
              One session with Coach Ezra. Full commercial audit. Clear diagnosis of what's holding your revenue back — and exactly how to fix it.
            </p>
          </div>
          <div className="bg-[#111] border border-[#222] p-8">
            <div className="text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
              What's your biggest challenge?
            </div>
            <div className="grid grid-cols-1 gap-2 mb-6">
              {problems.map((p) => (
                <button
                  key={p.label}
                  onClick={() => toggle(p.label)}
                  className={`flex items-center gap-3 px-4 py-3 border text-left text-[0.85rem] font-[family-name:var(--font-syne)] font-semibold transition-all duration-150 ${
                    selected.includes(p.label)
                      ? "border-[#C8A96E] bg-[rgba(200,169,110,0.1)] text-[#F5F0E8]"
                      : "border-[#222] bg-[#0A0A0A] text-[#C8C2B8] hover:border-[#444]"
                  }`}
                >
                  <span>{p.icon}</span>
                  {p.label}
                  {selected.includes(p.label) && (
                    <span className="ml-auto text-[#C8A96E]">✓</span>
                  )}
                </button>
              ))}
            </div>
            <a
              href={`https://wa.me/250XXXXXXXX?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#C8A96E] text-[#0A0A0A] w-full py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
            >
              Book Corporate Assessment →
            </a>
            <p className="text-[#555] text-xs text-center mt-3 font-[family-name:var(--font-syne)]">
              Responds within 2 hours · No commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-[5%] py-20 bg-[#111]">
        <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
          What Happens Next
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-12 leading-tight">
          From First Message to<br />Programme Start in 5 Days.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#222] overflow-hidden">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#0A0A0A] border-r border-[#222] last:border-r-0 p-8 hover:bg-[#161616] transition-colors">
              <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#C8A96E] leading-none mb-4">{s.num}</div>
              <div className="font-[family-name:var(--font-syne)] font-bold text-base text-[#F5F0E8] mb-2">{s.title}</div>
              <div className="text-[0.82rem] text-[#C8C2B8] leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Reference */}
      <section className="px-[5%] py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            Investment Reference (RWF)
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-8 leading-tight">
            Programmes Built for<br />Your Scale.
          </h2>
          <div className="border border-[#222] overflow-hidden mb-8">
            {programmes.map((p, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 py-4 border-b border-[#222] last:border-b-0 ${
                  p.featured ? "bg-[rgba(200,169,110,0.08)]" : "bg-[#111] hover:bg-[#161616]"
                } transition-colors`}
              >
                <span
                  className={`font-[family-name:var(--font-syne)] font-semibold text-sm ${
                    p.featured ? "text-[#C8A96E]" : "text-[#C8C2B8]"
                  }`}
                >
                  {p.label}
                </span>
                <span
                  className={`font-[family-name:var(--font-syne)] font-extrabold text-sm ${
                    p.featured ? "text-[#C8A96E]" : "text-[#F5F0E8]"
                  }`}
                >
                  {p.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[#C8C2B8] text-xs leading-relaxed mb-6">
            All investments are customised based on team size, programme scope, and engagement length. Corporate invoicing, MOU frameworks, and milestone billing available. Request a full proposal for accurate figures.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/request-propasal"
              rel="noopener noreferrer"
              className="inline-block bg-[#C8A96E] text-[#0A0A0A] px-8 py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-0.5"
            >
              Request Full Proposal →
            </a>
            <Link
              href="/programs"
              className="inline-block border border-[#222] text-[#F5F0E8] px-8 py-4 font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-wide transition-all hover:border-[#C8A96E] hover:text-[#C8A96E]"
            >
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* Payment methods strip */}
      <section className="px-[5%] py-12 bg-[#111] border-t border-[#222]">
        <div className="text-[#555] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-6">
          Payment Accepted
        </div>
        <div className="flex flex-wrap gap-4">
          {["📱 MTN MoMo", "🏦 Bank Transfer (I&M)", "📋 Corporate Invoice", "🤝 MOU / Partnership"].map((m) => (
            <div key={m} className="bg-[#0A0A0A] border border-[#222] px-5 py-3 text-[0.82rem] text-[#C8C2B8] font-[family-name:var(--font-syne)] font-semibold">
              {m}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}