import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-clinic">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Phone</h3>
            <p className="text-muted-foreground text-sm">+91 99999 99999</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Location</h3>
            <p className="text-muted-foreground text-sm">123 Main Street, City Center</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Working Hours</h3>
            <p className="text-muted-foreground text-sm">Mon – Sat: 9 AM – 8 PM</p>
            <p className="text-muted-foreground text-sm">Sun: 10 AM – 2 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
