"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  name: string;
  logo: string;
}

export default function BrandCard({ name, logo }: Props) {
  return (
    <motion.div
      layout
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
      className="group flex h-40 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-[#D4AF37]/50"
    >
      <Image
        src={logo}
        alt={name}
        width={140}
        height={80}
        className="object-contain grayscale transition duration-300 group-hover:grayscale-0"
      />
    </motion.div>
  );
}