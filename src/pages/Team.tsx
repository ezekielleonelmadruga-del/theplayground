import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TeamGrid from "@/components/TeamGrid";

export default function Team() {
  return (
    <div>
      <PageHero
        index="03"
        eyebrow="The Team"
        title="The people behind the Playground."
        intro="Nine teams, one mission. These are the students who run The Playground, organized by the part of the machine they drive."
      />

      <TeamGrid />

      <section className="border-t-2 border-[var(--color-gravel)] bg-[var(--color-ash)]">
        <div className="container-brut flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="display max-w-2xl text-3xl leading-[1.05] md:text-5xl">
              Want to build this with us?
            </h2>
          </Reveal>
          <Reveal delay={0.1} direction="left">
            <Link to="/join" className="btn-brut">
              Join as a Founder
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
