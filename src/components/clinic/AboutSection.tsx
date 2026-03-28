import { ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-clinic text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <ShieldCheck className="w-4 h-4" />
          About Our Clinic
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          Quality Healthcare You Can Trust
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          CityCare Clinic provides quality healthcare with experienced doctors and modern facilities. We focus on patient comfort and fast service — because your health deserves nothing less.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
