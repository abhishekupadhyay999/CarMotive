"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Fuel,
  Gauge,
  Settings2,
  BadgeIndianRupee,
} from "lucide-react";

import type { Car } from "./cars";

interface FeaturedCardProps {
  car: Car;
}

export default function FeaturedCard({
  car,
}: FeaturedCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d] shadow-2xl transition-all duration-500 hover:border-[#E50914]/50"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/10 via-transparent to-transparent" />

      {/* Featured Badge */}

      <div className="absolute left-6 top-6 z-30 rounded-full bg-[#E50914] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg">
        ★ Featured
      </div>

      {/* New Badge */}

      <div className="absolute right-6 top-6 z-30 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-black shadow-lg">
        NEW
      </div>

      {/* Image */}

      <div className="relative h-[360px] overflow-hidden md:h-[440px]">
        <Image
          src={car.image}
          alt={car.name}
          fill
          priority
          className="object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#E50914]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}

      <div className="relative z-20 p-8">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#E50914]">
          {car.brand}
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          {car.name}
        </h2>

        {/* Specs */}

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Fuel size={16} />
            {car.fuel}
          </span>

          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Settings2 size={16} />
            {car.transmission}
          </span>

          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Gauge size={16} />
            {car.engine}
          </span>

        </div>

        {/* Price */}

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

          <p className="text-sm uppercase tracking-wider text-gray-400">
            Starting Price
          </p>

          <h3 className="mt-2 flex items-center gap-2 text-3xl font-bold text-white">
            <BadgeIndianRupee size={24} />
            {car.price || "Price on Request"}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            EMI Starts From{" "}
            <span className="font-medium text-white">
              {car.emi || "Contact Us"}
            </span>
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          <button className="rounded-full bg-[#E50914] px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700">
            Get Best Price
          </button>

          <Link
            href={`/cars/${car.slug}`}
            className="group/button flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 font-medium text-white transition-all duration-300 hover:border-[#E50914] hover:bg-white/5"
          >
            View Details

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </motion.div>
  );
}