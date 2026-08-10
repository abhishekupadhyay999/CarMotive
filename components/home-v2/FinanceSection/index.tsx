"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  X,
} from "lucide-react";

import BankMarquee from "./BankMarquee";
import EMIcalculator from "./EMICalculator";

export default function FinanceSection() {
  const [showFinanceExpert, setShowFinanceExpert] = useState(false);

  return (
    <section
      id="finance"
      className="
        relative overflow-hidden
        bg-white
        py-24
        text-gray-900
        transition-colors duration-300

        dark:bg-[#050505]
        dark:text-white

        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Light Mode Background */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_right,#f3f3f3_0%,#ffffff_70%)]
          dark:hidden
        "
      />

      {/* Dark Mode Background */}

      <div
        className="
          absolute inset-0 hidden
          bg-[radial-gradient(circle_at_top_right,#1b1b1b_0%,#050505_70%)]
          dark:block
        "
      />

      {/* Red Glow */}

      <div
        className="
          absolute right-0 top-20
          h-72 w-72
          rounded-full
          bg-red-600/10
          blur-[120px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border border-red-500/30
              bg-red-500/10
              px-5 py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#E50914]
            "
          >
            Finance Solutions
          </span>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              text-gray-900

              dark:text-white

              md:text-5xl
            "
          >
            Flexible Car Finance Solutions
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-gray-600

              dark:text-gray-400
            "
          >
            Compare loan offers from India's leading banks and NBFCs.
            Calculate your monthly EMI instantly and connect with our finance
            experts to find the right loan with competitive interest rates and
            flexible repayment options.
          </p>
        </motion.div>

        {/* =================================================
            BANK LOGOS
        ================================================= */}

        <div className="mt-14">
          <BankMarquee />
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Heading */}

            <h3
              className="
                text-3xl
                font-bold
                leading-tight
                text-gray-900

                dark:text-white

                lg:text-4xl
              "
            >
              Drive Home Your Dream Car with Easy Finance
            </h3>

            {/* Description */}

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-gray-600

                dark:text-gray-400
              "
            >
              We partner with India's most trusted banks and NBFCs to provide
              competitive interest rates, quick approvals, flexible repayment
              options and hassle-free documentation, making your car ownership
              journey smooth and stress-free.
            </p>

            {/* =================================================
                BENEFITS
            ================================================= */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                "20+ Banking Partners",
                "Lowest Interest Rates",
                "Approval in 24 Hours",
                "Minimal Documentation",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-3xl
                    border border-gray-200
                    bg-white
                    p-6
                    shadow-sm
                    backdrop-blur-xl

                    transition-all duration-300

                    hover:border-red-500/50
                    hover:shadow-[0_20px_50px_rgba(229,9,20,0.08)]

                    dark:border-white/10
                    dark:bg-white/5
                    dark:shadow-none
                    dark:hover:bg-white/10
                  "
                >
                  {/* Check */}

                  <div
                    className="
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-600
                      text-xl
                      font-bold
                      text-white
                      shadow-lg
                      shadow-red-600/30
                    "
                  >
                    ✓
                  </div>

                  <h4
                    className="
                      text-lg
                      font-semibold
                      text-gray-900

                      dark:text-white
                    "
                  >
                    {item}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setShowFinanceExpert(true)}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#E50914]
                  px-8
                  py-4
                  font-semibold
                  text-white

                  transition-all duration-300

                  hover:scale-105
                  hover:bg-red-700
                  hover:shadow-[0_15px_40px_rgba(229,9,20,0.35)]
                "
              >
                Talk to Finance Expert

                <ArrowRight
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE — EMI CALCULATOR
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <EMIcalculator />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          FINANCE EXPERT POPUP
      ===================================================== */}

      <AnimatePresence>
        {showFinanceExpert && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setShowFinanceExpert(false)}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/75
              px-6
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 25,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-md
                rounded-[30px]
                border border-gray-200
                bg-white
                p-8
                text-center
                shadow-2xl

                dark:border-white/10
                dark:bg-[#111111]
              "
            >
              {/* Close Button */}

              <button
                type="button"
                onClick={() => setShowFinanceExpert(false)}
                aria-label="Close popup"
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full

                  bg-gray-100
                  text-gray-500

                  transition

                  hover:bg-[#E50914]
                  hover:text-white

                  dark:bg-white/5
                  dark:text-gray-400
                "
              >
                <X size={20} />
              </button>

              {/* Phone Icon */}

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E50914]/10
                "
              >
                <Phone
                  size={28}
                  className="text-[#E50914]"
                />
              </div>

              {/* Heading */}

              <p
                className="
                  mt-6
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#E50914]
                "
              >
                Finance Assistance
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-gray-900

                  dark:text-white
                "
              >
                Talk to a Finance Expert
              </h3>

              <p
                className="
                  mt-4
                  leading-7
                  text-gray-500

                  dark:text-gray-400
                "
              >
                Have questions about car loans, EMI, interest rates or
                financing options? Our finance team is here to help.
              </p>

              {/* Phone Number */}

              <div
                className="
                  mt-7
                  rounded-2xl
                  border border-gray-200
                  bg-gray-50
                  p-5

                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <p
                  className="
                    text-sm
                    text-gray-500

                    dark:text-gray-500
                  "
                >
                  Call our finance team
                </p>

                <p
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-gray-900

                    dark:text-white
                  "
                >
                  9888295553
                </p>
              </div>

              {/* Call Button */}

              <a
                href="tel:+919888295553"
                className="
                  mt-6
                  flex
                  w-full
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

                  hover:bg-red-700
                  hover:shadow-[0_15px_40px_rgba(229,9,20,0.35)]
                "
              >
                <Phone size={19} />

                Call Finance Expert
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}