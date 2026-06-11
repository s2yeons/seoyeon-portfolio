import { contacts, profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About me" title="이런 개발자입니다" />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* intro cards */}
          <div className="space-y-6 lg:col-span-3">
            {profile.intro.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-blossom-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blossom-200 hover:shadow-[0_12px_40px_-12px_rgba(244,143,177,0.4)]">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blossom-100 text-sm font-bold text-blossom-500">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink-500">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* contact card */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-gradient-to-br from-blossom-50 to-blossom-100/60 p-7">
              <h3 className="text-lg font-bold text-foreground">Contact</h3>
              <p className="mt-1 text-sm text-ink-400">
                {profile.role}
              </p>
              <ul className="mt-6 space-y-4">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blossom-500">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-[15px] font-medium text-ink-600 underline-offset-4 transition-colors hover:text-blossom-600 hover:underline"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-[15px] font-medium text-ink-600">
                        {c.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
