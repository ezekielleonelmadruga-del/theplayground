import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { InstagramIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const footerLinks = [
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/join", label: "Join as Founder" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--color-gravel)] bg-black">
      <div className="overflow-hidden border-b-2 border-[var(--color-gravel)] py-5">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center">
              {Array.from({ length: 6 }).map((__, j) => (
                <span key={j} className="display mx-6 text-4xl text-[var(--color-concrete)]">
                  Building the Next Generation
                  <span className="text-[var(--color-blood)]"> / </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="container-brut grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src="/brand/playground-lockup-white.png"
            alt="The Playground"
            className="h-28 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--color-fog)]">
            A student ventures incubator at Queen's University. We back student founders with
            capital, mentorship, and a community built to ship.
          </p>
          <p className="eyebrow mt-6">Building the Next Generation</p>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Navigate</h3>
          <ul className="space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link className="text-[var(--color-bone)] hover:text-white" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Connect</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                className="flex items-center gap-3 text-[var(--color-bone)] transition-colors hover:text-white"
                href={`mailto:${site.email}`}
              >
                <MailIcon />
                <span className="break-all">{site.email}</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-[var(--color-bone)] transition-colors hover:text-white"
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
                <span>{site.instagram}</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-[var(--color-bone)] transition-colors hover:text-white"
                href={site.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                <span>The Playground</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-[var(--color-gravel)]">
        <div className="container-brut flex flex-col items-start justify-between gap-2 py-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-fog)] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} The Playground · Queen's University</span>
          <span>Kingston, Ontario</span>
        </div>
      </div>
    </footer>
  );
}
