import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhana Studio | Premium Digital Experiences",
  description:
    "We craft cinematic, premium websites, landing pages, and web experiences that help businesses build trust, generate leads, and grow online.",
  keywords: [
    "Dhana Studio",
    "Dhana Sunthar",
    "Premium Web Design",
    "Next.js Developer",
    "Cinematic Websites",
    "Landing Pages",
    "SEO Optimization",
    "High-Performance Websites",
  ],
  authors: [{ name: "Dhana Sunthar", url: "https://dhanastudio.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-primary text-text-main font-sans selection:bg-accent selection:text-primary">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
