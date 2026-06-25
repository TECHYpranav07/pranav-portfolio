"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Brain, Database, Bot, Sparkles, Zap, Trophy } from "lucide-react";
import TiltCard from "./TiltCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    description: "Foundational training in analog and digital circuit design, filter mathematics, and hardware debugging constraints.",
    icon: <Zap className="w-5 h-5 text-[var(--color-accent)]" />,
    tags: ["Filter Design", "Circuit Math", "MATLAB Analysis"]
  },
  {
    id: 2,
    title: "Embedded Systems",
    subtitle: "Hardware Programming Interface",
    description: "ARM Cortex-M (STM32) firmware engineering using Keil C, register-level optimization, interrupts, and hardware simulator testing.",
    icon: <Cpu className="w-5 h-5 text-[var(--color-accent)]" />,
    tags: ["STM32", "C/C++", "VHDL/Verilog", "Proteus"]
  },
  {
    id: 3,
    title: "Machine Learning",
    subtitle: "Data-Driven Engineering",
    description: "Developing statistical decision engines using regression, Random Forest ensembles, and custom balanced sampling.",
    icon: <Brain className="w-5 h-5 text-[var(--color-accent)]" />,
    tags: ["Python", "Scikit-Learn", "XGBoost", "SMOTE Balancing"]
  },
  {
    id: 4,
    title: "Deep Learning",
    subtitle: "Neural Representation Networks",
    description: "Designed PyTorch CNNs and dynamic-routing Capsule Networks for biomedical ECG anomaly categorization, winning 2nd Place at Technophilia'25.",
    icon: <Brain className="w-5 h-5 text-[var(--color-accent)]" />,
    tags: ["PyTorch", "TensorFlow", "Capsule Networks", "ECG Processing"],
    badge: "🏆 2nd Place — Technophilia'25"
  },
  {
    id: 5,
    title: "RAG Systems",
    subtitle: "Enterprise Semantic databases",
    description: "Built hybrid semantic search engines merging dense FAISS vector space with sparse lexical BM25 indexes and rerankers.",
    icon: <Database className="w-5 h-5 text-[var(--color-accent)]" />,
    tags: ["LangChain", "FAISS Index", "Vector DB", "Reranker Scoring"]
  },
  {
    id: 6,
    title: "AI Agents",
    subtitle: "Autonomous Logic Planners",
    description: "Engineered self-correcting agent graphs in LangGraph capable of tool-calling local MATLAB session environments.",
    icon: <Bot className="w-5 h-5 text-[var(--color-accent)]" />,
    tags: ["LangGraph", "Agentic Workflows", "Reflection Loop", "MATLAB Bridge"]
  },
  {
    id: 7,
    title: "Future AI Product Builder",
    subtitle: "Full-Stack System Creator",
    description: "Co-designing embedded interfaces and generative AI engines to ship robust, high-performance edge systems.",
    icon: <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />,
    tags: ["Full-Stack AI", "FastAPI", "Docker Deploys", "Product Thinking"]
  }
];

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trigger = triggerRef.current;
    if (!container || !trigger) return;

    const panels = gsap.utils.toArray(".showcase-panel");
    const amountToScroll = container.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      // Horizontal Scroll pinning
      gsap.to(container, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${amountToScroll * 1.5}`, // Extra runway for smooth pacing
          invalidateOnRefresh: true,
        }
      });



      // Scale-down animation on the First Intro panel
      gsap.to(".panel-intro-inner", {
        scale: 0.9,
        opacity: 0.4,
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "top -50%",
          scrub: true,
        }
      });

      // 3D Tilt Card Scroll Effect on Panel 2 and 3 Cards
      const timelineCards = gsap.utils.toArray(".timeline-parallax-card");
      timelineCards.forEach((card: any, idx) => {
        gsap.fromTo(card,
          { rotationY: 45, transformOrigin: "left center", opacity: 0, z: -100 },
          {
            rotationY: 0,
            opacity: 1,
            z: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "left 95%",
              end: "left 40%",
              scrub: true,
            }
          }
        );
      });
    }, trigger);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[var(--color-bg)] relative">

      <div 
        ref={containerRef} 
        className="flex w-[200vw] h-screen items-center"
        style={{ willChange: "transform", perspective: "1200px" }}
      >
        {/* PANEL 1: About Me Intro & Availability */}
        <section className="showcase-panel w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 md:px-24 relative">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 panel-intro-inner">
            <div>
              <span className="text-label text-[var(--color-accent)]">02. Evolution</span>
              <h2 className="heading-xl mt-4">About Me</h2>
              <div className="section-divider my-6" />
              <p className="text-body text-zinc-300 leading-relaxed">
                I am an Electronics & Telecommunication Engineering student (graduating 2026) who carved a path deep into artificial intelligence and embedded design.
              </p>
              <p className="text-body text-zinc-400 mt-4 leading-relaxed">
                My work focuses on bridging physical hardware limits with autonomous agentic intelligence. I build products, not just models.
              </p>
              <div className="mt-8 flex gap-4 items-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Status: Available for Opportunities</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
            </div>
            <TiltCard 
              className="glass-card p-8 rounded-2xl border-zinc-800/80 flex flex-col justify-between h-[300px] relative overflow-hidden"
              maxTilt={6}
              style={{
                background: "linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.04)"
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />
              <div>
                <h3 className="heading-md mb-2 text-white">Philosophy</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  "The best way to predict the future is to build it. Combining embedded system constraints with advanced deep learning models creates the ultimate edge intelligence."
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--color-accent)] font-mono">
                <span className="animate-pulse">Scroll down or swipe to proceed</span>
                <span className="text-base">→</span>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* PANEL 2: The Journey Grid (7 Milestones + 1 contact CTA Card) */}
        <section className="showcase-panel w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 md:px-20 relative bg-[var(--color-bg-elevated)]">
          <div className="max-w-6xl w-full z-10 space-y-8">
            <div>
              <span className="text-label text-[var(--color-accent)]">The Journey</span>
              <h3 className="heading-lg mt-2 text-white">Engineering Evolution</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {milestones.map((stone) => (
                <div 
                  key={stone.id} 
                  className="timeline-parallax-card"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <TiltCard 
                    className="card-base p-5 flex flex-col justify-between h-[210px] relative overflow-hidden"
                    maxTilt={8}
                    style={{
                      background: "rgba(20, 20, 20, 0.9)",
                      border: "1px solid rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-zinc-600 text-[10px]">0{stone.id}.</span>
                        <div className="p-1 rounded bg-[var(--color-bg-subtle)] border border-zinc-850 scale-75 origin-right">
                          {stone.icon}
                        </div>
                      </div>
                      <h4 className="font-bold text-white text-sm mb-0.5">{stone.title}</h4>
                      <p className="text-[9px] font-mono text-[var(--color-accent)] mb-2">{stone.subtitle}</p>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-sans line-clamp-3">{stone.description}</p>
                      {stone.badge && (
                        <div className="inline-flex items-center gap-1 px-1.5 py-0.5 mt-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-mono font-medium">
                          {stone.badge}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-900/60 font-mono text-[8px]">
                      {stone.tags.slice(0, 2).map((t) => (
                        <span key={t} className="bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-900 text-zinc-400">{t}</span>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              ))}

              {/* Card 8: Custom CTA Card */}
              <div 
                onClick={() => {
                  const el = document.getElementById("section-contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="timeline-parallax-card cursor-pointer group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <TiltCard 
                  className="card-base p-5 flex flex-col justify-between h-[210px] relative overflow-hidden border-dashed border-[var(--color-accent)]/25 hover:border-[var(--color-accent)]/50 hover:bg-emerald-500/5 transition-all"
                  maxTilt={8}
                  style={{
                    background: "rgba(16, 185, 129, 0.02)",
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-zinc-600 text-[10px]">08. Next</span>
                        <div className="p-1 rounded bg-[var(--color-bg-subtle)] border border-zinc-850 group-hover:bg-[var(--color-accent)]/10 group-hover:text-[var(--color-accent)] transition-colors">
                          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                        </div>
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1 group-hover:text-[var(--color-accent)] transition-colors">Let's Collaborate</h4>
                      <p className="text-[11px] text-zinc-450 leading-relaxed font-sans mt-2">
                        Have an interesting project or opportunity? Let's connect and build something awesome.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-[var(--color-accent)] flex items-center gap-1 mt-2">
                      <span>Get in Touch</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
