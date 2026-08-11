"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Star,
  BadgeCheck,
} from "lucide-react";

interface Props {
  name: string;
  car: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  car,
  review,
  rating,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]

        border
        border-gray-200
        bg-white
        p-8
        shadow-lg

        dark:border-white/10
        dark:bg-[#111111]
        dark:shadow-[0_15px_50px_rgba(0,0,0,0.35)]

        transition-all
        duration-300

        hover:border-[#FF5A1F]
        hover:shadow-2xl
        dark:hover:border-[#FF5A1F]
        dark:hover:bg-[#151515]
      "
    >
      {/* Quote */}

      <Quote
        size={36}
        className="text-[#FF5A1F]"
      />

      {/* Stars */}

      <div className="mt-6 flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-[#FFB400] text-[#FFB400]"
          />
        ))}
      </div>

      {/* Review */}

      <p
        className="
          mt-6
          leading-8
          text-gray-600
          dark:text-gray-300
        "
      >
        "{review}"
      </p>

      {/* Customer */}

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Initial */}

          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#FF5A1F]
              text-lg
              font-bold
              text-white
            "
          >
            {name.charAt(0)}
          </div>

          <div>
            <h4
              className="
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              {name}
            </h4>

            <p
              className="
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              {car}
            </p>
          </div>
        </div>

        {/* Verified */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-1
            rounded-full
            bg-green-50
            px-3
            py-1
            text-xs
            font-semibold
            text-green-700

            dark:bg-green-500/10
            dark:text-green-400
          "
        >
          <BadgeCheck size={14} />
          Verified
        </div>
      </div>

      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-20
          h-40
          w-40
          rounded-full
          bg-[#FF5A1F]/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#FF5A1F]/10
        "
      />
    </motion.div>
  );
}