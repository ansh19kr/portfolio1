"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { LINKS } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className="relative z-[999]">
      <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed left-1/2 top-4 h-12 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-full border border-blue-400/15 bg-[#061a33]/85 shadow-2xl shadow-black/40 backdrop-blur-xl" />
      <nav className="fixed left-1/2 top-4 z-10 h-12 -translate-x-1/2">
        <ul className="flex h-full items-center gap-1 px-2 font-mono text-[11px] text-white/45 sm:gap-2 sm:text-xs">
          {LINKS.map((link) => <motion.li key={link.hash} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link href={link.hash} onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); }} className={clsx("relative block rounded-full px-3 py-2 transition hover:text-blue-300 sm:px-3.5", activeSection === link.name && "text-blue-300")}>{link.name}<span className={clsx("absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-400 transition-all", activeSection === link.name && "w-4")} /></Link>
          </motion.li>)}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
