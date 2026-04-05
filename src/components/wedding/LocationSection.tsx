import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Navigation } from "lucide-react";

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="location" className="wedding-section bg-wedding-ivory">
      <div ref={ref} className={`wedding-container transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <p className="font-script text-3xl gold-text mb-2">Find Us</p>
          <h2 className="wedding-heading">Wedding Venue</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="wedding-card overflow-hidden p-0">
          <iframe
            title="Wedding Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128255!2d79.84119831477263!3d6.911624395003658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b9c5aa883%3A0x6ee01e2a2dca4bc3!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-t-2xl"
          />
          <div className="p-6 md:p-8 text-center">
            <h3 className="font-serif text-xl font-medium text-foreground mb-1">Grand Palace Hotel</h3>
            <p className="font-sans text-sm text-muted-foreground font-light mb-4">Colombo, Sri Lanka</p>
            <a
              href="https://maps.google.com/?q=Grand+Palace+Hotel+Colombo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-wedding-gold text-wedding-gold font-sans text-xs tracking-[0.15em] uppercase hover:bg-wedding-gold/10 transition-colors duration-300"
            >
              <Navigation size={14} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
