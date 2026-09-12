"use client";
import { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { PROJECTS_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: ImageProps["src"];
  projectUrl: string;
};

const Project = ({ title, description, tags, imageUrl, projectUrl }: ProjectProps) => {
  const projectRef = useRef<HTMLElement>(null);
  return (
    <motion.article ref={projectRef} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="group terminal-panel overflow-hidden rounded-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-[0_12px_40px_rgba(37,99,235,0.18)]">
      <Link href={projectUrl} target="_blank" rel="noreferrer" className="block">
        <div className="relative h-44 overflow-hidden border-b border-white/10">
          <Image src={imageUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a33] via-transparent to-transparent" />
        </div>
        <div className="p-5">
          <div className="mb-2 font-mono text-xs text-blue-300">./project</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/55">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => <span key={`${title}-${i}`} className="rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 font-mono text-[10px] text-white/55">{tag}</span>)}
          </div>
          <p className="mt-5 font-mono text-xs text-blue-300 transition-colors group-hover:text-blue-200">View project →</p>
        </div>
      </Link>
    </motion.article>
  );
};

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="w-full max-w-5xl scroll-mt-28 mb-28 sm:mb-36">
      <SectionHeading>Featured projects</SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS_DATA.map((project, i) => <Project key={`project-${i}`} {...project} />)}
      </div>
    </section>
  );
};
export default Projects;
