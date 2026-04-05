import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Wedding venue" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-wedding-gold-light mb-6 animate-fade-in-slow">
        Together with their families
      </p>

      <h1 className="font-script text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-primary-foreground mb-4 leading-tight" style={{ animationDelay: "0.3s" }}>
        Nethmi <span className="gold-text">&</span> Kavindu
      </h1>

      <div className="section-divider my-8" />

      <p className="font-serif text-lg md:text-xl text-primary-foreground/90 italic font-light tracking-wide" style={{ animationDelay: "0.6s" }}>
        Invite you to celebrate their wedding
      </p>

      <p className="font-sans text-sm md:text-base tracking-[0.15em] text-wedding-gold-light mt-8" style={{ animationDelay: "0.9s" }}>
        December 12, 2026 &nbsp;·&nbsp; Colombo, Sri Lanka
      </p>

      <a
        href="#rsvp"
        onClick={(e) => { e.preventDefault(); document.querySelector("#rsvp")?.scrollIntoView({ behavior: "smooth" }); }}
        className="inline-block mt-10 px-8 py-3 border border-wedding-gold-light text-wedding-gold-light font-sans text-xs tracking-[0.2em] uppercase rounded-full hover:bg-wedding-gold-light/10 transition-all duration-300"
      >
        RSVP Now
      </a>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
      <div className="w-5 h-8 border-2 border-wedding-gold-light/50 rounded-full flex justify-center pt-1">
        <div className="w-1 h-2 bg-wedding-gold-light/50 rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
