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
      className="group relative aspect-[4/4.2] overflow-hidden rounded-[30px] bg-white shadow-lg cursor-pointer"
    >
      <Image
        src={image}
        alt="Happy Customer Delivery"
        fill
        priority={priority}
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-60 transition-all duration-300 group-hover:opacity-90" />

      {/* Badge */}

      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-md">

        <CheckCircle2
          size={18}
          className="text-[#FF5A1F]"
        />

        <span className="text-sm font-semibold text-gray-900">
          Successfully Delivered
        </span>

      </div>

      {/* Content */}

      <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

        <span className="inline-block rounded-full bg-[#FF5A1F] px-4 py-1 text-xs font-semibold uppercase tracking-wider">
          Carmotive India
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          Thank You
        </h3>

        <p className="mt-2 leading-7 text-gray-200">
          Thank you for trusting
          <span className="font-semibold text-white">
            {" "}Carmotive India
          </span>
          . We wish you many happy and safe journeys ahead.
        </p>

      </div>

      {/* Shine Effect */}

      <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[130%]" />

    </motion.div>
  );
}