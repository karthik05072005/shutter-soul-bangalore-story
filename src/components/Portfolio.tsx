import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioImages = [
  { src: portfolio1, alt: "Traditional Indian wedding ceremony moments in Bangalore", span: "md:row-span-2" },
  { src: portfolio2, alt: "Pre-wedding couple photoshoot in colorful traditional attire", span: "md:row-span-2" },
  { src: portfolio3, alt: "Bridal jewelry and mehndi details wedding photography Bangalore", span: "md:col-span-2" },
  { src: portfolio4, alt: "Romantic pre-wedding photography in scenic outdoor location", span: "md:col-span-2" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Portfolio</span>
            <div className="h-0.5 w-20 bg-primary mt-2 mx-auto" />
          </div>
          
          <h2 className="section-title text-foreground mb-6">
            Stories We've Captured
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Every wedding is unique. Browse through our collection of timeless moments and cinematic love stories.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-3 auto-rows-[240px] gap-4 max-w-7xl mx-auto">
          {portfolioImages.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg group cursor-pointer shadow-soft hover:shadow-elegant smooth-transition animate-scale-in ${image.span}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover smooth-transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/shuttersoul_bangalore/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium smooth-transition"
          >
            <span>View Full Portfolio on Instagram</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
