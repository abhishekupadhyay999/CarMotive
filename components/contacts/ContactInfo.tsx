"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        rounded-[32px]
        border border-gray-200
        bg-white
        p-8
        shadow-lg
        transition-colors duration-300

        dark:border-white/10
        dark:bg-[#111111]
        dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          rounded-full
          border border-[#E50914]/20
          bg-[#E50914]/5
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#E50914]
        "
      >
        Visit Our Showroom
      </span>

      {/* Heading */}

      <h3
        className="
          mt-5
          text-3xl
          font-bold
          text-gray-900

          dark:text-white
        "
      >
        We're Ready To Help You
      </h3>

      <p
        className="
          mt-4
          leading-8
          text-gray-600

          dark:text-gray-400
        "
      >
        Whether you're looking for your first car or upgrading to your
        dream vehicle, our experts are here to guide you at every step.
      </p>

      {/* =====================================================
          PHONE
      ===================================================== */}

      <div className="mt-8 flex items-start gap-4">
        <div
          className="
            shrink-0
            rounded-2xl
            bg-red-50
            p-4

            dark:bg-[#E50914]/10
          "
        >
          <Phone
            className="text-[#E50914]"
            size={24}
          />
        </div>

        <div>
          <p
            className="
              font-semibold
              text-gray-900

              dark:text-white
            "
          >
            Call Us
          </p>

          <a
            href="tel:+919888195553"
            className="
              mt-1
              block
              text-gray-600
              transition
              hover:text-[#E50914]

              dark:text-gray-400
            "
          >
            +91 98881 95553
          </a>

          <a
            href="tel:+919888295553"
            className="
              block
              text-gray-600
              transition
              hover:text-[#E50914]

              dark:text-gray-400
            "
          >
            +91 98882 95553
          </a>
        </div>
      </div>

      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <div className="mt-6 flex items-start gap-4">
        <div
          className="
            shrink-0
            rounded-2xl
            bg-green-50
            p-4

            dark:bg-green-500/10
          "
        >
          <MessageCircle
            className="text-green-600"
            size={24}
          />
        </div>

        <div>
          <p
            className="
              font-semibold
              text-gray-900

              dark:text-white
            "
          >
            WhatsApp
          </p>

          <a
            href="https://wa.me/919888195553"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-1
              block
              text-gray-600
              transition
              hover:text-green-600

              dark:text-gray-400
            "
          >
            Chat with us instantly
          </a>
        </div>
      </div>

      {/* =====================================================
          EMAIL
      ===================================================== */}

      <div className="mt-6 flex items-start gap-4">
        <div
          className="
            shrink-0
            rounded-2xl
            bg-red-50
            p-4

            dark:bg-[#E50914]/10
          "
        >
          <Mail
            className="text-[#E50914]"
            size={24}
          />
        </div>

        <div>
          <p
            className="
              font-semibold
              text-gray-900

              dark:text-white
            "
          >
            Email
          </p>

          <a
            href="mailto:sales@carmotiveindia.com"
            className="
              mt-1
              block
              text-gray-600
              transition
              hover:text-[#E50914]

              dark:text-gray-400
            "
          >
            sales@carmotiveindia.com
          </a>
        </div>
      </div>

      {/* =====================================================
          ADDRESS
      ===================================================== */}

      <div className="mt-6 flex items-start gap-4">
        <div
          className="
            shrink-0
            rounded-2xl
            bg-red-50
            p-4

            dark:bg-[#E50914]/10
          "
        >
          <MapPin
            className="text-[#E50914]"
            size={24}
          />
        </div>

        <div>
          <p
            className="
              font-semibold
              text-gray-900

              dark:text-white
            "
          >
            Showroom Address
          </p>

          <p
            className="
              mt-1
              leading-7
              text-gray-600

              dark:text-gray-400
            "
          >
            Shop No. B-4/5/6,
            <br />
            Anora Residency,
            <br />
            Sahayog Hospital Road,
            <br />
            Jakat Naka,
            <br />
            Virar (West),
            <br />
            Maharashtra - 401303
          </p>
        </div>
      </div>

      {/* =====================================================
          BUSINESS HOURS
      ===================================================== */}

      <div className="mt-6 flex items-start gap-4">
        <div
          className="
            shrink-0
            rounded-2xl
            bg-red-50
            p-4

            dark:bg-[#E50914]/10
          "
        >
          <Clock3
            className="text-[#E50914]"
            size={24}
          />
        </div>

        <div>
          <p
            className="
              font-semibold
              text-gray-900

              dark:text-white
            "
          >
            Business Hours
          </p>

          <p
            className="
              mt-1
              text-gray-600

              dark:text-gray-400
            "
          >
            Monday – Saturday
          </p>

          <p
            className="
              text-gray-600

              dark:text-gray-400
            "
          >
            10:00 AM – 8:00 PM
          </p>

          <p
            className="
              mt-2
              text-gray-600

              dark:text-gray-400
            "
          >
            Sunday
          </p>

          <p
            className="
              text-gray-600

              dark:text-gray-400
            "
          >
            10:00 AM – 7:00 PM
          </p>
        </div>
      </div>

      {/* =====================================================
          CTA BUTTONS
      ===================================================== */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        {/* Directions */}

        <a
          href="https://share.google/9ZoOsji7bdKA8AEXB"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#E50914]
            px-6
            py-4
            font-semibold
            text-white
            transition-all duration-300

            hover:-translate-y-1
            hover:bg-red-700
            hover:shadow-[0_15px_35px_rgba(229,9,20,0.25)]
          "
        >
          Get Directions

          <ArrowUpRight size={18} />
        </a>

        {/* WhatsApp */}

        <a
          href="https://wa.me/919888195553"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-gray-300
            bg-white
            px-6
            py-4
            font-semibold
            text-gray-800
            transition-all duration-300

            hover:border-[#E50914]
            hover:text-[#E50914]

            dark:border-white/10
            dark:bg-white/5
            dark:text-gray-200
            dark:hover:bg-white/10
          "
        >
          WhatsApp Us
        </a>
      </div>
    </motion.div>
  );
}