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

  const filteredBrands = useMemo(() => {
    if (active === "All") return brands;

    return brands.filter((brand) => brand.categories.includes(active));
  }, [active]);

  const firstRow = filteredBrands.filter((_, index) => index % 2 === 0);
  const secondRow = filteredBrands.filter((_, index) => index % 2 !== 0);

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
          badge="20+ LEADING CAR BRANDS"
          title="Explore India's"
          highlight="Top Automotive Brands"
          description="Compare cars from India's leading automobile manufacturers—all under one roof. From hatchbacks and SUVs to luxury and electric vehicles, find the perfect car for your needs."
        />

        <BrandFilter
          active={active}
          onChange={(value) => setActive(value as BrandCategory)}
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          transition={{ delay: 0.2 }}
          className="mt-20 rounded-[32px] bg-gradient-to-r from-[#FF5A1F] to-[#FF7A3D] p-10 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-black text-white">
            Looking for a Specific Car?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            Our experts can help you compare models, arrange finance,
            evaluate your exchange vehicle, and find the perfect car that
            fits your budget and lifestyle.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#FF5A1F] transition-all duration-300 hover:scale-105"
          >
            Talk to Our Experts
          </a>
        </motion.div>
      </Container>
    </section>
  );
}