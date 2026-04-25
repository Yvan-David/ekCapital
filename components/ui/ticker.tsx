// 'use client';

// export function Ticker() {
//   const tickerText = `🔥 Next Cohort: March 2026 — 3 Seats Remaining   |   Corporate Training Now Open — CanalBox, Telecoms, FMCG, Financial Services`;

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 bg-[#C8A96E] text-black py-2 overflow-hidden whitespace-nowrap">
//       <div className="inline-block animate-ticker font-['Syne'] font-bold text-xs tracking-[0.1em] uppercase text-center">
//         {tickerText}
//       </div>
//     </div>
//   );
// }

'use client';
import Link from "next/link";
export function Ticker() {
  return (
      <Link
      href="/register-cohort"
      > 
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#967f53] text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
    
        
        {/* NEW badge */}
        <span className="bg-white text-[#967f53] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
          New
        </span>

        {/* Message */}
        <p className="text-center">
          <span className="font-bold text-[14px]"> 2026 Scaling Cohort Now Open:</span>
          
          <span className=" ml-1">
            Apply Today →
          </span>
        </p>
   
      </div>
    </div>

     </Link>
  );
}