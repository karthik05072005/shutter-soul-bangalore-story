import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 via-accent/40 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="hero-title text-balance leading-tight">
            Capturing Timeless Love Stories in Every Frame
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto text-balance">
            Candid | Traditional | Destination Weddings — Every Shot, a Story of Emotion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg smooth-transition shadow-elegant group" asChild>
              
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-accent font-medium px-8 py-6 text-lg smooth-transition" asChild>
              <a href="#portfolio">
                View Our Portfolio
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;