import { Camera, Sparkles, Video, Briefcase, MonitorPlay } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Camera,
    title: "Candid Wedding Photography",
    description: "Unscripted moments, genuine emotions, and spontaneous smiles captured as they happen naturally."
  },
  {
    icon: Sparkles,
    title: "Pre-Wedding Shoot",
    description: "Romantic outdoor sessions that showcase your unique love story before the big day."
  },
  {
    icon: Video,
    title: "Cinematic Video",
    description: "Professionally crafted films that tell your story with stunning visuals and emotional depth."
  },
  {
    icon: Briefcase,
    title: "Corporate",
    description: "Professional photography and videography services for corporate events, conferences, and brand content."
  },
  {
    icon: MonitorPlay,
    title: "LED Wall Rentals",
    description: "High-quality LED wall displays available for rent to elevate your events and productions."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Services</span>
            <div className="h-0.5 w-20 bg-primary mt-2 mx-auto" />
          </div>
          
          <h2 className="section-title text-foreground mb-6">
            Professional Photography & Video Services
          </h2>
          
          <p className="text-muted-foreground text-lg">
            From weddings to corporate events, we offer comprehensive photography, videography, and production services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-border/50 bg-card hover:shadow-elegant smooth-transition hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
