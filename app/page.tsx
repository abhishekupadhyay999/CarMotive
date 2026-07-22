import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero/Hero";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import BrandPartners from "@/components/BrandPartner/BrandPartner";
import EMICalculator from "@/components/emi/EMICalculator";
import RecentDeliveries from "@/components/deliveries/RecentDeliveries";
import TrustStats from "@/components/home/TrustStats";
import Testimonials from "@/components/Testimonal/Testimonials";
import Contact from "@/components/contacts/Contacts";
import Footer from "@/components/layout/Footer";
import DreamCarFinder from "@/components/DreamCar/DreamCarFinder";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero/>
      <DreamCarFinder/>
      <TrustStats/>
      <EMICalculator/>
      <BrandPartners/>
      <RecentDeliveries/>
      <WhyChoose/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}