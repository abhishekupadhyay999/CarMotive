"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  image: string;
  priority?: boolean;
}

export default function DeliveryCard({
  image,
  priority = false,
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
        aspect-[4/4.2]
        cursor-pointer
        overflow-hidden
        rounded-[30px]

        bg-white
        shadow-lg

        dark:bg-[#111111]
        dark:shadow-[0_15px_50px_rgba(0,0,0,0.45)]

        transition-all
        duration-300
      "
    >
      {/* Image */}

      <Image
        src={image}
        alt="Carmotive India successful car delivery"
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Gradient Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/75
          via-black/20
          to-transparent
          opacity-60
          transition-all
          duration-300
          group-hover:opacity-90
        "
      />

      {/* Dark Mode Extra Overlay */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-black/0
          transition-all
          duration-300
          dark:group-hover:bg-black/10
        "
      />

      {/* Successfully Delivered Badge */}

      <div
        className="
          absolute
          left-5
          top-5
          flex
          items-center
          gap-2
          rounded-full
          bg-white/95
          px-4
          py-2
          shadow-lg
          backdrop-blur-md
          dark:bg-[#111111]/95
        "
      >
        <CheckCircle2
          size={18}
          className="text-[#FF5A1F]"
        />

        <span
          className="
            text-sm
            font-semibold
            text-gray-900
            dark:text-white
          "
        >
          Successfully Delivered
        </span>
      </div>

      {/* Content */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          translate-y-8
          p-6
          text-white
          opacity-0
          transition-all
          duration-500

          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <span
          className="
            inline-block
            rounded-full
            bg-[#FF5A1F]
            px-4
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-white
          "
        >
          Carmotive India
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white">
          Thank You
        </h3>

        <p className="mt-2 leading-7 text-gray-200">
          Thank you for trusting{" "}
          <span className="font-semibold text-white">
            Carmotive India
          </span>
          . We wish you many happy and safe journeys ahead.
        </p>
      </div>

      {/* Shine Effect */}

      <div
        className="
          absolute
          -left-40
          top-0
          h-full
          w-24
          rotate-12
          bg-white/20
          blur-xl
          transition-all
          duration-700
          group-hover:left-[130%]
        "
      />
    </motion.div>
  );
}