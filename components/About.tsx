"use client";

import { motion, type Variants } from "framer-motion";

const problems = [
  "Manual workflows that waste time and increase errors",
  "Slow customer response times leading to lost sales",
  "Poor tracking of inventory, sales, and operations",
  "Over-reliance on WhatsApp without structured systems",
  "Lack of automation causing missed opportunities daily",
];

const process = [
  {
    step: "01",
    title: "Listen & Understand",
    desc: "I take time to deeply understand your business, your challenges, and your goals before proposing any solution.",
  },
  {
    step: "02",
    title: "Diagnose the Real Problem",
    desc: "Most businesses focus on symptoms. I identify the root cause affecting your growth.",
  },
  {
    step: "03",
    title: "Design the System",
    desc: "I architect a solution tailored to your business — combining AI, automation, and software systems.",
  },
  {
    step: "04",
    title: "Build & Optimize",
    desc: "I develop, test, and refine the system to ensure it delivers real business results.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Problem section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-violet-400 border border-violet-400/20 glass mb-6">
              The Problem
            </span>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-tight mb-6">
              Most Kenyan Businesses Are{" "}
              <span className="gradient-text">Losing Revenue</span> Due to Poor
              Systems
            </h2>
            <p className="text-white/60 font-inter leading-relaxed mb-8">
              Many businesses in Kenya and across Africa struggle with
              inefficient processes that limit growth and profitability.
            </p>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {problems.map((p) => (
                <motion.li
                  key={p}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400/60" />
                  <span className="text-white/60 font-inter text-sm leading-relaxed">
                    {p}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <p className="mt-8 text-white/40 font-grotesk text-sm italic border-l-2 border-violet-500/40 pl-4">
              This is not a people problem. It is a systems problem.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/20 glass">
              The Solution
            </span>
            <h3 className="font-grotesk font-bold text-2xl sm:text-3xl text-white leading-tight">
              I Build Smart Systems That{" "}
              <span className="gradient-text">Solve These Problems</span>
            </h3>
            <p className="text-white/60 font-inter text-sm leading-relaxed">
              As an AI developer and digital solutions expert in Kenya, I design
              and build custom systems that help businesses operate efficiently,
              serve customers better, and scale sustainably.
            </p>

            {/* AI section callout */}
            <div className="glass rounded-2xl p-6 border border-cyan-400/10">
              <h4 className="font-grotesk font-semibold text-white mb-3">
                AI Solutions for African Businesses
              </h4>
              <p className="text-white/50 text-sm font-inter leading-relaxed mb-4">
                Artificial Intelligence is transforming how businesses operate.
                I help companies in Kenya integrate AI into their daily workflows
                to increase efficiency, improve customer experience, and drive
                growth.
              </p>
              <ul className="space-y-2">
                {[
                  "WhatsApp automation for customer support",
                  "AI-powered sales funnels",
                  "Automated reporting dashboards",
                  "Smart business process automation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-mono text-cyan-400/80"
                  >
                    <span className="text-cyan-400">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Process section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/20 glass mb-4">
              How I Work
            </span>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white">
              How I Solve Business Problems{" "}
              <span className="gradient-text">Using Technology</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-cyan-400/20 transition-all duration-300 group"
              >
                <div className="font-mono text-4xl font-bold text-white/10 group-hover:text-cyan-400/20 transition-colors mb-4">
                  {item.step}
                </div>
                <h4 className="font-grotesk font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-white/50 text-sm font-inter leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
