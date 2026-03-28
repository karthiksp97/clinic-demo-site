import { useState } from "react";
import HeroSection from "@/components/clinic/HeroSection";
import KpiSection from "@/components/clinic/KpiSection";
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
import ScrollReveal from "@/components/clinic/ScrollReveal";
import WhatsAppMock from "@/components/clinic/WhatsAppMock";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%20I%20want%20to%20book%20an%20appointment";

const Index = () => {
  const [mockOpen, setMockOpen] = useState(false);

  const openMock = (e: React.MouseEvent) => {
    e.preventDefault();
    setMockOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <ClinicHeader whatsappUrl={WHATSAPP_URL} onBookClick={openMock} />
      <main>
        <HeroSection whatsappUrl={WHATSAPP_URL} onBookClick={openMock} />
        <ScrollReveal>
          <KpiSection />
        </ScrollReveal>
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal>
          <DoctorSection />
        </ScrollReveal>
        <ScrollReveal>
          <WhyChooseUsSection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal>
          <HowToBookSection />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
        <ScrollReveal>
          <FinalCtaSection whatsappUrl={WHATSAPP_URL} onBookClick={openMock} />
        </ScrollReveal>
      </main>
      <ClinicFooter />
      <FloatingWhatsApp whatsappUrl={WHATSAPP_URL} onBookClick={openMock} />
      <WhatsAppMock open={mockOpen} onClose={() => setMockOpen(false)} />
    </div>
  );
};

export default Index;
