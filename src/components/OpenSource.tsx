import { openSource } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="relative bg-blossom-50/40 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Open Source"
          title="문제를 끝까지 파고듭니다"
          description="기능 구현을 넘어, 라이브러리 내부 동작까지 분석하며 문제의 근본 원인을 찾습니다."
        />

        <Reveal>
          <article className="overflow-hidden rounded-3xl border border-blossom-100 bg-white">
            {/* header */}
            <div className="border-b border-blossom-100/80 bg-gradient-to-r from-white to-blossom-50/60 p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-foreground/[0.04] px-2.5 py-1 text-xs font-semibold text-ink-600">
                      {openSource.library}
                    </span>
                    <span className="rounded-md bg-blossom-100 px-2.5 py-1 text-xs font-semibold text-blossom-600">
                      {openSource.version}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-black text-foreground">
                    {openSource.title}
                  </h3>
                </div>
                <a
                  href={openSource.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blossom-200 px-4 py-1.5 text-xs font-semibold text-ink-600 transition-all hover:border-blossom-400 hover:bg-blossom-400 hover:text-white"
                >
                  {openSource.link.label} ↗
                </a>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
                {openSource.summary}
              </p>
            </div>

            {/* process flow */}
            <div className="p-7 sm:p-9">
              <ol className="relative space-y-6 border-l-2 border-blossom-100 pl-8">
                {openSource.steps.map((step, i) => (
                  <Reveal key={step.label} delay={i * 0.08}>
                    <li className="relative">
                      <span className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full bg-blossom-400 text-xs font-bold text-white shadow-[0_0_0_4px_rgba(253,232,239,1)]">
                        {i + 1}
                      </span>
                      <h4 className="text-base font-bold text-foreground">
                        {step.label}
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                        {step.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>

              {/* code snippet */}
              <div className="mt-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-ink-400">
                  제안한 수정 코드
                </p>
                <pre className="overflow-x-auto rounded-xl bg-foreground p-5 text-[13px] leading-relaxed text-blossom-100">
                  <code>{openSource.code}</code>
                </pre>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
