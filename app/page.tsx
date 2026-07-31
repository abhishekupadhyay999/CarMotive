import Navbar from "@/components/home-v2/Navbar";
import Hero from "@/components/home-v2/Hero";
import Brands from "@/components/home-v2/Brands";
import RecentDeliveries from "@/components/deliveries/RecentDeliveries";
import Testimonials from "@/components/Testimonal/Testimonials";
import Contact from "@/components/contacts/Contacts";
import FeaturedCars from "@/components/home-v2/FeaturedCars";
import ExchangeSection from "@/components/home-v2/ExchangeSection";
import FinanceSection from "@/components/home-v2/FinanceSection";
import WhyChoose from "@/components/home-v2/WhyChoose";
import Footer from "@/components/home-v2/Footer";
import FindYourCar from "@/components/FindYourCar";
import SearchResult from "@/components/SearchResult"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero/>
      <FindYourCar/>
      <SearchResult/>
      <Brands/>
      <FeaturedCars/>
      <ExchangeSection/>
      <FinanceSection/>
      <WhyChoose/>
      <RecentDeliveries/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}