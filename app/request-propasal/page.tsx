"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const orgSizes = ["1–5 reps", "6–15 reps", "16–30 reps", "30+ reps"];
const industries = ["Telecoms / CanalBox", "Financial Services", "FMCG / Retail", "Real Estate", "Technology / SaaS", "Other"];
const interests = [
  "B2B Sales Team Transformation",
  "B2C High-Volume Rep Programme",
  "Sales Leadership Mastery",
  "Revenue Architecture (CEO Advisory)",
  "Full Bundle",
];
const timelines = ["ASAP — within 2 weeks", "Next month", "Next quarter", "Planning for later"];

export default function RequestProposalPage() {
  const [size, setSize] = useState("");
  const [industry, setIndustry] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");

  const toggleInterest = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const waMessage = encodeURIComponent(
    `Hi Coach Ezra, I'd like to request a full corporate proposal.\n\nName: ${name || "—"}\nCompany: ${company || "—"}\nTeam size: ${size || "—"}\nIndustry: ${industry || "—"}\nProgrammes of interest: ${selected.length ? selected.join(", ") : "—"}\nTimeline: ${timeline || "—"}\n\nPlease send me a proposal.`
  );

  const allFilled = name && company && size && industry && selected.length && timeline;

  return (
    <main className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen font-[family-name:var(--font-dm-sans)]">
      {/* Back to Home  Tobe added later*/}
      {/* Header */}
      <section className="relative pt-32 pb-16 px-[5%] overflow-hidden">
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(200,169,110,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 text-xs font-[family-name:var(--font-syne)] font-bold tracking-[0.15em] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
            Corporate Proposal
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,9vw,7rem)] leading-[0.88] mb-6">
            REQUEST A<br />
            <span className="text-[#C8A96E]">FULL</span><br />
            <span style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}>PROPOSAL</span>
          </h1>
          <p className="text-[#C8C2B8] text-base leading-relaxed">
            Tell us about your organisation. Coach Ezra personally builds your proposal — scoped to your team size, industry, and goals. Delivered within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-[5%] pb-24">
        <div className="max-w-2xl">
          {/* Name + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-px">
            <div className="bg-[#111] border border-[#222] p-6">
              <label className="block text-[#C8A96E] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-3">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jean-Paul Mugisha"
                className="w-full bg-transparent border-b border-[#333] text-[#F5F0E8] text-sm py-2 placeholder-[#444] outline-none focus:border-[#C8A96E] transition-colors font-[family-name:var(--font-dm-sans)]"
              />
            </div>
            <div className="bg-[#111] border border-[#222] border-l-0 p-6">
              <label className="block text-[#C8A96E] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-3">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Rwanda Ltd"
                className="w-full bg-transparent border-b border-[#333] text-[#F5F0E8] text-sm py-2 placeholder-[#444] outline-none focus:border-[#C8A96E] transition-colors font-[family-name:var(--font-dm-sans)]"
              />
            </div>
          </div>

          {/* Team Size */}
          <div className="bg-[#111] border border-[#222] border-t-0 p-6 mb-px">
            <div className="text-[#C8A96E] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
              Sales Team Size
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {orgSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-3 text-sm font-[family-name:var(--font-syne)] font-bold border transition-all duration-150 ${
                    size === s
                      ? "border-[#C8A96E] bg-[rgba(200,169,110,0.12)] text-[#C8A96E]"
                      : "border-[#222] bg-[#0A0A0A] text-[#C8C2B8] hover:border-[#444]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Industry */}
          <div className="bg-[#111] border border-[#222] border-t-0 p-6 mb-px">
            <div className="text-[#C8A96E] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
              Industry
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setIndustry(ind)}
                  className={`py-3 px-4 text-[0.8rem] font-[family-name:var(--font-syne)] font-semibold border text-left transition-all duration-150 ${
                    industry === ind
                      ? "border-[#C8A96E] bg-[rgba(200,169,110,0.12)] text-[#C8A96E]"
                      : "border-[#222] bg-[#0A0A0A] text-[#C8C2B8] hover:border-[#444]"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Programme Interest */}
          <div className="bg-[#111] border border-[#222] border-t-0 p-6 mb-px">
            <div className="text-[#C8A96E] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
              Programmes of Interest <span className="text-[#555]">(select all that apply)</span>
            </div>
            <div className="flex flex-col gap-2">
              {interests.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleInterest(item)}
                  className={`flex items-center gap-3 px-4 py-3 border text-left text-[0.85rem] font-[family-name:var(--font-syne)] font-semibold transition-all duration-150 ${
                    selected.includes(item)
                      ? "border-[#C8A96E] bg-[rgba(200,169,110,0.1)] text-[#F5F0E8]"
                      : "border-[#222] bg-[#0A0A0A] text-[#C8C2B8] hover:border-[#444]"
                  }`}
                >
                  <span className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center text-xs transition-colors ${selected.includes(item) ? "border-[#C8A96E] bg-[#C8A96E] text-[#0A0A0A]" : "border-[#444]"}`}>
                    {selected.includes(item) && "✓"}
                  </span>
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-[#111] border border-[#222] border-t-0 p-6 mb-px">
            <div className="text-[#C8A96E] text-[0.7rem] font-[family-name:var(--font-syne)] font-bold tracking-[0.2em] uppercase mb-4">
              Desired Start Timeline
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {timelines.map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeline(t)}
                  className={`py-3 px-4 text-[0.8rem] font-[family-name:var(--font-syne)] font-semibold border text-left transition-all duration-150 ${
                    timeline === t
                      ? "border-[#C8A96E] bg-[rgba(200,169,110,0.12)] text-[#C8A96E]"
                      : "border-[#222] bg-[#0A0A0A] text-[#C8C2B8] hover:border-[#444]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="bg-[#111] border border-[#222] border-t-0 p-6">
            <a
              href={allFilled ? `https://wa.me/250XXXXXXXX?text=${waMessage}` : "#"}
              target={allFilled ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={(e) => { if (!allFilled) e.preventDefault(); }}
              className={`flex items-center justify-center gap-3 w-full py-5 font-[family-name:var(--font-syne)] font-extrabold text-sm uppercase tracking-wide transition-all duration-200 ${
                allFilled
                  ? "bg-[#C8A96E] text-[#0A0A0A] hover:bg-[#E8C98A] hover:-translate-y-0.5 cursor-pointer"
                  : "bg-[#1a1a1a] text-[#444] cursor-not-allowed border border-[#222]"
              }`}
            >
              {allFilled ? "Send Proposal Request via WhatsApp →" : "Complete All Fields to Continue"}
            </a>
            <p className="text-[#555] text-xs text-center mt-3 font-[family-name:var(--font-syne)]">
              Your details open a pre-filled WhatsApp message. No forms stored — direct access to Coach Ezra.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}