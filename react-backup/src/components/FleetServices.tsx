import { Truck, FileText, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const FleetServices = () => {
  const features = [
    {
      icon: Truck,
      title: "Priority dispatch & ongoing PM",
      description: "Get priority response times and scheduled preventive maintenance"
    },
    {
      icon: FileText,
      title: "Consolidated invoicing & digital work orders",
      description: "Streamlined billing and digital documentation for easy fleet management"
    },
    {
      icon: Calendar,
      title: "Yard days for multi-unit service",
      description: "Scheduled on-site service days for multiple vehicles at your location"
    }
  ];

  const handleFleetContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Fleet Manager Quote */}
          <div className="bg-card rounded-2xl p-8 md:p-12 mb-16 shadow-lg border border-border/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                "From a Fleet Manager's Perspective"
              </h2>
            </div>
            
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center italic mb-8">
              "We understand schedules, compliance, and downtime costs. Our techs prioritize safety, correct diagnosis, and clear communication so your trucks return to service quickly. Whether you run five trucks or five hundred, we'll help you avoid repeat breakdowns and keep utilization high."
            </blockquote>
            
            <div className="text-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleFleetContactClick}
                aria-label="Contact us for fleet service"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Us for Fleet Service
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FleetServices;