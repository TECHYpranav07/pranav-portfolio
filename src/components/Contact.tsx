"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      
      // Fire confetti celebrate
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#10b981", "#34d399", "#6ee7b7"]
      });

      // Clear success notification
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-10">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">Connect</h2>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight">Get In Touch</p>
        <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 glow-dot-purple opacity-20 pointer-events-none" />
            <h3 className="text-xl font-bold mb-4 font-sans text-white">Let's build something awesome</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-8">
              Available for AI/ML engineering, embedded prototype design, and software product collaborations. My inbox is always open.
            </p>

            {/* Direct Channels */}
            <div className="space-y-4 font-mono text-sm">
              <a
                href="mailto:pranavkarande5@gmail.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-white p-3 rounded-lg bg-zinc-950/40 border border-zinc-900 hover:border-brand-primary/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>pranavkarande5@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pranav-karande/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-white p-3 rounded-lg bg-zinc-950/40 border border-zinc-900 hover:border-brand-secondary/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-brand-secondary" />
                <span>linkedin.com/in/pranav-karande</span>
              </a>

              <a
                href="https://github.com/TECHYpranav07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-white p-3 rounded-lg bg-zinc-950/40 border border-zinc-900 hover:border-zinc-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>github.com/TECHYpranav07</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="form-name" className="text-xs font-mono text-zinc-500 block">Name *</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="form-email" className="text-xs font-mono text-zinc-500 block">Email *</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="form-subject" className="text-xs font-mono text-zinc-500 block">Subject</label>
              <input
                id="form-subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Collaboration Proposal"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-brand-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="form-message" className="text-xs font-mono text-zinc-500 block">Message *</label>
              <textarea
                id="form-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe your project, ideas or timeline details..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-brand-primary transition-colors resize-none"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <div>
                {success && (
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs animate-bounce">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message sent successfully!</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-black font-semibold text-xs font-mono hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
