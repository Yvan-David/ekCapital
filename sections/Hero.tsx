import React from "react";
import { Button } from "../components/ui/button";
import { Play, TrendingUp, Users, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      {/* <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/qSJ1QER_zRM?autoplay=1&mute=1&loop=1&playlist=qSJ1QER_zRM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
          className="w-full h-full pointer-events-none"
          allow="autoplay; encrypted-media"
          style={{
            border: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "100vh",
            transform: "translate(-50%, -50%) scale(1.5)",
            objectFit: "cover",
          }}
          title="Hero Background Video"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div> */}
      <div className="absolute inset-0">
        <Image
          src="/figmasalesgrowth.png" // put your image inside /public folder
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Transform Sales.
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Amplify Cashflow.
              </span>
              <br />
              {/* Accelerate Growth. */}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white/90 mb-8 max-w-xl"
              style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
            >
              Empowering CEOs and executive teams to scale with precision,
              purpose, and sustainable profitability through strategic sales
              architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/schedule">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                style={{ fontSize: "1.1rem", padding: "1.5rem 2.5rem" }}
              >
                Schedule a Call
              </Button>
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{ fontSize: "1.1rem", padding: "1.5rem 2.5rem" }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch How It Works
              </Button> */}
            </motion.div>
          </div>

          {/* Right Side - Coach Image */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative">
         
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-blue-500/30 rounded-3xl blur-3xl"></div>
              
        
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NjE2ODM3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SalesFlow Coach"
                  className="w-full h-auto"
                />
                
             
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Floating Metrics Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
      >
        <div className="flex gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full mb-3 mx-auto border border-orange-500/30">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-white mb-1">500+</div>
            <div className="text-white/70 text-sm">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full mb-3 mx-auto border border-orange-500/30">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-white mb-1">3x</div>
            <div className="text-white/70 text-sm">Growth Achieved</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full mb-3 mx-auto border border-orange-500/30">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-white mb-1">98%</div>
            <div className="text-white/70 text-sm">Success Rate</div>
          </div>
        </div>
      </motion.div>
    </section>

// {/* <section className="relative min-h-screen flex items-center bg-[#0B0F14] overflow-hidden">

//   <div className="absolute inset-0 pointer-events-none">

//     <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-500/10 blur-[160px] rounded-full" />

//     <div className="absolute right-[3%] top-1/2 -translate-y-1/2 w-[42%] max-w-2xl">
//       <Image
//         src="/figmasalesgrowth.png"
//         alt="Growth Illustration"
//         width={900}
//         height={900}
//         priority
//         className="object-contain w-full h-auto"
//       />
//     </div>

//     <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/85 via-[#0B0F14]/40 to-transparent" />
//   </div>

//   <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
//     <div className="max-w-2xl">

//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-white mb-6 leading-tight"
//         style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
//       >
//         Transform Sales.
//         <br />
//         <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
//           Amplify Cashflow.
//         </span>
//         <br />
//         Accelerate Growth.
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-white/80 mb-8"
//         style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
//       >
//         Empowering CEOs and executive teams to scale with precision,
//         purpose, and sustainable profitability through strategic sales
//         architecture.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="flex flex-wrap gap-4"
//       >
//         <Button
//           size="lg"
//           className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
//         >
//           Start Your Transformation
//         </Button>

//         <Button
//           size="lg"
//           variant="outline"
//           className="border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
//         >
//           <Play className="w-5 h-5 mr-2" />
//           Watch How It Works
//         </Button>
//       </motion.div>
//     </div>
//   </div>

//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, delay: 0.6 }}
//     className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
//   >
//     <div className="flex gap-10">
//       <div className="text-center">
//         <Users className="w-6 h-6 text-white mx-auto mb-2" />
//         <div className="text-white text-lg">500+</div>
//         <div className="text-white/70 text-sm">Clients Served</div>
//       </div>

//       <div className="text-center">
//         <TrendingUp className="w-6 h-6 text-white mx-auto mb-2" />
//         <div className="text-white text-lg">3x</div>
//         <div className="text-white/70 text-sm">Growth Achieved</div>
//       </div>

//       <div className="text-center">
//         <Target className="w-6 h-6 text-white mx-auto mb-2" />
//         <div className="text-white text-lg">98%</div>
//         <div className="text-white/70 text-sm">Success Rate</div>
//       </div>
//     </div>
//   </motion.div>

// </section> */}
  );
}
