"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Skill Data ─────────────────────────────────── */

interface SkillCategory {
  title: string;
  color: string; // dot / accent color
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "AI / Machine Learning",
    color: "var(--color-accent)",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "FAISS"],
  },
  {
    title: "Embedded Systems",
    color: "var(--color-accent)",
    skills: ["C/C++", "STM32", "ARM Cortex-M", "VHDL/Verilog", "MATLAB", "Proteus"],
  },
  {
    title: "Backend & Tools",
    color: "var(--color-accent)",
    skills: ["FastAPI", "Docker", "Git", "Linux", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Frontend & Product",
    color: "var(--color-accent)",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "Figma"],
  },
];

const allSkills = categories.flatMap((c) => c.skills);

/* ── Component ──────────────────────────────────── */

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ─ Header reveal ─ */
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      /* ─ Cards stagger ─ */
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".skills-card");
        gsap.fromTo(
          cards,
          { opacity: 0, scale: 0.92, y: 40, rotation: -1 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      /* ─ Marquee reveal ─ */
      if (marqueeRef.current) {
        gsap.fromTo(
          marqueeRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: marqueeRef.current,
              start: "top 92%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden select-none"
      style={{
        padding: "clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >


      {/* ── Content Container ── */}
      <div style={{ maxWidth: 1400, margin: "0 auto" }} className="relative z-10">
        {/* ── Header ── */}
        <div ref={headerRef} className="mb-16" style={{ opacity: 0 }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-label" style={{ color: "var(--color-accent)" }}>
                Toolkit
              </span>
              <h2
                className="heading-xl mt-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                Skills &amp; Technologies
              </h2>
            </div>
            <p
              className="text-body md:text-right"
              style={{ maxWidth: 420, color: "var(--color-text-secondary)" }}
            >
              Constantly expanding my toolkit to build better, faster, and more
              impactful solutions.
            </p>
          </div>

          {/* Divider */}
          <div
            className="section-divider mt-8"
            style={{ opacity: 0.5 }}
          />
        </div>

        {/* ── Grid ── */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className="skills-card card-base"
              style={{ opacity: 0, padding: "1.75rem" }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="heading-md"
                  style={{
                    color: "var(--color-text-primary)",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                  }}
                >
                  {cat.title}
                </h3>
                <span
                  className="text-label"
                  style={{
                    color: cat.color,
                    fontSize: "0.7rem",
                  }}
                >
                  {String(catIdx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Divider line */}
              <div
                style={{
                  height: 1,
                  background: `linear-gradient(90deg, ${cat.color}33, var(--color-border), transparent)`,
                  marginBottom: "1rem",
                }}
              />

              {/* Skills List */}
              <ul className="flex flex-col gap-0.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group flex items-center justify-between px-3 py-2.5 -mx-1 rounded-lg transition-colors duration-200"
                    style={{ cursor: "default" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--color-bg-subtle)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Leading dot */}
                      <span
                        className="block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          background: cat.color,
                          opacity: 0.6,
                          transition: "opacity 0.2s, transform 0.2s",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          color: "var(--color-text-secondary)",
                          transition: "color 0.2s",
                        }}
                        className="group-hover:!text-[var(--color-text-primary)]"
                      >
                        {skill}
                      </span>
                    </div>

                    {/* Trailing dot */}
                    <span
                      className="block w-1 h-1 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: cat.color }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Marquee Ticker ── */}
        <div
          ref={marqueeRef}
          className="mt-16 overflow-hidden"
          style={{
            opacity: 0,
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex whitespace-nowrap animate-marquee"
            style={{
              width: "max-content",
            }}
          >
            {/* Duplicate list for seamless loop */}
            {[...allSkills, ...allSkills].map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                className="inline-flex items-center gap-3 mx-4"
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                }}
              >
                <span
                  className="inline-block w-1 h-1 rounded-full"
                  style={{
                    background: "var(--color-accent)",
                    opacity: 0.4,
                  }}
                />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
