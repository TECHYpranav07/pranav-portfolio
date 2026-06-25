"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/components/Hero";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import Projects from "@/components/Projects";
import Vibecoding from "@/components/Vibecoding";
import Skills from "@/components/Skills";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const lenisInstanceRef = useRef<Lenis | null>(null);

  const sections = [
    "hero",
    "journey",
    "projects",
    "vibecoding",
    "skills",
    "resume",
    "contact"
  ];

  const sectionLabels: Record<string, string> = {
    hero: "Hero",
    journey: "About",
    projects: "Projects",
    vibecoding: "Vibecoding",
    skills: "Skills",
    resume: "Resume",
    contact: "Contact"
  };

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    lenisInstanceRef.current = lenis;

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Track active sections on vertical scroll
    sections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: `#section-${sec}`,
        start: "top 40%",
        end: "bottom 40%",
        onEnter: () => setActiveSection(sec),
        onEnterBack: () => setActiveSection(sec),
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el && lenisInstanceRef.current) {
      lenisInstanceRef.current.scrollTo(el, { duration: 1.5 });
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] flex flex-col justify-between overflow-x-hidden">
      
      {/* Editorial aesthetic enhancements */}
      <NoiseOverlay />
      <CustomCursor />
      <SocialSidebar />

      {/* Navigation Header bar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 max-w-5xl w-[90%] glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-lg print:hidden">
        <div 
          onClick={() => scrollToSection("hero")}
          className="font-mono text-sm font-bold tracking-tight cursor-pointer flex items-center gap-1.5 group"
        >
          <span className="text-[var(--color-accent)] font-black group-hover:text-[var(--color-text-primary)] transition-colors">&lt;</span>
          <span>Pranav.K</span>
          <span className="text-[var(--color-accent)] font-black group-hover:text-[var(--color-text-primary)] transition-colors">/&gt;</span>
        </div>

        {/* Desktop Menu links bar */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] font-mono text-zinc-400">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={`hover:text-white capitalize transition-colors cursor-pointer relative py-1 ${
                activeSection === sec ? "text-white" : ""
              }`}
            >
              {sectionLabels[sec] || sec}
              {activeSection === sec && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)]"
                  transition={{ type: "spring" as const, stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Quick Utilities drawers togglers (None active) */}
        <div className="flex items-center gap-3" />
      </header>

      {/* Slide Dot Navigation Indicator vertical panel */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 bg-zinc-950/40 p-3 rounded-full border border-zinc-800/80 backdrop-blur-md">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => scrollToSection(sec)}
            className="group relative flex items-center justify-center w-3 h-3 cursor-pointer"
          >
            <span 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === sec 
                  ? "bg-[var(--color-accent)] scale-125 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
                  : "bg-zinc-600 group-hover:bg-zinc-300"
              }`}
            />
            <span className="absolute right-6 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded shadow-lg capitalize pointer-events-none">
              {sectionLabels[sec] || sec}
            </span>
          </button>
        ))}
      </div>

      {/* Main Flowing Sections */}
      <main className="relative z-10">
        <div id="section-hero">
          <Hero />
        </div>
        
        <div id="section-journey">
          <HorizontalShowcase />
        </div>
        
        <div id="section-projects">
          <Projects />
        </div>

        <div id="section-vibecoding">
          <Vibecoding />
        </div>

        <div id="section-skills">
          <Skills />
        </div>
        
        <div id="section-resume">
          <ResumeSection />
        </div>
        
        <div id="section-contact">
          <Contact />
          
          {/* Footer appended right inside the final contact slide */}
          <footer className="py-8 px-4 border-t border-zinc-900/60 text-center text-[10px] font-mono text-zinc-500 bg-black/40 backdrop-blur-sm print:hidden">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
              <p>© 2026 Pranav Karande. All rights reserved.</p>
              <p>Designed & Built with ♥ • Next.js, Lenis, GSAP & Framer Motion</p>
            </div>
          </footer>
        </div>
      </main>

      {/* AI Chatbot Assistant floating widget */}
      <Chatbot />

    </div>
  );
}
