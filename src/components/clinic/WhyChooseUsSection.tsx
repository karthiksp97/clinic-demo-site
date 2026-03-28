import { UserCheck, CalendarClock, HeartHandshake, MessageCircle } from "lucide-react";

const reasons = [
  { icon: UserCheck, title: "Experienced Doctors", desc: "Qualified professionals you can trust." },
  { icon: CalendarClock, title: "Quick Appointments", desc: "Book in seconds, no waiting." },
  { icon: HeartHandshake, title: "Friendly Patient Care", desc: "We treat you like family." },
  { icon: MessageCircle, title: "Easy WhatsApp Booking", desc: "Reach us instantly on WhatsApp." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-clinic">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground text-center mb-12">
          Why Choose CityCare?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/15 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-primary-foreground font-bold text-lg mb-1">{r.title}</h3>
              <p className="text-primary-foreground/75 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
