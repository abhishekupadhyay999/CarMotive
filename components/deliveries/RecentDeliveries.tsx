"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import DeliveryCard from "./DeliveryCard";

import { deliveries } from "@/data/deliveries";

export default function RecentDeliveries() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth * 0.8;

    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        transition-colors
        duration-300
        dark:bg-[#080808]
      "
    >
      {/* =====================================================
          BACKGROUND BLUR
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-72
          w-72
          rounded-full
          bg-orange-100
          blur-[120px]
          opacity-60
          dark:bg-red-950/20
          dark:opacity-40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-orange-200/40
          blur-[140px]
          dark:bg-red-950/20
          dark:opacity-40
        "
      />

      <Container>

        {/* ===================================================
            HEADING
        =================================================== */}

        <SectionHeading
          badge="OUR HAPPY CUSTOMERS"
          title="Every Delivery Begins"
          highlight="A New Journey"
          description="Every vehicle we deliver marks the beginning of an exciting journey. Thank you to every customer who trusted Carmotive India."
        />

        {/* ===================================================
            SLIDER CONTROLS
        =================================================== */}

        <div className="relative z-10 mt-8 flex justify-end gap-3">

          <button
            type="button"
            onClick={() => scrollSlider("left")}
            aria-label="Previous deliveries"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-gray-800
              shadow-sm
              transition-all
              duration-300

              hover:border-[#E50914]
              hover:bg-[#E50914]
              hover:text-white

              dark:border-white/10
              dark:bg-[#111111]
              dark:text-white
              dark:hover:border-[#E50914]
              dark:hover:bg-[#E50914]
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scrollSlider("right")}
            aria-label="Next deliveries"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-gray-800
              shadow-sm
              transition-all
              duration-300

              hover:border-[#E50914]
              hover:bg-[#E50914]
              hover:text-white

              dark:border-white/10
              dark:bg-[#111111]
              dark:text-white
              dark:hover:border-[#E50914]
              dark:hover:bg-[#E50914]
            "
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* ===================================================
            DELIVERY SLIDER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          ref={sliderRef}
          className="
            relative
            z-10
            mt-5
            flex
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-4
            snap-x
            snap-mandatory

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {deliveries.map((item, index) => (
            <div
              key={item.id}
              className="
                w-[82vw]
                shrink-0
                snap-start

                sm:w-[70vw]

                md:w-[48%]

                lg:w-[32%]

                xl:w-[30%]
              "
            >
              <DeliveryCard
                image={item.image}
                priority={index < 3}
              />
            </div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}