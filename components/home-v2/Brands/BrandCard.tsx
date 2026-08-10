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
      className="
        group relative overflow-hidden
        rounded-[24px]
        border border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all duration-300

        hover:border-[#E50914]/30
        hover:shadow-xl

        dark:border-white/10
        dark:bg-[#111111]
        dark:shadow-none
        dark:hover:border-[#E50914]/40
        dark:hover:bg-[#151515]
        dark:hover:shadow-[0_20px_50px_rgba(229,9,20,0.08)]
      "
    >
      {/* Red Accent Line */}

      <div
        className="
          absolute left-0 top-0
          h-[3px] w-0
          bg-[#E50914]
          transition-all duration-500
          group-hover:w-full
        "
      />

      {/* Card Content */}

      <div className="flex h-full flex-col items-center justify-center">

        {/* Logo */}

        <div
          className="
            flex h-24 w-full
            items-center justify-center
            rounded-2xl
            transition-all duration-300
          "
        >
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={180}
            height={80}
            className="
              max-h-16
              w-auto
              max-w-[150px]
              object-contain
              transition-all duration-300
              group-hover:scale-105
            "
          />
        </div>

        {/* Brand Name */}

        <h3
          className="
            mt-5
            text-center
            text-base
            font-semibold
            text-gray-900
            transition-colors duration-300
            group-hover:text-[#E50914]
            dark:text-white
          "
        >
          {brand.name}
        </h3>

        {/* Category */}

        {brand.categories && brand.categories.length > 0 && (
          <p
            className="
              mt-1
              text-center
              text-xs
              text-gray-500
              dark:text-gray-400
            "
          >
            {brand.categories
              .slice(0, 2)
              .join(" • ")}
          </p>
        )}
      </div>

      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute -bottom-20 -right-20
          h-40 w-40
          rounded-full
          bg-[#E50914]/0
          blur-3xl
          transition-all duration-500
          group-hover:bg-[#E50914]/10
        "
      />
    </motion.div>
  );
}