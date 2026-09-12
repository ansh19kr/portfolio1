"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { EXPERIENCES_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <section ref={ref} id="experience" className="w-full max-w-5xl scroll-mt-28 mb-28 sm:mb-36">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-4">
        {EXPERIENCES_DATA.map((experience, i) => (
          <motion.article key={i} initial={{ opacity: 0, x: i % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="terminal-panel group rounded-xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_14px_40px_rgba(37,99,235,0.14)]">
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div><p className="font-mono text-xs text-blue-300">{experience.date}</p><h3 className="mt-1 text-xl font-semibold text-white">{experience.title}</h3><p className="text-sm text-white/40">{experience.location}</p></div>
              <div className="max-w-2xl text-sm leading-6 text-white/60">{experience.description}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
export default Experience;
