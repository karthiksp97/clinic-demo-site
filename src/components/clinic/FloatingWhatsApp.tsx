import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  whatsappUrl: string;
  onBookClick: (e: React.MouseEvent) => void;
}

const FloatingWhatsApp = ({ whatsappUrl, onBookClick }: FloatingWhatsAppProps) => {
  return (
    <a
      href={whatsappUrl}
      onClick={onBookClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer group"
      aria-label="Book on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 relative z-10" />
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
      <span className="absolute -inset-1 rounded-full bg-accent/20 animate-pulse" />
    </a>
  );
};

export default FloatingWhatsApp;
