'use client';

import { useState, useEffect } from 'react';

export function Urgency() {
  const [timeLeft, setTimeLeft] = useState({
    days: 11,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const target = new Date('2026-03-31T23:59:59').getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="bg-[#0f0f0f] border border-ek-red border-opacity-30 mx-[5%] px-12 py-8 flex items-center justify-between gap-8 flex-wrap">
      <div>
        <div className="font-syne text-xs font-bold tracking-[0.2em] uppercase text-ek-red mb-2">
          ⚠️ Limited Availability
        </div>
        <h3 className="font-syne font-bold text-2xl text-ek-white mb-1">
          March 2026 Cohort — 3 Seats Remaining
        </h3>
        <p className="font-dm-sans text-sm text-ek-text">
          Individual certification cohort closes when full. Corporate slots are assessed and
          confirmed on a rolling basis. Don't wait for the next cycle.
        </p>
      </div>

      <div className="flex gap-4 flex-shrink-0">
        {/* Countdown */}
        <div className="flex gap-4">
          {[
            { num: timeLeft.days, label: 'Days' },
            { num: timeLeft.hours, label: 'Hours' },
            { num: timeLeft.minutes, label: 'Mins' },
            { num: timeLeft.seconds, label: 'Secs' },
          ].map((unit, index) => (
            <div
              key={index}
              className="text-center bg-ek-card border border-ek-border px-4 py-4 min-w-[80px]"
            >
              <div className="font-bebas text-3xl text-ek-gold leading-none block">
                {pad(unit.num)}
              </div>
              <div className="font-syne font-bold text-xs tracking-[0.1em] uppercase text-ek-text mt-1">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/register-cohort"
          rel="noopener noreferrer"
          className="bg-ek-gold text-black px-8 py-4 font-syne font-bold text-sm uppercase tracking-[0.08em] no-underline transition-all duration-200 hover:bg-ek-gold-light hover:-translate-y-0.5 inline-flex items-center gap-2 flex-shrink-0 h-fit"
        >
          Secure My Seat Now →
        </a>
      </div>
    </div>
  );
}