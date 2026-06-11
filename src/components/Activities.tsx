import { activities } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Activities() {
  return (
    <section
      id="activities"
      className="relative bg-blossom-50/40 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Activities" title="활동과 수상" />

        <div className="relative">
          {/* timeline line */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-blossom-200"
          />
          <ul className="space-y-8">
            {activities.map((activity, idx) => (
              <Reveal key={activity.title} delay={idx * 0.1}>
                <li className="relative pl-10">
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-white bg-blossom-400 shadow-[0_0_0_3px_rgba(249,184,205,0.5)]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blossom-500">
                    {activity.period}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-foreground">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                    {activity.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
