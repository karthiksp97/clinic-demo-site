import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  { text: "Very friendly doctor and quick service. I felt comfortable from the moment I walked in.", name: "Priya S.", initials: "PS" },
  { text: "Easy to book appointment through WhatsApp. No long waiting times. Highly efficient!", name: "Arun K.", initials: "AK" },
  { text: "Highly recommended clinic. The staff is caring and the facilities are modern and clean.", name: "Meena R.", initials: "MR" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-clinic">
        {/* Aggregate rating */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2 shadow-sm mb-4">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" width={16} height={16} />
            <span className="text-sm font-semibold text-foreground">Google Reviews</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-4xl font-heading font-bold text-foreground">4.9</span>
          <div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-0.5">Based on 200+ reviews</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mt-6 mb-12">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-foreground text-sm font-semibold">{t.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
