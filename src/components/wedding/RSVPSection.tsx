import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Heart, Check } from "lucide-react";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);
  const [guestCount, setGuestCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast({
        title: "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // fake loading for UI only
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      toast({
        title: "Thank you!",
        description: "Your RSVP has been received.",
      });

      console.log("RSVP Data:", {
        name: name.trim(),
        attending,
        guest_count: attending ? guestCount : 0,
      });
    }, 800);
  };

  if (submitted) {
    return (
      <section className="py-20 px-4" id="rsvp">
        <div className="max-w-md mx-auto text-center animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-sage flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-gold" />
          </div>
          <h2 className="text-3xl text-gold-gradient mb-4">Thank You!</h2>
          <p className="font-script text-lg text-muted-foreground">
            Your RSVP has been received. We can't wait to celebrate with you!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4" id="rsvp">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-gold-gradient mb-2">RSVP</h2>
        <p className="font-script text-lg text-muted-foreground mb-10">
          Kindly respond by August 1st, 2025
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left bg-card p-8 rounded-2xl border border-border shadow-lg"
        >
          <div>
            <Label htmlFor="name" className="text-foreground font-medium">
              Your Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-2"
              maxLength={100}
              required
            />
          </div>

          <div>
            <Label className="text-foreground font-medium mb-3 block">
              Will you attend?
            </Label>
            <div className="flex gap-3">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  type="button"
                  onClick={() => setAttending(val)}
                  className={`flex-1 py-3 rounded-xl border-2 font-medium transition-all duration-300 ${
                    attending === val
                      ? "border-gold bg-gold/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-gold/50"
                  }`}
                >
                  {val ? "Joyfully Accept" : "Regretfully Decline"}
                </button>
              ))}
            </div>
          </div>

          {attending && (
            <div className="animate-fade-in">
              <Label htmlFor="guests" className="text-foreground font-medium">
                Number of Guests
              </Label>
              <Input
                id="guests"
                type="number"
                min={1}
                max={10}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="mt-2 w-32"
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-6 text-lg gold-gradient text-primary-foreground hover:opacity-90 transition-opacity rounded-xl"
          >
            {loading ? (
              "Sending..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" /> Send RSVP
              </span>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;