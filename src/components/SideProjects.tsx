import { sideProjects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function SideProjects() {
  return (
    <section id="side" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Side Project"
          title="자율적으로 만든 프로젝트"
          description="필요한 도구를 직접 기획하고 만들며 자율적인 협업 문화를 실험했습니다."
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

                {project.stack && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-foreground/[0.04] px-2.5 py-1 text-xs font-semibold text-ink-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
