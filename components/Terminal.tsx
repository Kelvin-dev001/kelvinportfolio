"use client";

import { useRef, useState, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "  whoami            — Learn who I am",
    "  skills            — View my technical skillset",
    "  clients           — See clients I've worked with",
    "  execute --innovation  — Deploy innovation",
    "  clear             — Clear the terminal",
    "",
    "Type any command and press Enter ↵",
  ],
  whoami: [
    "Kelvin — AI Developer & Digital Solutions Architect",
    "",
    "I help African businesses — primarily in Kenya — solve real",
    "operational problems using AI and custom-built digital systems.",
    "",
    "I listen deeply before I build. Most businesses don't need",
    "generic tools. They need systems designed around their reality.",
    "",
    "Focus areas:",
    "  → Sales automation & CRM systems",
    "  → AI-powered customer support",
    "  → Inventory & operations management",
    "  → Custom web apps & business platforms",
  ],
  skills: [
    "Technical Skillset:",
    "",
    "  AI & Automation     → LLM integration, workflow automation,",
    "                        chatbot systems, AI-powered pipelines",
    "  Full-Stack Dev       → Next.js, React, Node.js, TypeScript,",
    "                        Python, REST APIs, PostgreSQL",
    "  System Architecture → Scalable SaaS, microservices,",
    "                        custom CRM/ERP/LMS platforms",
    "  E-commerce Systems  → WhatsApp checkout, payment integration,",
    "                        inventory management",
    "  LMS Development     → Course platforms, cert systems,",
    "                        student dashboards",
    "",
    "Tools: VS Code · Figma · Supabase · Vercel · AWS",
  ],
  clients: [
    "Clients I've worked with:",
    "",
    "  01 — Consulate of Mozambique",
    "       Digital Filing System",
    "",
    "  02 — Nebsam Digital Solutions (K) Ltd",
    "       Website + Certificate + Task Management System",
    "",
    "  03 — Snaap Connections",
    "       E-commerce + WhatsApp Checkout",
    "",
    "  04 — Graceway Generation",
    "       Learning Management System (LMS)",
    "",
    "  05 — Exploring Watamu",
    "       Tours Booking Web Application",
    "",
    "  06 — Mock Speed Governors",
    "       Corporate Website",
    "",
    "  07 — Hornbill Tech Agency",
    "       Agency Website",
  ],
  "execute --innovation": [
    "$ Initializing innovation deployment...",
    "",
    "  [██████████████████████████] 100%",
    "",
    "  ✓ Business problems identified",
    "  ✓ AI systems designed",
    "  ✓ Automation pipelines activated",
    "  ✓ Revenue leaks sealed",
    "  ✓ Growth engines deployed",
    "",
    "Innovation deployed successfully.",
    "7+ businesses transformed.",
    "Zero tolerance for inefficient systems.",
    "",
    "Status: ACTIVE",
  ],
};

interface HistoryEntry {
  type: "input" | "output" | "welcome";
  content: string;
}

function useTypewriter(lines: string[], speed = 18) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed([]);
    setDone(false);
    let lineIdx = 0;
    let charIdx = 0;
    const interval = setInterval(() => {
      if (lineIdx >= lines.length) {
        setDone(true);
        clearInterval(interval);
        return;
      }
      const line = lines[lineIdx];
      if (charIdx <= line.length) {
        setDisplayed((prev) => {
          const next = [...prev];
          next[lineIdx] = line.slice(0, charIdx);
          return next;
        });
        charIdx++;
      } else {
        lineIdx++;
        charIdx = 0;
      }
    }, speed);
    return () => clearInterval(interval);
  }, [lines, speed]);

  return { displayed, done };
}

function OutputBlock({ lines }: { lines: string[] }) {
  const { displayed } = useTypewriter(lines, 12);
  return (
    <div className="text-white/70 font-mono text-xs sm:text-sm leading-relaxed">
      {displayed.map((line, i) => (
        <div key={i}>{line || "\u00A0"}</div>
      ))}
    </div>
  );
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      type: "welcome",
      content:
        "Welcome to the portfolio of Kelvin — AI & Systems Developer.\nType 'help' to explore.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [input, setInput] = useState("");
  const [outputQueue, setOutputQueue] = useState<{ id: number; lines: string[] }[]>([]);
  const [outputCounter, setOutputCounter] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, outputQueue]);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setOutputQueue([]);
      return;
    }

    setHistory((prev) => [...prev, { type: "input", content: cmd }]);
    setCommandHistory((prev) => [cmd, ...prev]);
    setHistoryIdx(-1);

    const response = COMMANDS[trimmed];
    if (response) {
      const id = outputCounter;
      setOutputCounter((c) => c + 1);
      setOutputQueue((prev) => [...prev, { id, lines: response }]);
      setHistory((prev) => [
        ...prev,
        { type: "output", content: `__output__${id}` },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          content: `Command not found: '${trimmed}'. Type 'help' for available commands.`,
        },
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIdx = Math.min(historyIdx + 1, commandHistory.length - 1);
      setHistoryIdx(newIdx);
      setInput(commandHistory[newIdx] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIdx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(newIdx);
      setInput(newIdx === -1 ? "" : commandHistory[newIdx] ?? "");
    }
  };

  const getOutputLines = (id: number) =>
    outputQueue.find((o) => o.id === id)?.lines ?? [];

  return (
    <section id="terminal" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/20 glass">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Interactive Terminal
            </span>
          </div>

          {/* Terminal window */}
          <div className="glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            {/* Terminal titlebar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-white/30">
                kelvin@portfolio ~ portfolio
              </span>
              <div className="w-16" />
            </div>

            {/* Terminal body */}
            <div
              className="font-mono text-xs sm:text-sm p-5 min-h-[380px] max-h-[480px] overflow-y-auto scrollbar-hide bg-[#050A14]/60 cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {/* History */}
              {history.map((entry, i) => {
                if (entry.type === "welcome") {
                  return (
                    <div key={i} className="mb-4">
                      {entry.content.split("\n").map((line, j) => (
                        <div
                          key={j}
                          className={
                            j === 0
                              ? "text-cyan-400 font-semibold"
                              : "text-white/50"
                          }
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  );
                }
                if (entry.type === "input") {
                  return (
                    <div key={i} className="flex items-center gap-2 my-2">
                      <span className="text-green-400">❯</span>
                      <span className="text-white">{entry.content}</span>
                    </div>
                  );
                }
                if (entry.type === "output") {
                  if (entry.content.startsWith("__output__")) {
                    const id = parseInt(entry.content.replace("__output__", ""));
                    return (
                      <div key={i} className="ml-4 mb-3">
                        <OutputBlock lines={getOutputLines(id)} />
                      </div>
                    );
                  }
                  return (
                    <div
                      key={i}
                      className="ml-4 mb-3 text-red-400/80 font-mono text-xs"
                    >
                      {entry.content}
                    </div>
                  );
                }
                return null;
              })}

              {/* Input line */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-green-400">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-white caret-cyan-400 font-mono text-xs sm:text-sm"
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  aria-label="Terminal input"
                />
                <span className="cursor-blink text-cyan-400">▋</span>
              </div>

              <div ref={bottomRef} />
            </div>

            {/* Quick commands */}
            <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02] flex flex-wrap gap-2">
              {Object.keys(COMMANDS).map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    processCommand(cmd);
                    inputRef.current?.focus();
                  }}
                  className="px-2 py-1 text-xs font-mono text-white/40 border border-white/10 rounded hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
