import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+14803077434";
  };

  const handleQuoteClick = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section 
      className="relative min-h-[93vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `url(/lovable-uploads/eff70c3b-1b53-4693-b587-bb51f7bfda85.png)`
      }} 
      role="banner" 
      aria-label="Mobile diesel mechanic assisting semi-truck in Phoenix desert at sunset"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
          MOBILE DIESEL MECHANIC
          <br />
          <span className="text-primary">IN PHOENIX, AZ</span>
        </h1>
        
        <p className="text-xl mb-10 max-w-4xl mx-auto font-medium md:text-2xl">
          24/7 On-Site Truck Repair Across the Phoenix Metro — I-10, I-17, Loop 101, 202 & 303.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="lg" 
            className="flex items-center gap-2 text-lg px-8 py-5" 
            onClick={handleCallClick} 
            aria-label="Call AZ Mobile Diesel Repair now for service"
          >
            <Phone className="w-5 h-5" />
            CALL NOW (480) 307-7434
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-5 font-bold" 
            onClick={handleQuoteClick} 
            aria-label="Request dispatch for diesel repair service"
          >
            REQUEST DISPATCH
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold">
            Licensed & Insured
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold">
            15+ Years Fleet Experience
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold">
            Valley-Wide Coverage
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;