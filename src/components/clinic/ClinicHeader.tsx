import { MessageCircle } from "lucide-react";

const ClinicHeader = ({ whatsappUrl }: { whatsappUrl: string }) => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-clinic flex items-center justify-between h-16 px-5 lg:px-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">CityCare Clinic</span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Book Instantly on WhatsApp</span>
          <span className="sm:hidden">Book Now</span>
        </a>
      </div>
    </header>
  );
};

export default ClinicHeader;
