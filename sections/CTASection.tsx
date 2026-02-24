import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0A1628]/40 via-[#050b14]/30 to-transparent relative overflow-hidden">
      {/* Premium Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-900/40 to-indigo-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-orange-900/20 to-blue-900/30 rounded-full blur-3xl"></div>
      </div>
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.02)_0%,_transparent_100%)]"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-white mb-6">
          Ready to Unlock Your Next Level of Growth?
        </h2>
        <p className="text-white/70 mb-10 max-w-2xl mx-auto">
          Join hundreds of successful CEOs who have transformed their businesses with SalesFlow. 
          Let's discuss how we can accelerate your journey to sustainable, profitable growth.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group"
        >
          Schedule a Consultation
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
}
