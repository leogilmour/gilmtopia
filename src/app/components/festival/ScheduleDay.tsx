import { motion } from "motion/react";
import { ReactNode } from "react";

interface Event {
  time?: string;
  description: string;
}

interface Props {
  day: string;
  emoji?: string;
  events: Event[];
  color?: "pink" | "yellow" | "cyan";
  delay?: number;
}

const colorMap = {
  pink: "from-pink-500/20 to-pink-500/5 border-pink-500/40 text-pink-300",
  yellow: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/40 text-yellow-300",
  cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/40 text-cyan-300",
};

export function ScheduleDay({ day, emoji, events, color = "pink", delay = 0 }: Props) {
  const [gradientBg, , borderColor, headingColor] = colorMap[color].split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border bg-gradient-to-b p-6 ${colorMap[color]}`}
    >
      <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Righteous, cursive" }}>
        {emoji && <span className="mr-2">{emoji}</span>}
        {day}
      </h3>
      <ul className="space-y-2">
        {events.map((event, i) => (
          <li key={i} className="flex gap-3 text-white/80">
            {event.time && (
              <span className="text-white/40 text-sm shrink-0 pt-0.5 w-12">{event.time}</span>
            )}
            <span className="text-base">{event.description}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
