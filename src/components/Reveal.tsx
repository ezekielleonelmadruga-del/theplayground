import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const offsets = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof offsets;
  once?: boolean;
  as?: "div" | "p" | "li" | "section";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  as = "div",
}: Props) {
  const { x, y } = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: EASE },
    },
  };

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </Tag>
  );
}
