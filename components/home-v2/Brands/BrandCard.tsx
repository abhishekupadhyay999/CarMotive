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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-5
        py-5
        shadow-sm
        transition-all
        duration-300

        hover:border-[#E50914]/30
        hover:shadow-lg

        dark:border-white/10
        dark:bg-white
        dark:shadow-none

        dark:hover:border-[#E50914]
        dark:hover:bg-white
        dark:hover:shadow-[0_15px_40px_rgba(229,9,20,0.12)]
      "
    >
      {/* Red Top Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          z-10
          h-[3px]
          w-0
          bg-[#E50914]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Main Content */}
      <div className="flex flex-col items-center">

        {/* Logo Area */}
        <div
          className="
            flex
            h-[82px]
            w-full
            items-center
            justify-center
          "
        >
          <div
            className="
              flex
              h-[64px]
              w-[140px]
              items-center
              justify-center
            "
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={140}
              height={64}
              sizes="140px"
              priority={false}
              className="
                block
                h-auto
                max-h-[52px]
                w-auto
                max-w-[125px]
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
          </div>
        </div>

        {/* Brand Name */}
        <h3
          className="
            mt-4
            min-h-[24px]
            text-center
            text-[16px]
            font-semibold
            leading-6
            text-gray-900
            transition-colors
            duration-300
            group-hover:text-[#E50914]
          "
        >
          {brand.name}
        </h3>
      </div>

      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          -right-16
          h-32
          w-32
          rounded-full
          bg-[#E50914]/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#E50914]/10
        "
      />
    </motion.div>
  );
}