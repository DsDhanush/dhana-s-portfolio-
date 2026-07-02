"use client";

import { motion } from "framer-motion";
import { Layout, Compass, Briefcase, RefreshCw, Search, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Custom corporate and enterprise platforms designed to build authority, establish trust, and turn standard web traffic into loyal clients.",
    icon: Briefcase,
    metric: "High trust & authority",
  },
  {
    title: "Landing Pages",
    description: "Ultra-focused, high-conversion landing pages built for marketing campaigns. Designed visually and technically to maximize client acquisitions.",
    icon: Layout,
    metric: "Maximized conversions",
  },
  {
    title: "Portfolio Websites",
    description: "Cinematic, custom portfolios created for agencies, creators, and high-end freelancers wanting to showcase their work at a premium level.",
    icon: Compass,
    metric: "Stunning visual impact",
  },
  {
    title: "Website Redesign",
    description: "Complete visual and structural overhaul. Transform outdated interfaces into modern, fast, and responsive digital products.",
    icon: RefreshCw,
    metric: "Modernized user experience",
  },
  {
    title: "SEO Optimization",
    description: "Deep technical audits, semantic code architecture, and speed optimizations engineered to rank your site high on Google searches.",
    icon: Search,
    metric: "Increased organic reach",
  },
  {
    title: "Performance Optimization",
    description: "Turn sluggish pages into lightning-fast experiences. Achieve perfect Lighthouse scores, leading to better user satisfaction and higher SEO rankings.",
    icon: Zap,
    metric: "Sub-1s page load times",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-primary overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-highlight/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
            Core Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-text-main mb-6">
            Services That Drive <span className="text-gradient-gold">Real Growth.</span>
          </h2>
          <p className="text-text-main/70 text-base md:text-lg">
            I build bespoke digital assets that represent your brand perfectly while ensuring they are technically superior in load speed, layout, and conversion metrics.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-highlight/0 to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-text-main mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-main/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-text-main/40 uppercase tracking-wider">
                    {service.metric}
                  </span>
                  <span className="text-accent group-hover:text-highlight transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
