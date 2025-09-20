import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencyBanner = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+14803077434';
  };

  return (
    <section className="py-16 bg-gradient-to-r from-accent to-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 mr-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Help Now?
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Call (480) 307-7434 for immediate assistance. 24/7 dispatch.
          </p>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleCallClick}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xl px-12 py-6 backdrop-blur-sm"
            aria-label="Call for immediate emergency assistance"
          >
            <Phone className="w-6 h-6 mr-3" />
            Call Emergency Line
          </Button>
          
          <p className="text-sm mt-6 opacity-80">
            Standard dispatch fee applies; waived with repair authorization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBanner;