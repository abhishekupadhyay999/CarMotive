"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brand } from "@/data/brand";

interface Props {
  brands: Brand[];
  reverse?: boolean;
}

export default function BrandMarquee({
  brands,
  reverse = false,
}: Props) {
  const marqueeBrands = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden py-5">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <motion.div
        className="flex gap-7"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeBrands.map((brand, index) => (
          <motion.div
            key={`${brand.name}-${index}`}
            whileHover={{
              y: -8,
              scale: 1.04,
            }}
            transition={{
              duration: 0.25,
            }}
            className="group flex h-36 w-52 flex-shrink-0 items-center justify-center rounded-[30px] border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-[#FF5A1F] hover:shadow-2xl"
          >

            {/* Logo */}

            <Image
              src={brand.logo}
              alt={brand.name}
              width={130}
              height={70}
              className="max-h-16 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
            />

          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}