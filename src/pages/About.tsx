import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { houseRules, jobs } from "@/data/about";

export default function About() {
  return (
    <div>
      <PageHero
        index="01"
        eyebrow="About The Playground"
        title="We build the builders."
        intro="The Playground is a student ventures incubator at Queen's University. We exist to make starting a company the obvious next step for ambitious students, not a leap they take alone."
      />

      <section className="container-brut py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="sticky top-32">
              <p className="eyebrow">Who we are</p>
              <h2 className="display mt-5 text-4xl md:text-5xl">
                A room for people who make things.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-[var(--color-bone)]">
              <p>
                We are students who got tired of waiting. Waiting for the right class, the right
                connection, the right moment to finally build the thing we kept talking about.
              </p>
              <p>
                So we built the place we wished existed: an incubator run by students, for students,
                where the barrier to starting is as low as we can make it and the ceiling on what you
                can build is as high as you dare.
              </p>
              <p className="text-white">
                The Playground is where the next generation of founders gets its first real shot, and
                its first real team.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-[var(--color-gravel)] bg-[var(--color-ash)]">
        <div className="container-brut py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="display mt-5 max-w-3xl text-4xl md:text-6xl">
              Three jobs. Done relentlessly.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-0 border-2 border-[var(--color-gravel)] md:grid-cols-3">
            {jobs.map((job, i) => (
              <Reveal
                key={job.title}
                delay={i * 0.08}
                className={`bg-black p-8 md:p-10 ${
                  i < jobs.length - 1
                    ? "border-b-2 border-[var(--color-gravel)] md:border-b-0 md:border-r-2"
                    : ""
                }`}
              >
                <span className="font-mono text-sm text-[var(--color-blood-bright)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-2xl">{job.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fog)]">{job.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-brut py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">How we operate</p>
          <h2 className="display mt-5 text-4xl md:text-6xl">The house rules.</h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-[var(--color-gravel)] sm:grid-cols-2">
          {houseRules.map((rule, i) => (
            <Reveal key={rule.no} delay={i * 0.06} className="bg-black p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-[var(--color-blood-bright)]">{rule.no}</span>
                <h3 className="display text-2xl md:text-3xl">{rule.title}</h3>
              </div>
              <p className="mt-4 pl-9 text-[15px] leading-relaxed text-[var(--color-fog)]">
                {rule.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-[var(--color-gravel)] bg-[var(--color-blood)]">
        <div className="container-brut flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="display max-w-2xl text-4xl leading-[1.02] md:text-5xl">
              Building the next generation starts with you.
            </h2>
          </Reveal>
          <Reveal delay={0.1} direction="left">
            <Link to="/join" className="btn-brut" style={{ boxShadow: "6px 6px 0 #000" }}>
              Join as a Founder
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
