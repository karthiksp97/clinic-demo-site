import { X, Check } from "lucide-react";

const withoutItems = [
  "Patients call and get no answer",
  "You lose patients to competitors",
  "No online presence on Google",
  "Patients can't find your hours or services",
];

const withItems = [
  "Patients book instantly 24/7 via WhatsApp",
  "Professional online presence builds trust",
  "Show up when patients search on Google",
  "All info available at a glance — anytime",
];

const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-clinic">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
          What Are You Missing Without a Website?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          See the difference a professional online presence makes for your clinic
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* WITHOUT */}
          <div className="bg-card rounded-xl border border-destructive/30 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-destructive/15 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <h3 className="text-xl font-heading font-bold text-destructive">Without a Website</h3>
            </div>
            <ul className="space-y-4">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center mt-0.5 shrink-0">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WITH */}
          <div className="bg-card rounded-xl border border-accent/40 p-8 shadow-sm ring-2 ring-accent/20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-accent">With Your Website</h3>
            </div>
            <ul className="space-y-4">
              {withItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
