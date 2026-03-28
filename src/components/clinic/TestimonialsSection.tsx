import { Star } from "lucide-react";

const testimonials = [
  { text: "Very friendly doctor and quick service. I felt comfortable from the moment I walked in.", name: "Priya S." },
  { text: "Easy to book appointment through WhatsApp. No long waiting times. Highly efficient!", name: "Arun K." },
  { text: "Highly recommended clinic. The staff is caring and the facilities are modern and clean.", name: "Meena R." },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-clinic">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          What Our Patients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-muted-foreground text-sm font-medium">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
