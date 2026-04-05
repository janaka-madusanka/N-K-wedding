import { Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contacts = [
  { name: "Nethmi's Family", phone: "+94 77 123 4567", email: "nethmi.family@email.com" },
  { name: "Kavindu's Family", phone: "+94 77 765 4321", email: "kavindu.family@email.com" },
  { name: "Event Coordinator", phone: "+94 77 999 8888", email: "events@grandpalace.lk" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="wedding-section bg-background">
      <div ref={ref} className={`wedding-container transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <p className="font-script text-3xl gold-text mb-2">Reach Out</p>
          <h2 className="wedding-heading">Contact Us</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <div key={c.name} className="wedding-card text-center">
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">{c.name}</h3>
              <div className="space-y-3">
                <a href={`tel:${c.phone}`} className="flex items-center justify-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone size={14} className="gold-text" /> {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="flex items-center justify-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={14} className="gold-text" /> {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
