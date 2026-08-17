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

import ThemeToggle from "@/components/ThemeToggle";

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

  /* =========================================================
     SCROLL HANDLER
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      let current = "home";

      navLinks.forEach((item) => {
        const section = item.href.replace("#", "");
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 140;

        if (scrollY >= top) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* =====================================================
          TOP INFORMATION BAR
      ===================================================== */}

      <div
        className="
          hidden
          border-b
          border-gray-200
          bg-white
          dark:border-white/10
          dark:bg-[#050505]
          lg:block
        "
      >
        <div
          className="
            mx-auto
            flex
            h-10
            max-w-7xl
            items-center
            justify-between
            px-6
            text-[13px]
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-8">

            <a
              href="tel:+919888197553"
              className="
                flex
                items-center
                gap-2
                text-gray-600
                transition-colors
                hover:text-[#E50914]
                dark:text-gray-300
              "
            >
              <Phone
                size={14}
                className="text-[#E50914]"
              />

              +91 98881 97553
            </a>

            <div
              className="
                flex
                items-center
                gap-2
                text-gray-600
                dark:text-gray-300
              "
            >
              <Clock3
                size={14}
                className="text-[#E50914]"
              />

              10:00 AM – 8:00 PM
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-gray-600
                dark:text-gray-300
              "
            >
              <MapPin
                size={14}
                className="text-[#E50914]"
              />

              Virar (W), Maharashtra
            </div>

          </div>

          {/* RIGHT */}

          <p
            className="
              text-gray-500
              dark:text-gray-400
            "
          >
            India's Trusted Multi-Brand Car Dealership
          </p>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          sticky
          top-0
          z-50
          border-b
          transition-all
          duration-300

          bg-white
          border-gray-200

          dark:bg-[#050505]
          dark:border-white/10

          ${
            scrolled
              ? `
                shadow-lg
                backdrop-blur-xl
              `
              : ""
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex h-24 items-center justify-between">

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="#home"
              className="flex shrink-0 items-center"
            >

              {/* LIGHT MODE LOGO
                  logo4.png
              */}

              <Image
                src="/logo/logo4.png"
                alt="Carmotive India"
                width={300}
                height={100}
                priority
                className="
                  h-16
                  w-auto
                  object-contain
                  dark:hidden
                "
              />

              {/* DARK MODE LOGO
                  logo3.png
              */}

              <Image
                src="/logo/logo3.png"
                alt="Carmotive India"
                width={300}
                height={100}
                priority
                className="
                  hidden
                  h-16
                  w-auto
                  object-contain
                  dark:block
                "
              />

            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center gap-9 lg:flex">

              {navLinks.map((item) => {
                const section =
                  item.href.replace("#", "");

                const isActive =
                  activeSection === section;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      group
                      relative
                      py-2
                      text-[15px]
                      font-medium
                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "text-[#E50914]"
                          : `
                            text-gray-800
                            hover:text-[#E50914]

                            dark:text-gray-200
                            dark:hover:text-[#E50914]
                          `
                      }
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        -bottom-1
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-[#E50914]
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                );
              })}

            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}

            <div className="hidden items-center gap-3 lg:flex">

              {/* THEME TOGGLE */}

              <ThemeToggle />

              {/* CALL NOW */}

              <a
                href="tel:+919888195553"
                className="
                  rounded-full
                  border
                  border-gray-300
                  bg-transparent
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-gray-800
                  transition-all
                  duration-300

                  hover:border-[#E50914]
                  hover:bg-[#E50914]
                  hover:text-white

                  dark:border-white/20
                  dark:text-white
                  dark:hover:border-[#E50914]
                  dark:hover:bg-[#E50914]
                "
              >
                Call Now
              </a>

              {/* BOOK TEST DRIVE */}

              <Link
                href="#contact"
                className="
                  rounded-full
                  bg-[#E50914]
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-red-700/25
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-red-700
                  hover:shadow-red-700/40
                "
              >
                Book Test Drive
              </Link>

            </div>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-3
                lg:hidden
              "
            >

              <ThemeToggle />

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={
                  isOpen
                    ? "Close menu"
                    : "Open menu"
                }
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  text-gray-800
                  transition-all
                  duration-300

                  hover:border-[#E50914]
                  hover:text-[#E50914]

                  dark:border-white/20
                  dark:text-white
                "
              >
                {isOpen ? (
                  <X size={23} />
                ) : (
                  <Menu size={23} />
                )}
              </button>

            </div>

          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <AnimatePresence>
          {isOpen && (
            <>
              {/* BACKDROP */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="
                  fixed
                  inset-0
                  z-40
                  bg-black/50
                  backdrop-blur-sm
                  lg:hidden
                "
              />

              {/* DRAWER */}

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  fixed
                  right-0
                  top-0
                  z-50
                  flex
                  h-screen
                  w-[320px]
                  flex-col
                  border-l
                  border-gray-200
                  bg-white
                  shadow-2xl

                  dark:border-white/10
                  dark:bg-[#050505]
                "
              >

                {/* DRAWER HEADER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-200
                    px-6
                    py-5

                    dark:border-white/10
                  "
                >

                  {/* LIGHT MODE LOGO */}

                  <Image
                    src="/logo/logo4.png"
                    alt="Carmotive India"
                    width={180}
                    height={60}
                    className="
                      h-12
                      w-auto
                      object-contain
                      dark:hidden
                    "
                  />

                  {/* DARK MODE LOGO */}

                  <Image
                    src="/logo/logo3.png"
                    alt="Carmotive India"
                    width={180}
                    height={60}
                    className="
                      hidden
                      h-12
                      w-auto
                      object-contain
                      dark:block
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="
                      rounded-full
                      p-2
                      text-gray-700
                      transition

                      hover:bg-gray-100
                      hover:text-[#E50914]

                      dark:text-white
                      dark:hover:bg-white/10
                    "
                  >
                    <X size={24} />
                  </button>

                </div>

                {/* MOBILE LINKS */}

                <div className="flex flex-1 flex-col px-6 py-8">

                  {navLinks.map((item) => {
                    const section =
                      item.href.replace("#", "");

                    const isActive =
                      activeSection === section;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`
                          border-b
                          border-gray-200
                          py-4
                          text-lg
                          font-medium
                          transition-colors

                          dark:border-white/10

                          ${
                            isActive
                              ? "text-[#E50914]"
                              : `
                                text-gray-800
                                hover:text-[#E50914]

                                dark:text-gray-200
                              `
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  {/* CALL */}

                  <a
                    href="tel:+919888195553"
                    className="
                      mt-8
                      rounded-full
                      border
                      border-gray-300
                      py-3
                      text-center
                      font-medium
                      text-gray-800
                      transition

                      hover:border-[#E50914]
                      hover:bg-[#E50914]
                      hover:text-white

                      dark:border-white/20
                      dark:text-white
                    "
                  >
                    Call Now
                  </a>

                  {/* TEST DRIVE */}

                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="
                      mt-4
                      rounded-full
                      bg-[#E50914]
                      py-3
                      text-center
                      font-semibold
                      text-white
                      transition
                      hover:bg-red-700
                    "
                  >
                    Book Test Drive
                  </Link>

                  {/* CONTACT DETAILS */}

                  <div
                    className="
                      mt-10
                      space-y-5
                      text-sm
                      text-gray-500

                      dark:text-gray-400
                    "
                  >

                    <div className="flex items-center gap-3">
                      <Phone
                        size={16}
                        className="text-[#E50914]"
                      />
                      +91 98881 97553
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3
                        size={16}
                        className="text-[#E50914]"
                      />
                      10:00 AM – 8:00 PM
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin
                        size={16}
                        className="text-[#E50914]"
                      />
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