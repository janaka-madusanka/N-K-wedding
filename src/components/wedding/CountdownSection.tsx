import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WEDDING_DATE = new Date("2026-12-12T10:00:00").getTime();

const CountdownSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, WEDDING_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="wedding-section bg-background">
      <div ref={ref} className={`wedding-container text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-script text-3xl gold-text mb-2">Counting Down</p>
        <h2 className="wedding-heading mb-10">Until We Say "I Do"</h2>
        <div className="section-divider mb-12" />

        <div className="flex justify-center gap-4 md:gap-8">
          {units.map(({ label, value }) => (
            <div key={label} className="wedding-card min-w-[70px] md:min-w-[100px] py-6">
              <p className="font-serif text-3xl md:text-5xl font-light gold-text">{String(value).padStart(2, "0")}</p>
              <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
