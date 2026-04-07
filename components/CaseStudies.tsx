"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface CaseStudy {
  id: string;
  client: string;
  project: string;
  problem?: string;
  solution?: string;
  impact: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    client: "Consulate of Mozambique",
    project: "Digital Filing System",
    problem: "Manual document management causing inefficiencies and delays",
    solution:
      "Developed a structured digital filing system for efficient storage and retrieval",
    impact: "Reduced document retrieval time and improved operational efficiency",
    tags: ["Document Management", "Operations", "Government"],
  },
  {
    id: "02",
    client: "Nebsam Digital Solutions",
    project: "Website + Certificate System + Task Management",
    problem:
      "Lack of centralized systems for operations and management",
    solution:
      "Built a corporate website, automated certificate generation system, and task management system with CEO dashboard",
    impact:
      "Improved operational visibility and streamlined internal processes",
    tags: ["Web App", "Automation", "Dashboard"],
  },
  {
    id: "03",
    client: "Snaap Connections",
    project: "E-commerce + WhatsApp Checkout",
    problem: "High cart abandonment and poor checkout experience",
    solution:
      "Developed an e-commerce platform integrated with WhatsApp checkout",
    impact: "Increased conversion rates and simplified purchasing process",
    tags: ["E-commerce", "WhatsApp", "Conversion"],
  },
  {
    id: "04",
    client: "Graceway Generation",
    project: "Learning Management System (LMS)",
    problem: "No scalable digital learning platform",
    solution:
      "Built a complete LMS with admin portal, student dashboard, course tracking, badges, and certification system",
    impact: "Enabled scalable digital education and automated certification",
    tags: ["LMS", "EdTech", "Automation"],
  },
  {
    id: "05",
    client: "Exploring Watamu",
    project: "Tours Booking Web Application",
    impact: "Streamlined booking process and improved customer experience",
    tags: ["Booking", "Tourism", "Web App"],
  },
  {
    id: "06",
    client: "Mock Speed Governors",
    project: "Corporate Website",
    impact: "Established strong online presence and credibility",
    tags: ["Corporate", "Web", "Branding"],
  },
  {
    id: "07",
    client: "Hornbill Tech Agency",
    project: "Agency Website",
    impact: "Created a modern platform for brand positioning and lead generation",
    tags: ["Agency", "Lead Gen", "Branding"],
  },
];

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section
      id="work"
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/20 glass mb-4">
                Case Studies
              </span>
              <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Proven Results for Businesses{" "}
                <span className="gradient-text">in Kenya &amp; Africa</span>
              </h2>
            </div>
            {/* Navigation arrows */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] glass rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300 group overflow-hidden"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-violet-500 opacity-40 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 flex flex-col h-full">
                {/* Client id + tags */}
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-3xl font-bold text-white/8 group-hover:text-white/10 transition-colors">
                    {study.id}
                  </span>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {study.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono rounded text-cyan-400/60 bg-cyan-400/5 border border-cyan-400/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client */}
                <h3 className="font-grotesk font-bold text-white text-lg mb-1">
                  {study.client}
                </h3>
                <p className="font-grotesk text-sm text-white/50 mb-4">
                  {study.project}
                </p>

                {/* Problem / Solution */}
                {study.problem && (
                  <div className="mb-3">
                    <span className="text-xs font-mono text-red-400/60 uppercase tracking-wider">
                      Problem
                    </span>
                    <p className="text-xs text-white/50 font-inter leading-relaxed mt-1">
                      {study.problem}
                    </p>
                  </div>
                )}
                {study.solution && (
                  <div className="mb-3">
                    <span className="text-xs font-mono text-violet-400/60 uppercase tracking-wider">
                      Solution
                    </span>
                    <p className="text-xs text-white/50 font-inter leading-relaxed mt-1">
                      {study.solution}
                    </p>
                  </div>
                )}

                {/* Impact */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-cyan-400/60 uppercase tracking-wider">
                    Impact
                  </span>
                  <p className="text-sm text-white/80 font-inter leading-relaxed mt-1">
                    {study.impact}
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
