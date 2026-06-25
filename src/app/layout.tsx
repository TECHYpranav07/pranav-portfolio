import type { Metadata, Viewport } from "next";
import { Inter, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pranav Karande | AI/ML Engineer × Embedded Systems Developer",
  description: "Electronics & Telecommunication Engineer passionate about Deep Learning, STM32 Microcontrollers, AI Agents, Hybrid RAG, and Product Development.",
  keywords: [
    "Pranav Karande",
    "AI/ML Engineer",
    "Embedded Systems Developer",
    "STM32",
    "Deep Learning",
    "AI Agents",
    "MATLAB Automation",
    "RAG Knowledge Assistant",
    "Product Builder",
  ],
  authors: [{ name: "Pranav Karande" }],
  creator: "Pranav Karande",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranavkarande.dev",
    title: "Pranav Karande | AI/ML Engineer × Embedded Systems Developer",
    description: "Building next-generation AI systems, intelligent automation pipelines, and robust embedded hardware solutions.",
    siteName: "Pranav Karande Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pranav Karande Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Karande | AI/ML Engineer × Embedded Systems Developer",
    description: "Building next-generation AI systems, intelligent automation pipelines, and robust embedded hardware solutions.",
    creator: "@pranav_karande",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
