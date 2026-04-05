import { Calendar, Clock, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const details = [
  { icon: Calendar, label: "Date", value: "Saturday, December 12, 2026" },
  { icon: Clock, label: "Time", value: "10:00 AM onwards" },
  { icon: MapPin, label: "Venue", value: "Grand Palace Hotel, Colombo" },
];

const DetailsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="wedding-section bg-wedding-ivory">
      <div ref={ref} className={`wedding-container text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-script text-3xl gold-text mb-2">Save the Date</p>
        <h2 className="wedding-heading mb-10">Wedding Details</h2>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="wedding-card flex flex-col items-center py-10">
              <div className="w-14 h-14 rounded-full bg-wedding-blush/40 flex items-center justify-center mb-4">
                <Icon size={24} className="text-wedding-blush-deep" />
              </div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{label}</p>
              <p className="font-serif text-xl font-medium text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
