import { AlertTriangle } from "lucide-react";

const CompetitorBanner = () => {
  return (
    <section className="px-5 py-8 md:px-8 lg:px-0">
      <div className="container-clinic">
        <div className="bg-foreground/5 border border-border rounded-xl px-6 py-5 flex items-center gap-4 justify-center text-center">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 hidden sm:block" />
          <p className="text-foreground font-medium text-sm md:text-base">
            While you're thinking about it,{" "}
            <span className="text-primary font-bold">nearby clinics are already getting patients online.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitorBanner;
