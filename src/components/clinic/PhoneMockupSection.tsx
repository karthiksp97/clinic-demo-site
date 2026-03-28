const PhoneMockupSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-clinic">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
          Your Patients Will See This on Their Phone
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A beautiful, fast-loading website that works perfectly on every device
        </p>

        <div className="flex justify-center">
          {/* Phone frame */}
          <div className="relative w-[280px] h-[560px] bg-foreground rounded-[40px] p-3 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground rounded-b-2xl z-10" />
            {/* Screen */}
            <div className="w-full h-full bg-background rounded-[28px] overflow-hidden relative">
              {/* Status bar */}
              <div className="h-8 bg-primary flex items-center justify-between px-4">
                <span className="text-primary-foreground text-[10px]">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-2 bg-primary-foreground/80 rounded-sm" />
                  <div className="w-3 h-2 bg-primary-foreground/80 rounded-sm" />
                  <div className="w-4 h-2 bg-primary-foreground/80 rounded-sm" />
                </div>
              </div>
              {/* Content preview */}
              <div className="p-3">
                <div className="bg-primary rounded-lg p-3 mb-3">
                  <div className="text-primary-foreground text-[10px] font-bold mb-1">CityCare Clinic</div>
                  <div className="text-primary-foreground/80 text-[8px] mb-2">Get More Patient Bookings</div>
                  <div className="bg-accent text-accent-foreground text-[7px] rounded px-2 py-1 inline-block font-semibold">
                    Book on WhatsApp
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {["500+", "4.9★", "24/7"].map((s) => (
                    <div key={s} className="bg-secondary rounded p-1.5 text-center">
                      <div className="text-[9px] font-bold text-secondary-foreground">{s}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {["General Medicine", "Pediatrics", "Dental Care"].map((s) => (
                    <div key={s} className="bg-card rounded p-2 border border-border">
                      <div className="text-[8px] font-medium text-foreground">{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-accent font-semibold mt-8 text-sm">
          📱 70% of patients will visit your clinic site from their phone
        </p>
      </div>
    </section>
  );
};

export default PhoneMockupSection;
