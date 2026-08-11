"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import DeliveryCard from "./DeliveryCard";
import { deliveries } from "@/data/deliveries";

export default function RecentDeliveries() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-white
        py-24
        transition-colors duration-300
        dark:bg-[#080808]
      "
    >
      {/* Background Blur */}

      <div
        className="
          pointer-events-none
          absolute left-0 top-0
          h-72 w-72
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
          absolute bottom-0 right-0
          h-80 w-80
          rounded-full
          bg-orange-200/40
          blur-[140px]
          dark:bg-red-950/20
          dark:opacity-40
        "
      />

      <Container>
        <SectionHeading
          badge="OUR HAPPY CUSTOMERS"
          title="Every Delivery Begins"
          highlight="A New Journey"
          description="Every vehicle we deliver marks the beginning of an exciting journey. Thank you to every customer who trusted Carmotive India."
        />

        {/* Delivery Cards */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative z-10
            mt-16
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {deliveries.map((item, index) => (
            <DeliveryCard
              key={item.id}
              image={item.image}
              priority={index < 3}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}