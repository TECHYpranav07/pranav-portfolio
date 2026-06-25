"use client";

import React, { useRef } from "react";
import gsap from "gsap";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  style?: React.CSSProperties;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  perspective = 1000,
  style = {},
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles
    const rX = -(mouseY / (height / 2)) * maxTilt;
    const rY = (mouseX / (width / 2)) * maxTilt;

    gsap.to(card, {
      rotateX: rX,
      rotateY: rY,
      transformPerspective: perspective,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      transformPerspective: perspective,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
