"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Music, 
  Sparkles, 
  Cpu, 
  ExternalLink, 
  Play, 
  Pause, 
  Monitor, 
  TrendingUp, 
  Layers, 
  Disc,
  CheckCircle2
} from "lucide-react";
import TiltCard from "./TiltCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Vibecoding() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // VibeLyrics State
  const [lyricsPlaying, setLyricsPlaying] = useState(false);
  const [lyricIndex, setLyricIndex] = useState(0);
  const lyricsList = [
    "Connecting to Windows SMTC session...",
    "♪ Listening to active media stream ♪",
    "♪ We vibe in the dark room, code glowing bright ♪",
    "♪ Stack layers of logic in the neon light ♪",
    "♪ Syncing floating overlays, focus in flight ♪",
    "Flow state established. VibeLyrics active."
  ];

  // Focal State
  const [flowActive, setFlowActive] = useState(false);
  const [focusScore, setFocusScore] = useState(94);
  const [ambientTheme, setAmbientTheme] = useState("Neon Rain");

  // VibeLyrics Lyrics Auto-Scroller
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (lyricsPlaying) {
      timer = setInterval(() => {
        setLyricIndex((prev) => (prev + 1) % lyricsList.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [lyricsPlaying]);

  // Focal Focus Score Simulator
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (flowActive) {
      timer = setInterval(() => {
        setFocusScore((prev) => {
          const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
          const next = prev + delta;
          return Math.min(100, Math.max(90, next));
        });
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [flowActive]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Glow pulse
      gsap.to(".vibecoding-glow-bg", {
        scale: 1.15,
        opacity: 0.12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Slide elements in
      gsap.fromTo(".vibecoding-slide",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const triggerConfetti = () => {
    if (typeof window !== "undefined") {
      import("canvas-confetti").then((module) => {
        const confetti = module.default;
        confetti({
          particleCount: 70,
          spread: 60,
          colors: ["#10b981", "#34d399", "#059669"]
        });
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="section-vibecoding" 
      className="relative py-24 px-6 md:px-20 overflow-hidden bg-[var(--color-bg-elevated)]"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <style>{`
        @keyframes equalizer {
          0%, 100% { height: 4px; }
          50% { height: 26px; }
        }
        .eq-bar {
          width: 3px;
          background-color: #10b981;
          border-radius: 2px;
          animation: equalizer 1.2s ease-in-out infinite;
        }
        .eq-bar-1 { animation-delay: 0.1s; }
        .eq-bar-2 { animation-delay: 0.3s; }
        .eq-bar-3 { animation-delay: 0.5s; }
        .eq-bar-4 { animation-delay: 0.2s; }
        .eq-bar-5 { animation-delay: 0.4s; }
      `}</style>

      {/* Futuristic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-accent)] rounded-full blur-[140px] opacity-8 pointer-events-none vibecoding-glow-bg" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto vibecoding-slide">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Vibecode Ecosystem</span>
          </div>

          <h2 className="heading-xl text-white font-bold leading-none tracking-tight">
            Vibe<span className="text-[var(--color-accent)]">coding</span>
          </h2>
          
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans">
            Designing immersive, sensory-rich coding environments that merge development setups with real-time media, aesthetic glass interfaces, and flow telemetry.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 vibecoding-slide">
          
          {/* CARD 1: VibeLyrics */}
          <TiltCard 
            className="relative rounded-3xl border border-zinc-900 bg-zinc-950/65 p-6 md:p-8 hover:border-emerald-500/25 transition-colors duration-300 shadow-2xl flex flex-col justify-between overflow-hidden group h-full"
            maxTilt={10}
            perspective={1200}
          >
            {/* Ambient inner particle light */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-[50px] group-hover:bg-[var(--color-accent)]/10 transition-colors" />

            <div className="space-y-6 flex-grow">
              {/* Floating Mockup Preview */}
              <div 
                className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-900 shadow-xl bg-zinc-950 group-hover:border-emerald-500/20 transition-all duration-300"
                style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}
              >
                {/* Image */}
                <img 
                  src="https://raw.githubusercontent.com/TECHYpranav07/VibeLyrics/master/assets/preview.png" 
                  alt="VibeLyrics Preview" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />

                {/* Simulated Floating Glass Overlay for Synced Lyrics */}
                <div 
                  className="absolute inset-x-4 bottom-4 p-4 rounded-xl border border-white/5 bg-zinc-950/70 backdrop-blur-md flex items-center justify-between shadow-2xl"
                  style={{ transform: "translateZ(25px)" }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Disc className={`w-5 h-5 text-[var(--color-accent)] ${lyricsPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "3s" }} />
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">VibeLyrics Overlay</p>
                      <p className="text-xs font-semibold text-white truncate max-w-[200px] md:max-w-[250px]">
                        {lyricsList[lyricIndex]}
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setLyricsPlaying(!lyricsPlaying)}
                    className="p-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 hover:bg-[var(--color-accent)]/20 transition-colors"
                  >
                    {lyricsPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Text Metadata */}
              <div className="space-y-3" style={{ transform: "translateZ(25px)" }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    VibeLyrics
                    <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">Desktop</span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-mono bg-emerald-500/5 px-2.5 py-0.5 rounded-full border border-emerald-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>SMTC Active</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  A floating PyQt6 desktop synced-lyrics widget that hooks directly into Windows System Media Transport Controls (SMTC). Queries LRCLIB to project real-time synced lyrics overlays over games and active media players.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Python", "PyQt6", "Windows SMTC", "LRCLIB API", "Glassmorphism"].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/50 border border-zinc-900 text-zinc-400 hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-900 flex justify-between items-center mt-6" style={{ transform: "translateZ(30px)" }}>
              <span className="text-[10px] font-mono text-zinc-500">github.com/TECHYpranav07/VibeLyrics</span>
              <a
                href="https://github.com/TECHYpranav07/VibeLyrics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all font-mono text-[11px]"
              >
                <span>View Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </TiltCard>

          {/* CARD 2: Focal */}
          <TiltCard 
            className="relative rounded-3xl border border-zinc-900 bg-zinc-950/65 p-6 md:p-8 hover:border-emerald-500/25 transition-colors duration-300 shadow-2xl flex flex-col justify-between overflow-hidden group h-full"
            maxTilt={10}
            perspective={1200}
          >
            {/* Ambient inner particle light */}
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-[50px] group-hover:bg-[var(--color-accent)]/10 transition-colors" />

            <div className="space-y-6 flex-grow">
              {/* Floating Mockup Preview */}
              <div 
                className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-900 shadow-xl bg-zinc-950 group-hover:border-emerald-500/20 transition-all duration-300"
                style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}
              >
                {/* Generated Mockup Image */}
                <img 
                  src="/images/focal.png" 
                  alt="Focal Mockup" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />

                {/* Animated Interactive Flow Overlay */}
                {flowActive && (
                  <div 
                    className="absolute inset-0 bg-emerald-950/20 backdrop-blur-xs flex flex-col justify-between p-4 transition-all duration-500"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="flex justify-between items-start">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-[var(--color-accent)] text-[9px] font-mono tracking-wider uppercase">
                        Flow Active
                      </span>
                      <div className="flex gap-0.5 items-end h-6 pt-2">
                        <div className="eq-bar eq-bar-1" />
                        <div className="eq-bar eq-bar-2" />
                        <div className="eq-bar eq-bar-3" />
                        <div className="eq-bar eq-bar-4" />
                        <div className="eq-bar eq-bar-5" />
                      </div>
                    </div>

                    <div className="flex justify-between items-end bg-zinc-950/70 p-3 rounded-lg border border-white/5">
                      <div>
                        <p className="text-[9px] font-mono text-zinc-500">AMBIENT TRACK</p>
                        <p className="text-xs font-semibold text-white font-mono">{ambientTheme}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-mono text-zinc-500">FOCUS SCORE</p>
                        <p className="text-xs font-mono font-bold text-emerald-400">{focusScore}%</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Metadata */}
              <div className="space-y-3" style={{ transform: "translateZ(25px)" }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    Focal
                    <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">Flow Assistant</span>
                  </h3>
                  <button 
                    onClick={() => {
                      if (!flowActive) {
                        triggerConfetti();
                      }
                      setFlowActive(!flowActive);
                    }}
                    className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border cursor-pointer transition-all ${
                      flowActive 
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    {flowActive ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{flowActive ? "Active" : "Simulate Flow"}</span>
                  </button>
                </div>

                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  Intelligent developer focus cockpit integrating local LLMs (TinyLlama) to block distractions, tracking keyboard cadence telemetry, and synthesising ambient audio tracks via Web Audio API.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Electron", "Node.js", "Ollama / TinyLlama", "Web Audio API", "Focus Metrics"].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/50 border border-zinc-900 text-zinc-400 hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-900 flex justify-between items-center mt-6" style={{ transform: "translateZ(30px)" }}>
              <span className="text-[10px] font-mono text-zinc-500">Configure Flow Dashboard</span>
              <div className="flex gap-2">
                {flowActive && (
                  <select 
                    value={ambientTheme}
                    onChange={(e) => setAmbientTheme(e.target.value)}
                    className="bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[10px] rounded px-2 py-1 outline-none focus:border-emerald-500/50"
                  >
                    <option value="Neon Rain">Neon Rain</option>
                    <option value="Cyberpunk Cafe">Cyberpunk Cafe</option>
                    <option value="Lo-Fi Compiler">Lo-Fi Compiler</option>
                  </select>
                )}
              </div>
            </div>
          </TiltCard>

        </div>
        
      </div>
    </section>
  );
}


