'use client';

export function Ticker() {
  const tickerText = `🔥 Next Cohort: March 2026 — 3 Seats Remaining   |   Corporate Training Now Open — CanalBox, Telecoms, FMCG, Financial Services`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#C8A96E] text-black py-2 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-ticker font-['Syne'] font-bold text-xs tracking-[0.1em] uppercase text-center">
        {tickerText}
      </div>
    </div>
  );
}