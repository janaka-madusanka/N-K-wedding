import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FloralDivider from "./FloralDivider";

const WelcomeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="wedding-section bg-background">
      <div ref={ref} className={`wedding-container text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-script text-3xl md:text-4xl gold-text mb-4">Welcome</p>
        <h2 className="wedding-heading mb-6">We're Getting Married!</h2>
        <div className="section-divider" />
        <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic font-light mt-8">
          With hearts full of love and joy, we invite you to share in the celebration of our union.
          Your presence would make our special day even more beautiful and memorable.
          We can't wait to celebrate this new chapter with you.
        </p>
        <FloralDivider className="mt-10" />
      </div>
    </section>
  );
};

export default WelcomeSection;
