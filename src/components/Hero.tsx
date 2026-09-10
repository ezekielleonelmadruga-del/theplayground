import { Suspense, lazy, type ReactNode } from "react";

const HeroScene = lazy(() => import("@/components/HeroScene"));

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
};

export default function Hero({
  eyebrow = "The Playground · Queen's University",
  title = "Where student ventures get built.",
  description = "A founder-first incubator backing the boldest student builders on campus. Bring the idea. We bring the capital, the mentors, and the room to ship.",
  children,
}: Props) {
  return (
    <section role="banner" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <Suspense fallback={<div className="h-full w-full bg-black" />}>
        <HeroScene />
      </Suspense>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="relative z-20 flex h-full flex-col items-center justify-end pb-24 text-center md:pb-32">
        <div className="container-brut max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-5 text-4xl md:text-6xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-bone)]">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
