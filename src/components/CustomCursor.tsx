"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Only show on desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      cursor.style.display = "none";
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, .card-base, .btn-pill, .glass-card").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("expanded"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("expanded"));
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    const timer = setTimeout(addHoverListeners, 1000);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
}
