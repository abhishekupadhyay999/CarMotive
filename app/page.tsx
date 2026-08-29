import Navbar from "@/components/home-v2/Navbar";
import Hero from "@/components/home-v2/Hero";
import FeaturedCars from "@/components/home-v2/FeaturedCars";
import WhyChoose from "@/components/home-v2/WhyChoose";
import RecentDeliveries from "@/components/deliveries/RecentDeliveries";
import Testimonials from "@/components/Testimonal/Testimonials";
import Footer from "@/components/home-v2/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505]">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero />

      {/* =====================================================
          FEATURED CARS PREVIEW
      ===================================================== */}

      <section
        className="
          bg-white
          dark:bg-[#050505]
        "
      >
        <FeaturedCars />
      </section>

      {/* =====================================================
          WHY CHOOSE CARMOTIVE
      ===================================================== */}

      <section
        className="
          bg-gray-50
          dark:bg-[#080808]
        "
      >
        <WhyChoose />
      </section>

      {/* =====================================================
          RECENT DELIVERIES
      ===================================================== */}

      <section
        className="
          bg-white
          dark:bg-[#050505]
        "
      >
        <RecentDeliveries />
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section
        className="
          bg-gray-50
          dark:bg-[#080808]
        "
      >
        <Testimonials />
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </main>
  );
}