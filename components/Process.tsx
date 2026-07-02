"use client";

import { motion } from "framer-motion";
import { Search, Compass, Code2, Rocket, HelpCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    tagline: "Understanding Your Goals",
    description: "We align on your business targets, target audience, conversion metrics, and project goals before writing any code or layouts.",
    icon: HelpCircle,
  },
  {
    num: "02",
    title: "Research",
    tagline: "Market & Competitor Analysis",
    description: "I analyze competitors, current SEO trends, visual benchmarks, and user expectations to find opportunities for you to excel.",
    icon: Search,
  },
  {
    num: "03",
    title: "Design",
    tagline: "Cinematic High-Fidelity UI",
    description: "Designing a beautiful, modern, and accessible prototype custom to your brand guidelines. No generic templates allowed.",
    icon: Compass,
  },
  {
    num: "04",
    title: "Development",
    tagline: "Next-Gen Implementation",
    description: "Building your web experience with clean Next.js 15, TypeScript, and Tailwind CSS. Coded for speed, optimization, and scale.",
    icon: Code2,
  },
  {
    num: "05",
    title: "Launch",
    tagline: "Lighthouse Audit & Deploy",
    description: "Rigorous responsive layout checks, speed checks, and domain configuration. Deployed on Vercel for fast global delivery.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative bg-primary overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-[10%] w-[50%] h-[50%] rounded-full bg-highlight/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
            How I Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-text-main mb-6">
            A Step-by-Step <span className="text-gradient-gold">Path to Launch.</span>
          </h2>
          <p className="text-text-main/70 text-base md:text-lg">
            A transparent and highly communicative workflow designed to keep you informed and assure a premium final output.
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="relative">
          {/* Vertical Connector Line (Desktop only) */}
          <div className="absolute left-[50%] top-8 bottom-8 w-[1px] bg-white/10 hidden lg:block transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const StepIcon = step.icon;

              return (
                <div
                  key={step.num}
                  className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-0"
                >
                  {/* Left Side (Step Card for even, Empty space for odd in desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`w-full lg:w-[45%] ${isEven ? "lg:text-right flex flex-col lg:items-end" : "lg:order-last flex flex-col lg:items-start"}`}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary border border-white/15 text-accent mb-6 ${isEven ? "lg:self-end" : "lg:self-start"}`}>
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">
                      {step.tagline}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-text-main mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-main/70 text-sm md:text-base leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Middle Node indicator (Desktop only) */}
                  <div className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-20">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-12 h-12 rounded-full glass border-2 border-accent flex items-center justify-center font-display font-bold text-sm text-text-main shadow-lg"
                    >
                      {step.num}
                    </motion.div>
                  </div>

                  {/* Right Side (Visual graphic mock for even, Step Card for odd in desktop) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`w-full lg:w-[45%] flex ${isEven ? "justify-start" : "justify-end lg:order-first"}`}
                  >
                    {/* Simulated code editor / wireframe block inside glass card */}
                    <div className="glass-card w-full p-6 rounded-2xl border border-white/5 relative overflow-hidden bg-secondary/50 font-mono text-xs text-text-main/40 select-none pointer-events-none">
                      <div className="flex gap-1.5 mb-4 border-b border-white/5 pb-3">
                        <span className="w-3 h-3 rounded-full bg-rose-500/50" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/50" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/50" />
                        <span className="ml-2 font-sans text-[10px] text-text-main/30">ds_workflow_phase_{step.num}.json</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-accent">{"{"}</p>
                        <p className="pl-4">"phase": <span className="text-highlight">"{step.title}"</span>,</p>
                        <p className="pl-4">"status": <span className="text-emerald-400">"active"</span>,</p>
                        <p className="pl-4">"objective": <span className="text-text-main/70">"{step.tagline}"</span>,</p>
                        <p className="pl-4">"deliverable": <span className="text-text-main/60">"production_grade_asset"</span></p>
                        <p className="text-accent">{"}"}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
