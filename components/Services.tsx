"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Automate customer support, follow-ups, and repetitive workflows using AI-powered systems tailored for your business.",
    tags: ["LLM Integration", "WhatsApp Bots", "Workflow AI"],
    color: "cyan",
  },
  {
    icon: "⚙️",
    title: "Custom Software Development",
    desc: "Build scalable web applications, platforms, and internal systems designed specifically for your business operations.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    color: "violet",
  },
  {
    icon: "📈",
    title: "Sales & Customer Systems",
    desc: "Convert more leads into paying customers with structured sales funnels, CRM systems, and WhatsApp automation.",
    tags: ["CRM", "Sales Funnels", "WhatsApp Checkout"],
    color: "cyan",
  },
  {
    icon: "📦",
    title: "Operations & Inventory Systems",
    desc: "Track, manage, and optimize your business operations with intelligent dashboards and real-time insights.",
    tags: ["Inventory Mgmt", "Dashboards", "Analytics"],
    color: "violet",
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

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/20 glass mb-4">
              What I Build
            </span>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              I Build Smart Systems That{" "}
              <span className="gradient-text">Solve Real Problems</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 font-inter leading-relaxed">
              Each solution is custom-built around your business reality — not
              adapted from a template.
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 group flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${
                    service.color === "cyan"
                      ? "bg-cyan-400/10 group-hover:bg-cyan-400/20"
                      : "bg-violet-500/10 group-hover:bg-violet-500/20"
                  } transition-colors duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="font-grotesk font-semibold text-white text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 font-inter text-sm leading-relaxed mb-5 flex-1">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs font-mono rounded-md ${
                        service.color === "cyan"
                          ? "text-cyan-400/70 bg-cyan-400/5 border border-cyan-400/10"
                          : "text-violet-400/70 bg-violet-500/5 border border-violet-500/10"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
