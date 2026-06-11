"use client";

import { motion, useReducedMotion } from "framer-motion";
import { timeline, type TimelineItem } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const DOMAIN_START = 2022;
const DOMAIN_END = 2026.75;
const SPAN = DOMAIN_END - DOMAIN_START;
const YEARS = [2022, 2023, 2024, 2025, 2026];

const kindStyle: Record<
  TimelineItem["kind"],
  { bar: string; dot: string; label: string }
> = {
  project: {
    bar: "from-blossom-400 to-blossom-600",
    dot: "bg-blossom-500",
    label: "Project",
  },
  side: {
    bar: "from-blossom-300 to-blossom-400",
    dot: "bg-blossom-400",
    label: "Side Project",
  },
  activity: {
    bar: "from-ink-400 to-ink-500",
    dot: "bg-ink-400",
    label: "Activity",
  },
};

function pct(year: number) {
  return ((year - DOMAIN_START) / SPAN) * 100;
}

export default function Timeline() {
  const reduce = useReducedMotion();

  return (
    <section
      id="timeline"
      className="relative bg-blossom-50/40 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Timeline"
          title="활동 타임라인"
          description="2022년부터 이어온 프로젝트와 활동을 연도축에 정리했습니다."
        />

        {/* legend */}
        <Reveal className="mb-6 flex flex-wrap gap-4">
          {Object.values(kindStyle).map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 text-xs font-medium text-ink-500"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
              {s.label}
            </span>
          ))}
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-blossom-100 bg-white p-6 sm:p-8">
            {/* year axis */}
            <div className="relative mb-4 ml-0 h-5 sm:ml-40">
              {YEARS.map((y) => (
                <span
                  key={y}
                  className="absolute -translate-x-1/2 text-xs font-semibold text-ink-400"
                  style={{ left: `${pct(y)}%` }}
                >
                  {y}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              {timeline.map((item, idx) => {
                const left = pct(item.start);
                const width = pct(item.end) - left;
                const style = kindStyle[item.kind];
                return (
                  <div
                    key={item.name}
                    className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-0"
                  >
                    <div className="shrink-0 sm:w-40 sm:pr-4">
                      <p className="text-sm font-bold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-ink-400 sm:hidden">
                        {item.note}
                      </p>
                    </div>

                    {/* track */}
                    <div className="relative h-9 flex-1 rounded-lg bg-blossom-50/70">
                      {/* gridlines */}
                      {YEARS.map((y) => (
                        <span
                          key={y}
                          aria-hidden
                          className="absolute top-0 h-full w-px bg-white"
                          style={{ left: `${pct(y)}%` }}
                        />
                      ))}
                      <motion.div
                        className={`absolute top-1/2 flex h-7 -translate-y-1/2 items-center rounded-md bg-gradient-to-r px-2.5 ${style.bar}`}
                        style={{ left: `${left}%` }}
                        initial={{ width: reduce ? `${width}%` : 0, opacity: 0 }}
                        whileInView={{ width: `${width}%`, opacity: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.9,
                          delay: idx * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <span className="hidden truncate text-[11px] font-semibold text-white sm:inline">
                          {item.note}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
