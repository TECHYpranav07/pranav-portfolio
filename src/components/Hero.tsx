"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { Variants } from "framer-motion";

/* ── framer variants ── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ── stats data ── */
const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "6+", label: "Technologies" },
  { value: "2+", label: "Years Building" },
];

/* ── component ── */
export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  /* scroll helper */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* GSAP reveal for stats row */
  useEffect(() => {
    if (!statsRef.current) return;

    const items = statsRef.current.querySelectorAll<HTMLElement>(".stat-item");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.8, y: 30, rotation: -3 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.9,
          ease: "back.out(1.7)",
          stagger: 0.12,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden select-none"
      style={{
        padding: "clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      {/* ── background orb ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* ── main content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
        style={{ maxWidth: 1400 }}
      >
        {/* heading */}
        <motion.h1 variants={itemVariants} className="heading-display">
          <span style={{ color: "var(--color-text-primary)" }}>PRANAV</span>
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px var(--color-accent)",
            }}
          >
            KARANDE
          </span>
        </motion.h1>

        {/* role subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-label mt-6 sm:mt-8"
          style={{ maxWidth: 620 }}
        >
          AI/ML Engineer{" "}
          <span style={{ color: "var(--color-accent)" }}>×</span> Embedded
          Systems Developer{" "}
          <span style={{ color: "var(--color-accent)" }}>×</span> AI Product
          Builder
        </motion.p>

        {/* brief description */}
        <motion.p
          variants={itemVariants}
          className="text-body mt-4 sm:mt-5"
          style={{ maxWidth: 540 }}
        >
          Designing intelligent systems at the intersection of deep learning,
          edge hardware, and product thinking — from concept to deployment.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button
            className="btn-pill btn-pill-filled"
            onClick={() => scrollTo("projects")}
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </button>

          <button className="btn-pill" onClick={() => scrollTo("contact")}>
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      {/* ── stats counter row ── */}
      <div
        ref={statsRef}
        className="relative z-10 mt-20 sm:mt-28 w-full flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20"
        style={{ maxWidth: 1400 }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="stat-item flex flex-col items-center gap-2"
            style={{ opacity: 0 }}
          >
            <span className="counter-number">{s.value}</span>
            <span className="text-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
