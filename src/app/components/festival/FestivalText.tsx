import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "lg" | "md" | "sm";
  className?: string;
  delay?: number;
}

const sizeMap = {
  lg: "text-xl leading-relaxed",
  md: "text-lg leading-relaxed",
  sm: "text-base leading-relaxed",
};

export function FestivalText({ children, size = "lg", className = "", delay = 0 }: Props) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`text-white/80 ${sizeMap[size]} ${className}`}
    >
      {children}
    </motion.p>
  );
}
