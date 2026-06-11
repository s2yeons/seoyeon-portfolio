import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-blossom-50/40 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="실제 사용자를 만난 프로젝트"
          description="더모먼트 팀에서 협업하며 운영하고 개선한 입학 지원 관련 서비스들입니다."
        />

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 0.05}>
              <article className="overflow-hidden rounded-3xl border border-blossom-100 bg-white transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(244,143,177,0.45)]">
                <div className="border-b border-blossom-100/80 bg-gradient-to-r from-white to-blossom-50/60 p-7 sm:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-blossom-500">
                        {project.period}
                      </span>
                      <h3 className="mt-1 text-2xl font-black text-foreground">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-ink-400">
                        {project.summary}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-blossom-200 px-4 py-1.5 text-xs font-semibold text-ink-600 transition-all hover:border-blossom-400 hover:bg-blossom-400 hover:text-white"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-blossom-50 px-3 py-4 text-center"
                        >
                          <p className="text-lg font-black text-blossom-600 sm:text-xl">
                            {m.value}
                          </p>
                          <p className="mt-0.5 text-xs text-ink-400">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

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
                </div>

                <div className="p-7 sm:p-9">
                  <p className="mb-5 text-sm font-bold uppercase tracking-wider text-ink-400">
                    My Contributions
                  </p>
                  <div className="space-y-6">
                    {project.contributions.map((c) => (
                      <div key={c.title}>
                        <h4 className="flex items-center gap-2 text-base font-bold text-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-blossom-400" />
                          {c.title}
                        </h4>
                        <ul className="mt-3 space-y-2 pl-4">
                          {c.points.map((point, i) => (
                            <li
                              key={i}
                              className="relative text-[15px] leading-relaxed text-ink-500 before:absolute before:-left-4 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-blossom-300"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-blossom-100/80 bg-blossom-50/30 p-7 sm:p-9">
                  <p className="mb-5 text-sm font-bold uppercase tracking-wider text-ink-400">
                    Trouble Shooting
                  </p>

                  {/* table (md and up) */}
                  <div className="hidden overflow-hidden rounded-xl border border-blossom-100 md:block">
                    <table className="w-full border-collapse text-left text-[13px]">
                      <thead>
                        <tr className="bg-blossom-100/60 text-ink-600">
                          <th className="w-[26%] px-4 py-3 font-bold">문제</th>
                          <th className="w-[37%] px-4 py-3 font-bold">원인</th>
                          <th className="px-4 py-3 font-bold">해결</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.troubleshooting.map((t, i) => (
                          <tr
                            key={i}
                            className="border-t border-blossom-100 bg-white align-top transition-colors hover:bg-blossom-50/50"
                          >
                            <td className="px-4 py-3 font-semibold text-foreground">
                              {t.problem}
                            </td>
                            <td className="px-4 py-3 leading-relaxed text-ink-500">
                              {t.cause}
                            </td>
                            <td className="px-4 py-3 leading-relaxed text-ink-600">
                              {t.solution}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* stacked cards (mobile) */}
                  <div className="space-y-3 md:hidden">
                    {project.troubleshooting.map((t, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-blossom-100 bg-white p-4"
                      >
                        <p className="text-sm font-bold text-foreground">
                          {t.problem}
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-ink-500">
                          <span className="font-semibold text-blossom-500">
                            원인 ·{" "}
                          </span>
                          {t.cause}
                        </p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">
                          <span className="font-semibold text-blossom-500">
                            해결 ·{" "}
                          </span>
                          {t.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
