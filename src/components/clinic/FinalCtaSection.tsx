import { MessageCircle } from "lucide-react";

const FinalCtaSection = ({ whatsappUrl }: { whatsappUrl: string }) => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-clinic text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Book Your Appointment Instantly
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
          No calls, no waiting. Just send a WhatsApp message and we'll take care of the rest.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 transition-all shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Book Now
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
