"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import DeliveryCard from "./DeliveryCard";
import { deliveries } from "@/data/deliveries";

export default function RecentDeliveries() {
  return (
    <section
      id="customers"
      className="relative overflow-hidden bg-[#F8FAFC] py-24"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-[140px]" />

      <Container>

        <SectionHeading
          badge="OUR HAPPY CUSTOMERS"
          title="Every Delivery Begins"
          highlight="A New Journey"
          description="Every vehicle we deliver marks the beginning of an exciting journey. Thank you to every customer who trusted Carmotive India."
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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