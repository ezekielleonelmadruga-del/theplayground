import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EventImage from "@/components/EventImage";
import { archive, upcoming, type PlaygroundEvent } from "@/data/events";

export default function Events() {
  const [selected, setSelected] = useState<PlaygroundEvent | null>(null);

  return (
    <div>
      <PageHero
        index="02"
        eyebrow="Events"
        title="The year ahead."
        intro="A look at what to watch for over the coming year, the moments where founders connect, compete, and level up. Select an event to read more."
      />

      <section className="container-brut py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Upcoming</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">On the calendar</h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {upcoming.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setSelected(event)}
                className="card-brut group block w-full cursor-pointer p-0 text-left"
              >
                <div className="grid gap-6 p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:p-10">
                  <div className="flex items-center gap-6">
                    <span className="display text-5xl text-[var(--color-blood-bright)] md:text-6xl">
                      {event.tag}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-fog)]">
                      {event.window}
                    </span>
                  </div>
                  <div>
                    <h3 className="display text-2xl md:text-4xl">{event.title}</h3>
                    {event.partners && (
                      <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-blood-bright)]">
                        {event.partners}
                      </p>
                    )}
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--color-fog)]">
                      {event.short}
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-white transition-transform group-hover:translate-x-1">
                    Read more +
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-[var(--color-gravel)] bg-[var(--color-ash)]">
        <div className="container-brut py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">The archive</p>
            <h2 className="display mt-5 text-4xl md:text-5xl">Events we've hosted</h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--color-fog)]">
              Every room we've built lives here. We're just getting started, and this archive grows
              with each event we host.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <figure className="card-brut mt-14 grid overflow-hidden md:grid-cols-2">
              <EventImage
                src={archive[0].photo}
                alt={archive[0].title}
                label={archive[0].title}
                eager
                className="aspect-[4/3] md:aspect-auto md:h-full"
              />
              <figcaption className="flex flex-col justify-between gap-8 border-t-2 border-[var(--color-gravel)] p-8 md:border-l-2 md:border-t-0 md:p-10">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-blood-bright)]">
                  Most recent
                </span>
                <div>
                  <h3 className="display text-3xl md:text-4xl">{archive[0].title}</h3>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-fog)]">
                    {archive[0].note}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {archive.length > 1 && (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {archive.slice(1).map((entry, i) => (
                <Reveal key={entry.title} delay={i * 0.05}>
                  <figure className="card-brut overflow-hidden">
                    <EventImage
                      src={entry.photo}
                      alt={entry.title}
                      label={entry.title}
                      className="aspect-[4/3]"
                    />
                    <figcaption className="flex items-center justify-between gap-4 border-t-2 border-[var(--color-gravel)] p-5">
                      <span className="display text-lg">{entry.title}</span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-fog)]">
                        {entry.note}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container-brut flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <h2 className="display max-w-2xl text-3xl leading-[1.05] md:text-5xl">
            Want in on the next one?
          </h2>
        </Reveal>
        <Reveal delay={0.1} direction="left">
          <Link to="/contact" className="btn-brut">
            Get on our radar
          </Link>
        </Reveal>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="relative z-10 w-full max-w-2xl border-2 border-[var(--color-blood)] bg-[var(--color-smoke)]"
              style={{ boxShadow: "12px 12px 0 var(--color-blood)" }}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-start justify-between gap-6 border-b-2 border-[var(--color-gravel)] p-6 md:p-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-fog)]">
                    {selected.window}
                  </span>
                  <h3 className="display mt-2 text-3xl md:text-4xl">{selected.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="shrink-0 border-2 border-white px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] hover:bg-white hover:text-black"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
              <div className="p-6 md:p-8">
                {selected.partners && (
                  <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-blood-bright)]">
                    {selected.partners}
                  </p>
                )}
                <p className="text-[15px] leading-relaxed text-[var(--color-bone)]">
                  {selected.long}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
