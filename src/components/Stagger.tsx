import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export default function Stagger({ children, className, stagger = 0.12 }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}
