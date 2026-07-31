"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Fuel, Gauge } from "lucide-react";
import type { Car } from "./cars";

interface FeaturedCardProps {
  car: Car;
}

export default function FeaturedCard({ car }: FeaturedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/20 via-transparent to-transparent" />

      {/* Featured Badge */}
      <div className="absolute left-6 top-6 z-20 rounded-full bg-[#E50914] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
        Featured
      </div>

      {/* Car Image */}
      <div className="relative h-[320px] overflow-hidden md:h-[420px]">
        <Image
          src={car.image}
          alt={car.name}
          fill
          priority
          className="object-contain transition duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-red-500">
          {car.brand}
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          {car.name}
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Fuel size={16} className="mr-2 inline" />
            {car.fuel}
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Gauge size={16} className="mr-2 inline" />
            {car.transmission}
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Calendar size={16} className="mr-2 inline" />
            2026
          </span>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-400">Starting From</p>

          <h3 className="mt-1 text-3xl font-bold text-white">
            {car.price || "Price On Request"}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            EMI from {car.emi || "Contact Us"}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-[#E50914] px-6 py-3 font-medium text-white transition hover:bg-red-700">
            Get Best Offer
          </button>

          <button className="group flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-white transition hover:border-[#E50914] hover:bg-white/5">
            Book Test Drive
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}