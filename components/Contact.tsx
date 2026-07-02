"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Instagram, Linkedin, Github, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "Business Website", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", projectType: "Business Website", message: "" });
    }, 1500);
  };

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-primary overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-highlight/5 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "-2s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-text-main leading-tight mb-6">
                Let's Build Something <span className="text-gradient-gold">Extraordinary.</span>
              </h2>
              <p className="text-text-main/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Have a project in mind or want to boost your site's SEO and performance? Fill out the form or reach out directly via socials. Let's make it happen.
              </p>

              {/* Direct channels */}
              <div className="space-y-4">
                <a
                  href="mailto:dhanasunthar06@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-main/40 uppercase tracking-widest font-semibold">Email Me</p>
                    <p className="text-sm font-bold text-text-main">dhanasunthar06@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919363303009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-main/40 uppercase tracking-widest font-semibold">WhatsApp Chat</p>
                    <p className="text-sm font-bold text-text-main">+91 93633 03009</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-12 lg:mt-0">
              <p className="text-xs text-text-main/40 uppercase tracking-widest font-bold mb-4">Find Me On</p>
              <div className="flex gap-4">
                {[
                  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ds.__.dhanush/?utm_source=ig_web_button_share_sheet" },
                  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/dhanasunthar-m-0a245a267" },
                  { name: "GitHub", icon: Github, url: "https://github.com/dhanasunthar" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center text-text-main hover:text-accent hover:border-accent/40 transition-all duration-300"
                      aria-label={`Visit Dhana's ${s.name}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-semibold text-text-main/60 uppercase tracking-wider">Your Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="John Doe"
                          className="px-4 py-3 rounded-xl bg-secondary border border-white/5 text-text-main placeholder:text-text-main/30 focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold text-text-main/60 uppercase tracking-wider">Your Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="john@example.com"
                          className="px-4 py-3 rounded-xl bg-secondary border border-white/5 text-text-main placeholder:text-text-main/30 focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="text-xs font-semibold text-text-main/60 uppercase tracking-wider">Project Type</label>
                      <select
                        id="projectType"
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-secondary border border-white/5 text-text-main focus:border-accent focus:outline-none transition-colors"
                      >
                        <option value="Business Website" className="bg-[#101828] text-white">Business Website</option>
                        <option value="Landing Page" className="bg-[#101828] text-white">Landing Page</option>
                        <option value="Portfolio Website" className="bg-[#101828] text-white">Portfolio Website</option>
                        <option value="Website Redesign" className="bg-[#101828] text-white">Website Redesign</option>
                        <option value="SEO & Performance" className="bg-[#101828] text-white">SEO & Performance</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-text-main/60 uppercase tracking-wider">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell me about your project, goals, and budget..."
                        className="px-4 py-3 rounded-xl bg-secondary border border-white/5 text-text-main placeholder:text-text-main/30 focus:border-accent focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-highlight text-text-main font-semibold hover:bg-highlight/90 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg shadow-highlight/25"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <CheckCircle className="w-16 h-16 text-accent mb-6 animate-bounce" />
                    <h3 className="text-2xl font-display font-bold text-text-main mb-3">Inquiry Sent Successfully!</h3>
                    <p className="text-text-main/70 text-sm max-w-sm leading-relaxed mb-8">
                      Thank you for reaching out. I've received your request and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl glass hover:bg-white/5 text-xs font-semibold text-text-main transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* Footer block */}
        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#home");
              }}
              className="flex items-center gap-2 mb-2 group cursor-pointer"
            >
              <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary font-bold font-display text-xs">
                D
              </span>
              <span className="font-display font-semibold text-base text-text-main group-hover:text-accent transition-colors duration-300">
                Dhana Studio
              </span>
            </a>
            <p className="text-xs text-text-main/40">Crafting Premium Digital Experiences.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {["Home", "Projects", "Services", "Process", "About"].map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(`#${n.toLowerCase()}`);
                }}
                className="text-xs font-semibold text-text-main/60 hover:text-accent transition-colors"
              >
                {n}
              </a>
            ))}
          </div>

          <p className="text-xs text-text-main/30 text-center md:text-right">
            &copy; {new Date().getFullYear()} Dhana Studio. All rights reserved. <br />
            Built by Dhana.
          </p>
        </footer>

      </div>
    </section>
  );
}
