import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa";
import movieImg from "@/public/movie.jpg";
import movies2Img from "@/public/movies2.jpg";
import comingImg from "@/public/coming.jpg";

export const LINKS = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/ansh-kumar-00a8a2252/",
  github: "https://github.com/ansh19kr",
  resume: "/resume.pdf",
  source_code: "https://github.com/ansh19kr",
  email: "ansh.kumar2819@gmail.com",
} as const;

export const EXPERIENCES_DATA = [
  {
    title: "Linux Administrator — Wipro",
    location: "Hyderabad, Telangana",
    description: "Working in enterprise IT operations and support with exposure to Linux administration, troubleshooting, incident handling, system configuration, networking and enterprise environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 — Present",
  },
  {
    title: "Web Design & Website Handling — Freelance",
    location: "Remote",
    description: "Created and maintained responsive websites, handled updates and basic performance improvements, and coordinated with clients on website requirements.",
    icon: React.createElement(FaWordpress),
    date: "2024 — Present",
  },
] as const;

export const PROJECTS_DATA = [
  {
    title: "AI-Powered Resume Screener",
    description: "Python application that analyzes resumes against job descriptions and helps identify relevant skills and matching areas. A strong foundation for expanding into LLM and RAG-based recruitment tooling.",
    tags: ["Python", "Django", "AI", "NLP", "MySQL"],
    imageUrl: comingImg,
    projectUrl: "https://github.com/ansh19kr/AI-Powered-Resume-Screener",
  },
  {
    title: "Movie Ticket Booking",
    description: "Online movie ticket booking application built with Python and Flask, demonstrating backend routes, database interaction and web application fundamentals.",
    tags: ["Python", "Flask", "MySQL"],
    imageUrl: movieImg,
    projectUrl: "https://github.com/ansh19kr",
  },
  {
    title: "Movie Correlation Analysis",
    description: "Exploratory data analysis project examining relationships between movie attributes and gross revenue using Python data-analysis libraries.",
    tags: ["Python", "Pandas", "NumPy", "Seaborn"],
    imageUrl: movies2Img,
    projectUrl: "https://github.com/ansh19kr/DA-project1",
  },
  {
    title: "GenAI IT Support Agent",
    description: "Planned AI-agent project combining Python, LLMs and Linux tools to diagnose common system issues such as disk, memory, process and network problems.",
    tags: ["Python", "LangGraph", "LLM", "Linux"],
    imageUrl: comingImg,
    projectUrl: "https://github.com/ansh19kr",
  },
  {
    title: "RAG Document Assistant",
    description: "Planned document Q&A application using embeddings, retrieval and an LLM to answer questions from uploaded documents with grounded responses.",
    tags: ["Python", "RAG", "LangChain", "FastAPI"],
    imageUrl: comingImg,
    projectUrl: "https://github.com/ansh19kr",
  },
  {
    title: "Linux Server Monitor",
    description: "Planned Python and Bash monitoring tool for CPU, memory, disk, processes, services and logs, with a future API layer for remote monitoring.",
    tags: ["Python", "Linux", "Bash", "AWS"],
    imageUrl: comingImg,
    projectUrl: "https://github.com/ansh19kr",
  },
] as const;

export const SKILLS_DATA = [
  "Python", "Django", "Flask", "FastAPI", "REST APIs", "SQL", "MySQL", "PostgreSQL", "LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engineering", "Embeddings", "AI Agents", "Linux", "Bash", "SSH", "Systemd", "Networking", "AWS", "Docker", "Git", "GitHub", "JavaScript", "HTML/CSS",
] as const;

export const OWNER_NAME = "Ansh Kumar";
