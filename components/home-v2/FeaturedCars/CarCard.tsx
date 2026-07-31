"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Fuel, Gauge, Heart } from "lucide-react";
import type { Car } from "./cars";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-[#E50914]/30 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-gray-100 to-white">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:bg-[#E50914] hover:text-white">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand */}
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#E50914]">
          {car.brand}
        </p>

        {/* Name */}
        <h3 className="mt-2 text-3xl font-bold text-gray-900">
          {car.name}
        </h3>

        {/* Specs */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700">
            <Fuel size={15} />
            {car.fuel}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700">
            <Gauge size={15} />
            {car.transmission}
          </span>
        </div>

        {/* Price */}
        <div className="mt-6 border-t border-gray-200 pt-5">
          <p className="text-sm text-gray-500">
            Starting From
          </p>

          <h4 className="mt-1 text-3xl font-bold text-gray-900">
            {car.price || "Price On Request"}
          </h4>

          <p className="mt-1 text-sm text-gray-500">
            EMI {car.emi || "Contact Us"}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex gap-3">
          <button className="flex-1 rounded-full bg-[#E50914] px-5 py-3 font-semibold text-white transition hover:bg-red-700">
            Get Best Offer
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-[#E50914] hover:text-[#E50914]">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 w-0 bg-[#E50914] transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}