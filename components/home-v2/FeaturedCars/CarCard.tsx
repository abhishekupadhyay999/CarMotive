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
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] shadow-xl transition-all duration-500 hover:border-[#E50914]/50 hover:shadow-[0_20px_60px_rgba(229,9,20,0.15)]"
    >
      {/* Image */}

      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#1b1b1b] to-[#0d0d0d]">

        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-contain p-6 transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Wishlist */}

        <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:bg-[#E50914]">
          <Heart size={18} />
        </button>

        {/* Brand */}

        <div className="absolute bottom-5 left-5 rounded-full bg-[#E50914] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
          {car.brand}
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-3xl font-bold text-white">
          {car.name}
        </h3>

        {/* Specs */}

        <div className="mt-5 flex flex-wrap gap-3">

          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
            <Fuel size={15} />
            {car.fuel}
          </span>

          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300">
            <Settings2 size={15} />
            {car.transmission}
          </span>

        </div>

        {/* Price */}

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">

          <p className="text-sm text-gray-400">
            Starting From
          </p>

          <h4 className="mt-2 flex items-center gap-2 text-2xl font-bold text-white">
            <BadgeIndianRupee size={20} />
            {car.price}
          </h4>

          <p className="mt-2 text-sm text-gray-400">
            EMI from{" "}
            <span className="font-medium text-white">
              {car.emi}
            </span>
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-7 flex gap-3">

          <button className="flex-1 rounded-full bg-[#E50914] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:scale-[1.02]">
            Get Best Price
          </button>

          <Link
            href={`/cars/${car.slug}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914]"
          >
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

      {/* Bottom Accent */}

      <div className="h-[3px] w-0 bg-[#E50914] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}