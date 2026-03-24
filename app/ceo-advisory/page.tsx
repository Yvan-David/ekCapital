"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const qualifiers = [
  { q: "You're a founder or C-suite exec with decision-making authority", icon: "👑" },
  { q: "Your business generates revenue but growth is inconsistent or stalled", icon: "📊" },
  { q: "You've tried motivating your team — the problem is the system, not the people", icon: "🔧" },
  { q: "You want a thinking partner, not just a trainer", icon: "🧠" },
  { q: "You're ready to invest in fixing this properly", icon: "💼" },
];

const whatYouGet = [
  { num: "01", title: "Commercial Audit", desc: "A forensic review of your sales process, team structure, pricing, and ICP — identifying exactly where revenue is leaking." },
  { num: "02", title: "Revenue Gap Analysis", desc: "Quantified. Prioritised. Clear. You'll know the single highest-leverage change to make first." },
  { num: "03", title: "Process Redesign", desc: "Coach Ezra rebuilds your sales architecture — from lead to close to repeat — with you in every session." },
  { num: "04", title: "Direct Monthly Access", desc: "A retainer relationship. Coach Ezra is in your corner every month — for reviews, escalations, and strategic decisions." },
];

const faqs = [
  { q: "Who is this for?", a: "CEOs, founders, and C-suite executives who are responsible for revenue and want to engage Coach Ezra as a thinking partner — not just a trainer." },
  { q: "Is this a one-off session or ongoing?", a: "It begins with an audit and scoping conversation. From there, most engagements become a monthly retainer with structured touchpoints and direct access." },
  { q: "What does it cost?", a: "Engagements are scoped based on business size and complexity. WhatsApp Coach Ezra for a direct conversation — no generic pricing sheets." },
  { q: "How quickly can we start?", a: "Qualified applications are responded to within 24 hours. Most engagements begin within two weeks of agreement." },
];

export default function CEOAdvisoryPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen font-[family-name:var(--font-dm-sans)]">
      {/* Back to Home Tobe done later*/}
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-[5%] overflow-hidden">
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(200,169,110,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        {/* Large BG text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
          <span className="font-[family-name:var(--font-bebas)] text-[20vw] text-[rgba(200,169,110,0.04)] leading-none">CEO</span>
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 text-xs font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
            Advisory · CEO Retainer
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,10vw,8rem)] leading-[0.88] mb-6">
            APPLY FOR<br />
            <span className="text-[#C8A96E]">CEO</span><br />
            <span style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}>ADVISORY</span>
          </h1>
          <p className="text-[#C8C2B8] text-lg max-w-xl leading-relaxed mb-3">
            <strong className="text-[#F5F0E8]">Revenue Architecture Consulting</strong> — Coach Ezra works directly with you, in your business, to identify and fix what's actually breaking your revenue engine.
          </p>
          <p className="text-[#C8C2B8] text-sm leading-relaxed max-w-xl italic border-l-2 border-[#CC3333] pl-4 bg-[rgba(204,51,51,0.05)] py-3 pr-4">
            "I don't know if my sales process, team structure, or pricing is broken — I just know revenue isn't where it should be."
          </p>
        </div>
      </section>

      {/* Is this for you? */}
      <section className="px-[5%] py-20 bg-[#111]">
        <div className="max-w-3xl">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            Is This For You?
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-8 leading-tight">
            This Engagement is<br />For Leaders Who Are Serious.
          </h2>
          <div className="flex flex-col gap-px">
            {qualifiers.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#0A0A0A] border border-[#222] px-6 py-4 hover:bg-[#161616] transition-colors">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-[0.9rem] text-[#C8C2B8] font-[family-name:var(--font-syne)] font-semibold leading-relaxed">{item.q}</p>
                <span className="ml-auto text-[#C8A96E] text-lg flex-shrink-0">✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-[5%] py-20 bg-[#0A0A0A]">
        <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
          The Engagement
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-12 leading-tight">
          What You Actually Get.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-[#222] overflow-hidden">
          {whatYouGet.map((item, i) => (
            <div key={i} className="bg-[#111] p-8 hover:bg-[#161616] transition-colors">
              <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#C8A96E] leading-none mb-4">{item.num}</div>
              <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-lg mb-3">{item.title}</h3>
              <p className="text-[0.87rem] text-[#C8C2B8] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[5%] py-20 bg-[#111]">
        <div className="max-w-2xl">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            Common Questions
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] mb-8 leading-tight">
            What You Need to Know.
          </h2>
          <div className="flex flex-col gap-px">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-[#222] overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-[family-name:var(--font-syne)] font-bold text-sm text-[#F5F0E8] hover:text-[#C8A96E] transition-colors"
                >
                  {faq.q}
                  <span className={`text-[#C8A96E] text-lg transition-transform duration-200 flex-shrink-0 ml-4 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[0.87rem] text-[#C8C2B8] leading-relaxed border-t border-[#1a1a1a]">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="px-[5%] py-24 text-center relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(200,169,110,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(2rem,5vw,4rem)] mb-4 leading-tight">
            Ready to Apply?
          </h2>
          <p className="text-[#C8C2B8] text-sm max-w-md mx-auto leading-relaxed mb-10">
            Spots are limited. Coach Ezra only takes on a small number of advisory clients at any time to ensure depth of engagement. Send a message to start the conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I%27m+a+CEO+and+want+to+apply+for+Revenue+Architecture+Advisory.+Can+we+talk%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:brightness-110 hover:-translate-y-1 shadow-[0_0_40px_rgba(37,211,102,0.2)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Apply via WhatsApp
            </a>
            <Link
              href="/programs"
              className="inline-block border border-[#222] text-[#F5F0E8] px-8 py-5 font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-wide hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all"
            >
              View All Programmes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}