"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contacts, profile } from "@/data/portfolio";

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      <motion.div
        aria-hidden
        className="soft-blur pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blossom-100"
        animate={reduce ? {} : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blossom-500"
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl"
        >
          함께 좋은 경험을
          <br />
          만들어가요
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:ksycloud07@gmail.com"
            className="rounded-full bg-blossom-400 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blossom-500 hover:shadow-lg"
          >
            이메일 보내기
          </a>
          {contacts
            .filter((c) => c.label !== "Email" && c.href)
            .map((c) => (
              <a
                key={c.label}
                href={c.href as string}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-full border border-blossom-200 px-7 py-3.5 text-sm font-semibold text-ink-600 transition-all hover:border-blossom-300 hover:bg-blossom-50"
              >
                {c.label}
              </a>
            ))}
        </motion.div>
      </div>

      <footer className="relative mx-auto mt-24 max-w-5xl border-t border-blossom-100 pt-8 text-center">
        <p className="text-sm text-ink-400">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
      </footer>
    </section>
  );
}
