import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa";
import movieImg from "@/public/movie.jpg";
import movies2Img from "@/public/movies2.jpg";

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
    title: "GenAI IT Support Agent",
    description: "AI agent concept for diagnosing common IT and Linux issues by combining Python, LLM reasoning and system tools for disk, memory, process and network troubleshooting.",
    tags: ["Python", "LangGraph", "LLM", "Linux"],
    imageUrl: "/genai-support-agent.svg",
    projectUrl: "https://github.com/ansh19kr/genai-it-support-agent",
  },
  {
    title: "RAG Document Assistant",
    description: "Retrieval-augmented document Q&A application concept using embeddings, vector search and an LLM to provide grounded answers from uploaded documents.",
    tags: ["Python", "RAG", "LangChain", "FastAPI"],
    imageUrl: "/rag-document-assistant.svg",
    projectUrl: "https://github.com/ansh19kr/rag-document-assistant",
  },
  {
    title: "Linux Server Monitor",
    description: "Python and Bash monitoring tool concept for CPU, memory, disk, processes, services and logs, with AWS and API integration for production-style monitoring.",
    tags: ["Python", "Linux", "Bash", "AWS"],
    imageUrl: "/linux-server-monitor.svg",
    projectUrl: "https://github.com/ansh19kr/linux-server-monitor",
  },
  {
    title: "AI-Powered Resume Screener",
    description: "Python application that analyzes resumes against job descriptions and identifies relevant skills and matching areas, providing a foundation for LLM and RAG-based recruitment tooling.",
    tags: ["Python", "Django", "AI", "NLP", "MySQL"],
    imageUrl: "/coming.jpg",
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
] as const;

export const SKILLS_DATA = [
  "Python", "Django", "Flask", "FastAPI", "REST APIs", "SQL", "MySQL", "PostgreSQL", "LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engineering", "Embeddings", "AI Agents", "Linux", "Bash", "SSH", "Systemd", "Networking", "AWS", "Docker", "Git", "GitHub", "JavaScript", "HTML/CSS",
] as const;

export const OWNER_NAME = "Ansh Kumar";
