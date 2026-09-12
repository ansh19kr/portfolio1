"use client";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "@/constants";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const groups = [
  ["Programming", ["Python", "SQL", "JavaScript", "Bash"]],
  ["Backend", ["Django", "Flask", "FastAPI", "REST APIs"]],
  ["GenAI / LLM", ["LLM APIs", "Prompt Engineering", "RAG", "Embeddings", "LangChain", "LangGraph"]],
  ["Databases", ["MySQL", "PostgreSQL", "Vector Databases"]],
  ["Cloud / DevOps", ["AWS", "Docker", "Git", "GitHub"]],
  ["Linux", ["Linux CLI", "Bash Scripting", "SSH", "Systemd", "Networking", "Logs"]],
];

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section ref={ref} id="skills" className="w-full max-w-5xl scroll-mt-28 mb-28 sm:mb-36">
      <SectionHeading>My skills</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([name, skills], i) => (
          <motion.div key={name as string} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="terminal-panel group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_12px_36px_rgba(37,99,235,0.12)]">
            <h3 className="mb-4 font-mono text-sm font-semibold text-blue-300">{name}</h3>
            <div className="flex flex-wrap gap-2">
              {(skills as string[]).map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1.5 font-mono text-xs text-white/65 hover:border-blue-400/30 hover:text-blue-200 transition">{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 text-center font-mono text-xs text-white/35">{SKILLS_DATA.length} technologies • focused on Python, GenAI, backend & Linux</div>
    </section>
  );
};
export default Skills;
