"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Bot, Code, GraduationCap } from "lucide-react";
import TiltCard from "./TiltCard";

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 }
    },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">About Me</h2>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight">The Engineer Behind the Code</p>
        <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Bio Card (Wide) */}
        <motion.div variants={cardVariants} className="md:col-span-2">
          <TiltCard 
            className="glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group h-full"
            maxTilt={6}
          >
            <div className="absolute top-0 right-0 w-48 h-48 glow-dot-purple opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" />
            
            <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
              <div className="flex items-center gap-3 mb-6" style={{ transform: "translateZ(30px)" }}>
                <GraduationCap className="w-6 h-6 text-brand-primary" />
                <h3 className="text-xl font-bold font-sans">Engineering Background</h3>
              </div>
              <p className="text-zinc-350 leading-relaxed mb-6 font-sans text-sm md:text-base">
                I am an **Electronics & Telecommunication Engineer** who bridged the gap between hardware and software. I don't just build models; I design full-system architectures. My interest lies at the intersection of AI/ML algorithms and embedded constraints—where intelligent software meets hardware realities.
              </p>
              <p className="text-zinc-400 leading-relaxed font-sans text-sm md:text-base">
                My engineering approach is simple: build products that solve real-world problems. Whether it's ECG-based cardiac anomaly classification using Capsule Networks or controlling MATLAB control-system toolboxes via conversational LLM agents, I build for deployment.
              </p>
            </div>

            <div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-800/60 font-mono text-xs text-zinc-500"
              style={{ transform: "translateZ(20px)" }}
            >
              <div>
                <p className="text-zinc-400 font-semibold mb-1">Focus</p>
                <p>AI/ML & Embedded</p>
              </div>
              <div>
                <p className="text-zinc-400 font-semibold mb-1">Methodology</p>
                <p>Product-First Dev</p>
              </div>
              <div>
                <p className="text-zinc-400 font-semibold mb-1">Interests</p>
                <p>AI Agents, RAG</p>
              </div>
              <div>
                <p className="text-zinc-400 font-semibold mb-1">Hardware</p>
                <p>STM32 ARM Cortex</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* AI/ML Core Card */}
        <motion.div variants={cardVariants}>
          <TiltCard 
            className="glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group h-full"
            maxTilt={8}
          >
            <div className="absolute top-0 right-0 w-32 h-32 glow-dot-cyan opacity-25 group-hover:opacity-35 transition-opacity pointer-events-none" />
            
            <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6" style={{ transform: "translateZ(35px)" }}>
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-sans" style={{ transform: "translateZ(30px)" }}>AI & Deep Learning</h3>
              <p className="text-zinc-400 leading-relaxed text-sm font-sans" style={{ transform: "translateZ(20px)" }}>
                Specializing in computer vision, neural networks, and advanced architectures. Experienced in implementing CNNs, Capsule Networks for biomedical processing, and training customized models in PyTorch.
              </p>
            </div>
            <div className="mt-6 font-mono text-xs text-brand-primary" style={{ transform: "translateZ(25px)" }}>
              <span>PyTorch • TensorFlow • CNNs • Scikit-Learn</span>
            </div>
          </TiltCard>
        </motion.div>

        {/* Embedded Systems Card */}
        <motion.div variants={cardVariants}>
          <TiltCard 
            className="glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group h-full"
            maxTilt={8}
          >
            <div className="absolute top-0 right-0 w-32 h-32 glow-dot-cyan opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" />
            
            <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6" style={{ transform: "translateZ(35px)" }}>
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-sans" style={{ transform: "translateZ(30px)" }}>Embedded Systems</h3>
              <p className="text-zinc-400 leading-relaxed text-sm font-sans" style={{ transform: "translateZ(20px)" }}>
                Expertise in ARM Cortex-M (STM32) firmware development, register-level optimization, assembly programming, and hardware-software co-design. Fully proficient with simulation software like Proteus and HDLs like Verilog/VHDL.
              </p>
            </div>
            <div className="mt-6 font-mono text-xs text-brand-secondary" style={{ transform: "translateZ(25px)" }}>
              <span>STM32 • Keil • Proteus • Verilog • 8051</span>
            </div>
          </TiltCard>
        </motion.div>

        {/* AI Engineering & Agents Card */}
        <motion.div variants={cardVariants}>
          <TiltCard 
            className="glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group h-full"
            maxTilt={8}
          >
            <div className="absolute top-0 right-0 w-32 h-32 glow-dot-purple opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" />
            
            <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6" style={{ transform: "translateZ(35px)" }}>
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-sans" style={{ transform: "translateZ(30px)" }}>AI Agents & RAG</h3>
              <p className="text-zinc-400 leading-relaxed text-sm font-sans" style={{ transform: "translateZ(20px)" }}>
                Engineering multi-agent systems and semantic search pipelines. Harnessing LangChain, LangGraph, and Vector Databases to construct cognitive assistants that can interact with external runtime tools like MATLAB and PDFs.
              </p>
            </div>
            <div className="mt-6 font-mono text-xs text-brand-primary" style={{ transform: "translateZ(25px)" }}>
              <span>LangChain • FAISS • Vector DBs • Agentic Workflows</span>
            </div>
          </TiltCard>
        </motion.div>

        {/* Product Building Card */}
        <motion.div variants={cardVariants}>
          <TiltCard 
            className="glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group h-full"
            maxTilt={8}
          >
            <div className="absolute top-0 right-0 w-32 h-32 glow-dot-purple opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" />
            
            <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6" style={{ transform: "translateZ(35px)" }}>
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-sans" style={{ transform: "translateZ(30px)" }}>AI Product Builder</h3>
              <p className="text-zinc-400 leading-relaxed text-sm font-sans" style={{ transform: "translateZ(20px)" }}>
                I love turning research ideas into web interfaces. Using FastAPI, Next.js, and Docker to ship scalable, beautifully responsive, and robust endpoints for machine learning pipelines.
              </p>
            </div>
            <div className="mt-6 font-mono text-xs text-zinc-400" style={{ transform: "translateZ(25px)" }}>
              <span>Next.js • FastAPI • REST APIs • Docker</span>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
