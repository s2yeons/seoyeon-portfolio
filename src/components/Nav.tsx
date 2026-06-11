"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "timeline", label: "Timeline" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          김서연<span className="text-blossom-400">.</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-ink-500 sm:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="relative transition-colors hover:text-blossom-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-blossom-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blossom-500 hover:shadow-md"
        >
          연락하기
        </a>
      </nav>
      <motion.div
        className="h-0.5 origin-left bg-gradient-to-r from-blossom-300 via-blossom-400 to-blossom-500"
        style={{ scaleX: progress }}
      />
    </motion.header>
  );
}
