import { About, Contact, Experience, Intro, Projects, SectionDivider, Skills } from "@/components";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-8 sm:px-6">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
