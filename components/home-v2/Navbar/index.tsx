"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Clock3,
  MapPin,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Brands", href: "#brands" },
  { label: "Featured Cars", href: "#featured-cars" },
  { label: "Exchange", href: "#exchange" },
  { label: "Finance", href: "#finance" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((item) =>
        item.href.replace("#", "")
      );

      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 140;

          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);return (
  <>
    {/* ===================== TOP BAR ===================== */}

    <div className="hidden border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[13px] text-gray-300">

        <div className="flex items-center gap-8">

          <a
            href="tel:+919888197553"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Phone size={14} className="text-[#E50914]" />
            +91 98881 97553
          </a>

          <div className="flex items-center gap-2">
            <Clock3 size={14} className="text-[#E50914]" />
            10:00 AM – 8:00 PM
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#E50914]" />
            Virar (W), Maharashtra
          </div>

        </div>

        <p className="text-gray-400">
          India's Trusted Multi-Brand Car Dealership
        </p>

      </div>
    </div>

    {/* ===================== NAVBAR ===================== */}

    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/75 shadow-2xl backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex h-24 items-center justify-between">

          {/* LOGO */}

          <Link
            href="#home"
            className="flex items-center"
          >
            <Image
              src="/logo/logo3.png"
              alt="Carmotive India"
              width={300}
              height={100}
              priority
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-16" : "h-20"
              }`}
            />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navLinks.map((item) => {

              const isActive =
                activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative text-[15px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#E50914] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );

            })}

          </nav>

          {/* CTA */}

          <div className="hidden items-center gap-4 lg:flex">

            <a
              href="tel:+919888197553"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914]"
            >
              Call Now
            </a>

            <Link
              href="#contact"
              className="rounded-full bg-[#E50914] px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-red-700/30 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
            >
              Book Test Drive
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#E50914] lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              />

              {/* Drawer */}

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35 }}
                className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col border-l border-white/10 bg-[#050505] shadow-2xl"
              >
                {/* Header */}

                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

                  <Image
                    src="/logo/logo3.png"
                    alt="Carmotive India"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />

                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 transition hover:bg-white/10"
                  >
                    <X size={24} className="text-white" />
                  </button>

                </div>

                {/* Links */}

                <div className="flex flex-1 flex-col px-6 py-8">

                  {navLinks.map((item) => {

                    const isActive =
                      activeSection === item.href.replace("#", "");

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`border-b border-white/10 py-4 text-lg font-medium transition ${
                          isActive
                            ? "text-[#E50914]"
                            : "text-white hover:text-[#E50914]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );

                  })}

                  <a
                    href="tel:+919888197553"
                    className="mt-8 rounded-full border border-white/20 py-3 text-center font-medium text-white transition hover:border-[#E50914] hover:bg-[#E50914]"
                  >
                    Call Now
                  </a>

                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 rounded-full bg-[#E50914] py-3 text-center font-semibold text-white transition hover:bg-red-700"
                  >
                    Book Test Drive
                  </Link>

                  {/* Contact */}

                  <div className="mt-10 space-y-5 text-sm text-gray-400">

                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-[#E50914]" />
                      +91 98881 97553
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3 size={16} className="text-[#E50914]" />
                      10:00 AM – 8:00 PM
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-[#E50914]" />
                      Virar (W), Maharashtra
                    </div>

                  </div>

                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </motion.header>
    </>
  );
}