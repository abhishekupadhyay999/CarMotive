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
      className="relative overflow-hidden bg-[#F8FAFC] py-24"
    >
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-[160px]" />

      <Container>
        <SectionHeading
          badge="CONTACT US"
          title="Let's Find Your"
          highlight="Dream Car"
          description="Whether you're buying your first car or upgrading to your dream vehicle, our experts are here to help every step of the way."
        />

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-10 lg:grid-cols-2"
        >
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </Container>
    </section>
  );
}