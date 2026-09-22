import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { founderTraits, responsibilities } from "@/data/join";

export default function Join() {
  return (
    <div>
      <PageHero
        index="04"
        eyebrow="Join as a Founder"
        title="Bring the idea. We'll build the rest."
        intro="The Playground exists for founders. If you have something you want to build, or the drive to help build the incubator itself, this is where you start."
      />

      <section className="container-brut py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">What it means to be a founder</p>
          <h2 className="display mt-5 max-w-3xl text-4xl md:text-6xl">
            Not a title. A way of operating.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-0 border-2 border-[var(--color-gravel)] md:grid-cols-3">
          {founderTraits.map((trait, i) => (
            <Reveal
              key={trait.no}
              delay={i * 0.08}
              className={`bg-[var(--color-ash)] p-8 md:p-10 ${
                i < founderTraits.length - 1
                  ? "border-b-2 border-[var(--color-gravel)] md:border-b-0 md:border-r-2"
                  : ""
              }`}
            >
              <span className="font-mono text-sm text-[var(--color-blood-bright)]">{trait.no}</span>
              <h3 className="display mt-4 text-2xl">{trait.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-fog)]">{trait.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-[var(--color-gravel)] bg-[var(--color-ash)]">
        <div className="container-brut grid gap-14 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
          <Reveal>
            <div className="sticky top-32">
              <p className="eyebrow">Roles &amp; responsibilities</p>
              <h2 className="display mt-5 text-4xl md:text-5xl">What we ask of you.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y-2 divide-[var(--color-gravel)] border-y-2 border-[var(--color-gravel)]">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex gap-6 py-6">
                  <span className="font-mono text-sm text-[var(--color-blood-bright)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed text-[var(--color-bone)]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-brut py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">The hiring package</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">Coming soon.</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--color-fog)]">
            We're putting together the full breakdown of roles, expectations, and how to get
            involved. It will live here as soon as it's ready.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="grid-lines mt-12 flex flex-col items-center justify-center gap-4 border-2 border-[var(--color-gravel)] bg-[var(--color-smoke)] p-16 text-center md:p-24"
            style={{ boxShadow: "10px 10px 0 var(--color-blood)" }}
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-blood-bright)]">
              Hiring package coming soon
            </span>
            <span className="display text-2xl text-[var(--color-fog)] md:text-3xl">
              The Playground hiring package
            </span>
          </div>
        </Reveal>
      </section>

      <section className="border-t-2 border-[var(--color-gravel)] bg-[var(--color-blood)]">
        <div className="container-brut flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="display max-w-2xl text-4xl leading-[1.02] md:text-6xl">
              Ready to jump in?
            </h2>
          </Reveal>
          <Reveal delay={0.1} direction="left">
            <a
              href={`mailto:${site.email}?subject=Founder%20Application%20%E2%80%94%20The%20Playground`}
              className="btn-brut"
              style={{ boxShadow: "6px 6px 0 #000" }}
            >
              Apply by email
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
