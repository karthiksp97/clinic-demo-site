import HeroSection from "@/components/clinic/HeroSection";
import AboutSection from "@/components/clinic/AboutSection";
import ServicesSection from "@/components/clinic/ServicesSection";
import DoctorSection from "@/components/clinic/DoctorSection";
import WhyChooseUsSection from "@/components/clinic/WhyChooseUsSection";
import TestimonialsSection from "@/components/clinic/TestimonialsSection";
import HowToBookSection from "@/components/clinic/HowToBookSection";
import ContactSection from "@/components/clinic/ContactSection";
import FinalCtaSection from "@/components/clinic/FinalCtaSection";
import FloatingWhatsApp from "@/components/clinic/FloatingWhatsApp";
import ClinicHeader from "@/components/clinic/ClinicHeader";
import ClinicFooter from "@/components/clinic/ClinicFooter";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%20I%20want%20to%20book%20an%20appointment";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClinicHeader whatsappUrl={WHATSAPP_URL} />
      <main>
        <HeroSection whatsappUrl={WHATSAPP_URL} />
        <AboutSection />
        <ServicesSection />
        <DoctorSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <HowToBookSection />
        <ContactSection />
        <FinalCtaSection whatsappUrl={WHATSAPP_URL} />
      </main>
      <ClinicFooter />
      <FloatingWhatsApp whatsappUrl={WHATSAPP_URL} />
    </div>
  );
};

export default Index;
