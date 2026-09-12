"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="w-full max-w-6xl scroll-mt-28">
      <div className="terminal-grid terminal-panel overflow-hidden rounded-2xl px-5 py-8 sm:px-10 sm:py-12">
        <div className="mb-8 flex items-center gap-2 border-b border-white/10 pb-4 font-mono text-xs text-white/40">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          <span className="ml-3">ansh@portfolio:~</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-sm text-blue-300">
              $ whoami
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              {OWNER_NAME}<span className="text-blue-400">_</span>
            </motion.h1>
            <p className="mt-4 text-xl font-semibold text-blue-300 sm:text-2xl">
              Python Developer <span className="text-white/30">|</span> Generative AI <span className="text-white/30">|</span> AI Agents <span className="text-white/30">|</span> Linux
            </p>
            <p className="mt-3 font-mono text-sm text-emerald-300">Linux Administrator @ Wipro</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              I build practical applications with Python, LLMs, RAG, AI agents and modern backend technologies while working with Linux and enterprise IT systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#projects" onClick={() => { setActiveSection("Projects"); setTimeOfLastClick(Date.now()); }} className="group rounded-lg border border-blue-400/50 bg-blue-400/10 px-5 py-3 font-medium text-blue-200 transition hover:bg-blue-400/20">
                View Projects <BsArrowRight className="ml-1 inline transition group-hover:translate-x-1" />
              </Link>
              <a href={EXTRA_LINKS.resume} target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/80 transition hover:border-blue-400/40 hover:text-white">
                Download Resume <HiDownload className="ml-1 inline" />
              </a>
              <Link href={EXTRA_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-white/15 p-3 text-white/70 transition hover:border-blue-400/40 hover:text-blue-300"><FaGithub /></Link>
              <Link href={EXTRA_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/15 p-3 text-white/70 transition hover:border-blue-400/40 hover:text-blue-300"><BsLinkedin /></Link>
            </div>
          </div>

          <div className="terminal-panel rounded-xl p-5 font-mono text-sm leading-7 text-emerald-300">
            <div className="mb-4 flex justify-between text-xs text-white/30"><span>terminal</span><span>bash</span></div>
            <p><span className="text-blue-300">$</span> cat skills.txt</p>
            <p className="text-white/70">Python</p>
            <p className="text-white/70">Django | Flask | FastAPI</p>
            <p className="text-white/70">LLMs | RAG | LangChain | LangGraph</p>
            <p className="text-white/70">Linux | Bash | AWS | Docker</p>
            <p className="mt-4"><span className="text-blue-300">$</span> status</p>
            <p className="text-emerald-300">OPEN_TO_WORK = true</p>
            <p className="mt-4"><span className="text-blue-300">$</span> ./build_future.sh</p>
            <p className="text-white/45">building → learning → shipping</p>
            <span className="mt-2 inline-block h-4 w-2 animate-pulse bg-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
