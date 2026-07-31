"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "./navlinks";

interface DesktopNavProps {
  scrolled: boolean;
}

export default function DesktopNav({
  scrolled,
}: DesktopNavProps) {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={`hidden lg:flex sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo3.png"
            alt="Carmotive India"
            width={180}
            height={60}
            priority
            className="h-auto w-40"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative text-[15px] font-medium text-white transition"
            >
              {item.title}

              <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#E50914] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}