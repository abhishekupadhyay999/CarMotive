"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "./brands";

interface Props {
  brand: Brand;
}

export default function BrandCard({ brand }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#E50914]/30 hover:shadow-xl"
    >
      {/* Red Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E50914] transition-all duration-300 group-hover:w-full" />

      <div className="flex h-full flex-col items-center justify-center">
        {/* Logo */}
       <div className="flex h-24 w-full items-center justify-center">
  <Image
    src={brand.logo}
    alt={brand.name}
    width={180}
    height={90}
    className="h-full w-full object-contain"
  />
</div>
        {/* Brand Name */}
        <p className="mt-5 text-sm font-semibold tracking-wide text-gray-700 transition-colors duration-300 group-hover:text-[#E50914]">
          {brand.name}
        </p>
      </div>
    </motion.div>
  );
}