"use client";

import React from "react";

export default function SocialSidebar() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/pranav-karande",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.2-3.37-1.2-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.36-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.72.12 2.52.36 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.59 4.95.36.31.67.92.67 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/pranav-karande",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:pranavkarande@email.com",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1"
      aria-label="Social links"
    >
      <div
        style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.06))",
          marginBottom: "0.5rem",
        }}
      />

      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target={link.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.label}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "var(--radius-md)",
            color: hovered === i ? "var(--color-accent)" : "var(--color-text-muted)",
            background: hovered === i ? "rgba(16, 185, 129, 0.06)" : "transparent",
            border: hovered === i ? "1px solid rgba(16, 185, 129, 0.15)" : "1px solid transparent",
            transition: "all 0.3s ease",
            transform: hovered === i ? "scale(1.15)" : "scale(1)",
            textDecoration: "none",
          }}
        >
          {link.icon}
        </a>
      ))}

      <div
        style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.06), transparent)",
          marginTop: "0.5rem",
        }}
      />
    </div>
  );
}
