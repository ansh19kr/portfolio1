import Link from "next/link";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

const Footer = () => (
  <footer className="mx-auto mb-8 flex w-full max-w-5xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-8 text-xs text-white/35 sm:flex-row">
    <p>© {new Date().getFullYear()} {OWNER_NAME}. Built with Python-minded curiosity & Next.js.</p>
    <Link href={EXTRA_LINKS.github} target="_blank" rel="noreferrer" className="font-mono text-blue-300/70 hover:text-blue-300">github.com/ansh19kr</Link>
  </footer>
);
export default Footer;
