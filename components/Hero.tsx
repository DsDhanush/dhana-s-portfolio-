"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-primary"
    >
      {/* Background Decorative Cinematic Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-highlight/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "-1.5s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs md:text-sm text-accent mb-8 shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '4s' }} />
            <span>Built by Dhana • DS Studio</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tight leading-[1.15] mb-8"
          >
            I Build Websites <br />
            <span className="text-gradient-gold">That Sell.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-text-main/80 leading-relaxed mb-12 px-4"
          >
            Premium websites designed to help businesses build trust, generate leads and grow online. Crafting premium digital experiences that deliver results.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6"
          >
            <button
              onClick={() => handleScrollTo("#projects")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-highlight text-text-main font-semibold hover:bg-highlight/90 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-xl shadow-highlight/20 cursor-pointer"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-text-main border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
            >
              Let's Talk
            </button>
          </motion.div>

          {/* Value Propositions / Social Proof Mini Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-20 pt-10 border-t border-white/5 w-full max-w-4xl"
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">100%</span>
              <span className="text-xs md:text-sm text-text-main/60 uppercase tracking-widest font-semibold">Custom Design</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">95+</span>
              <span className="text-xs md:text-sm text-text-main/60 uppercase tracking-widest font-semibold">Lighthouse Score</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl md:text-3xl font-display font-bold text-accent mb-1">SEO-ready</span>
              <span className="text-xs md:text-sm text-text-main/60 uppercase tracking-widest font-semibold">Pre-optimized</span>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
