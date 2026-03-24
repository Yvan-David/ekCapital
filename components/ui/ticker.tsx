'use client';

export  function Ticker() {
  const tickerText = `🔥 Next Cohort: March 2026 — 3 Seats Remaining   |   Corporate Training Now Open — CanalBox, Telecoms, FMCG, Financial Services   |   EK Capital: Africa's Sales Performance Authority   |   EKPCS™ Certified Graduates Now Being Placed With Top Employers   |   🔥 Next Cohort: March 2026 — 3 Seats Remaining   |   Corporate Training Now Open — CanalBox, Telecoms, FMCG, Financial Services   |   EK Capital: Africa's Sales Performance Authority`;

  return (
    <div className="bg-[#C8A96E] text-black py-2 overflow-hidden whitespace-nowrap mt-15">
      <div className="inline-block animate-ticker font-['Syne'] font-bold text-xs tracking-[0.1em] uppercase">
        {tickerText}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-ticker {
          animation: ticker 28s linear infinite;
        }
      `}</style>
    </div>
  );
}