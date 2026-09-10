import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Stagger, { staggerItem } from "@/components/Stagger";
import { pillars, stats } from "@/data/home";

export default function Home() {
  return (
    <div>
      <Hero>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/join" className="btn-brut">
            Join as a Founder
          </Link>
          <Link to="/about" className="btn-brut btn-ghost">
            What we do
          </Link>
        </div>
      </Hero>

      <section className="grid-lines border-y-2 border-[var(--color-gravel)]">
        <div className="container-brut py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">The thesis</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 max-w-5xl text-3xl leading-[1.05] md:text-6xl">
              Students don't need permission to build the next{" "}
              <span className="text-[var(--color-blood-bright)]">great company.</span> They need a
              Playground.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-fog)]">
              The Playground is a student ventures incubator at Queen's University. We find founders
              early, back them with real resources, and surround them with people who have done it
              before, so the hardest part of starting up is just starting.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b-2 border-[var(--color-gravel)] bg-[var(--color-blood)]">
        <div className="container-brut grid gap-8 py-16 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-l-2 border-black/30 pl-6">
                <div className="display text-6xl md:text-7xl">{stat.value}</div>
                <div className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-black/70">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-brut py-24 md:py-32">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow">What founders get</p>
              <h2 className="display mt-5 text-4xl md:text-5xl">
                Four things.
                <br />
                No filler.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-[var(--color-fog)]">
              We stripped the incubator model down to what actually moves a student venture forward
              and cut everything else.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-0 border-2 border-[var(--color-gravel)] md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.no}
              variants={staggerItem}
              className={`group relative overflow-hidden bg-[var(--color-ash)] p-8 transition-colors hover:bg-[var(--color-smoke)] md:p-12 ${
                i % 2 === 0 ? "md:border-r-2" : ""
              } ${i < 2 ? "md:border-b-2" : ""} border-b-2 border-[var(--color-gravel)] md:last:border-b-0`}
            >
              <span className="font-mono text-sm text-[var(--color-blood-bright)]">{pillar.no}</span>
              <h3 className="display mt-4 text-3xl md:text-4xl">{pillar.title}</h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--color-fog)]">
                {pillar.body}
              </p>
              <span className="pointer-events-none absolute -right-6 -top-10 select-none font-mono text-[9rem] leading-none text-white/[0.03] transition-transform duration-500 group-hover:-translate-y-2">
                {pillar.no}
              </span>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="border-y-2 border-[var(--color-gravel)] bg-[var(--color-ash)]">
        <div className="container-brut flex flex-col items-start gap-10 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="display max-w-2xl text-4xl leading-[1.02] md:text-6xl">
              Got something worth building?
            </h2>
          </Reveal>
          <Reveal delay={0.1} direction="left">
            <div className="flex flex-col gap-4">
              <Link to="/join" className="btn-brut">
                Join as a Founder
              </Link>
              <Link to="/contact" className="btn-brut btn-ghost">
                Talk to the team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
