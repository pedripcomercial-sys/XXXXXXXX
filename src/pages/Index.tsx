import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VisionSection from "@/components/VisionSection";
import HistorySection from "@/components/HistorySection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="stemp-gradient min-h-screen">
      <HeroSection />
      <ServicesSection />
      <VisionSection />
      <HistorySection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
