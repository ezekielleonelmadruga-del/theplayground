import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid-lines flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-6 text-7xl md:text-9xl">Lost the plot.</h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-fog)]">
        This page doesn't exist, but plenty of good ones do. Head back and keep building.
      </p>
      <Link to="/" className="btn-brut mt-10">
        Back home
      </Link>
    </section>
  );
}
