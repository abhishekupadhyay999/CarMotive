"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const banks = [
  { name: "HDFC Bank", logo: "/images/banks/hdfc.jpg" },
  { name: "ICICI Bank", logo: "/images/banks/icici.png" },
  { name: "Axis Bank", logo: "/images/banks/axis.png" },
  { name: "State Bank of India", logo: "/images/banks/sbi.png" },
  { name: "Bank of Baroda", logo: "/images/banks/bob.svg" },
  { name: "Punjab National Bank", logo: "/images/banks/pnb.jpeg" },
  { name: "Union Bank", logo: "/images/banks/union.png" },
  { name: "Bank of Maharashtra", logo: "/images/banks/bom.png" },
  { name: "Federal Bank", logo: "/images/banks/federal.png" },
  { name: "Kotak Mahindra Bank", logo: "/images/banks/kotak.png" },
  { name: "IndusInd Bank", logo: "/images/banks/indusland.png" },
  { name: "IDFC FIRST Bank", logo: "/images/banks/idfc.png" },
];
export default function PartnerBanks() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF5A1F]">
            TRUSTED BANKING PARTNERS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Finance Through
            <span className="text-[#FF5A1F]"> India's Leading Banks</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We collaborate with India's most trusted banks and financial
            institutions to help you secure the best interest rates and faster
            approvals.
          </p>
        </div>

        {/* Row 1 */}

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-8"
        >
          {[...banks, ...banks].map((bank, index) => (
            <div
              key={index}
              className="flex h-36 w-56 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A1F] hover:shadow-xl"
            >
              <Image
                src={bank.logo}
                alt={bank.name}
                width={150}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mt-8 flex w-max gap-8"
        >
          {[...banks.reverse(), ...banks.reverse()].map((bank, index) => (
            <div
              key={index}
              className="flex h-36 w-56 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A1F] hover:shadow-xl"
            >
              <Image
                src={bank.logo}
                alt={bank.name}
                width={150}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade */}

      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-gray-50 to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-gray-50 to-transparent" />
    </section>
  );
}