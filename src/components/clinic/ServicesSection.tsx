import { Stethoscope, Smile, Sparkles, Siren } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Consultation", desc: "Comprehensive health checkups and medical consultations for all ages." },
  { icon: Smile, title: "Dental Care", desc: "Complete dental treatments including cleanings, fillings, and cosmetic dentistry." },
  { icon: Sparkles, title: "Skin Treatment", desc: "Expert dermatology care for skin conditions, acne, and cosmetic treatments." },
  { icon: Siren, title: "Emergency Care", desc: "24/7 emergency medical services for urgent health situations." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-clinic-gray">
      <div className="container-clinic">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">Comprehensive care for you and your family</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
