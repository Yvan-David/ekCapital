"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function Countdown() {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const target = new Date("2026-03-31T23:59:59");
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({
        d: String(d).padStart(2, "0"),
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-2">
      {[["Days", time.d], ["Hours", time.h], ["Mins", time.m], ["Secs", time.s]].map(([label, val]) => (
        <div key={label} className="bg-[#0A0A0A] border border-[#222] p-3 sm:p-4 min-w-[60px] sm:min-w-[70px] text-center">
          <span className="block font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-[#C8A96E] leading-none">{val}</span>
          <span className="block font-[family-name:var(--font-syne)] text-[0.6rem] font-bold tracking-[0.1em] uppercase text-[#555] mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}

const cohortIncludes = [
  "Full EK12PS™ 12-point selling system (theory + application)",
  "Live field training in real Kigali market conditions",
  "Role-play and objection drilling sessions",
  "Assessed closing performance (EKPCS™ standard)",
  "Personal coaching from Coach Ezra throughout",
  "EKPCS™ certification on completion",
  "Job placement introduction to partner employers",
  "Alumni network access (post-graduation)",
];

const faqs = [
  { q: "Do I need prior sales experience?", a: "No. The cohort is designed to take you from zero to certified. Prior experience helps but is not required." },
  { q: "How long is the programme?", a: "The cohort runs approximately 4–6 weeks depending on the cohort structure. Exact schedule is confirmed on registration." },
  { q: "What does it cost?", a: "Investment details are shared on WhatsApp after a brief qualification conversation. MoMo payment is available." },
  { q: "Will I actually get a job?", a: "Placement support is offered to all graduates. We introduce you to partner employers — but the role is earned by your performance, not guaranteed." },
  { q: "What if I miss the March cohort?", a: "The next cohort will open later in 2026. Joining the waitlist now ensures you're first in when applications open." },
];

const [openFaq, setOpenFaq] = [0, (v: number) => v]; // placeholder — real useState below

export default function RegisterCohortPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [background, setBackground] = useState("");
  const [goal, setGoal] = useState("");

  const backgrounds = ["Fresh graduate", "Career switcher", "Working in sales already", "Entrepreneur / founder", "Other"];
  const goals = ["Get certified and employed", "Increase my sales income", "Build a sales career from scratch", "Get certified for my own business"];

  const waMessage = encodeURIComponent(
    `Hi Coach Ezra, I want to register for the next EKPCS certification cohort.\n\nMy background: ${background || "—"}\nMy goal: ${goal || "—"}\n\nPlease send me the details and confirm availability.`
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
      {/* Urgency Banner */}
      <div className="mt-[53px] bg-[#CC3333] text-white text-center py-3 px-4 font-[family-name:var(--font-syne)] text-xs font-bold tracking-[0.1em] uppercase">
        🔥 March 2026 Cohort — Only 3 Seats Remaining. Close Date: March 31.
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-20 px-[5%] overflow-hidden">
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(200,169,110,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(200,169,110,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-5xl grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 text-xs font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
              EKPCS™ Cohort · March 2026
            </div>
            <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,9vw,7rem)] leading-[0.88] mb-6">
              REGISTER<br />
              <span className="text-[#C8A96E]">FOR THE</span><br />
              <span style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}>NEXT COHORT</span>
            </h1>
            <p className="text-[#C8C2B8] text-base leading-relaxed max-w-md mb-8">
              Six weeks. Real field training. Full EKPCS™ certification. Job placement support. This is not a course — it's a career launch.
            </p>
            <div className="mb-6">
              <div className="text-[#555] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-3">
                Cohort Closes In
              </div>
              <Countdown />
            </div>
          </div>

          {/* Quick Register */}
          <div className="bg-[#111] border border-[#222] p-8">
            <div className="text-[#C8A96E] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-6">
              Quick Registration
            </div>

            <div className="mb-5">
              <div className="text-[#F5F0E8] text-[0.8rem] font-[family-name:var(--font-syne)] font-bold mb-3">Your background</div>
              <div className="flex flex-col gap-2">
                {backgrounds.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBackground(b)}
                    className={`flex items-center gap-3 px-4 py-2.5 border text-left text-[0.82rem] font-[family-name:var(--font-syne)] font-semibold transition-all duration-150 ${
                      background === b
                        ? "border-[#C8A96E] bg-[rgba(200,169,110,0.1)] text-[#F5F0E8]"
                        : "border-[#222] bg-[#0A0A0A] text-[#C8C2B8] hover:border-[#444]"
                    }`}
                  >
                    {background === b && <span className="text-[#C8A96E] text-xs">✓</span>}
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-[#F5F0E8] text-[0.8rem] font-[family-name:var(--font-syne)] font-bold mb-3">Your goal</div>
              <div className="flex flex-col gap-2">
                {goals.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`flex items-center gap-3 px-4 py-2.5 border text-left text-[0.82rem] font-[family-name:var(--font-syne)] font-semibold transition-all duration-150 ${
                      goal === g
                        ? "border-[#C8A96E] bg-[rgba(200,169,110,0.1)] text-[#F5F0E8]"
                        : "border-[#222] bg-[#0A0A0A] text-[#C8C2B8] hover:border-[#444]"
                    }`}
                  >
                    {goal === g && <span className="text-[#C8A96E] text-xs">✓</span>}
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={background && goal ? `https://wa.me/250XXXXXXXX?text=${waMessage}` : "#"}
              target={background && goal ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={(e) => { if (!background || !goal) e.preventDefault(); }}
              className={`flex items-center justify-center gap-3 w-full py-4 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all duration-200 ${
                background && goal
                  ? "bg-[#C8A96E] text-[#0A0A0A] hover:bg-[#E8C98A] hover:-translate-y-0.5"
                  : "bg-[#1a1a1a] text-[#444] cursor-not-allowed border border-[#222]"
              }`}
            >
              {background && goal ? "Register via WhatsApp →" : "Select options above"}
            </a>
            <p className="text-[#555] text-[0.7rem] text-center mt-3 font-[family-name:var(--font-syne)]">
              Opens WhatsApp with your details pre-filled. No forms.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-[5%] py-20 bg-[#111]">
        <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
          What's Included
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] mb-8 leading-tight">
          Everything You Need<br />to Get Certified and Placed.
        </h2>
        <div className="max-w-2xl flex flex-col gap-px">
          {cohortIncludes.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-[#0A0A0A] border border-[#222] px-6 py-4 hover:bg-[#161616] transition-colors">
              <span className="text-[#C8A96E] flex-shrink-0 font-bold mt-0.5">→</span>
              <p className="text-[0.87rem] text-[#C8C2B8]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[5%] py-20 bg-[#0A0A0A]">
        <div className="max-w-2xl">
          <div className="border-l-[3px] border-[#C8A96E] pl-3 text-[#C8A96E] text-[0.72rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
            FAQ
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] mb-8 leading-tight">
            Common Questions.
          </h2>
          <div className="flex flex-col gap-px">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111] border border-[#222] overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-[family-name:var(--font-syne)] font-bold text-sm text-[#F5F0E8] hover:text-[#C8A96E] transition-colors"
                >
                  {faq.q}
                  <span className={`text-[#C8A96E] text-xl flex-shrink-0 ml-4 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 border-t border-[#1a1a1a]">
                    <p className="text-[0.87rem] text-[#C8C2B8] leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-[5%] py-20 bg-[#111] text-center">
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(2rem,5vw,4rem)] mb-4 leading-tight">
          3 Seats. One Shot.
        </h2>
        <p className="text-[#C8C2B8] text-sm max-w-sm mx-auto mb-8 leading-relaxed">
          The March cohort closes when full. The next opening isn't until later in 2026. Don't wait.
        </p>
        <a
          href="https://wa.me/250XXXXXXXX?text=Hi+Coach+Ezra%2C+I+want+to+register+for+the+March+EKPCS+cohort+and+secure+my+seat."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#C8A96E] text-[#0A0A0A] px-10 py-5 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all hover:bg-[#E8C98A] hover:-translate-y-1 shadow-[0_0_40px_rgba(200,169,110,0.2)]"
        >
          Secure My Seat Now →
        </a>
      </section>
    </main>
  );
}