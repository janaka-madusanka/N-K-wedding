import { Gift } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GiftSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="wedding-section bg-wedding-ivory">
      <div ref={ref} className={`wedding-container text-center max-w-2xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-script text-3xl gold-text mb-2">Registry</p>
        <h2 className="wedding-heading mb-6">Gifts</h2>
        <div className="section-divider mb-8" />

        <div className="wedding-card">
          <div className="w-16 h-16 rounded-full bg-wedding-champagne flex items-center justify-center mx-auto mb-6">
            <Gift size={28} className="gold-text" />
          </div>
          <p className="font-serif text-lg text-foreground italic leading-relaxed mb-4">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honour us with a gift,
            a contribution to our future together would be deeply appreciated.
          </p>
          <p className="font-sans text-sm text-muted-foreground font-light">
            Gift registry details will be shared personally. Please feel free to reach out to our family for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
