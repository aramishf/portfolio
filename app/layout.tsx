import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// ============================================
// GOOGLE FONTS CONFIGURATION
// ============================================
// Inter: Modern, readable font for body text
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap", // Prevents invisible text while loading
});

// Outfit: Bold, geometric font for headings
const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Aramish Farooq | AI/ML Engineer & Computer Engineering Student",
  description: "Computer Engineering student at SJSU specializing in AI/ML and hardware architecture. U.S. Department of Energy Research Intern with expertise in deep learning, full-stack development, and digital systems.",
  keywords: [
    "Aramish Farooq",
    "AI Engineer",
    "ML Engineer",
    "Computer Engineering",
    "SJSU",
    "Machine Learning",
    "Deep Learning",
    "Full Stack Developer",
    "RAG",
    "LSTM",
    "XGBoost",
  ],
  authors: [{ name: "Aramish Farooq" }],
  creator: "Aramish Farooq",
  
  // Open Graph (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aramishfarooq.com",
    title: "Aramish Farooq | AI/ML Engineer",
    description: "Computer Engineering student specializing in AI/ML and hardware architecture",
    siteName: "Aramish Farooq Portfolio",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Aramish Farooq | AI/ML Engineer",
    description: "Computer Engineering student specializing in AI/ML and hardware architecture",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
