import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceArea = () => {
  const locations = [
    "Phoenix", "Tempe", "Mesa", "Chandler", "Gilbert", "Scottsdale",
    "Glendale", "Peoria", "Avondale", "Goodyear", "Surprise", "Tolleson",
    "Buckeye", "Laveen", "Queen Creek", "Apache Junction", "Cave Creek", 
    "Anthem", "Sun City", "El Mirage", "Fountain Hills"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Area Map — Phoenix Metro
          </h2>
          <p className="text-xl text-muted-foreground">
            24/7 Mobile Diesel Repair Along Phoenix Corridors
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            We Cover I-10, I-17, Loop 101/202/303, US-60, AZ-51
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Cities We Service:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg px-4 py-3 text-center font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 border border-border/50"
                >
                  {location}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Don't See Your Location on Phoenix Corridors? Give Us a Call - We May Still Be Able to Help!
              </p>
              <Button variant="hero" size="lg" onClick={() => window.location.href = 'tel:+14803077434'}>
                <Phone className="w-5 h-5 mr-2" />
                Call for Current ETA
              </Button>
            </div>
          </div>

          <div 
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 min-h-[400px] flex items-center justify-center border border-border/20 bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{
              backgroundImage: `url(/images/phoenix-metro-background.jpeg)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
            <div className="text-center relative z-10">
              <MapPin className="w-24 h-24 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Phoenix Metro Coverage
              </h3>
              <p className="text-white/90 mb-4">
                I-10, I-17, Loop 101/202/303 Corridors
              </p>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <p className="text-sm font-semibold text-primary mb-2">Typical Response Windows:</p>
                <p className="text-sm text-muted-foreground">60–90 minutes</p>
                <p className="text-xs text-muted-foreground mt-1">(traffic & parts availability may affect ETAs)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;