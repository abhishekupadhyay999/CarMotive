"use client";

import { motion } from "framer-motion";
import {
  FaCar,
  FaTags,
  FaBolt,
  FaExchangeAlt,
  FaUniversity,
  FaShieldAlt,
  FaTruck,
  FaStar,
} from "react-icons/fa";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const iconMap = {
  car: FaCar,
  tag: FaTags,
  bolt: FaBolt,
  exchange: FaExchangeAlt,
  bank: FaUniversity,
  shield: FaShieldAlt,
  truck: FaTruck,
  star: FaStar,
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        bg-white
        p-8
        shadow-md
        transition-all
        duration-300
        hover:border-[#FF5A1F]
        hover:shadow-2xl
      "
    >
      {/* Decorative Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-orange-100
          transition-all
          duration-300
          group-hover:bg-[#FF5A1F]
        "
      >
        <Icon
          className="
            text-2xl
            text-[#FF5A1F]
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      {/* Bottom Accent */}
      <div className="mt-8 h-1 w-14 rounded-full bg-orange-200 transition-all duration-300 group-hover:w-24 group-hover:bg-[#FF5A1F]" />
    </motion.div>
  );
}