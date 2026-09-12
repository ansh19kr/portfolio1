"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section ref={ref} id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full max-w-5xl scroll-mt-28 mb-28 sm:mb-36">
      <SectionHeading>About me</SectionHeading>
      <div className="terminal-panel rounded-xl p-6 font-mono text-sm leading-7 text-white/65 sm:p-8">
        <p><span className="text-blue-300">ansh@portfolio:~$</span> cat about.txt</p>
        <p className="mt-4">I&apos;m a Linux Administrator at Wipro working in enterprise IT operations and support.</p>
        <p className="mt-3">My technical focus is expanding toward Python development, backend engineering and Generative AI. I&apos;m building hands-on projects around LLMs, RAG, AI agents, APIs and databases.</p>
        <p className="mt-3">I enjoy solving practical problems, learning by building, and connecting Linux/IT experience with modern AI and cloud technologies.</p>
      </div>
    </motion.section>
  );
};
export default About;
