"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Dhana was a game-changer. Our solar sales leads increased significantly in the first two months after launch. The speed and premium feel of the site built immediate trust with customers.",
    author: "S. K. Rajan",
    role: "Director",
    company: "Solar Power Tenkasi",
    avatar: "SR",
  },
  {
    quote: "Our boutique's online presence went from zero to stunning. Every customer remarks on how beautiful and smooth the website looks. Dhana understood our aesthetic perfectly from day one.",
    author: "Priya Menon",
    role: "Founder",
    company: "Twinkling Petals",
    avatar: "PM",
  },
  {
    quote: "The Zoro landing page exceeded our expectations. The animations are silky smooth on mobile and the visual impact immediately draws people in. Conversion rates improved noticeably.",
    author: "Arjun Sharma",
    role: "Creative Director",
    company: "Zoro Project",
    avatar: "AS",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-secondary overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full bg-highlight/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-text-main mb-6">
            Loved by <span className="text-gradient-gold">Growing Businesses.</span>
          </h2>
          <p className="text-text-main/70 text-base md:text-lg">
            See how clients partnered with Dhana Studio to build custom, high-converting digital products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl relative flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-accent/20 absolute top-6 right-6">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-text-main/80 text-sm md:text-base leading-relaxed mb-8 relative z-10">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-display font-bold text-primary text-sm shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-main">
                    {t.author}
                  </h4>
                  <p className="text-xs text-text-main/50 font-medium">
                    {t.role}, <span className="text-accent">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
