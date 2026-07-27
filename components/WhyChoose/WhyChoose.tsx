"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[150px]" />

      <Container>
        <SectionHeading
          badge="WHY CHOOSE CARMOTIVE"
          title="Why Thousands Trust"
          highlight="Carmotive India"
          description="From choosing the right vehicle to arranging finance and completing documentation, we deliver a transparent, hassle-free and premium car-buying experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#FF5A1F] via-[#FF6A2A] to-[#FF7A3D] p-10 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-black text-white md:text-4xl">
            Ready to Drive Home Your Dream Car?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-orange-100">
            Discover India's leading automobile brands, attractive finance
            options, seamless documentation, and unmatched customer support—all
            under one roof. Let Carmotive India make your car-buying journey
            simple, transparent and enjoyable.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#FF5A1F] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Book a Test Drive
            </a>

            <a
              href="#dream-car-finder"
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#FF5A1F]"
            >
              Explore Cars
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-white/20 pt-8 text-white">
            <div>
              <h4 className="text-3xl font-black">20+</h4>
              <p className="text-orange-100">Car Brands</p>
            </div>

            <div>
              <h4 className="text-3xl font-black">1000+</h4>
              <p className="text-orange-100">Happy Customers</p>
            </div>

            <div>
              <h4 className="text-3xl font-black">Easy</h4>
              <p className="text-orange-100">Finance Support</p>
            </div>

            <div>
              <h4 className="text-3xl font-black">100%</h4>
              <p className="text-orange-100">Transparent Process</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}