"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import BrandFilter from "./BrandFilter";
import BrandMarquee from "./BrandMarquee";
import { brands, BrandCategory } from "@/data/brand";

export default function BrandPartners() {
  const [active, setActive] = useState<BrandCategory>("All");

  const filtered = useMemo(() => {
    return active === "All"
      ? brands
      : brands.filter((brand) => brand.category === active);
  }, [active]);

  const firstRow = filtered.filter((_, index) => index % 2 === 0);
  const secondRow = filtered.filter((_, index) => index % 2 !== 0);

  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Decoration */}

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100 blur-[130px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-[150px]" />

      <Container>

        <SectionHeading
          badge="OUR BRAND PARTNERS"
          title="Choose From India's"
          highlight="Leading Automobile Brands"
          description="Discover hatchbacks, sedans, SUVs, luxury cars and electric vehicles from India's most trusted automobile brands."
        />

        <BrandFilter
          active={active}
          onChange={(value) => setActive(value as BrandCategory)}
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-14 space-y-8"
        >

          <BrandMarquee brands={firstRow} />

          {secondRow.length > 0 && (
            <BrandMarquee
              brands={secondRow}
              reverse
            />
          )}

        </motion.div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 rounded-[32px] bg-gradient-to-r from-[#FF5A1F] to-[#FF7A3D] p-10 text-center shadow-2xl"
        >

          <h3 className="text-3xl font-black text-white">
            Can't Find Your Preferred Brand?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            Our automobile experts will help you source the perfect vehicle
            and arrange the best finance options for your requirements.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#FF5A1F] transition-all duration-300 hover:scale-105"
          >
            Contact Our Experts
          </a>

        </motion.div>

      </Container>
    </section>
  );
}