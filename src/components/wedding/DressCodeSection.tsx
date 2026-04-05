import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const colors = [
  { name: "Ivory", hsl: "40 33% 96%" },
  { name: "Blush", hsl: "340 30% 85%" },
  { name: "Champagne", hsl: "35 40% 78%" },
  { name: "Sage", hsl: "140 15% 75%" },
  { name: "Gold", hsl: "38 60% 55%" },
];

const DressCodeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="wedding-section bg-background">
      <div ref={ref} className={`wedding-container text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-script text-3xl gold-text mb-2">Attire</p>
        <h2 className="wedding-heading mb-6">Dress Code</h2>
        <div className="section-divider mb-8" />

        <p className="font-serif text-xl text-foreground italic mb-2">Formal / Black Tie Optional</p>
        <p className="font-sans text-sm text-muted-foreground font-light max-w-lg mx-auto mb-10">
          We kindly request our guests to dress in formal attire. Please consider the following colour palette for your outfit.
        </p>

        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          {colors.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-border shadow-sm" style={{ backgroundColor: `hsl(${c.hsl})` }} />
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
