import { useState } from "react";
import type { Member } from "@/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function MemberPhoto({ member }: { member: Member }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = member.photo && !failed;

  return (
    <div className="relative aspect-square w-full overflow-hidden border-2 border-[var(--color-gravel)] bg-[var(--color-concrete)] transition-colors duration-300 group-hover:border-[var(--color-blood)]">
      {showPhoto ? (
        <img
          src={`/team/${member.photo}`}
          alt={member.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      ) : (
        <div className="grid-lines flex h-full w-full items-center justify-center bg-[var(--color-ash)]">
          <span className="display text-4xl text-[var(--color-gravel)] transition-colors duration-300 group-hover:text-[var(--color-blood-bright)]">
            {initials(member.name)}
          </span>
        </div>
      )}
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--color-blood)] transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
}
