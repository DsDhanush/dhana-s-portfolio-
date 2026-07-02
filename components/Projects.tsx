"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Sparkles, ExternalLink, Calendar, Sun, Flower, Swords } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  liveUrl: string;
  icon: any;
  color: string;
}

const projects: Project[] = [
  {
    id: "solar-power",
    title: "Solar Power Tenkasi",
    subtitle: "Clean Energy Lead Machine",
    category: "Business Website & SEO",
    tagline: "High-conversion lead machine showcasing local renewable solar systems.",
    overview: "A premium corporate website built for a top-tier solar vendor in Tenkasi, targeting local businesses and residential clients looking to transition to solar power.",
    challenge: "Establishing strong technical trust, simplifying complex energy savings parameters, and optimizing local SEO ranking to acquire clients in a competitive regional market.",
    solution: "Implemented a clean, dark cinematic dashboard representation featuring a custom local savings calculator, clear service packages, and localized schema markup. Optimized performance to achieve sub-1s load times, resulting in a #1 ranking on Google for solar inquiries in Tenkasi.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Local SEO Schema", "Performance Engineering"],
    liveUrl: "https://www.solarpowertenkasi.in",
    icon: Sun,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "twinkling-petals",
    title: "Twinkling Petals",
    subtitle: "Luxury E-Commerce & Floral Boutique",
    category: "Luxury E-Commerce & Web Design",
    tagline: "Bespoke online boutique showcasing custom floral decorations and gifts.",
    overview: "A highly visual and premium e-commerce layout built to elevate a custom gifting and flower decoration boutique brand, prioritizing rich photography and smooth transitions.",
    challenge: "Standard storefront templates felt generic and failed to convey the premium, delicate craftsmanship of custom floral arrangements, leading to high abandonment rates.",
    solution: "Crafted a cinematic boutique experience with full-screen galleries, custom micro-interactions on product hover, and a simplified checkout flow. Built visual catalog grids that lazy-load high-resolution media instantly without performance penalties.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "E-Commerce", "Image Optimization"],
    liveUrl: "https://twinklingpetals.com",
    icon: Flower,
    color: "from-rose-400 to-pink-600",
  },
  {
    id: "zoro-landing",
    title: "Zoro Landing Page",
    subtitle: "High-Performance Interactive Reveal",
    category: "Interactive Marketing Landing Page",
    tagline: "Cinematic, action-focused marketing landing page with custom GPU-accelerated motion.",
    overview: "An immersive, media-rich interactive landing page designed for an engaging product reveal and visual storytelling, maximizing click-through conversion rates.",
    challenge: "Serving massive video backdrops, rich canvas graphics, and custom animations to mobile users without causing UI stuttering or layout shift (CLS).",
    solution: "Leveraged hardware-accelerated CSS layers, code-split animation libraries, and progressive image blurs. Built a fully interactive section slider with responsive typography that remains fluid at 60 FPS on any modern mobile device.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "CSS GPU Acceleration", "Mobile Optimization"],
    liveUrl: "https://zoro-landingpage-o8td.onrender.com",
    icon: Swords,
    color: "from-emerald-600 to-teal-800",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-[30%] left-[-10%] w-[55%] h-[55%] rounded-full bg-highlight/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-text-main">
              Proven Digital <span className="text-gradient-gold">Projects.</span>
            </h2>
          </div>
          <p className="text-text-main/60 max-w-sm text-sm md:text-base leading-relaxed">
            Click on any project to dive deep into the specific challenge, technical solution, and stack utilized.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const ProjectIcon = project.icon;
            const isSolar = project.id === "solar-power";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Decorative Banner Graphics */}
                  <div className={`h-48 md:h-64 bg-gradient-to-tr ${project.color} relative flex items-center justify-center overflow-hidden`}>
                    {/* Abstract background grids */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                    
                    {/* Big glowing project logo/icon */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 md:w-28 md:h-28 rounded-3xl glass border border-white/20 flex items-center justify-center text-text-main shadow-2xl relative z-10"
                    >
                      <ProjectIcon className="w-10 h-10 md:w-14 md:h-14 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    </motion.div>

                    {/* Featured label */}
                    {isSolar && (
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/80 backdrop-blur text-xs font-semibold text-accent border border-accent/20">
                        <Sparkles className="w-3 h-3 text-accent animate-pulse" />
                        Featured Project
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-text-main group-hover:text-accent transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-text-main/70 text-sm leading-relaxed mb-6">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Footer Action buttons */}
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 mt-auto flex gap-4">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex-1 py-3 px-5 rounded-2xl glass text-center text-sm font-semibold text-text-main hover:bg-white/5 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                  >
                    View Project
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl glass flex items-center justify-center text-text-main hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                    aria-label={`Visit ${project.title} live demo`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl max-h-[85vh] overflow-y-auto glass rounded-3xl border border-white/10 shadow-2xl relative"
            >
              {/* Header Image Header */}
              <div className={`h-48 md:h-64 bg-gradient-to-tr ${activeProject.color} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/80 border border-white/15 flex items-center justify-center text-text-main hover:bg-accent hover:text-primary transition-all duration-300 z-20 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/80 bg-black/25 px-3 py-1 rounded-full border border-white/10 mb-2 inline-block">
                    {activeProject.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-display font-extrabold text-text-main leading-tight drop-shadow-md">
                    {activeProject.title}
                  </h3>
                  <p className="text-text-main/90 text-sm md:text-base font-medium mt-1">
                    {activeProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-6 md:p-12 space-y-8">
                {/* Section: Overview */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Overview</h4>
                  <p className="text-text-main/80 text-sm md:text-base leading-relaxed">
                    {activeProject.overview}
                  </p>
                </div>

                {/* Split grid for Challenge vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The Challenge</h4>
                    <p className="text-text-main/80 text-sm md:text-sm leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The Solution</h4>
                    <p className="text-text-main/80 text-sm md:text-sm leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stacks */}
                <div className="pt-6 border-t border-white/5">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 rounded-full bg-secondary/80 border border-white/5 text-xs font-medium text-text-main/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-text-main/50">
                    <Calendar className="w-4 h-4" />
                    <span>Project Published in July 2026</span>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <button
                      onClick={() => setActiveProject(null)}
                      className="flex-1 sm:flex-none px-6 py-3 rounded-2xl glass hover:bg-white/5 text-sm font-semibold text-text-main transition-colors cursor-pointer"
                    >
                      Close Project
                    </button>
                    <a
                      href={activeProject.liveUrl}
                      onClick={() => setActiveProject(null)}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-highlight hover:bg-highlight/90 text-sm font-semibold text-text-main transition-all duration-300 shadow-md shadow-highlight/25"
                    >
                      Visit Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
