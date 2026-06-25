"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Award, GraduationCap } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineEvent[] = [
  {
    year: "2024",
    title: "Machine Learning Foundations & Research Projects",
    subtitle: "Focus on Computer Vision & Biomedical Classification",
    description: "Built the foundation of machine learning models, ECG signal diagnostics using standard convolutional architectures, and studied deep representation properties. Started research and prototyping on Capsule Networks to capture spatial pose information.",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "AI Product Development & App Integrations",
    subtitle: "VibeLyrics & Web Deployments",
    description: "Expanded code into production-ready web services. Scaffolded and deployed FastAPI and Next.js systems. Built VibeLyrics, a web service combining NLP sentiment classification and dynamic lyrics sync, utilizing public Spotify playback APIs.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "Advanced RAG Knowledge Systems",
    subtitle: "Hybrid Search Databases & FAISS Integration",
    description: "Constructed enterprise-grade RAG pipelines. Developed hybrid indices combining dense FAISS similarity search and sparse BM25 keyword retrievers. Integrated cross-encoder rerankers and citation guardrails to minimize hallucinations.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: "2026",
    title: "AI Agents & Intelligent Automation",
    subtitle: "LangChain Agentic Workflows & MATLAB Orchestration",
    description: "Designed multi-agent execution graphs using LangChain and LangGraph. Constructed a MATLAB AI Agent capable of interpreting natural language control requests, generating clean script parameters, executing code via background engine bridges, and resolving syntax errors autonomously.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-10 select-none">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">Timeline</h2>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight">Milestones & Technical Evolution</p>
        <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-12">
        {timelineData.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Circle */}
            <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-zinc-950 border-2 border-brand-primary flex items-center justify-center text-brand-primary shadow-[0_0_10px_rgba(139,92,246,0.15)]">
              {event.icon}
            </div>

            {/* Year tag for larger screens */}
            <div className="absolute hidden md:block -left-32 top-1.5 w-24 text-right font-mono text-lg font-bold text-zinc-500">
              {event.year}
            </div>

            {/* Card Content */}
            <div className="glass-card p-6 rounded-xl relative group">
              <div className="absolute top-0 right-0 w-32 h-32 glow-dot-purple opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" />
              
              <div className="md:hidden font-mono text-brand-secondary font-bold text-sm mb-1">
                {event.year}
              </div>
              <h3 className="text-lg font-bold text-white mb-1 font-sans">{event.title}</h3>
              <h4 className="text-xs text-brand-secondary font-mono mb-4">{event.subtitle}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
