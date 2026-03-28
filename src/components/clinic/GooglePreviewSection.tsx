import { Star, MapPin, Clock, Globe } from "lucide-react";

const GooglePreviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container-clinic">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
          This Is How Patients Will Find You on Google
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          When patients search for a clinic near them, your website makes you visible
        </p>

        {/* Google Search Mock */}
        <div className="max-w-2xl mx-auto">
          {/* Search bar mock */}
          <div className="bg-card rounded-full border border-border px-5 py-3 flex items-center gap-3 mb-6 shadow-sm">
            <Globe className="w-5 h-5 text-muted-foreground shrink-0" />
            <span className="text-foreground text-sm md:text-base">best clinic near me</span>
          </div>

          {/* Search result card */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-md">
            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <Globe className="w-3 h-3" />
              www.citycareclinic.com
            </p>
            <h3 className="text-lg font-semibold text-primary cursor-pointer hover:underline mb-1">
              CityCare Clinic — Trusted Family Healthcare
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Book appointments instantly via WhatsApp. Experienced doctors, modern facilities, and caring staff. Open Mon–Sat, 9 AM – 8 PM.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1">
                <span className="font-semibold text-foreground">4.9</span>
                <span className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span>(200+ reviews)</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> MG Road, Bengaluru
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> Open now
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-accent font-semibold mt-8 text-sm">
          ✨ Your clinic could look exactly like this on Google
        </p>
      </div>
    </section>
  );
};

export default GooglePreviewSection;
