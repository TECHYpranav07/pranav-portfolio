"use client";

import React, { useEffect, useState } from "react";

export default function SpotlightGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow dot overlay */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] glow-dot-purple rounded-full opacity-60 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] glow-dot-cyan rounded-full opacity-40 animate-pulse-slow" style={{ animationDelay: "-6s" }} />

      {/* Grid Pattern with radial mask */}
      <div className="grid-bg radial-fade absolute inset-0 opacity-45" />

      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-in-out pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), rgba(6, 182, 212, 0.03) 30%, transparent 60%)`,
        }}
      />
    </div>
  );
}
