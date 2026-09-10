import { motion, type Variants } from "framer-motion";
import { teams } from "@/data/team";
import MemberPhoto from "@/components/MemberPhoto";

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function TeamGrid() {
  return (
    <section className="container-brut py-20 md:py-28">
      <div className="space-y-20">
        {teams.map((group, i) => (
          <div key={group.name}>
            <div className="mb-8 flex flex-col gap-3 border-b-2 border-[var(--color-gravel)] pb-5 md:flex-row md:items-end md:justify-between">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-[var(--color-blood-bright)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display text-3xl md:text-4xl">{group.name}</h2>
              </div>
              <p className="max-w-md font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[var(--color-fog)]">
                {group.blurb}
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              {group.members.map((member) => (
                <motion.div key={member.name} variants={item} className="group">
                  <MemberPhoto member={member} />
                  <div className="mt-3">
                    <span className="block display text-base leading-tight">{member.name}</span>
                    <span className="mt-1 block font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--color-fog)]">
                      {member.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
