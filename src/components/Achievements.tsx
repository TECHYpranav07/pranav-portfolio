"use client";

import React, { useRef, useEffect, useState } from "react";
import { Award, Trophy, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

interface Badge {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  icon: React.ReactNode;
  desc: string;
  details: string;
}

const badges: Badge[] = [
  {
    id: 1,
    title: "Technophilia'25",
    subtitle: "2nd Place Winner",
    date: "Feb 2025",
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
    desc: "National level engineering project exhibition and competition.",
    details: "Awarded 2nd place out of 100+ competing entries for designing a spatial ECG Arrhythmia diagnostic classifier utilizing Capsule Networks in PyTorch."
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    subtitle: "Professional Certificate",
    date: "Aug 2024",
    icon: <Award className="w-5 h-5 text-brand-primary" />,
    desc: "Verified neural network training credential.",
    details: "Mastered CNN hyperparameter optimization, sequence models, vector embeddings, recurrent networks, and multi-class classification setups."
  },
  {
    id: 3,
    title: "STM32 Firmware Workshop",
    subtitle: "ARM Microcontrollers",
    date: "Nov 2024",
    icon: <CpuIcon className="w-5 h-5 text-emerald-400" />,
    desc: "Hands-on certification in ARM Cortex-M hardware control.",
    details: "Configured GPIO register mapping, DMA transfers, timer-counter interrupts, and NEC protocol infrared modulation pipelines."
  },
  {
    id: 4,
    title: "MATLAB Controls Toolbox",
    subtitle: "Milestone Credentials",
    date: "Jan 2025",
    icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
    desc: "Control systems transient solver credential.",
    details: "Designed PID loop state-space controllers, Bode plot calculations, and Simulink trajectory solvers."
  }
];

function CpuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  );
}

export default function Achievements() {
  const triggerConfetti = (bName: string) => {
    const end = Date.now() + (0.5 * 1000);
    const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#fbbf24"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex flex-col justify-between h-full select-none">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-10 flex-shrink-0">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-2">Milestones</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient-brand">Achievements & Credentials</p>
        <p className="text-xs text-zinc-500 mt-1 font-mono">Click on any card to celebrate the achievement</p>
      </div>

      {/* Timeline Milestone Layout */}
      <div className="flex-1 w-full overflow-y-auto pr-2 relative no-scrollbar max-h-[60vh]">
        {/* Glow connector line in background */}
        <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-zinc-800 -translate-x-1/2 z-0" />
        
        {/* Active glowing timeline path overlay */}
        <div className="achievements-line absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-primary via-brand-secondary to-emerald-400 -translate-x-1/2 z-0 origin-top scale-y-0" />

        <div className="relative z-10 space-y-8 pb-8">
          {badges.map((badge, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={badge.id}
                onClick={() => triggerConfetti(badge.title)}
                className={`achievement-row flex flex-col md:flex-row items-stretch gap-6 md:gap-12 relative w-full opacity-0 translate-y-10 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual node marker */}
                <div className="achievement-node absolute left-[24px] md:left-1/2 top-5 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-zinc-950 border-2 border-brand-primary flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.25)] scale-0 transition-transform">
                  <div className="achievement-badge transition-transform duration-700">
                    {badge.icon}
                  </div>
                </div>

                {/* Left side spacer (Desktop only) */}
                <div className="hidden md:block w-1/2" />

                {/* Card block */}
                <div className="w-full md:w-1/2 pl-14 md:pl-0 flex">
                  <div className="achievement-card glass-card p-6 rounded-2xl w-full relative group flex flex-col justify-between hover:border-brand-primary/40 hover:shadow-[0_0_15px_-5px_rgba(139,92,246,0.2)] transition-all cursor-pointer">
                    <div className="absolute top-0 right-0 w-24 h-24 glow-dot-purple opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" />
                    
                    <div>
                      <div className="flex justify-between items-center gap-3 mb-1.5">
                        <span className="achievement-date font-mono text-zinc-500 text-xs font-bold">{badge.date}</span>
                        <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-850">0{badge.id}</span>
                      </div>
                      <h3 className="font-bold text-white text-base font-sans group-hover:text-brand-primary transition-colors text-left">{badge.title}</h3>
                      <h4 className="text-[11px] font-mono text-brand-secondary mb-3 text-left">{badge.subtitle}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans text-left">{badge.details}</p>
                    </div>

                    <div className="text-[9px] font-mono text-zinc-600 mt-4 pt-3 border-t border-zinc-900/60 flex justify-between">
                      <span>Credentials Dashboard</span>
                      <span className="text-brand-primary font-bold animate-pulse group-hover:underline">Click to Celebrate</span>
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
