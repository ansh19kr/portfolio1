import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Header, Footer } from "@/components";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${OWNER_NAME} | Python • GenAI • Linux`,
  description: `${OWNER_NAME} — Linux Administrator at Wipro focused on Python development, Generative AI, AI Agents and backend engineering.`,
  authors: { name: OWNER_NAME, url: EXTRA_LINKS.github },
  keywords: ["Python Developer", "Generative AI", "AI Agents", "LLM", "RAG", "LangChain", "LangGraph", "Django", "Flask", "FastAPI", "Linux Administrator", "AWS", "Docker", "Wipro", "Backend Developer"],
  themeColor: "#050b14",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden bg-[#050b14] pt-24 text-white/90 sm:pt-28`}>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.08),transparent_30rem)]" />
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" toastOptions={{ className: "!border !border-blue-400/20 !bg-[#081516] !text-white" }} />
        </ActiveSectionContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
