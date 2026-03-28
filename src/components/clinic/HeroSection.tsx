import heroImage from "@/assets/hero-clinic.jpg";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  whatsappUrl: string;
  onBookClick: (e: React.MouseEvent) => void;
}

const HeroSection = ({ whatsappUrl, onBookClick }: HeroSectionProps) => {
  const [count, setCount] = useState(0);
  const target = 127;
  const ref = useRef<number>();

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="CityCare Clinic - Modern healthcare facility"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-clinic-navy/80 via-clinic-navy/60 to-clinic-navy/30" />
      </div>
      <div className="relative section-padding container-clinic min-h-[520px] md:min-h-[600px] flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
            Get More Patient Bookings Without Phone Calls
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
            Patients can book instantly via WhatsApp — no missed enquiries
          </p>
          <a
            href={whatsappUrl}
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:brightness-110 transition-all shadow-lg cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            Book Instantly on WhatsApp
          </a>
          <p className="text-primary-foreground/60 text-sm mt-3">
            Most patients prefer WhatsApp over calling
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
