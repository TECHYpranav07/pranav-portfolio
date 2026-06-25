"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Eye, Lightbulb, Workflow, Layers } from "lucide-react";
import TiltCard from "./TiltCard";

interface MindsetTopic {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  desc: string;
  diagram: React.ReactNode;
}

export default function Mindset() {
  const [activeTopic, setActiveTopic] = useState<string>("sysdesign");

  const topics: MindsetTopic[] = [
    {
      id: "sysdesign",
      title: "System Design",
      icon: <Workflow className="w-4 h-4" />,
      tagline: "Hardware-Software Co-Design",
      desc: "Designing interfaces between constrained edge microcontrollers and cloud-based LLM agents.",
      diagram: (
        <svg viewBox="0 0 400 180" className="w-full h-auto stroke-zinc-700 fill-none text-[10px] font-mono text-zinc-400">
          {/* Blocks */}
          <rect x="10" y="70" width="70" height="40" rx="6" className="stroke-brand-primary" fill="rgba(139, 92, 246, 0.05)" />
          <text x="45" y="94" textAnchor="middle" className="fill-zinc-300 font-bold">Sensors</text>

          <rect x="110" y="70" width="75" height="40" rx="6" className="stroke-emerald-400" fill="rgba(16, 185, 129, 0.05)" />
          <text x="147.5" y="94" textAnchor="middle" className="fill-zinc-300">STM32 MCU</text>

          <rect x="215" y="70" width="75" height="40" rx="6" className="stroke-brand-secondary" fill="rgba(6, 182, 212, 0.05)" />
          <text x="252.5" y="94" textAnchor="middle" className="fill-zinc-300">AI Agent</text>

          <rect x="320" y="70" width="70" height="40" rx="6" className="stroke-white/40" fill="rgba(255, 255, 255, 0.02)" />
          <text x="355" y="94" textAnchor="middle" className="fill-zinc-300">Actuators</text>

          {/* Arrows */}
          <path d="M 80,90 L 110,90" className="stroke-zinc-600" markerEnd="url(#arrow)" />
          <path d="M 185,90 L 215,90" className="stroke-emerald-400" />
          <path d="M 290,90 L 320,90" className="stroke-brand-secondary" />

          {/* Feedback loop */}
          <path d="M 355,110 L 355,140 L 147.5,140 L 147.5,110" className="stroke-brand-primary stroke-dasharray-[4,4] opacity-50" />
          <text x="250" y="134" textAnchor="middle" className="fill-brand-primary text-[8px] animate-pulse">Feedback loop</text>
        </svg>
      )
    },
    {
      id: "aidev",
      title: "AI Development",
      icon: <Layers className="w-4 h-4" />,
      tagline: "Capsule Network Routing",
      desc: "Harnessing multi-dimensional vector Capsule Networks to model biomedical waveform spatial properties.",
      diagram: (
        <svg viewBox="0 0 400 180" className="w-full h-auto stroke-zinc-700 fill-none text-[10px] font-mono text-zinc-400">
          <rect x="10" y="70" width="70" height="40" rx="6" className="stroke-brand-primary" fill="rgba(139, 92, 246, 0.05)" />
          <text x="45" y="94" textAnchor="middle" className="fill-zinc-300">ECG Signal</text>

          <rect x="110" y="70" width="75" height="40" rx="6" className="stroke-brand-primary" fill="rgba(139, 92, 246, 0.05)" />
          <text x="147.5" y="94" textAnchor="middle" className="fill-zinc-300">CNN Features</text>

          <rect x="215" y="70" width="75" height="40" rx="6" className="stroke-brand-secondary" fill="rgba(6, 182, 212, 0.05)" />
          <text x="252.5" y="94" textAnchor="middle" className="fill-zinc-300">Capsules</text>

          <rect x="320" y="70" width="70" height="40" rx="6" className="stroke-emerald-500" fill="rgba(16, 185, 129, 0.05)" />
          <text x="355" y="94" textAnchor="middle" className="fill-zinc-300">Classification</text>

          <path d="M 80,90 L 110,90" className="stroke-zinc-600" />
          <path d="M 185,90 L 215,90" className="stroke-zinc-600" />
          <path d="M 290,90 L 320,90" className="stroke-brand-secondary" />
        </svg>
      )
    },
    {
      id: "product",
      title: "Product Thinking",
      icon: <Lightbulb className="w-4 h-4" />,
      tagline: "Grounded RAG Pipelines",
      desc: "Combining dense FAISS vector space and sparse lexical index retrievals to prevent AI hallucinations.",
      diagram: (
        <svg viewBox="0 0 400 180" className="w-full h-auto stroke-zinc-700 fill-none text-[10px] font-mono text-zinc-400">
          <rect x="10" y="70" width="70" height="40" rx="6" className="stroke-brand-primary" fill="rgba(139, 92, 246, 0.05)" />
          <text x="45" y="94" textAnchor="middle" className="fill-zinc-300">Raw Files</text>

          <rect x="110" y="30" width="75" height="40" rx="6" className="stroke-brand-primary" fill="rgba(139, 92, 246, 0.05)" />
          <text x="147.5" y="54" textAnchor="middle" className="fill-zinc-300">Vector Index</text>

          <rect x="110" y="110" width="75" height="40" rx="6" className="stroke-brand-primary" fill="rgba(139, 92, 246, 0.05)" />
          <text x="147.5" y="134" textAnchor="middle" className="fill-zinc-300">Lexical Index</text>

          <rect x="220" y="70" width="75" height="40" rx="6" className="stroke-brand-secondary" fill="rgba(6, 182, 212, 0.05)" />
          <text x="257.5" y="94" textAnchor="middle" className="fill-zinc-300">Reranker</text>

          <rect x="320" y="70" width="70" height="40" rx="6" className="stroke-emerald-500" fill="rgba(16, 185, 129, 0.05)" />
          <text x="355" y="94" textAnchor="middle" className="fill-zinc-300">Cited Answer</text>

          <path d="M 80,75 L 110,50" className="stroke-zinc-600" />
          <path d="M 80,105 L 110,130" className="stroke-zinc-600" />
          <path d="M 185,50 L 220,80" className="stroke-zinc-600" />
          <path d="M 185,130 L 220,100" className="stroke-zinc-600" />
          <path d="M 295,90 L 320,90" className="stroke-brand-secondary" />
        </svg>
      )
    }
  ];

  const activeData = topics.find((t) => t.id === activeTopic) || topics[0];

  return (
    <section id="mindset" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col justify-between h-full select-none">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-10 flex-shrink-0">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-2">Mindset</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient-brand">System Design & Thinking</p>
        <p className="text-xs text-zinc-500 mt-1 font-mono">Click a pillar to inspect the architecture flow</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        {/* Left Side: Topic select (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopic(topic.id)}
              className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex gap-4 items-center ${
                activeTopic === topic.id
                  ? "bg-brand-primary/10 border-brand-primary/40 text-white shadow-[0_0_15px_-5px_rgba(139,92,246,0.25)]"
                  : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              <div className={`p-2.5 rounded-lg ${activeTopic === topic.id ? "bg-brand-primary/20 text-brand-primary" : "bg-zinc-900"}`}>
                {topic.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm font-sans">{topic.title}</h3>
                <span className="text-[10px] font-mono text-zinc-500">{topic.tagline}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Side: Animated Diagram viewer (7 cols) */}
        <TiltCard 
          className="lg:col-span-7 h-[300px] sm:h-[350px] glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
          maxTilt={5}
        >
          <div className="absolute top-0 right-0 w-32 h-32 glow-dot-purple opacity-20 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopic}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex flex-col justify-between text-left"
              style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
            >
              <div>
                <span className="text-[9px] font-mono text-brand-secondary bg-brand-secondary/10 px-2 py-0.5 rounded">
                  {activeData.tagline}
                </span>
                <h3 className="text-xl font-bold mt-2 font-sans text-white" style={{ transform: "translateZ(30px)" }}>{activeData.title}</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-sans" style={{ transform: "translateZ(20px)" }}>{activeData.desc}</p>
              </div>

              {/* Render SVG Diagram */}
              <div 
                className="bg-zinc-950/60 p-4 rounded-xl border border-zinc-850 flex items-center justify-center flex-1 mt-4"
                style={{ transform: "translateZ(35px)" }}
              >
                {activeData.diagram}
              </div>
            </motion.div>
          </AnimatePresence>
        </TiltCard>
      </div>
    </section>
  );
}

