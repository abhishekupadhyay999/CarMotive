"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "./brands";

interface Props {
  brand: Brand;
}

/*
  Some logo PNGs contain different amounts of transparent
  whitespace. These scales help visually normalize them.
*/
const logoScale: Record<string, string> = {
  BMW: "scale-[0.82]",
  "Mercedes-Benz": "scale-[0.78]",
  Audi: "scale-[0.92]",
  Volvo: "scale-[0.88]",
  "Land Rover": "scale-[0.90]",
  Lexus: "scale-[0.90]",
  "Maruti Suzuki": "scale-[0.86]",
  Toyota: "scale-[0.88]",
  Honda: "scale-[0.90]",
  Hyundai: "scale-[0.92]",
  Kia: "scale-[0.90]",
  Tata: "scale-[0.90]",
  Mahindra: "scale-[0.90]",
  Jeep: "scale-[0.88]",
  "Range Rover": "scale-[0.88]",
  BYD: "scale-[0.90]",
  Skoda: "scale-[0.90]",
  Volkswagen: "scale-[0.90]",
  Nissan: "scale-[0.90]",
  Renault: "scale-[0.90]",
  MG: "scale-[0.90]",
  Isuzu: "scale-[0.90]",
};

export default function BrandCard({ brand }: Props) {
  const scaleClass = logoScale[brand.name] || "scale-[0.90]";

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
        dark:bg-[#111111]
        dark:shadow-none
        dark:hover:border-[#E50914]/40
        dark:hover:bg-[#151515]
        dark:hover:shadow-[0_15px_40px_rgba(229,9,20,0.08)]
      "
    >
      {/* Red Accent */}
      <div
        className="
          absolute
          left-0
          top-0
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

        {/* Fixed Logo Frame */}
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
              h-[70px]
              w-[150px]
              items-center
              justify-center
            "
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={150}
              height={70}
              sizes="150px"
              priority={false}
              className={`
                h-auto
                max-h-[60px]
                w-auto
                max-w-[135px]
                object-contain
                transition-transform
                duration-300
                ${scaleClass}
                group-hover:scale-[0.95]
              `}
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
            dark:text-white
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