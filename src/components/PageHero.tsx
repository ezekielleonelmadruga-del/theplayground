import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  index?: string;
};

export default function PageHero({ eyebrow, title, intro, index }: Props) {
  return (
    <header className="grid-lines relative border-b-2 border-[var(--color-gravel)] pt-36 md:pt-44">
      <div className="container-brut pb-16 md:pb-24">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {index ? `${index} / ` : ""}
          {eyebrow}
        </motion.p>

        <motion.h1
          className="display mt-6 max-w-5xl text-5xl leading-[0.95] md:text-8xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-fog)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          >
            {intro}
          </motion.p>
        )}
      </div>
    </header>
  );
}
