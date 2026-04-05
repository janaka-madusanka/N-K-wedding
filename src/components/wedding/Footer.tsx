import FloralDivider from "./FloralDivider";

const Footer = () => (
  <footer className="py-16 bg-wedding-ivory text-center">
    <FloralDivider />
    <p className="font-script text-4xl md:text-5xl gold-text mb-4">Thank You</p>
    <p className="font-serif text-lg text-muted-foreground italic font-light max-w-md mx-auto mb-2">
      We are so grateful for your love and support. We can't wait to celebrate this special day with you.
    </p>
    <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mt-8">
      Nethmi & Kavindu &nbsp;·&nbsp; December 12, 2026
    </p>
    <p className="font-sans text-[10px] text-muted-foreground/50 mt-6">Made with ♥</p>
  </footer>
);

export default Footer;
