"use client";

import React from "react";
import { Cpu, Brain, Database, Bot, Sparkles, Zap, Trophy } from "lucide-react";

interface Milestone {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  badge?: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Electronics",
    subtitle: "Hardware Foundations",
    description: "Began as an Electronics & Telecommunication engineer. Mastered circuit design, circuit simulations, analog/digital filters, and hardware debugging constraints.",
    icon: <Zap className="w-5 h-5" />,
    tags: ["Filter Design", "Circuit Math", "MATLAB Analysis"]
  },
  {
    id: 2,
    title: "Embedded Systems",
    subtitle: "Hardware Programming Interface",
    description: "Bridged hardware to code. Specialized in ARM Cortex-M (STM32) firmware development, register-level register adjustments, interrupts, assembly programming, and simulators.",
    icon: <Cpu className="w-5 h-5" />,
    tags: ["STM32", "C/C++", "VHDL/Verilog", "Proteus"]
  },
  {
    id: 3,
    title: "Machine Learning",
    subtitle: "Data-Driven Engineering",
    description: "Expanded code capabilities to statistical decision models. Mastered regression, decision tree ensembles, feature engineering, and data normalization loops.",
    icon: <Brain className="w-5 h-5" />,
    tags: ["Python", "Scikit-Learn", "XGBoost", "SMOTE Balancing"]
  },
  {
    id: 4,
    title: "Deep Learning",
    subtitle: "Neural Representation Networks",
    description: "Specialized in spatial pattern identification. Designed PyTorch CNNs and Dynamic Capsule Networks for biomedical ECG signal classifications, winning 2nd Place at Technophilia'25.",
    icon: <Brain className="w-5 h-5" />,
    tags: ["PyTorch", "TensorFlow", "Capsule Networks", "ECG Processing"],
    badge: "🏆 2nd Place — Technophilia'25"
  },
  {
    id: 5,
    title: "RAG Systems",
    subtitle: "Enterprise Semantic databases",
    description: "Built semantic knowledge assistants. Merged dense vector (FAISS) similarity search with sparse lexical (BM25) lookups and cross-encoder rerankers to build factual databases.",
    icon: <Database className="w-5 h-5" />,
    tags: ["LangChain", "FAISS Index", "Vector DB", "Reranker Scoring"]
  },
  {
    id: 6,
    title: "AI Agents",
    subtitle: "Autonomous Logic Planners",
    description: "Engineered self-correcting agent executors. Created LangChain multi-agent graphs capable of tool-calling local MATLAB sessions, executing codes, and parsing exception tracebacks.",
    icon: <Bot className="w-5 h-5" />,
    tags: ["LangGraph", "Agentic Workflows", "Reflection Loop", "MATLAB Bridge"]
  },
  {
    id: 7,
    title: "Future AI Product Builder",
    subtitle: "Full-Stack System Creator",
    description: "Combining hardware constraints with intelligent agentic software systems to ship robust, high-performance, real-world endpoints.",
    icon: <Sparkles className="w-5 h-5" />,
    tags: ["Full-Stack AI", "FastAPI", "Docker Deploys", "Product Thinking"]
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex flex-col justify-between h-full select-none">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-10 flex-shrink-0">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-2">Journey</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient-brand">Milestone Evolution</p>
        <p className="text-xs text-zinc-500 mt-1 font-mono">Scroll to explore my engineering path</p>
      </div>

      {/* Timeline connector path */}
      <div className="flex-1 w-full overflow-hidden relative h-[55vh] sm:h-[60vh]">
        {/* Glow connector line in background */}
        <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-zinc-800 -translate-x-1/2 z-0" />
        
        {/* Active glowing timeline path overlay */}
        <div className="journey-line absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-primary via-brand-secondary to-emerald-400 -translate-x-1/2 z-0 origin-top scale-y-0" />

        <div className="journey-track relative z-10 space-y-12 pb-12">
          {milestones.map((stone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={stone.id}
                className={`journey-row flex flex-col md:flex-row items-stretch gap-6 md:gap-12 relative w-full opacity-0 translate-y-10 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual node marker */}
                <div className="journey-node absolute left-[20px] md:left-1/2 top-5 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-zinc-950 border-2 border-brand-primary flex items-center justify-center text-brand-primary shadow-[0_0_12px_rgba(139,92,246,0.25)] scale-0 transition-transform">
                  {stone.icon}
                </div>

                {/* Left side spacer (Desktop only) */}
                <div className="hidden md:block w-1/2" />

                {/* Card block */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 flex">
                  <div className="journey-card glass-card p-6 rounded-2xl w-full relative group flex flex-col justify-between hover:border-brand-primary/30 hover:shadow-[0_0_15px_-5px_rgba(139,92,246,0.15)] transition-all">
                    <div className="absolute top-0 right-0 w-24 h-24 glow-dot-purple opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" />
                    
                    <div>
                      <div className="flex items-center gap-3 mb-1.5 text-left">
                        <span className="font-mono text-zinc-500 text-xs font-bold">0{stone.id}.</span>
                        <h3 className="font-bold text-white text-base font-sans group-hover:text-brand-primary transition-colors">{stone.title}</h3>
                      </div>
                      <h4 className="text-[11px] font-mono text-brand-secondary mb-3 text-left">{stone.subtitle}</h4>
                      {stone.badge && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-semibold shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                          <Trophy className="w-3 h-3" />
                          {stone.badge}
                        </div>
                      )}
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4 text-left">{stone.description}</p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900/60 font-mono text-[9px] text-zinc-500">
                      {stone.tags.map(t => (
                        <span key={t} className="bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-850 text-zinc-400">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
