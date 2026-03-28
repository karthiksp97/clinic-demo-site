import { TrendingUp, Zap, Clock } from "lucide-react";

const kpis = [
  { icon: TrendingUp, label: "More Patient Enquiries", value: "2x Increase" },
  { icon: Zap, label: "Faster Booking", value: "Under 10 Seconds" },
  { icon: Clock, label: "No Missed Patients", value: "24/7 WhatsApp Access" },
];

const KpiSection = () => {
  return (
    <section className="bg-primary py-10 md:py-14">
      <div className="container-clinic">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/15 flex items-center justify-center mx-auto mb-3">
                <kpi.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-1">
                {kpi.value}
              </p>
              <p className="text-primary-foreground/70 text-sm font-medium">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpiSection;
