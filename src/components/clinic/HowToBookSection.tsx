import { MousePointerClick, Send, CalendarCheck } from "lucide-react";

const steps = [
  { icon: MousePointerClick, step: "1", title: "Click WhatsApp Button", desc: "Tap the green button on this page." },
  { icon: Send, step: "2", title: "Send a Message", desc: "A pre-filled message opens in WhatsApp." },
  { icon: CalendarCheck, step: "3", title: "Get Confirmation", desc: "We'll confirm your appointment time." },
];

const HowToBookSection = () => {
  return (
    <section className="section-padding bg-clinic-gray">
      <div className="container-clinic">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          How to Book an Appointment
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 relative">
                <s.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBookSection;
