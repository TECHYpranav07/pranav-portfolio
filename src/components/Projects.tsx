"use client";

import React, { useRef, useEffect } from "react";
import { ExternalLink, Award, Brain, ShieldAlert, Route, MessageSquareCode, Mic, GitCommit, Activity, Network, Video } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  award?: string;
  icon: React.ReactNode;
}

interface CategoryGroup {
  id: string;
  num: string;
  name: string;
  summary: string;
  projects: Project[];
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const projectCategories: CategoryGroup[] = [
  {
    id: "mldl-group",
    num: "01",
    name: "Machine & Deep Learning",
    summary: "Harnessing deep neural architectures, reinforcement learning agents, and feature optimizations to parse complex sensor waveforms and solve control policies.",
    projects: [
      {
        id: 1,
        title: "ECG Arrhythmia Detection",
        description:
          "Biomedical ECG diagnostic system classifying multi-lead sheet images using custom Capsule Networks (CapsNet) in PyTorch. Achieved 98.4% accuracy with automated lead segmentation, winning 2nd Place at Technophilia'25.",
        tags: ["Capsule Networks", "PyTorch", "ECG Processing", "Deep Learning", "CNN Baselines"],
        github: "https://github.com/TECHYpranav07/ECG-Arrhythmia-Detection",
        award: "🏆 2nd Place — Technophilia'25",
        icon: <Activity className="w-5 h-5" />,
      },
      {
        id: 2,
        title: "Vehicle Emission & Fault Detection",
        description:
          "A 3-stage cascaded ML diagnostic pipeline combining a Random Forest engine fault detector (99% accuracy), a multi-output regressor for 5 major pollutants, and an XGBoost emission classifier (95%+ accuracy) visualized in a real-time Streamlit dashboard.",
        tags: ["Cascaded ML", "Random Forest", "XGBoost", "Streamlit Dashboard", "Data Science"],
        github: "https://github.com/TECHYpranav07/vehicle-emission-fault-detection",
        icon: <ShieldAlert className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "ai-rag-group",
    num: "02",
    name: "Generative AI & RAG",
    summary: "Connecting Large Language Models to dynamic document sources using vector space routing, lexical indices, and complex multi-agent state planning graphs.",
    projects: [
      {
        id: 3,
        title: "Ragas RAG System",
        description:
          "A FAISS + BM25 Hybrid Retrieval-Augmented Generation (RAG) system utilizing Groq LLMs. Integrates Reciprocal Rank Fusion (RRF) for retrieval, and the RAGAS evaluation framework to benchmark faithfulness and reduce hallucinations.",
        tags: ["RAGAS Framework", "Hybrid Retrieval", "FAISS", "BM25", "Groq LLM", "Streamlit"],
        github: "https://github.com/TECHYpranav07/ragas-rag-system",
        icon: <MessageSquareCode className="w-5 h-5" />,
      },
      {
        id: 4,
        title: "Local AI Voice Assistant",
        description:
          "Resource-optimized offline voice helper using TinyLlama via Ollama. Runs on standard CPUs with custom wake-word triggers, speech synthesis, and local system control automation.",
        tags: ["Python", "Ollama", "TinyLlama", "Speech Recognition", "System Automation"],
        github: "https://github.com/TECHYpranav07/ai-voice-assistant",
        icon: <Mic className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "automation-group",
    num: "03",
    name: "AI Automation & Workflows",
    summary: "Designing automated trigger-based pipelines, lightweight assistants, and webhook receivers that link user spaces with local AI processing.",
    projects: [
      {
        id: 5,
        title: "n8n RAG Workflow (RAG-N8N)",
        description:
          "Automated RAG pipeline built in n8n that processes Google Drive documents into Pinecone vector storage. Connects a Telegram AI assistant via Groq LLMs with chat history persisted in MongoDB.",
        tags: ["n8n Workflow", "Google Drive API", "Pinecone Store", "MongoDB Memory", "Telegram Bot"],
        github: "https://github.com/TECHYpranav07/RAG-N8N",
        icon: <Network className="w-5 h-5" />,
      },
      {
        id: 6,
        title: "n8n Video Automation Pipeline",
        description:
          "Programmatic video rendering pipeline in n8n. Automatically tracks trending social media topics, scripts videos using LLMs, generates TTS audio, curates stock footage, and compiles the final media.",
        tags: ["n8n Automation", "LLM Scripting", "TTS Audio", "Video Rendering", "API Integration"],
        github: "https://github.com/TECHYpranav07",
        icon: <Video className="w-5 h-5" />,
      },
    ],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      // Main Heading Reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Category Rows Reveal
      projectCategories.forEach((cat) => {
        const row = document.getElementById(cat.id);
        if (!row) return;

        const leftCol = row.querySelector(".cat-info-col");
        const cards = row.querySelectorAll(".project-card-col");

        gsap.fromTo(
          leftCol,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          cards,
          { opacity: 0, scale: 0.95, y: 40, rotationX: -6 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.15)",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="section-projects"
      className="relative border-b border-zinc-900/60 bg-[var(--color-bg)]"
      style={{
        padding: "clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div className="relative z-10 mx-auto" style={{ maxWidth: 1400 }}>
        {/* Main Section Heading */}
        <div ref={headingRef} className="mb-20">
          <span className="text-label mb-3 block text-[var(--color-accent)] font-mono tracking-wider">PORTFOLIO // SELECTED WORK</span>
          <h2 className="heading-xl text-white font-bold tracking-tight">
            Selected Projects
          </h2>
          <p className="text-body text-zinc-400 text-sm max-w-xl mt-3 leading-relaxed">
            A curated showcase of engineering experiments across machine learning architectures, agentic pipelines, and system automation workflows.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-24">
          {projectCategories.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                index > 0 ? "pt-16 border-t border-zinc-900/50" : ""
              }`}
            >
              {/* Left Column: Category Metadata (3 cols) */}
              <div className="cat-info-col lg:col-span-3 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-[var(--color-accent)] font-bold">
                    {category.num}
                  </span>
                  <h3 className="text-lg font-bold text-white font-sans tracking-tight">
                    {category.name}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed uppercase tracking-wider">
                  category overview
                </p>
                <p className="text-body text-zinc-400 text-[13px] leading-relaxed">
                  {category.summary}
                </p>
              </div>

              {/* Right Column: 2 Cards (9 cols) */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.projects.map((project) => {
                  const numberLabel = String(project.id).padStart(2, "0");

                  return (
                    <TiltCard
                      key={project.id}
                      className="project-card-col card-base group flex flex-col justify-between h-full"
                      style={{ padding: 0 }}
                      maxTilt={8}
                    >
                      {/* Top Accent line */}
                      <div
                        className="w-full h-1 bg-[var(--color-accent)] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                        }}
                      />

                      {/* Card Content */}
                      <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow" style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
                        <div className="flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
                          <span className="font-mono text-xs text-[var(--color-accent)]/80">
                            PRJ // {numberLabel}
                          </span>
                          <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-350">
                            {project.icon}
                          </div>
                        </div>

                        <h4 className="heading-md text-white font-sans font-bold group-hover:text-[var(--color-accent)] transition-colors duration-300" style={{ transform: "translateZ(35px)" }}>
                          {project.title}
                        </h4>

                        <p className="text-body text-zinc-400 text-sm leading-relaxed flex-grow" style={{ transform: "translateZ(20px)" }}>
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2" style={{ transform: "translateZ(15px)" }}>
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="tag-chip font-mono"
                              style={{ fontSize: "0.6rem", padding: "0.25rem 0.65rem" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div
                        className="px-6 py-4 mx-6 mb-2 flex items-center justify-between border-t border-zinc-900/80"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-mono text-[11px] text-zinc-500 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>

                        {project.award && (
                          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--color-accent)] bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/15 px-2.5 py-1 rounded-full">
                            <Award className="w-3 h-3" />
                            <span>{project.award}</span>
                          </div>
                        )}
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
