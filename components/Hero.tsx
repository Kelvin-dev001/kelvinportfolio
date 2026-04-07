"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050A14]">
      {/* Particles background */}
      {engineReady && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            options={{
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  resize: { enable: true },
                },
                modes: {
                  repulse: { distance: 80, duration: 0.4 },
                },
              },
              particles: {
                color: { value: ["#00D4FF", "#7B2FBE", "#ffffff"] },
                links: {
                  color: "#00D4FF",
                  distance: 150,
                  enable: true,
                  opacity: 0.08,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 0.6,
                  straight: false,
                },
                number: {
                  density: { enable: true },
                  value: 60,
                },
                opacity: {
                  value: { min: 0.1, max: 0.5 },
                },
                shape: { type: "circle" },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
            className="w-full h-full"
          />
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#050A14]/60 via-transparent to-[#050A14]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] z-[1]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono font-medium text-cyan-400 border border-cyan-400/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" />
            AI &amp; Digital Solutions Architect
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-6"
        >
          Empowering African{" "}
          <br className="hidden sm:block" />
          Businesses with{" "}
          <span className="relative inline-block">
            <span className="gradient-text animate-gradient bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400">
              AI
            </span>
          </span>{" "}
          &amp; Digital
          <br className="hidden sm:block" />
          Systems
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base sm:text-lg text-white/60 font-inter leading-relaxed mb-4"
        >
          I listen to the problems African businesses face — in sales, customer
          care, inventory, and operations — and I build the AI and digital
          systems that solve them.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="max-w-xl mx-auto text-sm text-white/40 font-inter leading-relaxed mb-10"
        >
          From Nairobi to across Africa, I help businesses replace manual
          processes with intelligent, automated systems that drive growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl font-grotesk font-semibold text-sm text-[#050A14] bg-gradient-to-r from-cyan-400 to-violet-500 hover:opacity-90 transition-all duration-300 hover:scale-105 glow-cyan shadow-lg shadow-cyan-400/20 w-full sm:w-auto text-center"
          >
            Let&apos;s Build Your Solution
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#work"
            className="group px-8 py-4 rounded-xl font-grotesk font-semibold text-sm text-white glass border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              ↓
            </span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "7+", label: "Businesses Transformed" },
            { value: "100%", label: "Custom Solutions" },
            { value: "Kenya", label: "Based, Global Reach" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-grotesk font-bold text-2xl sm:text-3xl gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 font-inter mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
