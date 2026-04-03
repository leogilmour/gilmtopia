import { motion } from "motion/react";
import { ReactNode } from "react";

type Color = "pink" | "yellow" | "cyan" | "green" | "purple" | "orange";

const colorMap: Record<Color, { bg: string; border: string; heading: string }> = {
  pink:   { bg: "from-pink-500/20 to-pink-500/5",     border: "border-pink-500/40",   heading: "text-pink-300" },
  yellow: { bg: "from-yellow-500/20 to-yellow-500/5", border: "border-yellow-500/40", heading: "text-yellow-300" },
  cyan:   { bg: "from-cyan-500/20 to-cyan-500/5",     border: "border-cyan-500/40",   heading: "text-cyan-300" },
  green:  { bg: "from-green-500/20 to-green-500/5",   border: "border-green-500/40",  heading: "text-green-300" },
  purple: { bg: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/40", heading: "text-purple-300" },
  orange: { bg: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/40", heading: "text-orange-300" },
};

interface Props {
  title: string;
  emoji?: string;
  children: ReactNode;
  delay?: number;
  color?: Color;
}

export function InfoCard({ title, emoji, children, delay = 0, color }: Props) {
  const c = color ? colorMap[color] : null;
  const bgClass = c ? `bg-gradient-to-b ${c.bg}` : "bg-white/5";
  const borderClass = c ? c.border : "border-white/10";
  const headingClass = c ? c.heading : "text-white/90";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border backdrop-blur-sm p-6 ${bgClass} ${borderClass}`}
    >
      <h3
        className={`text-xl font-bold mb-3 ${headingClass}`}
        style={{ fontFamily: "Righteous, cursive" }}
      >
        {emoji && <span className="mr-2">{emoji}</span>}
        {title}
      </h3>
      <div className="text-white/70 text-base leading-relaxed space-y-1">{children}</div>
    </motion.div>
  );
}
