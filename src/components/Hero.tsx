"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* soft floating blobs */}
      <motion.div
        aria-hidden
        className="soft-blur pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blossom-200/70"
        animate={reduce ? {} : { y: [0, -24, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="soft-blur pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blossom-100"
        animate={reduce ? {} : { y: [0, 26, 0], x: [0, -16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-5xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-blossom-200 bg-blossom-50 px-4 py-1.5 text-sm font-medium text-blossom-600"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-blossom-400" />
          Frontend Developer · {profile.period}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl"
        >
          안녕하세요,
          <br />
          프론트엔드 개발자{" "}
          <span className="bg-gradient-to-r from-blossom-400 to-blossom-600 bg-clip-text text-transparent">
            {profile.name}
          </span>
          입니다.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl whitespace-pre-line text-lg leading-relaxed text-ink-500"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-blossom-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blossom-500 hover:shadow-lg"
          >
            프로젝트 보기
          </a>
          <a
            href="#about"
            className="rounded-full border border-blossom-200 px-6 py-3 text-sm font-semibold text-ink-600 transition-all hover:border-blossom-300 hover:bg-blossom-50"
          >
            더 알아보기
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-blossom-300 p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-blossom-400"
            animate={reduce ? {} : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
