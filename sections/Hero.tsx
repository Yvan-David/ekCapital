"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Header } from "./Header";

/* ─── Countdown hook ─── */
function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ─── Countdown box ─── */
function CountBox({ value, label }: { value: number; label: string }) {
  const pad = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="w-[62px] h-[52px] flex items-center justify-center border border-[#2a2a2a]"
        style={{ background: "rgba(200,169,110,0.06)" }}
      >
        <span className="font-['Bebas_Neue'] text-2xl text-[#C8A96E] leading-none tracking-wide">
          {pad}
        </span>
      </div>
      <span className="font-['Syne'] text-[9px] font-bold tracking-[0.18em] uppercase text-[#555]">
        {label}
      </span>
    </div>
  );
}

/* ─── Modal ─── */
function TrainingModal({ onClose }: { onClose: () => void }) {
  const deadline = new Date("2026-04-14T23:59:59");
  const { days, hours, mins, secs } = useCountdown(deadline);
  const [submitted, setSubmitted] = useState(false);
  const [funder, setFunder] = useState<
    "individual" | "corporate" | "unsure" | null
  >(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!funder) {
      toast.error("Select who will fund the training.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    const loadingToast = toast.loading("Securing your seat...");

    try {
      const res = await fetch("https://formspree.io/f/xpqoywwd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      toast.dismiss(loadingToast);

      if (res.ok) {
        toast.success("Seat secured! We'll contact you within 24 hours.");
        setSubmitted(true);
        setTimeout(onClose, 2500);
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Network error. Try again.");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(5px)" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Modal shell */}
        <div
          className="relative w-full max-w-[320px] sm:max-w-[500px] md:max-w-[720px] lg:max-w-[880px] bg-[#0D0D0D] shadow-[0_30px_90px_rgba(0,0,0,0.9)] animate-modalIn flex flex-col md:flex-row overflow-hidden"
          style={{ border: "1px solid #2a2a2a" }}
        >
          {/* ══ LEFT PANEL ══ */}
          <div
            className="w-full md:w-[40%] flex-shrink-0 relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden"
            style={{
              background: "linear-gradient(155deg, #1c1100 0%, #0D0D0D 65%)",
              borderRight: "1px solid #2a2a2a",
              borderBottom: "1px solid #2a2a2a",
            }}
          >
            {/* Gold grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(200,169,110,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.07) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Glow orb */}
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(200,169,110,0.15) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              {/* ⚠ LIMITED AVAILABILITY */}
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
                <svg
                  className="w-3.5 h-3.5 text-[#C8A96E] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#C8A96E]">
                  Limited Availability
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-['Bebas_Neue'] text-[1.5rem] sm:text-[1.75rem] lg:text-[2.1rem] leading-[0.92] text-[#F5F0E8] mb-2 sm:mb-3">
                APRIL 2026 COHORT —{" "}
                <span
                  style={{
                    WebkitTextStroke: "1px #C8A96E",
                    color: "transparent",
                  }}
                >
                  3 SEATS
                </span>{" "}
                <span className="text-[#C8A96E]">REMAINING</span>
              </h2>

              <p className="font-['Syne'] text-[10px] sm:text-[11px] text-[#8a8580] tracking-wide leading-relaxed">
                Individual certification cohort closes when full. Corporate
                slots are assessed and confirmed on a rolling basis.{" "}
                <span className="text-[#C8C2B8]">
                  Don&apos;t wait for the next cycle.
                </span>
              </p>

              {/* Urgency bar */}
              <div className="mt-3 sm:mt-4 border border-[#7a1a1a]/60 bg-[#7a1a1a]/10 px-3 py-2 flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"
                  style={{ animation: "pulse 1.5s infinite" }}
                />
                <span className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-red-400">
                  Registration closes 14 April 2026
                </span>
              </div>
            </div>

            {/* Countdown */}
            <div className="relative z-10 mt-5 sm:mt-7">
              <p className="font-['Syne'] text-[8px] sm:text-[9px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#555] mb-2 sm:mb-3">
                Time remaining to register
              </p>
              <div className="flex items-start gap-2 sm:gap-3">
                <CountBox value={days} label="Days" />
                <CountBox value={hours} label="Hours" />
                <CountBox value={mins} label="Mins" />
                <CountBox value={secs} label="Secs" />
              </div>
            </div>

            {/* Proof stats */}
            <div className="relative z-10 mt-5 sm:mt-6 flex flex-col gap-2 sm:gap-2.5 border-t border-[#2a2a2a] pt-4 sm:pt-5">
              {[
                { stat: "500+", label: "Sales Pros Trained" },
                { stat: "8+", label: "Years in African Markets" },
                { stat: "EK12PS™", label: "Proprietary System" },
              ].map(({ stat, label }) => (
                <div key={stat} className="flex items-center gap-3">
                  <span className="font-['Bebas_Neue'] text-base sm:text-lg text-[#C8A96E] leading-none w-16 sm:w-20 flex-shrink-0">
                    {stat}
                  </span>
                  <span className="font-['Syne'] text-[9px] sm:text-[10px] text-[#8a8580] uppercase tracking-[0.08em] sm:tracking-[0.1em]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT PANEL ══ */}
          <div className="flex-1 p-6 sm:p-8 relative">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#555] hover:text-[#C8A96E] transition-colors duration-150 bg-transparent border-none cursor-pointer text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-3 sm:gap-4 py-8 sm:py-12">
                <div className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-[#C8A96E] flex items-center justify-center">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-[#C8A96E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-['Bebas_Neue'] text-xl sm:text-2xl text-[#F5F0E8]">
                  Seat Reserved!
                </p>
                <p className="font-['Syne'] text-[10px] sm:text-xs text-[#8a8580]">
                  Coach Ezra will confirm your spot within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <p className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase text-[#C8A96E] mb-0.5">
                  EK Capital Group · April 2026
                </p>
                <h3 className="font-['Syne'] text-base sm:text-lg font-bold text-[#F5F0E8] mb-0.5">
                  Secure Your Training Seat
                </h3>
                <p className="font-['Syne'] text-[10px] sm:text-[11px] text-[#8a8580] mb-4 sm:mb-5">
                  EK12PS™ Sales Certification Program · Kigali, Rwanda
                </p>

                {/* Who will fund */}
                <div className="mb-4">
                  <label className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C8C2B8] mb-2 block">
                    * Who will be funding the training?
                  </label>
                  <div className="flex gap-2">
                    {(
                      [
                        { key: "individual", label: "Individual" },
                        { key: "corporate", label: "Corporate" },
                        { key: "unsure", label: "Not Sure" },
                      ] as const
                    ).map(({ key, label }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFunder(key)}
                        className={`flex-1 py-2 sm:py-2.5 font-['Syne'] text-[10px] sm:text-[11px] font-bold tracking-wide uppercase border transition-all duration-150 cursor-pointer text-center ${
                          funder === key
                            ? "bg-[#C8A96E] text-black border-[#C8A96E]"
                            : "bg-transparent text-[#8a8580] border-[#2a2a2a] hover:border-[#C8A96E] hover:text-[#C8A96E]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <form
                  action="https://formspree.io/f/xpqoywwd"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:gap-4"
                >
                  {/* Row 1 */}
                  <input type="hidden" name="funder" value={funder || ""} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C8C2B8] mb-1 sm:mb-1.5 block">
                        * Full Name
                      </label>
                      <input
                        name="fullName"
                        required
                        type="text"
                        placeholder="Amara Diallo"
                        className="w-full bg-transparent border border-[#2a2a2a] text-[#F5F0E8] font-['Syne'] text-xs px-3 py-2 sm:py-2.5 outline-none placeholder-[#3a3a3a] focus:border-[#C8A96E] transition-colors duration-150"
                      />
                    </div>
                    <div>
                      <label className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C8C2B8] mb-1 sm:mb-1.5 block">
                        * Email
                      </label>
                      <input
                        type="hidden"
                        name="_subject"
                        value="New EK Training Seat Request"
                      />
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="me@company.com"
                        className="w-full bg-transparent border border-[#2a2a2a] text-[#F5F0E8] font-['Syne'] text-xs px-3 py-2 sm:py-2.5 outline-none placeholder-[#3a3a3a] focus:border-[#C8A96E] transition-colors duration-150"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C8C2B8] mb-1 sm:mb-1.5 block">
                        * Mobile
                      </label>
                      <div className="flex">
                        <span className="bg-[#111] border border-r-0 border-[#2a2a2a] px-2 sm:px-2.5 py-2 sm:py-2.5 font-['Syne'] text-[9px] sm:text-[10px] text-[#555] flex items-center flex-shrink-0 whitespace-nowrap">
                          RW +250
                        </span>
                        <input
                          name="phone"
                          required
                          type="tel"
                          placeholder="790 000 000"
                          className="flex-1 min-w-0 bg-transparent border border-[#2a2a2a] text-[#F5F0E8] font-['Syne'] text-xs px-3 py-2 sm:py-2.5 outline-none placeholder-[#3a3a3a] focus:border-[#C8A96E] transition-colors duration-150"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C8C2B8] mb-1 sm:mb-1.5 block">
                        * Job Title
                      </label>
                      <input
                        name="jobTitle"
                        required
                        type="text"
                        placeholder="Sales Director"
                        className="w-full bg-transparent border border-[#2a2a2a] text-[#F5F0E8] font-['Syne'] text-xs px-3 py-2 sm:py-2.5 outline-none placeholder-[#3a3a3a] focus:border-[#C8A96E] transition-colors duration-150"
                      />
                    </div>
                  </div>

                  {/* Program type */}
                  <div>
                    <label className="font-['Syne'] text-[9px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C8C2B8] mb-1 sm:mb-1.5 block">
                      * Program Type
                    </label>
                    <select
                      required
                      name="programType"
                      className="w-full bg-[#111] border border-[#2a2a2a] text-[#C8C2B8] font-['Syne'] text-xs px-3 py-2 sm:py-2.5 outline-none focus:border-[#C8A96E] transition-colors duration-150 cursor-pointer"
                    >
                      <option value="">Please select…</option>
                      <option value="individual">
                        Individual Certification (EK12PS™)
                      </option>
                      <option value="corporate">Corporate Team Training</option>
                      <option value="both">
                        Both — Individual + Corporate
                      </option>
                    </select>
                  </div>

                  <p className="font-['Syne'] text-[9px] sm:text-[10px] text-[#444] leading-relaxed">
                    By submitting your details you agree to be contacted by EK
                    Capital Group to confirm your enrolment.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#C8A96E] text-black font-['Syne'] font-bold text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase py-2.5 sm:py-3.5 transition-all duration-200 hover:bg-[#E8C98A] hover:shadow-[0_8px_30px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 cursor-pointer border-none"
                  >
                    SECURE MY SEAT NOW →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(18px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modalIn {
          animation: modalIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  );
}

/* ─── Hero ─── */

export function Hero() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowModal(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showModal && <TrainingModal onClose={() => setShowModal(false)} />}

      <div className="mt-[2.5rem] overflow-visible">
        <Header/>
      </div>

      <section
        className="min-h-screen flex items-center px-[5%] pt-16 relative overflow-hidden bg-black pb-10"
        id="home"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 65% 50%, rgba(200,169,110,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl animate-fadeInUp">
          <div className="inline-flex items-center gap-2.5 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 mb-8">
            <span
              className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full"
              style={{ animation: "pulse 2s infinite" }}
            />
            <span className="font-['Syne'] text-xs font-bold tracking-[0.15em] uppercase">
              Kigali, Rwanda · Pan-African Sales Authority
            </span>
          </div>

          <h1 className="font-['Bebas_Neue'] text-[clamp(4rem,10vw,9rem)] leading-[0.88] mb-6 text-[#F5F0E8]">
            YOUR TEAM
            <br />
            ISN&apos;T{" "}
            <span
              className="inline-block"
              style={{ WebkitTextStroke: "2px #C8A96E", color: "transparent" }}
            >
              CLOSING
            </span>
            .
            <br />
            <span className="text-[#C8A96E]">WE FIX THAT.</span>
          </h1>

          <p className="text-lg text-[#C8C2B8] max-w-[540px] mb-12 leading-relaxed">
            EK Capital Group builds{" "}
            <strong className="text-[#F5F0E8] font-medium">
              revenue-generating sales machines
            </strong>{" "}
            for African companies. From corporate team transformation to
            individual sales certification — we train in real markets, solve
            real problems, and deliver measurable results.{" "}
            <strong className="text-[#F5F0E8] font-medium">
              Not theory. Revenue.
            </strong>
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="/CorporateTraining"
              className="bg-[#C8A96E] text-black px-8 py-4 font-['Syne'] font-bold text-sm uppercase tracking-[0.08em] transition-all duration-200 hover:bg-[#E8C98A] hover:shadow-[0_8px_30px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Get Corporate Training →
            </a>
            <a
              href="https://wa.me/250790663142?text=Hi+Coach+Ezra%2C+I+want+to+increase+my+sales+performance+and+revenue.+Please+tell+me+more."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 font-['Syne'] font-bold text-sm uppercase tracking-[0.05em] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)] inline-flex items-center gap-2.5"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now
            </a>
            <a
              href="/programs"
              className="bg-transparent text-[#F5F0E8] border border-[#222222] px-8 py-4 font-['Syne'] font-bold text-sm uppercase tracking-[0.05em] transition-all duration-200 hover:border-[#C8A96E] hover:text-[#C8A96E] inline-flex items-center gap-2"
            >
              See Programs ↓
            </a>
          </div>

          <div className="flex flex-wrap gap-10 border-t border-[#222222] pt-8">
            {[
              { stat: "8+", label: "Years Building\nSales Systems" },
              { stat: "500+", label: "Sales Professionals\nTrained" },
              { stat: "EK12PS™", label: "Proprietary\nSelling System" },
              {
                stat: "EKPCS™",
                label: "Africa's Sales\nCertification Standard",
              },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <div className="font-['Bebas_Neue'] text-4xl text-[#C8A96E] leading-none">
                  {stat}
                </div>
                <div className="text-xs text-[#C8C2B8] font-['Syne'] font-semibold tracking-[0.08em] uppercase mt-2 whitespace-pre-line">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.3;
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.7s ease both;
          }
        `}</style>
      </section>
    </>
  );
}
