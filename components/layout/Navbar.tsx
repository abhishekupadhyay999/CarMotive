"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "EMI", href: "#emi" },
  { name: "Finance", href: "/finance" },
  { name: "Brands", href: "#brands" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (pathname !== "/") return;

      const sections = navLinks
        .filter((item) => item.href.startsWith("#"))
        .map((item) => ({
          id: item.href,
          element: document.querySelector(item.href),
        }));

      const current = sections.find((section) => {
        if (!section.element) return false;

        const rect = section.element.getBoundingClientRect();

        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActive(current.id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gray-200 bg-white/90 shadow-xl backdrop-blur-3xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-36 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <Image
              src="/logo/logo1.jpeg"
              alt="Carmotive India"
              width={700}
              height={220}
              priority
              className="h-24 lg:h-28 w-auto object-contain transition-all duration-300 hover:scale-105"
            />

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-12 lg:flex">

            {navLinks.map((item) => {
              const isPageLink = item.href.startsWith("/");

              const isActive = isPageLink
                ? pathname === item.href
                : active === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-[15px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#FF5A1F]"
                      : scrolled
                      ? "text-gray-700 hover:text-[#FF5A1F]"
                      : "text-white hover:text-[#FF5A1F]"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#FF5A1F]"
                    />
                  )}
                </Link>
              );
            })}

          </nav>

          {/* Desktop Right */}

          <div className="hidden items-center gap-4 lg:flex">

            <a
              href="tel:+919888195553"
              className="flex items-center gap-2 rounded-full border border-[#FF5A1F] px-5 py-3 font-semibold text-[#FF5A1F] transition-all duration-300 hover:bg-[#FF5A1F] hover:text-white"
            >
              <Phone size={18} />
              +91 98881 95553
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF5A1F] to-orange-500 px-7 py-3 font-semibold text-white shadow-xl shadow-orange-300 transition-all duration-300 hover:scale-105"
            >
              Get Best Deal

              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition lg:hidden ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>

      </motion.header>
            {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 22 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex h-32 items-center justify-between border-b border-gray-200 px-6">

                <Image
                  src="/logo/logo1.jpeg"
                  alt="Carmotive India"
                  width={320}
                  height={120}
                  priority
                  className="h-20 w-auto object-contain"
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 transition hover:bg-gray-100"
                >
                  <X size={30} />
                </button>

              </div>

              {/* Navigation */}
              <div className="flex flex-1 flex-col px-6 py-8">

                <div className="space-y-2">

                  {navLinks.map((item) => {
                    const isPageLink = item.href.startsWith("/");

                    const isActive = isPageLink
                      ? pathname === item.href
                      : active === item.href;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-xl px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-orange-50 text-[#FF5A1F]"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#FF5A1F]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                </div>

                {/* Bottom CTA */}
                <div className="mt-auto space-y-4 pt-10">

                  <a
                    href="tel:+919888195553"
                    className="flex items-center justify-center gap-2 rounded-full border-2 border-[#FF5A1F] py-4 font-semibold text-[#FF5A1F] transition-all duration-300 hover:bg-[#FF5A1F] hover:text-white"
                  >
                    <Phone size={18} />
                    +91 98881 95553
                  </a>

                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF5A1F] to-orange-500 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Best Deal

                    <ChevronRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                </div>

              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}