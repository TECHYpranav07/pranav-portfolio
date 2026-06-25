"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Database, Cloud, Search, Sparkles } from "lucide-react";

interface SkillNode {
  id: number;
  name: string;
  level: number;
  category: "AI/ML" | "Embedded" | "Backend" | "Cloud" | "Research";
  x: number; // Percent from left
  y: number; // Percent from top
  size: number; // Pixels
  icon?: string;
}

const skillNodes: SkillNode[] = [
  // AI/ML
  { id: 1, name: "Python", level: 95, category: "AI/ML", x: 20, y: 30, size: 85 },
  { id: 2, name: "PyTorch", level: 90, category: "AI/ML", x: 35, y: 15, size: 80 },
  { id: 3, name: "TensorFlow", level: 85, category: "AI/ML", x: 15, y: 55, size: 75 },
  { id: 4, name: "Scikit-Learn", level: 92, category: "AI/ML", x: 45, y: 40, size: 75 },
  { id: 5, name: "XGBoost", level: 88, category: "AI/ML", x: 50, y: 20, size: 70 },
  
  // Embedded
  { id: 6, name: "STM32", level: 90, category: "Embedded", x: 75, y: 25, size: 80 },
  { id: 7, name: "C/C++", level: 92, category: "Embedded", x: 60, y: 15, size: 78 },
  { id: 8, name: "8051", level: 85, category: "Embedded", x: 80, y: 55, size: 70 },
  { id: 9, name: "Verilog", level: 80, category: "Embedded", x: 65, y: 45, size: 72 },
  { id: 10, name: "Proteus", level: 88, category: "Embedded", x: 70, y: 65, size: 70 },
  
  // Backend
  { id: 11, name: "FastAPI", level: 88, category: "Backend", x: 30, y: 70, size: 75 },
  { id: 12, name: "REST APIs", level: 92, category: "Backend", x: 48, y: 65, size: 72 },
  { id: 13, name: "Docker", level: 85, category: "Backend", x: 18, y: 75, size: 70 },
  
  // Cloud
  { id: 14, name: "AWS", level: 78, category: "Cloud", x: 85, y: 35, size: 70 },
  { id: 15, name: "Git & GitHub", level: 92, category: "Cloud", x: 85, y: 15, size: 75 },
  
  // Research
  { id: 16, name: "Deep Learning", level: 92, category: "Research", x: 35, y: 50, size: 85 },
  { id: 17, name: "SMOTE", level: 88, category: "Research", x: 55, y: 50, size: 70 },
  { id: 18, name: "CNN Models", level: 90, category: "Research", x: 30, y: 32, size: 75 },
];

export default function SkillsGalaxy() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "All", icon: <Sparkles className="w-4 h-4" /> },
    { name: "AI/ML", icon: <Brain className="w-4 h-4 text-brand-primary" /> },
    { name: "Embedded", icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
    { name: "Backend", icon: <Database className="w-4 h-4 text-cyan-400" /> },
    { name: "Cloud", icon: <Cloud className="w-4 h-4 text-amber-400" /> },
    { name: "Research", icon: <Search className="w-4 h-4 text-purple-400" /> },
  ];

  const filteredNodes = selectedCategory === "All"
    ? skillNodes
    : skillNodes.filter(node => node.category === selectedCategory);

  const getGlowColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "rgba(139, 92, 246, 0.4)"; // Purple
      case "Embedded": return "rgba(16, 185, 129, 0.4)"; // Emerald
      case "Backend": return "rgba(6, 182, 212, 0.4)"; // Cyan
      case "Cloud": return "rgba(245, 158, 11, 0.4)"; // Amber
      case "Research": return "rgba(168, 85, 247, 0.4)"; // Bright Purple
      default: return "rgba(255, 255, 255, 0.2)";
    }
  };

  const getBorderColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "border-brand-primary/45";
      case "Embedded": return "border-emerald-500/45";
      case "Backend": return "border-cyan-500/45";
      case "Cloud": return "border-amber-500/45";
      case "Research": return "border-purple-500/45";
      default: return "border-zinc-700";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col justify-between h-full select-none">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-8 flex-shrink-0">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-2">Skills Galaxy</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient-brand">Interactive Capabilities Playground</p>
        <p className="text-xs text-zinc-500 mt-1 font-mono">Drag the floating nodes to interact with them</p>
      </div>

      {/* Categories Filter Header */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 flex-shrink-0">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === cat.name
                ? "bg-brand-primary/10 text-brand-primary border border-brand-primary/40 shadow-[0_0_12px_rgba(139,92,246,0.15)]"
                : "bg-zinc-950/40 text-zinc-400 border border-zinc-900 hover:text-white"
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Interactive Galaxy Boundary */}
      <div 
        ref={constraintsRef} 
        className="flex-1 w-full bg-zinc-950/40 border border-zinc-900/60 rounded-3xl relative overflow-hidden h-[45vh] sm:h-[50vh] min-h-[320px]"
      >
        {/* Glow dots inside galaxy */}
        <div className="absolute top-[20%] left-[30%] w-64 h-64 glow-dot-purple opacity-10 pointer-events-none" />
        <div className="absolute bottom-[20%] right-[30%] w-64 h-64 glow-dot-cyan opacity-10 pointer-events-none" />

        {/* Nodes Playground */}
        <AnimatePresence>
          {filteredNodes.map((node) => (
            <motion.div
              key={node.id}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.15}
              dragMomentum={true}
              whileDrag={{ scale: 1.1, cursor: "grabbing" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                // Floating subtle animation loop
                y: [0, Math.sin(node.id) * 10, 0],
                x: [0, Math.cos(node.id) * 8, 0],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                y: {
                  duration: 4 + (node.id % 3),
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                x: {
                  duration: 5 + (node.id % 2),
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: { type: "spring", stiffness: 80, damping: 10 }
              }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`skills-node absolute cursor-grab flex items-center justify-center rounded-full glass-card p-2 text-center text-xs font-mono font-bold select-none z-10 ${getBorderColor(node.category)}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${node.size}px`,
                height: `${node.size}px`,
                boxShadow: `0 0 15px -5px ${getGlowColor(node.category)}`,
                backgroundColor: "rgba(10, 10, 15, 0.8)",
              }}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-[10px] sm:text-xs text-white truncate max-w-[95%]">{node.name}</span>
                <span className="text-[8px] text-zinc-500 font-normal">{node.level}%</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Details floating hover indicator panel */}
        <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] text-zinc-500 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800 pointer-events-none">
          {hoveredNode ? (
            <div className="space-y-0.5">
              <p className="text-white font-bold">{hoveredNode.name}</p>
              <p>Domain: <span className="text-brand-secondary">{hoveredNode.category}</span></p>
              <p>Proficiency: <span className="text-brand-primary">{hoveredNode.level}%</span></p>
            </div>
          ) : (
            <span>Hover over nodes for details</span>
          )}
        </div>
      </div>
    </section>
  );
}
