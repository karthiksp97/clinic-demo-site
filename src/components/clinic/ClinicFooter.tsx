const ClinicFooter = () => {
  return (
    <footer className="bg-foreground text-background/70 py-8">
      <div className="container-clinic px-5 lg:px-0 text-center">
        <p className="font-heading font-bold text-background text-lg mb-1">CityCare Clinic</p>
        <p className="text-sm">(Demo Preview)</p>
        <div className="mt-6 py-4 border-t border-background/10">
          <p className="text-background/50 text-sm italic">
            This is a demo preview of how your clinic can look online.
          </p>
        </div>
        <p className="text-xs mt-2 text-background/40">© 2026 CityCare Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ClinicFooter;
