import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Shutter Soul</h3>
            <p className="text-white/80 leading-relaxed">
              Capturing timeless love stories through the art of wedding photography in Bangalore and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-white/80 hover:text-primary smooth-transition">About Us</a>
              <a href="#services" className="text-white/80 hover:text-primary smooth-transition">Services</a>
              <a href="#portfolio" className="text-white/80 hover:text-primary smooth-transition">Portfolio</a>
              <a href="#contact" className="text-white/80 hover:text-primary smooth-transition">Contact</a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect With Us</h4>
            <div className="space-y-3">
              <p className="text-white/80">
                <a href="tel:+919632595978" className="hover:text-primary smooth-transition">
                  +91 96325 95978
                </a>
              </p>
              <p className="text-white/80">
                <a href="mailto:shuttersoulbangalore@gmail.com" className="hover:text-primary smooth-transition">
                  shuttersoulbangalore@gmail.com
                </a>
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://www.instagram.com/shuttersoul_bangalore/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary smooth-transition group"
                  aria-label="Follow Shutter Soul on Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 smooth-transition" />
                </a>
                <a 
                  href="https://wa.me/919632595978" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] smooth-transition group"
                  aria-label="Chat with Shutter Soul on WhatsApp"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 smooth-transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
          <p className="flex items-center gap-2">
            © {currentYear} Shutter Soul. Crafted with <Heart className="w-4 h-4 fill-primary text-primary" /> in Bangalore
          </p>
          <p>
            <a href="#" className="hover:text-primary smooth-transition">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-primary smooth-transition">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
