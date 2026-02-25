"use client";

import { useEffect, useRef } from "react";

const MoneyRain = ({ side }:any) => {
  const bills = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        [side]: 0,
        width: "160px",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {bills.map((i) => {
        const delay = (i * 0.37) % 4;
        const duration = 2.8 + (i % 5) * 0.4;
        const leftPos = (i % 5) * 28 + 5;
        const size = 38 + (i % 3) * 10;
        const startRot = -20 + (i % 7) * 8;
        const endRot = startRot + (side === "left" ? 180 : -180);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${leftPos}px`,
              top: "-80px",
              width: `${size}px`,
              height: `${Math.round(size * 0.55)}px`,
              animationName: "moneyFall",
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              // CSS custom properties fed into the keyframe via style
              ["--start-rot" as string]: `${startRot}deg`,
              ["--end-rot" as string]: `${endRot}deg`,
            }}
          >
            <svg
              viewBox="0 0 80 44"
              width={size}
              height={Math.round(size * 0.55)}
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))" }}
            >
              <rect width="80" height="44" rx="4" fill="#0d1420" />
              <rect x="2" y="2" width="76" height="40" rx="3" fill="#131b2a" />
              <rect x="4" y="4" width="72" height="36" rx="2" fill="none" stroke="#72756c" strokeWidth="1" strokeDasharray="3,2" />
              <ellipse cx="40" cy="22" rx="14" ry="10" fill="#1e2a3e" />
              <text x="40" y="19" textAnchor="middle" fill="#72756c" fontSize="5" fontWeight="bold" fontFamily="monospace">RWF</text>
              <text x="40" y="27" textAnchor="middle" fill="#f34900" fontSize="7" fontWeight="bold" fontFamily="monospace">500</text>
              <text x="8" y="13" fill="#f34900" fontSize="5" fontWeight="bold" fontFamily="monospace">500</text>
              <text x="72" y="13" fill="#f34900" fontSize="5" fontWeight="bold" fontFamily="monospace" textAnchor="end">500</text>
              <text x="8" y="38" fill="#72756c" fontSize="5" fontWeight="bold" fontFamily="monospace">RWF</text>
              <text x="72" y="38" fill="#72756c" fontSize="5" fontWeight="bold" fontFamily="monospace" textAnchor="end">RWF</text>
              <rect x="10" y="6" width="20" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default function TrainingSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap');

        .training-section {
          position: relative;
          background: #BBC8B6;
          min-height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .training-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 50%, rgba(19,27,42,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .training-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 600px;
          padding: 60px 20px;
        }

        .training-badge {
          display: inline-block;
          background: #131b2a;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 20px;
          margin-bottom: 22px;
        }

        .training-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1.0;
          color: #131b2a;
          margin: 0 0 8px 0;
          letter-spacing: 2px;
        }

        .training-headline span {
          color: #f34900;
        }

        .training-sub {
          font-size: 16px;
          color: #72756c;
          max-width: 430px;
          margin: 16px auto 32px;
          line-height: 1.6;
        }

        .training-sub strong {
          color: #131b2a;
          font-weight: 700;
        }

        .training-cta {
          display: inline-block;
          background: #f34900;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 18px 52px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s;
          box-shadow: 0 8px 28px rgba(243, 73, 0, 0.38);
          text-decoration: none;
        }

        .training-cta:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 36px rgba(243, 73, 0, 0.5);
          background: #d94000;
        }

        .training-cta:active {
          transform: translateY(0) scale(0.99);
        }

        .training-date-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 24px;
        }

        .training-date-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #72756c;
          font-weight: 500;
        }

        .training-date-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f34900;
        }

        /* Coin sparkle */
        .sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f34900;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes moneyFall {
          0%   { transform: translateY(-80px) rotate(var(--start-rot)); opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(calc(100vh + 80px)) rotate(var(--end-rot)); opacity: 0; }
        }

        @keyframes sparkleAnim {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          60% { transform: scale(1.5) rotate(180deg); opacity: 0.6; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <section className="training-section">
        {/* Left money rain */}
        <MoneyRain side="left" />

        {/* Right money rain */}
        <MoneyRain side="right" />

        {/* Floating coins decoration */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${10 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `sparkleAnim ${1.5 + i * 0.3}s ${i * 0.4}s infinite ease-in-out`,
            }}
          />
        ))}

        {/* Main Content */}
        <div className="training-content">
          <div className="training-badge">🎯 Live Training Session</div>

          <h2 className="training-headline">
            Do You Want To<br />
            <span>Scale Your</span> Business?
          </h2>

          <p className="training-sub">
            Learn from the team that has scaled a portfolio to over{" "}
            <strong>$250m+ in annual revenue</strong>. Join our next live training and get the exact framework.
          </p>

          <a href="register" className="training-cta">
            Learn To Scale →
          </a>

          <div className="training-date-row">
            <div className="training-date-item">
              <div className="training-date-dot" />
              <span>Next Session: March 15, 2025</span>
            </div>
            <div className="training-date-item">
              <div className="training-date-dot" />
              <span>100% Free to Attend</span>
            </div>
            <div className="training-date-item">
              <div className="training-date-dot" />
              <span>Limited Seats</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
