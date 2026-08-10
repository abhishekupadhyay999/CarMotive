"use client";

import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-gray-900
        transition-colors
        duration-300

        dark:bg-[#050505]
        dark:text-white

        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      {/* Light Mode Background */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,#f5f5f5_0%,#ffffff_65%)]
          dark:hidden
        "
      />

      {/* Dark Mode Background */}

      <div
        className="
          absolute
          inset-0
          hidden
          bg-[radial-gradient(circle_at_top_left,#1b1b1b_0%,#050505_70%)]
          dark:block
        "
      />

      {/* Red Glow — Left */}

      <div
        className="
          absolute
          left-[-120px]
          top-20
          h-72
          w-72
          rounded-full
          bg-[#E50914]/5
          blur-[120px]

          dark:bg-[#E50914]/10
        "
      />

      {/* Red Glow — Right */}

      <div
        className="
          absolute
          bottom-0
          right-[-120px]
          h-72
          w-72
          rounded-full
          bg-[#E50914]/5
          blur-[120px]

          dark:bg-[#E50914]/10
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10">
        <Container>
          {/* Section Heading */}

          <SectionHeading
            badge="CONTACT US"
            title="Let's Find Your"
            highlight="Dream Car"
            description="Whether you're buying your first car or upgrading to your dream vehicle, our experts are here to help every step of the way."
          />

          {/* =================================================
              CONTACT SECTION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
            className="
              mt-16
              grid
              gap-10
              lg:grid-cols-2
            "
          >
            {/* Contact Information */}

            <ContactInfo />

            {/* Contact Form */}

            <ContactForm />
          </motion.div>
        </Container>
      </div>
    </section>
  );
}