import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blossom-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500">
          {description}
        </p>
      )}
    </Reveal>
  );
}
