"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Fuel,
  Heart,
  Settings2,
  BadgeIndianRupee,
} from "lucide-react";

import type { Car } from "./cars";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="
        group overflow-hidden
        rounded-[28px]

        border border-gray-200
        bg-white
        shadow-lg

        transition-all duration-500

        hover:border-[#E50914]/50
        hover:shadow-[0_20px_60px_rgba(229,9,20,0.12)]

        dark:border-white/10
        dark:bg-[#111111]
        dark:shadow-xl
        dark:hover:border-[#E50914]/50
        dark:hover:shadow-[0_20px_60px_rgba(229,9,20,0.15)]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative aspect-[16/10]
          overflow-hidden

          bg-gradient-to-b
          from-gray-100
          to-gray-50

          dark:from-[#1b1b1b]
          dark:to-[#0d0d0d]
        "
      >
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="
            object-contain
            p-6
            transition-all duration-700
            group-hover:scale-110
          "
        />

        {/* Image Overlay */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent

            dark:from-black/70
          "
        />

        {/* =================================================
            WISHLIST
        ================================================= */}

        <button
          type="button"
          aria-label={`Add ${car.name} to wishlist`}
          className="
            absolute right-5 top-5
            flex h-11 w-11
            items-center justify-center
            rounded-full

            border border-gray-200
            bg-white/80
            text-gray-700

            backdrop-blur

            transition-all duration-300

            hover:bg-[#E50914]
            hover:text-white
            hover:border-[#E50914]

            dark:border-white/10
            dark:bg-black/50
            dark:text-white
          "
        >
          <Heart size={18} />
        </button>

        {/* =================================================
            BRAND
        ================================================= */}

        <div
          className="
            absolute bottom-5 left-5
            rounded-full
            bg-[#E50914]
            px-4 py-2
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-white
          "
        >
          {car.brand}
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="p-6">
        {/* Car Name */}

        <h3
          className="
            text-3xl
            font-bold
            text-gray-900

            dark:text-white
          "
        >
          {car.name}
        </h3>

        {/* =================================================
            SPECS
        ================================================= */}

        <div className="mt-5 flex flex-wrap gap-3">
          {/* Fuel */}

          <span
            className="
              flex items-center gap-2
              rounded-full
              border border-gray-200
              bg-gray-50
              px-3 py-2
              text-sm
              text-gray-600

              dark:border-white/10
              dark:bg-white/5
              dark:text-gray-300
            "
          >
            <Fuel size={15} className="text-[#E50914]" />
            {car.fuel}
          </span>

          {/* Transmission */}

          <span
            className="
              flex items-center gap-2
              rounded-full
              border border-gray-200
              bg-gray-50
              px-3 py-2
              text-sm
              text-gray-600

              dark:border-white/10
              dark:bg-white/5
              dark:text-gray-300
            "
          >
            <Settings2
              size={15}
              className="text-[#E50914]"
            />

            {car.transmission}
          </span>
        </div>

        {/* =================================================
            PRICE
        ================================================= */}

        <div
          className="
            mt-6
            rounded-2xl
            border border-gray-200
            bg-gray-50
            p-4

            dark:border-white/10
            dark:bg-white/5
          "
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Starting From
          </p>

          <h4
            className="
              mt-2
              flex items-center gap-2
              text-2xl
              font-bold
              text-gray-900

              dark:text-white
            "
          >
            <BadgeIndianRupee
              size={20}
              className="text-[#E50914]"
            />

            {car.price}
          </h4>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            EMI from{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              {car.emi}
            </span>
          </p>
        </div>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="mt-7 flex gap-3">
          {/* Best Price */}

          <button
            type="button"
            className="
              flex-1
              rounded-full
              bg-[#E50914]
              px-5 py-3
              font-semibold
              text-white

              transition-all duration-300

              hover:scale-[1.02]
              hover:bg-red-700
              hover:shadow-lg
              hover:shadow-red-600/20
            "
          >
            Get Best Price
          </button>

          {/* Details */}

          <Link
            href={`/cars/${car.slug}`}
            aria-label={`View ${car.name} details`}
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full

              border border-gray-200
              bg-gray-50
              text-gray-800

              transition-all duration-300

              hover:border-[#E50914]
              hover:bg-[#E50914]
              hover:text-white

              dark:border-white/10
              dark:bg-white/5
              dark:text-white
            "
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ===================================================== */}

      <div
        className="
          h-[3px]
          w-0
          bg-[#E50914]
          transition-all duration-500
          group-hover:w-full
        "
      />
    </motion.div>
  );
}