import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rohan",
    event: "Wedding in Bangalore",
    text: "Shutter Soul captured our wedding day so beautifully! Every emotion, every moment was preserved perfectly. The candid shots were absolutely stunning and the team was so professional yet warm. Highly recommend!",
    rating: 5
  },
  {
    name: "Aisha & Karthik",
    event: "Destination Wedding, Goa",
    text: "From our pre-wedding shoot to the destination wedding in Goa, Shutter Soul exceeded all expectations. The photos are magical and tell our love story perfectly. We couldn't have asked for a better photographer!",
    rating: 5
  },
  {
    name: "Divya & Arjun",
    event: "Traditional Wedding",
    text: "The attention to detail and artistic vision of Shutter Soul is unmatched. They captured not just photographs, but memories and emotions that we'll treasure forever. Every frame is a work of art!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Testimonials</span>
            <div className="h-0.5 w-20 bg-primary mt-2 mx-auto" />
          </div>
          
          <h2 className="section-title text-foreground mb-6">
            Love Notes from Our Couples
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Nothing makes us happier than hearing from the couples whose special moments we've captured.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border/50 bg-card hover:shadow-elegant smooth-transition hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8 px-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <div className="font-playfair font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
