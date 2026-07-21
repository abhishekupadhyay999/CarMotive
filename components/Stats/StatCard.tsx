"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  label: string;
  description: string;
  index: number;
}

export default function StatCard({
  number,
  label,
  description,
  index,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
      }}
      className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/10"
    >
      <h3 className="text-5xl font-bold text-yellow-400">
        {number}
      </h3>

      <p className="mt-4 text-xl font-semibold text-white">
        {label}
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}