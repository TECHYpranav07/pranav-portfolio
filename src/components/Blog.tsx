"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, X } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "ECG Waveform Classification with Capsule Networks",
    excerpt: "Why traditional CNNs fail on cardiac waveform orientation and how dynamic routing by agreement solves it.",
    date: "June 2025",
    readTime: "6 min read",
    category: "Deep Learning",
    content: `When dealing with biomedical timeseries signals like electrocardiograms (ECGs), structural feature positions are everything. The relationship between the P wave, the QRS complex, and the T wave tells a cardiologist exactly how electrical impulses flow through cardiac tissue.

In traditional convolutional neural networks (CNNs), the pooling layer is used to achieve translation invariance. However, this comes at a steep cost: the network loses spatial relative orientation (where the P wave is in relation to the R peak).

Enter Capsule Networks (CapsNets). By representing features as multi-dimensional vectors (capsules) rather than scalar activation values, CapsNets encode both the presence of a feature and its instantiation parameters (like angle, size, and spatial relationships). Our dynamic routing algorithm routes lower-level signal feature activations to higher-level capsules based on agreement.

We achieved 98.4% diagnostic accuracy on the MIT-BIH dataset with 30% fewer parameters than a comparable ResNet, showcasing that structural understanding outperforms raw parameter scaling in constrained biomedical domains.`
  },
  {
    id: 2,
    title: "Constructing a Self-Correcting MATLAB LLM Agent",
    excerpt: "Building an autonomous execution loop with LangChain that captures MATLAB CLI engine exceptions and self-heals syntax errors.",
    date: "Jan 2026",
    readTime: "8 min read",
    category: "AI Agents",
    content: `Connecting Large Language Models to executable coding environments (like MATLAB) is powerful but fragile. A single incorrect index (like using 0-based indexing in MATLAB instead of its native 1-based indexing) will crash the runtime execution script.

To solve this, we built a self-correcting reflection loop:

1. System Prompting: Pre-load the agent context with strict rules regarding MATLAB syntax, toolbox functions, and plotting constraints.
2. Code Execution: Pipe the generated script into a background MATLAB Engine API session.
3. Exception Handling: Wrap execution in try-except blocks. If MATLAB throws an exception, capture the exact standard error string.
4. Feedback Loop: Send the traceback and the original failing code back to the agent with instructions to rewrite only the erroneous lines.

Using this agentic loop, the agent successfully self-healed 92% of syntax and indexing errors within a 3-iteration maximum limit. This lets users execute complex control commands like 'plot the step response of a Butterworth filter' without knowing a single line of MATLAB syntax.`
  },
  {
    id: 3,
    title: "Lexical vs Semantic: Enhancing RAG Accuracy",
    excerpt: "Why vector databases struggle with numbers and decimals in engineering files, and how to fix it using hybrid search.",
    date: "Sept 2025",
    readTime: "5 min read",
    category: "AI Engineering",
    content: `Vector databases are excellent at conceptual searches (e.g., matching 'low-power' with 'standby current'). However, they are notoriously bad at lexical matching and numerical specifications. If a user asks for 'part number STM32F401', semantic search might return docs for 'STM32F407' because their vector embeddings are located close together in multi-dimensional space.

In engineering projects, this is unacceptable. To solve this, we implemented a Hybrid Search architecture:

- Dense Retrieval: Generates embeddings using a HuggingFace model and queries FAISS for concept-based context.
- Sparse Retrieval: Indexes documents using BM25, ensuring direct matches on unique codes, keywords, and decimal numbers.
- Reciprocal Rank Fusion (RRF): Combines the scores of both retrieval methods.
- Cross-Encoder Reranking: Feeds the top 10 combined results through a reranker to score them based on direct question-to-context relevancy.

This hybrid approach reduced document context hallucinations by 85% and guaranteed that numerical component specifications were retrieved with perfect precision.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10 select-none">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-3">Writing</h2>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight">Technical Blogs & Insights</p>
        <div className="w-12 h-1 bg-brand-primary rounded-full mt-4" />
      </div>

      {/* Blog list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="glass-card p-6 rounded-2xl flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500 mb-4">
                <span>{post.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-primary transition-colors font-sans">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-zinc-805/60 text-xs font-mono">
              <span className="text-zinc-500">{post.date}</span>
              <button className="flex items-center gap-1 text-brand-secondary group-hover:translate-x-1.5 transition-transform cursor-pointer">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 overflow-hidden z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 border-b border-zinc-800 pb-4">
                <div className="flex gap-4 text-xs font-mono text-zinc-500 mb-2">
                  <span>{selectedPost.category}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold font-sans text-white">{selectedPost.title}</h3>
              </div>

              <div className="text-sm text-zinc-300 leading-relaxed font-sans whitespace-pre-wrap space-y-4">
                {selectedPost.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
