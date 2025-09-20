import { Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentJobs = () => {
  const jobs = [
    {
      icon: Clock,
      title: "Roadside DPF regen on I-10 near Buckeye",
      description: "Back rolling in 45 minutes.",
      location: "I-10 West, Buckeye"
    },
    {
      icon: CheckCircle,
      title: "Mobile A/C compressor replacement in Mesa yard",
      description: "Same afternoon fix.",
      location: "Mesa Yard"
    },
    {
      icon: MapPin,
      title: "Electrical no-start in Tolleson",
      description: "Diagnosed corroded ground, replaced, started immediately.",
      location: "Tolleson Distribution Center"
    }
  ];

  const handleSeeMoreClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Jobs
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from our Phoenix mobile Diesel Repair team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {jobs.map((job, index) => {
              const IconComponent = job.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border/50 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {job.description}
                      </p>
                      <p className="text-primary text-xs font-medium">
                        📍 {job.location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleSeeMoreClick}
              aria-label="See more completed jobs"
            >
              See More Jobs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;