"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "./TestimonialCard";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F8FAFC] py-24"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-[140px]" />

      <Container>

        <SectionHeading
          badge="GOOGLE REVIEWS"
          title="Trusted by"
          highlight="Happy Customers"
          description="Real stories from customers who chose Carmotive India for their dream car."
        />

        {/* Rating Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-14
          mb-16
          rounded-[32px]
          bg-white
          border
          border-gray-200
          p-10
          shadow-lg"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <div className="flex items-center gap-2">

                <Star
                  className="fill-[#FFB400] text-[#FFB400]"
                />

                <h2 className="text-4xl font-bold text-gray-900">
                  4.8/5
                </h2>

              </div>

              <p className="mt-3 text-gray-600">
                Based on 84+ Google Reviews
              </p>

            </div>

            <a
              href="https://www.google.com/search?sxsrf=APpeQnvKxB9EhFfhKavpxnqo3yAHYkiHow:1784569971883&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_50L--Z_jtN_-f_uFtTrti-zI-w1gka1WQ8g00bU0nU9qJ2BA1vQvHqihUReQpQnWDQKjA_mbvQO0tR-xgjPn4dwtA9RN7JIuxhsn1PtM0MTSVwAMRG-CMkjTSVcsAISUYfuH4aX7HdG_a1Bp171znYTlDiK&q=Carmotive+India+(India’s+Best+Multibrand+Car+Dealer)+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#FF5A1F]
              px-6
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#E84A12]"
            >
              View Google Reviews

              <ArrowUpRight size={18} />
            </a>

          </div>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
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
                delay: index * .08,
              }}
            >
              <TestimonialCard {...item} />
            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}