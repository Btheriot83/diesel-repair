import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, Wrench, AlertTriangle } from "lucide-react";
import emergencyRoadside from "@/assets/emergency-roadside-alt.png";
import mobileMechanic from "@/assets/mobile-mechanic-alt.png";

const UnifiedEmergencyHub = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+14803077434";
  };

  const handleLearnMoreClick = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="emergency-hub" className="py-16 bg-gradient-to-br from-gray-100 to-gray-50">
      <div className="container mx-auto px-4">
        {/* Urgent Header with Pulsing Alert */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-12 h-12 mr-4 text-accent animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              24/7 PHOENIX EMERGENCY DIESEL RESPONSE
            </h2>
            <AlertTriangle className="w-12 h-12 ml-4 text-accent animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 font-medium">
            24/7 Emergency Mobile Diesel Repair - We Come to You!
          </p>
        </div>

        {/* Three-Column Service Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Emergency Roadside */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col">
            <div className="mb-6">
              <img 
                src={emergencyRoadside}
                alt="Emergency roadside assistance"
                className="w-24 h-24 object-contain mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex items-center justify-center gap-2 text-accent">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Available</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Emergency Roadside Assistance
              </h3>
              <p className="text-gray-600 mb-6 flex-1 min-h-[3rem]">
                Stranded on the Road? Fast Response for Breakdowns, Flat Tires, and Critical Repairs.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-accent text-accent hover:bg-accent hover:text-white font-bold px-8 py-4 mt-auto"
                onClick={handleLearnMoreClick}
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* On-Site Service */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col">
            <div className="mb-6">
              <img 
                src={mobileMechanic}
                alt="Mobile mechanic service"
                className="w-24 h-24 object-contain mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Mobile Service</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-black text-gray-900 mb-4">
                On-Site Mechanic Services
              </h3>
              <p className="text-gray-600 mb-6 flex-1 min-h-[3rem]">
                Professional Diesel Repair at Your Location. Scheduled Maintenance and Major Repairs.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 mt-auto"
                onClick={handleLearnMoreClick}
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Emergency Call Section */}
          <div className="bg-gradient-to-br from-accent to-accent/90 rounded-xl shadow-lg p-8 text-center text-white flex flex-col">
            <div className="mb-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-12 h-12 text-white" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <Wrench className="w-5 h-5" />
                <span className="font-semibold">Immediate Dispatch</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-black mb-4">
                CALL FOR EMERGENCY
              </h3>
              <p className="text-white/90 mb-6 flex-1 min-h-[3rem]">
                Speak directly with our dispatch team. Fast response times guaranteed.
              </p>
              <Button 
                variant="emergency" 
                className="w-full font-bold px-8 py-4 mt-auto text-sm"
                onClick={handleCallClick}
              >
                <Phone className="w-4 h-4 mr-2" />
                CALL (480) 307-7434
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center">
          <p className="text-sm text-gray-500 italic mb-2">
            Photos or Fault Codes Help Us Bring the Right Parts the First Time.
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Standard dispatch fee applies; waived with repair authorization.
          </p>
          <p className="text-xs text-gray-400 italic">
            <strong>DPS Coordination:</strong> Highway shoulder repairs on I-10, I-17, and Loop systems coordinate with Arizona Department of Public Safety for traffic control and safe positioning protocols.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnifiedEmergencyHub;