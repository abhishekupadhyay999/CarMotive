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
          badge="WHY CHOOSE US"
          title="Drive Home Your Dream Car"
          highlight="With Confidence"
          description="From selecting the perfect vehicle to completing every document, Carmotive India ensures a transparent, smooth and premium buying experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
            >

              <FeatureCard
                {...feature}
              />

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}