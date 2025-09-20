import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, Wrench } from "lucide-react";
import emergencyRoadside from "@/assets/emergency-roadside-alt.png";
import mobileMechanic from "@/assets/mobile-mechanic-alt.png";

const EmergencySection = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+14803077434";
  };

  const handleLearnMoreClick = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="emergency" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            24/7 EMERGENCY ROADSIDE ASSISTANCE
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">
            Truck Broke Down? We're Here to Help. Fast, Reliable Emergency Service When You Need It Most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <article className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-32 h-24 mx-auto mb-6 rounded-xl overflow-hidden">
              <img 
                src={emergencyRoadside} 
                alt="Emergency roadside assistance truck with mechanic tools" 
                className="w-full h-full object-cover"
                loading="lazy"
                width="128"
                height="96"
              />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
              EMERGENCY ROADSIDE
              <br />
              ASSISTANCE
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              24/7 On-Site Repairs to Get You Back on the Road Fast. No Matter Where You Are in Phoenix.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="font-bold text-lg px-8"
              onClick={handleLearnMoreClick}
              aria-label="Learn more about emergency roadside assistance"
            >
              LEARN MORE
            </Button>
          </article>

          <article className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-32 h-24 mx-auto mb-6 rounded-xl overflow-hidden">
              <img 
                src={mobileMechanic} 
                alt="Mobile mechanic performing on-site Diesel Repair service" 
                className="w-full h-full object-cover"
                loading="lazy"
                width="128"
                height="96"
              />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
              ON-SITE MECHANIC
              <br />
              SERVICES
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Complete Diesel Repair Services at Your Location. Save Time and Money With Our Mobile Service.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-bold text-lg px-8 border-2"
              onClick={handleLearnMoreClick}
              aria-label="Learn more about on-site mechanic services"
            >
              LEARN MORE
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;