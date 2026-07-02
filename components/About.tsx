"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Server, Layout, Search, Zap, Code2, Sparkles } from "lucide-react";

const skills = [
  { name: "Next.js 15 & React 19", icon: Code2, category: "Frameworks" },
  { name: "TypeScript", icon: Server, category: "Frameworks" },
  { name: "Tailwind CSS", icon: Layout, category: "Design" },
  { name: "Framer Motion & GSAP", icon: Sparkles, category: "Design" },
  { name: "SEO Optimization", icon: Search, category: "Marketing" },
  { name: "Performance Tuning", icon: Zap, category: "Performance" },
];

const sellingPoints = [
  "Websites designed to capture leads and maximize conversion rates.",
  "Blazing fast performance targeting Lighthouse scores of 95+.",
  "Fully responsive, mobile-first design crafted custom for your brand.",
  "Clean, search-engine-optimized structure to drive organic traffic.",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-secondary overflow-hidden">
      {/* Decorative Blur Background Element */}
      <div className="absolute top-1/2 left-[-10%] w-[40%] h-[40%] rounded-full bg-highlight/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy focused on business solutions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
              About Dhana Studio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-text-main leading-tight mb-6">
              I Don't Just Write Code. <br />
              <span className="text-gradient-gold">I Solve Business Problems.</span>
            </h2>
            <p className="text-text-main/80 leading-relaxed mb-6">
              Most web developers build generic templates that sit online doing nothing. At Dhana Studio, I design and build high-performance digital experiences engineered specifically to establish trust, convert visitors, and accelerate business growth.
            </p>
            <p className="text-text-main/80 leading-relaxed mb-8">
              Every detail—from the responsive layout to smooth micro-interactions and search engine structures—is customized to ensure your brand stands out and achieves its specific goals.
            </p>

            {/* Business Value Checkmarks */}
            <div className="space-y-4">
              {sellingPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-text-main/90 text-sm md:text-base font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Dynamic Skills & Core Focus Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-display font-bold text-text-main mb-6 border-b border-white/5 pb-4">
                Core Technologies & Methods
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-primary/45 border border-white/5 hover:border-accent/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-main">{skill.name}</p>
                        <p className="text-xs text-text-main/50">{skill.category}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Cinematic Summary Tagline */}
              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-xs md:text-sm text-text-main/70 italic">
                  "Combining technical performance with creative aesthetics to deliver premium digital results."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
