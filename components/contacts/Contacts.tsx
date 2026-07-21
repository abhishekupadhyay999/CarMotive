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

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          {/* Map Heading */}
          <div className="mb-8 text-center">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF5A1F]">
              VISIT OUR SHOWROOM
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Find Us on the Map
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Visit our Virar showroom and experience India's trusted
              multi-brand car dealership with a wide range of premium vehicles.
            </p>
          </div>

          {/* Map Card */}
          <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d101371.9458009456!2d72.97680371178065!3d19.227607382141205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7ab00021d86e1%3A0xcd86574557684753!2sCarmotive%20India%20(India%E2%80%99s%20Best%20Multibrand%20Car%20Dealer)%2C%20Anora%20Residency%2C%20B%204%2F5%2F6%2C%20Sahayog%20Hospital%20Rd%2C%20Gokul%20Twp%2C%20Virar%20West%2C%20Vasai-Virar%2C%20Maharashtra%20401303!3m2!1d19.4475655!2d72.80349749999999!5e0!3m2!1sen!2sin!4v1784571862772!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full"
            />

            {/* Bottom CTA */}
            <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-200 p-8 md:flex-row">

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Visit Carmotive India
                </h3>

                <p className="mt-2 text-gray-600">
                  Shop No. B-4/5/6, Anora Residency,
                  Sahayog Hospital Road,
                  Jakat Naka,
                  Virar (West),
                  Maharashtra - 401303
                </p>
              </div>

              <div className="flex gap-4">

                <a
                  href="https://share.google/9ZoOsji7bdKA8AEXB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#FF5A1F] px-7 py-4 font-semibold text-white transition hover:bg-[#E84A12]"
                >
                  Get Directions
                </a>

             <a
  href="tel:+919888195553"
  onClick={() => {
    if (window.innerWidth > 768) {
      alert("Call us at +91 98881 95553");
    }
  }}
  className="rounded-full border border-gray-300 px-7 py-4 font-semibold text-gray-800 transition hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
>
  📞 Call Now
</a>
                

              </div>

            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}