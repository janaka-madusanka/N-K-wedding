import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Couple walking through golden garden", className: "md:col-span-1 md:row-span-2" },
  { src: gallery2, alt: "Elegant table setting", className: "md:col-span-1" },
  { src: gallery3, alt: "Wedding rings", className: "md:col-span-1" },
  { src: gallery4, alt: "Wedding ceremony arch", className: "md:col-span-2" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-gold-gradient mb-2">Our Moments</h2>
        <p className="font-script text-lg text-muted-foreground mb-12">A glimpse into our love story</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.className} overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;