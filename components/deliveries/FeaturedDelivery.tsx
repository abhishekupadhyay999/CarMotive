"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Props {
  video: string;
}

export default function FeaturedDelivery({ video }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative h-[520px] overflow-hidden rounded-3xl"
    >
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="rounded-full bg-white/20 p-5 backdrop-blur-md">
          <Play className="h-10 w-10 fill-white text-white" />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 max-w-lg">
        <span className="rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black">
          OUR HAPPY CUSTOMERS
        </span>

        <h3 className="mt-5 text-4xl font-bold text-white">
          Delivering Happiness,
          <br />
          One Customer at a Time
        </h3>

        <p className="mt-4 text-zinc-300">
          Thank you for trusting Carmotive India to be part of your journey.
        </p>
      </div>
    </motion.div>
  );
}