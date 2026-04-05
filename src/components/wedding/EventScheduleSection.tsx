import { Music, UtensilsCrossed, Church, PartyPopper } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const events = [
  { icon: Church, time: "10:00 AM", title: "Wedding Ceremony", description: "Join us as we exchange our vows in a beautiful ceremony." },
  { icon: UtensilsCrossed, time: "12:30 PM", title: "Wedding Lunch", description: "A lavish feast to celebrate the union of two hearts." },
  { icon: Music, time: "3:00 PM", title: "Entertainment & Dance", description: "Live music, dancing, and heartfelt toasts with loved ones." },
  { icon: PartyPopper, time: "6:00 PM", title: "Evening Reception", description: "An enchanting evening celebration under the stars." },
];

const EventScheduleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="events" className="wedding-section bg-background">
      <div ref={ref} className={`wedding-container text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-script text-3xl gold-text mb-2">Celebration</p>
        <h2 className="wedding-heading mb-10">Event Schedule</h2>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map(({ icon: Icon, time, title, description }) => (
            <div key={title} className="wedding-card text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-wedding-champagne flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} className="gold-text" />
              </div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase gold-text mb-1">{time}</p>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">{title}</h3>
              <p className="font-sans text-sm text-muted-foreground font-light">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventScheduleSection;
