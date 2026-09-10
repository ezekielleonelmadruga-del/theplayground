import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-black/95 backdrop-blur border-b-2 border-[var(--color-gravel)]"
          : "bg-transparent border-b-2 border-transparent"
      }`}
    >
      <nav className="container-brut flex items-center justify-between py-4">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="/brand/playground-mark-white.png"
            alt="The Playground"
            className="h-10 w-auto transition-opacity group-hover:opacity-70"
          />
          <span className="display text-lg tracking-tight leading-none">The Playground</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                    isActive ? "text-white" : "text-[var(--color-fog)] hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-[var(--color-blood)]" />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/join"
          className="hidden font-mono text-xs font-bold uppercase tracking-[0.12em] lg:inline-flex items-center border-2 border-white bg-white px-4 py-2 text-black transition-transform hover:-translate-y-0.5"
          style={{ boxShadow: "4px 4px 0 var(--color-blood)" }}
        >
          Apply
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs font-bold uppercase tracking-[0.16em] lg:hidden border-2 border-white px-3 py-2"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-black lg:hidden"
          >
            <ul className="container-brut flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block border-b border-[var(--color-gravel)] py-4 display text-3xl ${
                        isActive ? "text-[var(--color-blood-bright)]" : "text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
