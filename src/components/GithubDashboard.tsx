"use client";

import React, { useState } from "react";
import { GitPullRequest, Star, GitFork, BookOpen, AlertCircle } from "lucide-react";

interface MockRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  langColor: string;
}

const mockRepos: MockRepo[] = [
  {
    name: "heart-disease-capsnet",
    description: "Deep Capsule Networks for spatial ECG representation and cardiac disease classification.",
    stars: 34,
    forks: 8,
    language: "Python",
    langColor: "#3572A5",
  },
  {
    name: "hybrid-rag-assistant",
    description: "Enterprise knowledge assistant utilizing LangChain, FAISS semantic search, and lexical re-ranking.",
    stars: 28,
    forks: 5,
    language: "TypeScript",
    langColor: "#3178c6",
  },
  {
    name: "matlab-ai-agent",
    description: "A reflection agent bridge translating natural language control instructions to MATLAB scripts.",
    stars: 19,
    forks: 4,
    language: "Python",
    langColor: "#3572A5",
  },
  {
    name: "stm32-ir-transceiver",
    description: "Low-power firmware for IR TV remote command protocol modulation on STM32 ARM Cortex-M.",
    stars: 12,
    forks: 2,
    language: "C",
    langColor: "#555555",
  },
];

const languageDistribution = [
  { name: "Python", percentage: 48, color: "bg-blue-500" },
  { name: "TypeScript / JS", percentage: 26, color: "bg-amber-400" },
  { name: "C / C++", percentage: 16, color: "bg-zinc-400" },
  { name: "MATLAB", percentage: 7, color: "bg-orange-500" },
  { name: "VHDL / Verilog", percentage: 3, color: "bg-red-400" },
];

export default function GithubDashboard() {
  // Generate mock contribution graph blocks (53 columns x 7 rows for a full year)
  // We will generate a smaller version that fits nicely in a card (e.g. 24 columns x 7 rows = 168 blocks)
  const columns = 26;
  const rows = 7;
  
  // Create randomized contribution levels (0 to 4)
  const [hoveredBlock, setHoveredBlock] = useState<{ day: number; count: number } | null>(null);

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return "bg-zinc-900 border border-zinc-950";
      case 1: return "bg-emerald-950 border border-zinc-950";
      case 2: return "bg-emerald-800 border border-zinc-950";
      case 3: return "bg-emerald-600 border border-zinc-950";
      case 4: return "bg-emerald-400 border border-zinc-950";
      default: return "bg-zinc-900";
    }
  };

  // Seeded pseudo-random generation to make it consistent
  const generateLevel = (col: number, row: number) => {
    const seed = (col * 3 + row * 7) % 5;
    // Create some natural gaps and clusters
    if (col > 4 && col < 8 && row > 2) return Math.min(seed + 1, 4);
    if (col > 18 && col < 22 && row < 4) return Math.min(seed + 2, 4);
    if ((col + row) % 9 === 0) return 0;
    return seed;
  };

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10 select-none">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">Activity</h2>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight">Open Source & Git Repository Activity</p>
        <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Contributions Graph and Stats (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-secondary" />
                <h3 className="text-lg font-bold font-sans">GitHub Contributions</h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">1,248 commits this year</span>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[480px] flex gap-1">
                {Array.from({ length: columns }).map((_, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-1">
                    {Array.from({ length: rows }).map((_, rowIdx) => {
                      const dayNumber = colIdx * 7 + rowIdx + 1;
                      const level = generateLevel(colIdx, rowIdx);
                      const commitCount = level === 0 ? 0 : level * 2 + (dayNumber % 3);
                      
                      return (
                        <div
                          key={rowIdx}
                          onMouseEnter={() => setHoveredBlock({ day: dayNumber, count: commitCount })}
                          onMouseLeave={() => setHoveredBlock(null)}
                          className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 cursor-crosshair hover:scale-125 hover:z-10 ${getContributionColor(level)}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Hover details tooltips info */}
            <div className="flex justify-between items-center mt-4 text-xs font-mono text-zinc-500 h-6">
              <div>
                {hoveredBlock ? (
                  <span className="text-brand-secondary animate-pulse">
                    {hoveredBlock.count} contributions on day {hoveredBlock.day}
                  </span>
                ) : (
                  <span>Hover over blocks for details</span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900 border border-zinc-950" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950 border border-zinc-950" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-800 border border-zinc-950" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600 border border-zinc-950" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400 border border-zinc-950" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Language distribution card */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 font-sans">
              <GitPullRequest className="w-5 h-5 text-brand-primary" />
              <span>Languages Distribution</span>
            </h3>

            {/* Bar distribution visualization */}
            <div className="h-3 w-full bg-zinc-950 rounded-full flex overflow-hidden mb-6 border border-zinc-800">
              {languageDistribution.map((lang) => (
                <div
                  key={lang.name}
                  className={`${lang.color} h-full`}
                  style={{ width: `${lang.percentage}%` }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Language grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-zinc-400">
              {languageDistribution.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                  <span className="font-semibold text-zinc-300">{lang.name}</span>
                  <span>{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Featured Repos List (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-lg font-bold font-sans px-2 text-zinc-300 flex items-center gap-2">
            <GitFork className="w-5 h-5 text-zinc-400" />
            <span>Popular Repositories</span>
          </h3>

          <div className="space-y-4">
            {mockRepos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/TECHYpranav07/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card p-5 rounded-xl transition-all duration-300 hover:translate-x-1.5"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white font-mono text-sm hover:text-brand-primary transition-colors">
                    {repo.name}
                  </h4>
                  <div className="flex gap-3 text-zinc-500 font-mono text-xs">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.language}</span>
                  <span>•</span>
                  <span>Updated recently</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
