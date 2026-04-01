'use client';

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-[5%] pt-16 relative overflow-hidden bg-black pb-10"
      id="home"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 65% 50%, rgba(200,169,110,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl animate-fadeInUp">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 border border-[#C8A96E] text-[#C8A96E] px-4 py-2 mb-8">
          <span
            className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse"
            style={{
              animation: 'pulse 2s infinite',
            }}
          />
          <span className="font-['Syne'] text-xs font-bold tracking-[0.15em] uppercase">
            Kigali, Rwanda · Pan-African Sales Authority
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-['Bebas_Neue'] text-[clamp(4rem,10vw,9rem)] leading-[0.88] mb-6 text-[#F5F0E8]">
          YOUR TEAM
          <br />
          ISN&apos;T{' '}
          <span
            className="inline-block"
            style={{
              WebkitTextStroke: '2px #C8A96E',
              color: 'transparent',
            }}
          >
            CLOSING
          </span>
          .
          <br />
          <span className="text-[#C8A96E]">WE FIX THAT.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#C8C2B8] max-w-[540px] mb-12 leading-relaxed">
          EK Capital Group builds{' '}
          <strong className="text-[#F5F0E8] font-medium">
            revenue-generating sales machines
          </strong>{' '}
          for African companies. From corporate team transformation to individual sales
          certification — we train in real markets, solve real problems, and deliver
          measurable results.{' '}
          <strong className="text-[#F5F0E8] font-medium">Not theory. Revenue.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          {/* Primary Button */}
          <a
            href="/CorporateTraining"
            className="bg-[#C8A96E] text-black px-8 py-4 font-['Syne'] font-bold text-sm uppercase tracking-[0.08em] transition-all duration-200 hover:bg-[#E8C98A] hover:shadow-[0_8px_30px_rgba(200,169,110,0.3)] hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Get Corporate Training →
          </a>

          {/* WhatsApp Button */}
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
              className="w-[18px] h-[18px]"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Now
          </a>

          {/* Outline Button */}
          <a
            href="/programs"
            className="bg-transparent text-[#F5F0E8] border border-[#222222] px-8 py-4 font-['Syne'] font-bold text-sm uppercase tracking-[0.05em] transition-all duration-200 hover:border-[#C8A96E] hover:text-[#C8A96E] inline-flex items-center gap-2"
          >
            See Programs ↓
          </a>
        </div>

        {/* Proof Points */}
        <div className="flex flex-wrap gap-10 border-t border-[#222222] pt-8">
          <div>
            <div className="font-['Bebas_Neue'] text-4xl text-[#C8A96E] leading-none">
              8+
            </div>
            <div className="text-xs text-[#C8C2B8] font-['Syne'] font-semibold tracking-[0.08em] uppercase mt-2">
              Years Building
              <br />
              Sales Systems
            </div>
          </div>

          <div>
            <div className="font-['Bebas_Neue'] text-4xl text-[#C8A96E] leading-none">
              500+
            </div>
            <div className="text-xs text-[#C8C2B8] font-['Syne'] font-semibold tracking-[0.08em] uppercase mt-2">
              Sales Professionals
              <br />
              Trained
            </div>
          </div>

          <div>
            <div className="font-['Bebas_Neue'] text-4xl text-[#C8A96E] leading-none">
              EK12PS™
            </div>
            <div className="text-xs text-[#C8C2B8] font-['Syne'] font-semibold tracking-[0.08em] uppercase mt-2">
              Proprietary
              <br />
              Selling System
            </div>
          </div>

          <div>
            <div className="font-['Bebas_Neue'] text-4xl text-[#C8A96E] leading-none">
              EKPCS™
            </div>
            <div className="text-xs text-[#C8C2B8] font-['Syne'] font-semibold tracking-[0.08em] uppercase mt-2">
              Africa&apos;s Sales
              <br />
              Certification Standard
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles for animations */}
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
  );
}