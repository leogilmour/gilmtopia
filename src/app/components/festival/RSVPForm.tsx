import { motion } from "motion/react";

interface Props {
  onSubmit: (e: React.FormEvent) => void;
  animate?: boolean;
}

export function RSVPForm({ onSubmit, animate = true }: Props) {
  const motionProps = animate
    ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 1 } }
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

  return (
    <motion.form onSubmit={onSubmit} className="flex flex-col items-center gap-4 w-96" {...motionProps}>
      <div className="flex gap-2 w-full">
        <input
          type="number"
          placeholder="Enter your phone number"
          className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border-2 border-purple-400/50 text-white placeholder-purple-300/60 focus:outline-none focus:border-cyan-400 transition-colors"
          required
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
        >
          RSVP
        </button>
      </div>
    </motion.form>
  );
}
