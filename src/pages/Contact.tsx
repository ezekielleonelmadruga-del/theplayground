import { useState, type FormEvent } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { contactLinks, site } from "@/data/site";

const fieldClass =
  "w-full border-2 border-[var(--color-gravel)] bg-[var(--color-ash)] px-4 py-3 font-mono text-sm text-white outline-none transition-colors placeholder:text-[var(--color-fog)] focus:border-[var(--color-blood)]";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalSubject = subject.trim() || "Hello from the website";
    const body = `${message}

--
From: ${name || "(no name)"}${email ? ` <${email}>` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      finalSubject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div>
      <PageHero
        index="05"
        eyebrow="Contact"
        title="Let's talk."
        intro="Founder with an idea, sponsor with a mission, or just curious, reach out. Draft us a note below and we'll get back to you."
      />

      <section className="container-brut grid gap-14 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <Reveal>
          <div>
            <p className="eyebrow">Find us</p>
            <h2 className="display mt-5 text-4xl md:text-5xl">Direct lines.</h2>

            <ul className="mt-10 divide-y-2 divide-[var(--color-gravel)] border-y-2 border-[var(--color-gravel)]">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-6 transition-colors hover:text-white"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-fog)]">
                      {link.label}
                    </span>
                    <span className="display text-lg text-[var(--color-bone)] transition-colors group-hover:text-[var(--color-blood-bright)] md:text-2xl">
                      {link.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-fog)]">
              Kingston, Ontario · Queen's University
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="border-2 border-[var(--color-gravel)] bg-[var(--color-smoke)] p-8 md:p-10"
            style={{ boxShadow: "10px 10px 0 var(--color-blood)" }}
          >
            <p className="eyebrow">Draft an email</p>
            <h3 className="display mt-4 text-2xl">Write to The Playground</h3>

            <div className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-fog)]">
                    Your name
                  </span>
                  <input
                    className={fieldClass}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Founder"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-fog)]">
                    Your email
                  </span>
                  <input
                    type="email"
                    className={fieldClass}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@queensu.ca"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-fog)]">
                  Subject
                </span>
                <input
                  className={fieldClass}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="I'm building something"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-fog)]">
                  Message
                </span>
                <textarea
                  className={`${fieldClass} min-h-[160px] resize-y leading-relaxed`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you're working on..."
                  required
                />
              </label>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-brut">
                Send
              </button>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-fog)]">
                Opens in your mail app
              </span>
            </div>

            {sent && (
              <p className="mt-6 border-2 border-[var(--color-blood)] bg-black p-4 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-blood-bright)]">
                Your draft is ready in your mail app. Hit send there to reach us.
              </p>
            )}
          </form>
        </Reveal>
      </section>
    </div>
  );
}
