"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface QAEntry {
  keywords: string[];
  response: string;
}

const knowledgeBase: QAEntry[] = [
  {
    keywords: ["help", "what can you do", "features"],
    response: "I can tell you all about Pranav's engineering background! Ask me about his projects, skills, education, experience, or achievements (like Technophilia'25)."
  },
  {
    keywords: ["skills", "languages", "tech stack", "technologies", "what does he know"],
    response: "Pranav's core proficiencies include:\n\n• AI/ML: PyTorch, TensorFlow, CNNs, Capsule Networks, Scikit-Learn\n• AI Engineering: LangChain, LangGraph, Hybrid RAG, Vector Search (FAISS)\n• Embedded: STM32 Firmware (C/C++), 8051 assembly, Verilog, VHDL, Proteus\n• Backend & DevOps: FastAPI, REST APIs, Docker, AWS, Git"
  },
  {
    keywords: ["project", "work", "portfolio"],
    response: "Pranav has built several milestone projects. You can ask me details about:\n\n1. VibeLyrics (AI playlist generator)\n2. ECG Cardiac Classification (Capsule Net - 2nd place award)\n3. Hybrid RAG Knowledge Assistant\n4. MATLAB AI Agent (natural language control)\n5. STM32 TV Remote Controller"
  },
  {
    keywords: ["vibelyrics", "lyrics", "music"],
    response: "VibeLyrics is an AI-powered playlist discovery platform. It uses a BERT model to analyze user mood text prompts, maps them to Spotify audio features (valence, tempo), and creates playlists with real-time synchronized lyrics."
  },
  {
    keywords: ["ecg", "heart", "cardiac", "arrhythmia", "technophilia", "capsule", "capsnet"],
    response: "This project uses Capsule Networks in PyTorch to classify ECG timeseries waves with 98.4% accuracy. Unlike traditional CNNs, Capsule Networks retain relative spatial orientations of waves, winning 2nd Place at Technophilia'25."
  },
  {
    keywords: ["rag", "hybrid rag", "faiss", "vector"],
    response: "The Hybrid RAG Knowledge Assistant merges dense vector search (FAISS) with sparse lexical keywords (BM25) to index engineering PDFs. Integrated with cross-encoder rerankers, it achieves an 85% reduction in context hallucinations."
  },
  {
    keywords: ["matlab", "agent", "control system"],
    response: "The MATLAB AI Agent is built with LangChain. It translates natural language instructions into MATLAB scripts, executes them in a local session via background engine bridges, and features a reflection loop that self-heals syntax errors."
  },
  {
    keywords: ["stm32", "remote", "infrared", "nec"],
    response: "The STM32 Smart TV Remote is a low-power firmware application written in register-level C. It modulates IR signals using the NEC protocol via timer PWM and direct DMA channels, achieving a standby sleep current draw of only 2uA."
  },
  {
    keywords: ["education", "college", "degree", "university", "engineer"],
    response: "Pranav is an Electronics & Telecommunication Engineer. He is graduating in 2026. His curriculum integrates hardware microcontrollers with machine learning algorithms."
  },
  {
    keywords: ["experience", "timeline", "jobs"],
    response: "His roadmap includes:\n\n• 2024: Machine Learning Projects (Biomedical & Vision models)\n• 2025: AI Product Development & Web Integrations\n• 2025: RAG & Semantic Database Systems\n• 2026: Multi-Agent Architectures & MATLAB Automation"
  },
  {
    keywords: ["hire", "availability", "contact", "email", "job", "recruiter"],
    response: "Yes! Pranav is seeking roles as an AI/ML Engineer, Embedded Systems Developer, or AI Product Builder. You can email him at pranavkarande5@gmail.com or link up on LinkedIn (linkedin.com/in/pranav-karande)."
  },
  {
    keywords: ["award", "achievement", "competition", "milestone"],
    response: "Pranav's key accomplishments:\n\n• 2nd Place at Technophilia'25 for his ECG Capsule Network diagnostic system.\n• Deployed open-source AI agent scripts for MATLAB integrations.\n• Achieved 98.4% accuracy on MIT-BIH Arrhythmia classifications."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! I'm Pranav's Portfolio Assistant. How can I help you explore his work today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const findAnswer = (question: string): string => {
    const cleanQ = question.toLowerCase();
    
    // Look for keyword matches
    for (const entry of knowledgeBase) {
      for (const kw of entry.keywords) {
        if (cleanQ.includes(kw)) {
          return entry.response;
        }
      }
    }

    return "I'm not fully sure about that detail, but Pranav is highly skilled in PyTorch, STM32, and LangChain agents! You can reach out directly to him at pranavkarande5@gmail.com for direct queries.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      const answer = findAnswer(userText);
      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    }, 600);
  };

  const handleQuickReply = (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: text }]);
    setTimeout(() => {
      const answer = findAnswer(text);
      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans print:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="w-[360px] sm:w-[400px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-zinc-950 p-4 border-b border-zinc-850 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <span>Portfolio Assistant</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono">Preloaded context engine</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.sender === "user" ? "bg-brand-secondary/20 text-brand-secondary" : "bg-brand-primary/20 text-brand-primary"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`p-3 rounded-xl text-xs leading-relaxed whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-brand-primary text-white rounded-tr-none"
                        : "bg-zinc-950 text-zinc-300 border border-zinc-850 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 py-2 flex flex-wrap gap-1.5 bg-zinc-950/20 border-t border-zinc-850">
              <button
                onClick={() => handleQuickReply("Show me your core skills")}
                className="text-[10px] font-mono text-zinc-400 hover:text-white bg-zinc-850 px-2 py-1 rounded cursor-pointer border border-zinc-800"
              >
                🛠️ Core Skills
              </button>
              <button
                onClick={() => handleQuickReply("Tell me about heart disease detection")}
                className="text-[10px] font-mono text-zinc-400 hover:text-white bg-zinc-850 px-2 py-1 rounded cursor-pointer border border-zinc-800"
              >
                ❤️ ECG CapsNet
              </button>
              <button
                onClick={() => handleQuickReply("How can I hire Pranav?")}
                className="text-[10px] font-mono text-zinc-400 hover:text-white bg-zinc-850 px-2 py-1 rounded cursor-pointer border border-zinc-800"
              >
                💼 Availability
              </button>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-zinc-950 border-t border-zinc-850 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, contact..."
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-brand-primary"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white hover:bg-zinc-200 text-black shadow-2xl flex items-center justify-center relative group cursor-pointer transition-transform hover:scale-105"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-0 top-0 w-3 h-3 bg-brand-primary rounded-full border-2 border-zinc-950" />
      </button>
    </div>
  );
}
