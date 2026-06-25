"use client";

import React, { useState } from "react";
import { Download, Printer, FileText, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";

export default function ResumeSection() {
  const [viewMode, setViewMode] = useState<"visual" | "ats">("visual");
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    // Micro-interaction confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#10b981", "#34d399", "#6ee7b7"]
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAts = () => {
    const text = document.getElementById("ats-resume-text")?.innerText || "";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-10 select-none">
      <div className="flex flex-col items-center text-center mb-16 print:hidden">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">Resume</h2>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight">Professional Qualifications</p>
        <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
      </div>

      {/* Control Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 glass-panel p-4 rounded-xl print:hidden">
        <div className="flex gap-2 bg-zinc-950 p-1.5 rounded-lg border border-zinc-800">
          <button
            onClick={() => setViewMode("visual")}
            className={`px-4 py-1.5 rounded-md text-xs font-mono font-medium transition-all cursor-pointer ${
              viewMode === "visual"
                ? "bg-brand-primary text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Visual Layout
          </button>
          <button
            onClick={() => setViewMode("ats")}
            className={`px-4 py-1.5 rounded-md text-xs font-mono font-medium transition-all cursor-pointer ${
              viewMode === "ats"
                ? "bg-brand-primary text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            ATS Plain Text
          </button>
        </div>

        <div className="flex gap-3">
          {viewMode === "ats" ? (
            <button
              onClick={handleCopyAts}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-905 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy Resume"}</span>
            </button>
          ) : (
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-905 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print layout</span>
            </button>
          )}

          <a
            href="/Pranav-Resume.pdf"
            download="Pranav-Karande-Resume.pdf"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs font-mono hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Resume Container */}
      <div className="print:block print:p-0">
        
        {/* Visual View */}
        {viewMode === "visual" && (
          <div className="glass-card p-8 sm:p-12 rounded-2xl relative overflow-hidden text-zinc-300 font-sans border-zinc-800 print:bg-white print:text-black print:border-none print:shadow-none print:rounded-none print:p-0">
            <div className="absolute top-0 right-0 w-64 h-64 glow-dot-purple opacity-10 print:hidden pointer-events-none" />
            
            {/* Header */}
            <div className="text-center border-b border-zinc-800/80 pb-6 mb-8 print:border-zinc-300">
              <h3 className="text-3xl font-bold text-white print:text-black">Pranav Karande</h3>
              <p className="text-sm font-mono text-brand-primary mt-1 print:text-zinc-700">
                AI/ML Engineer × Embedded Systems Developer × AI Product Builder
              </p>
              <div className="flex justify-center gap-4 flex-wrap mt-3 text-xs text-zinc-400 print:text-zinc-600">
                <span>pranavkarande5@gmail.com</span>
                <span>•</span>
                <span>github.com/TECHYpranav07</span>
                <span>•</span>
                <span>linkedin.com/in/pranav-karande</span>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3">
              
              {/* Left Column: Education / Skills / Awards (1 col) */}
              <div className="space-y-6 md:border-r md:border-zinc-850 md:pr-6 print:border-zinc-300 print:pr-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 print:text-black">Education</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-bold text-zinc-400 print:text-zinc-700">B.E. Electronics & Telecommunication</p>
                      <p className="text-[11px] font-mono text-zinc-500">Graduating 2026</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 print:text-black">Awards</h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-zinc-400 print:text-zinc-700">2nd Place at Technophilia'25</p>
                      <p className="text-zinc-500">ECG cardiac diagnostic network project competition.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 print:text-black">Core Proficiencies</h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-zinc-400 print:text-zinc-700">AI / Deep Learning</p>
                      <p className="text-zinc-500">PyTorch, TensorFlow, CNN, Capsule Nets, Scikit-Learn</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-400 print:text-zinc-700">AI Engineering</p>
                      <p className="text-zinc-500">LangChain, LangGraph, RAG, FAISS Vector Search, MCP</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-400 print:text-zinc-700">Embedded Systems</p>
                      <p className="text-zinc-500">STM32 Microcontrollers, Keil, Proteus, Assembly, VHDL</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-400 print:text-zinc-700">Backend / DevOps</p>
                      <p className="text-zinc-500">FastAPI, Rest APIs, Docker, AWS, Git</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Projects & Exp (2 cols) */}
              <div className="md:col-span-2 space-y-6 print:col-span-2">
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 print:text-black">Milestone Projects</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h5 className="font-bold text-sm text-zinc-200 print:text-black">Heart Disease Detection using CNN & Capsule Networks</h5>
                        <span className="text-[10px] font-mono text-zinc-500">2025</span>
                      </div>
                      <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
                        Designed dynamic-routing Capsule Network in PyTorch for classifying multi-lead ECG diagnostic timeseries. Captures spatial features of Wave complexes, achieving 98.4% diagnostic accuracy.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h5 className="font-bold text-sm text-zinc-200 print:text-black">Hybrid RAG Knowledge Assistant</h5>
                        <span className="text-[10px] font-mono text-zinc-500">2025</span>
                      </div>
                      <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
                        Engineered semantic retrieval system combining dense FAISS search and sparse BM25 indices with cross-encoder ranking. Reduced generation hallucinations by 85%.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h5 className="font-bold text-sm text-zinc-200 print:text-black">MATLAB AI Agent (Autonomous Controls)</h5>
                        <span className="text-[10px] font-mono text-zinc-500">2026</span>
                      </div>
                      <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
                        Built agent executor bridging natural language text instructions with local MATLAB sessions. Agent automatically handles script generation, session run loops, and self-corrects runtime command tracebacks.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h5 className="font-bold text-sm text-zinc-200 print:text-black">STM32 Smart TV Infrared Remote Control</h5>
                        <span className="text-[10px] font-mono text-zinc-500">2025</span>
                      </div>
                      <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
                        Firmware in register-level C modulating custom NEC signals utilizing precise timer-counters and interrupt loops. Optimized standby state sleep mode draw down to 2µA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ATS Plain Text View */}
        {viewMode === "ats" && (
          <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800">
            <div
              id="ats-resume-text"
              className="text-xs font-mono text-zinc-300 leading-relaxed whitespace-pre-wrap select-text max-h-[500px] overflow-y-auto pr-2"
            >
{`PRANAV KARANDE
Email: pranavkarande5@gmail.com
GitHub: github.com/TECHYpranav07
LinkedIn: linkedin.com/in/pranav-karande

SUMMARY
Electronics & Telecommunication Engineer specializing in AI/ML systems, Deep Learning architectures, and ARM-Cortex (STM32) firmware development. Experienced in building multi-agent LLM systems, hybrid retrieval-augmented generation (RAG) engines, and biomedical classification systems.

EDUCATION
Bachelor of Engineering (B.E.) in Electronics & Telecommunication
Expected Graduation: 2026

TECHNICAL SKILLS
- AI/ML & Deep Learning: Python, PyTorch, TensorFlow, CNNs, Capsule Networks, Scikit-Learn, XGBoost, LightGBM
- AI Engineering: LangChain, LangGraph, RAG, FAISS, Vector Databases, MCP Systems, Prompt Engineering
- Embedded Systems: STM32 Microcontrollers (ARM Cortex-M), 8051 assembly, Keil uVision, Proteus, Verilog, VHDL, C/C++
- Backend & DevOps: FastAPI, REST APIs, Docker, AWS, Git, GitHub CI/CD

PROJECTS

1. Heart Disease Detection using CNN & Capsule Networks (2025)
- Designed and trained Capsule Networks in PyTorch for classifying multi-lead ECG diagnostic timeseries.
- Captured spatial wave alignment features, achieving 98.4% diagnostic accuracy.
- Won 2nd Place at Technophilia'25.

2. MATLAB AI Agent (2026)
- Designed autonomous multi-agent planner using LangChain.
- Generated executable MATLAB calculations and plots from natural language prompts.
- Configured a reflection loop to self-correct command traceback errors.

3. Hybrid RAG Knowledge Assistant (2025)
- Engineered semantic retrieval system merging dense FAISS searches and sparse BM25 query indices.
- Configured Cohere reranker to organize context relevance, reducing hallucinations by 85%.

4. STM32 Smart TV Infrared Remote Control (2025)
- Programmed ARM Cortex-M firmware in Keil C modulating NEC communication protocol via Timer PWM.
- Programmed interrupt-based low-power sleep states drawing only 2uA standby current.`}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
