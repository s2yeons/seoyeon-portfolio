import { sideProjects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function SideProjects() {
  return (
    <section id="side" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Side Project"
          title="문제를 끝까지 파고듭니다"
          description="기능 구현을 넘어, 라이브러리 내부 동작까지 분석하며 문제의 근본 원인을 찾습니다."
        />

        <div className="space-y-8">
          {sideProjects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 0.05}>
              <article className="rounded-3xl border border-blossom-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(244,143,177,0.45)] sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-black text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-400">
                      {project.summary}
                    </p>
                  </div>
                  <span className="rounded-full bg-blossom-50 px-3 py-1 text-xs font-semibold text-blossom-600">
                    {project.period}
                  </span>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
                  {project.description}
                </p>

                <div className="mt-6 rounded-2xl border border-blossom-100 bg-blossom-50/50 p-6">
                  <h4 className="text-base font-bold text-foreground">
                    {project.highlight.title}
                  </h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    {project.highlight.body}
                  </p>
                  {project.highlight.link && (
                    <a
                      href={project.highlight.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blossom-600 transition-colors hover:text-blossom-500"
                    >
                      {project.highlight.link.label}
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
