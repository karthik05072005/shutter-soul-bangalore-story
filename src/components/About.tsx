import aboutImage from "@/assets/about-photographer.jpg";
const About = () => {
  return <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img src={aboutImage} alt="Wedding photographer Shutter Soul capturing moments in Bangalore" className="w-full h-[600px] object-cover smooth-transition hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">About Shutter Soul</span>
              <div className="h-0.5 w-20 bg-primary mt-2" />
            </div>

            <h2 className="section-title text-foreground">
              Where Love Meets Artistry
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At <span className="text-foreground font-medium">Shutter Soul</span>, we believe weddings are more than events — they're the beginning of a lifetime story. Our passion lies in preserving every smile, tear, and dance step through our lens.
              </p>
              
              <p>
                From intimate ceremonies to grand celebrations, we capture authentic emotions and cinematic beauty in every photograph. Based in the heart of <span className="text-foreground font-medium">Bangalore</span>, we've had the privilege of documenting hundreds of love stories across India and beyond.
              </p>

              <p>
                Our approach is simple: be present, be invisible, and let the moments unfold naturally. The result? Timeless images that transport you back to the magic of your special day.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-8">
              <div>
                <div className="text-4xl font-playfair font-bold gradient-gold">
                  500+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Weddings Captured
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-4xl font-playfair font-bold gradient-gold">
                  5 Years
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;