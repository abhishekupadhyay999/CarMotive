"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-[#0D0D0D] p-7 shadow-xl transition-all duration-500 hover:border-[#E50914] hover:shadow-[0_20px_60px_rgba(229,9,20,0.18)]"
    >
      {/* Top Glow */}

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914]/15 text-[#E50914] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E50914] group-hover:text-white">
        <Icon size={28} strokeWidth={2} />
      </div>

      {/* Title */}

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 text-sm leading-7 text-gray-400">
        {description}
      </p>

      {/* Bottom Line */}

      <div className="mt-6 h-[2px] w-12 rounded-full bg-[#E50914] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}