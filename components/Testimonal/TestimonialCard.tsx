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
      transition-all
      duration-300
      hover:border-[#FF5A1F]
      hover:shadow-2xl"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-100 blur-3xl opacity-0 group-hover:opacity-100 transition" />

      <Quote
        size={36}
        className="text-[#FF5A1F]"
      />

      <div className="mt-6 flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-[#FFB400] text-[#FFB400]"
          />
        ))}
      </div>

      <p className="mt-6 leading-8 text-gray-600">
        "{review}"
      </p>

      <div className="mt-8 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5A1F] text-lg font-bold text-white">
            {name.charAt(0)}
          </div>

          <div>

            <h4 className="font-bold text-gray-900">
              {name}
            </h4>

            <p className="text-sm text-gray-500">
              {car}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          <BadgeCheck size={14} />
          Verified
        </div>

      </div>
    </motion.div>
  );
}