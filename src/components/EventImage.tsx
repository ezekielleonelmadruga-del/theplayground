import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  eager?: boolean;
};

export default function EventImage({ src, alt, label, className, eager }: Props) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className={`relative overflow-hidden bg-[var(--color-concrete)] ${className ?? ""}`}>
      {showPlaceholder ? (
        <div className="grid-lines flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--color-ash)] p-6 text-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--color-blood-bright)]">
            Photo coming soon
          </span>
          {label && (
            <span className="display text-xl leading-tight text-[var(--color-fog)]">{label}</span>
          )}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
        />
      )}
    </div>
  );
}
