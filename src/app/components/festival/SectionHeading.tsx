import { motion } from "motion/react";
import { ReactNode } from "react";

type Color = "cyan" | "green" | "pink" | "purple" | "yellow";

const colorMap: Record<Color, string> = {
  cyan: "from-cyan-400 to-teal-300",
  green: "from-green-400 to-emerald-300",
  pink: "from-pink-400 to-rose-300",
  purple: "from-purple-400 to-violet-300",
  yellow: "from-yellow-300 to-amber-300",
};

interface Props {
  children: ReactNode;
  color?: Color;
  size?: "xl" | "lg" | "md";
  className?: string;
}

const sizeMap = {
  xl: "text-5xl md:text-6xl",
  lg: "text-3xl md:text-4xl",
  md: "text-2xl md:text-3xl",
};

export function SectionHeading({ children, color = "cyan", size = "xl", className = "" }: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`font-bold bg-gradient-to-r ${colorMap[color]} bg-clip-text text-transparent mb-6 leading-tight ${sizeMap[size]} ${className}`}
      style={{ fontFamily: "Righteous, cursive" }}
    >
      {children}
    </motion.h2>
  );
}
