"use client";

const services = [
  {
    id: 1,
    title: "Business",
    titleAccent: "Strategy",
    description:
      "We craft razor-sharp business strategies that align your vision with market opportunity, helping you dominate your niche and outperform the competition.",
    icon: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Background glow */}
        <ellipse cx="60" cy="85" rx="45" ry="8" fill="rgba(243,73,0,0.08)" />
        {/* Chart bars */}
        <rect x="15" y="55" width="14" height="30" rx="3" fill="#131b2a" opacity="0.15" />
        <rect x="33" y="40" width="14" height="45" rx="3" fill="#131b2a" opacity="0.25" />
        <rect x="51" y="25" width="14" height="60" rx="3" fill="#f34900" opacity="0.7" />
        <rect x="69" y="35" width="14" height="50" rx="3" fill="#131b2a" opacity="0.35" />
        <rect x="87" y="15" width="14" height="70" rx="3" fill="#f34900" />
        {/* Trend line */}
        <polyline points="22,60 40,46 58,32 76,42 94,20" stroke="#f34900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0" />
        {/* Dots on line */}
        {[[22,60],[40,46],[58,32],[76,42],[94,20]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="#f34900" stroke="#fff" strokeWidth="1.5" />
        ))}
        {/* Person icon */}
        <circle cx="25" cy="28" r="8" fill="#131b2a" opacity="0.8" />
        <path d="M14 48 Q14 38 25 38 Q36 38 36 48" fill="#131b2a" opacity="0.8" />
        {/* Briefcase */}
        <rect x="60" y="62" width="22" height="16" rx="3" fill="#131b2a" opacity="0.7" />
        <path d="M65 62 V59 Q65 57 68 57 H74 Q77 57 77 59 V62" stroke="#131b2a" strokeWidth="1.5" fill="none" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Revenue",
    titleAccent: "Scaling",
    description:
      "Unlock explosive revenue growth with proven systems and frameworks. We identify your highest-leverage opportunities and build the engine to scale past your goals.",
    icon: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <ellipse cx="60" cy="85" rx="45" ry="8" fill="rgba(243,73,0,0.08)" />
        {/* Rocket body */}
        <ellipse cx="60" cy="42" rx="14" ry="26" fill="#131b2a" />
        <ellipse cx="60" cy="32" rx="10" ry="14" fill="#f34900" />
        {/* Window */}
        <circle cx="60" cy="38" r="5" fill="#fff" opacity="0.9" />
        <circle cx="60" cy="38" r="3" fill="#131b2a" opacity="0.4" />
        {/* Wings */}
        <path d="M46 58 L38 72 L52 65 Z" fill="#72756c" />
        <path d="M74 58 L82 72 L68 65 Z" fill="#72756c" />
        {/* Flames */}
        <ellipse cx="55" cy="74" rx="4" ry="7" fill="#f34900" opacity="0.8" />
        <ellipse cx="60" cy="77" rx="5" ry="9" fill="#f34900" />
        <ellipse cx="65" cy="74" rx="4" ry="7" fill="#f34900" opacity="0.8" />
        <ellipse cx="60" cy="75" rx="3" ry="6" fill="#ffd700" opacity="0.7" />
        {/* Stars */}
        {[[20,20],[95,15],[30,60],[100,55],[15,45]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="#f34900" opacity={0.4 + i * 0.12} />
        ))}
        {/* Money symbol */}
        <text x="88" y="35" fontSize="16" fill="#f34900" fontWeight="bold" fontFamily="monospace">$</text>
        <text x="10" y="30" fontSize="12" fill="#131b2a" fontWeight="bold" fontFamily="monospace" opacity="0.4">$</text>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Leadership",
    titleAccent: "Coaching",
    description:
      "Transform into the high-performance leader your business needs. Our 1-on-1 coaching programs sharpen your mindset, decision-making, and executive presence.",
    icon: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <ellipse cx="60" cy="88" rx="45" ry="7" fill="rgba(243,73,0,0.08)" />
        {/* Main leader figure */}
        <circle cx="60" cy="22" r="11" fill="#131b2a" />
        <path d="M44 52 Q44 38 60 38 Q76 38 76 52 L76 58 L44 58 Z" fill="#131b2a" />
        {/* Left follower */}
        <circle cx="28" cy="34" r="8" fill="#72756c" opacity="0.7" />
        <path d="M16 58 Q16 46 28 46 Q40 46 40 58" fill="#72756c" opacity="0.7" />
        {/* Right follower */}
        <circle cx="92" cy="34" r="8" fill="#72756c" opacity="0.7" />
        <path d="M80 58 Q80 46 92 46 Q104 46 104 58" fill="#72756c" opacity="0.7" />
        {/* Connection lines */}
        <line x1="44" y1="45" x2="36" y2="45" stroke="#f34900" strokeWidth="2" strokeDasharray="3,2" />
        <line x1="76" y1="45" x2="84" y2="45" stroke="#f34900" strokeWidth="2" strokeDasharray="3,2" />
        {/* Crown */}
        <path d="M50 14 L54 8 L60 12 L66 8 L70 14" stroke="#f34900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Podium */}
        <rect x="48" y="68" width="24" height="8" rx="2" fill="#f34900" />
        <rect x="24" y="74" width="20" height="8" rx="2" fill="#131b2a" opacity="0.3" />
        <rect x="76" y="76" width="20" height="6" rx="2" fill="#131b2a" opacity="0.2" />
        {/* Stars */}
        <text x="52" y="76" fontSize="8" fill="#fff" textAnchor="middle">★</text>
        <text x="60" y="76" fontSize="8" fill="#fff" textAnchor="middle">★★</text>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Marketing",
    titleAccent: "Mastery",
    description:
      "Build a magnetic brand and marketing machine that attracts premium clients on autopilot. From funnel strategy to content systems — we make your brand impossible to ignore.",
    icon: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <ellipse cx="60" cy="88" rx="45" ry="7" fill="rgba(243,73,0,0.08)" />
        {/* Megaphone body */}
        <path d="M30 38 L30 62 L45 62 L80 78 L80 22 L45 38 Z" fill="#131b2a" />
        <rect x="20" y="38" width="12" height="24" rx="3" fill="#72756c" />
        {/* Sound waves */}
        <path d="M85 35 Q95 50 85 65" stroke="#f34900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M90 28 Q105 50 90 72" stroke="#f34900" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M96 22 Q114 50 96 78" stroke="#f34900" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />
        {/* Handle cord */}
        <path d="M20 62 Q18 72 26 75 Q34 78 32 68" stroke="#72756c" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Star burst on megaphone */}
        <circle cx="58" cy="50" r="7" fill="#f34900" opacity="0.9" />
        <text x="58" y="54" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="bold">!</text>
        {/* Floating icons */}
        <rect x="8" y="20" width="12" height="9" rx="2" fill="#f34900" opacity="0.4" />
        <circle cx="14" cy="24" r="2" fill="#fff" opacity="0.8" />
        <rect x="8" y="68" width="10" height="8" rx="2" fill="#131b2a" opacity="0.25" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        .services-section {
          background: #131b2a;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }

        .services-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .services-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #f34900;
          margin-bottom: 12px;
        }

        .services-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 5vw, 58px);
          color: #131b2a;
          letter-spacing: 2px;
          line-height: 1;
          margin: 0 0 14px;
        }

        .services-title span {
          color: #f34900;
        }

        .services-desc {
          font-size: 16px;
          color: #72756c;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          perspective: 1000px;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 28px 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
          cursor: pointer;
          position: relative;
          transition:
            transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 2px 12px rgba(19,27,42,0.07);
          border: 1px solid rgba(19,27,42,0.06);
          will-change: transform;
          transform-style: preserve-3d;
        }

        .service-card:hover {
          transform: translateY(-14px) scale(1.03) translateZ(40px) rotateX(2deg);
          box-shadow:
            0 32px 64px rgba(19,27,42,0.18),
            0 8px 24px rgba(243,73,0,0.12),
            0 0 0 1.5px rgba(243,73,0,0.18);
          z-index: 10;
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(243,73,0,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        /* Orange top accent bar on hover */
        .service-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 3px;
          background: #f34900;
          border-radius: 0 0 4px 4px;
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          transform-origin: left;
        }

        .service-card:hover::after {
          transform: scaleX(1);
        }

        .service-icon {
          width: 100%;
          height: 130px;
          margin-bottom: 20px;
        }

        .service-card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #131b2a;
          margin: 0 0 10px;
          line-height: 1.2;
        }

        .service-card-title span {
          color: #f34900;
        }

        .service-card-desc {
          font-size: 14px;
          color: #72756c;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        /* Single bottom CTA */
        .services-bottom {
          display: flex;
          justify-content: center;
          margin-top: 52px;
        }

        .services-main-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f34900;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 44px;
          border-radius: 50px;
          box-shadow: 0 8px 28px rgba(243,73,0,0.32);
          transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, gap 0.22s ease;
        }

        .services-main-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(243,73,0,0.48);
          background: #d94000;
          gap: 16px;
        }

        .services-main-cta svg {
          transition: transform 0.22s ease;
        }

        .services-main-cta:hover svg {
          transform: translateX(4px);
        }
      `}</style>

      <section className="services-section">
        {/* Header */}
        <div className="services-header">
          <span className="services-eyebrow">What We Offer</span>
          <h2 className="services-title">
            Our <span>Services</span>
          </h2>
          <p className="services-desc">
            Everything you need to build, scale, and lead a thriving business — under one roof.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              {/* Illustration */}
              <div className="service-icon">{service.icon}</div>

              {/* Title */}
              <h3 className="service-card-title">
                {service.title} <span>{service.titleAccent}</span>
              </h3>

              {/* Description */}
              <p className="service-card-desc">{service.description}</p>

            </div>
          ))}
        </div>

        {/* Single Learn More CTA */}
        <div className="services-bottom">
          <a href="/services" className="services-main-cta">
            Explore All Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
