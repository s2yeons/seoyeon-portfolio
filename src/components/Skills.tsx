"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="기술 스택"
          description="프로젝트에서 실제로 사용하며 익혀온 기술들을 영역별로 정리했습니다."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1}>
              <div className="h-full rounded-2xl border border-blossom-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(244,143,177,0.4)]">
                <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-foreground">
                  <span className="h-2.5 w-2.5 rounded-sm bg-blossom-400" />
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item, ii) => (
                    <li key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-medium text-ink-600">
                          {item.name}
                        </span>
                        <span className="text-xs font-semibold text-blossom-500">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-blossom-50">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blossom-300 to-blossom-500"
                          initial={{ width: reduce ? `${item.level}%` : 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 1,
                            delay: gi * 0.1 + ii * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
