import doctorImage from "@/assets/doctor-profile.jpg";
import { Award, Users } from "lucide-react";

const DoctorSection = () => {
  return (
    <section id="doctor" className="section-padding">
      <div className="container-clinic">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border-4 border-secondary">
            <img
              src={doctorImage}
              alt="Dr. Rahul Menon"
              className="w-full h-full object-cover"
              loading="lazy"
              width={512}
              height={640}
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Dr. Rahul Menon
            </h2>
            <p className="text-primary font-medium text-lg mb-6">Lead Physician</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Trusted by 1000+ Patients</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Menon is dedicated to providing compassionate, evidence-based care. With over a decade of experience, he ensures every patient receives personalised attention and the best treatment outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
