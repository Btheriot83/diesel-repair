import { Phone, MapPin, Wrench } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      number: "1",
      title: "Emergency Call & Assessment",
      description: "Call (480) 307-7434 for immediate dispatch or use our online request form. Our experienced dispatchers gather critical details: exact location (mile marker, cross streets), symptoms, truck specifications, and fault codes if available. We provide realistic ETAs based on Phoenix traffic patterns and coordinate with DPS for safe highway positioning when needed.",
      details: "Available 24/7 across Phoenix Metro including I-10, I-17, and all Loop highways."
    },
    {
      icon: MapPin,
      number: "2", 
      title: "Mobile Tech Deployment",
      description: "Our certified diesel technicians are strategically positioned throughout the Valley for rapid response. We dispatch the nearest qualified mechanic with specialized diagnostic equipment and common repair parts. For complex issues, we pre-coordinate with local parts suppliers to minimize your downtime.",
      details: "Target response time: 60-90 minutes depending on location and traffic conditions. Pre-coordinated with local parts suppliers for complex repairs."
    },
    {
      icon: Wrench,
      number: "3",
      title: "On-Site Diagnosis & Repair",
      description: "Our mobile unit arrives fully equipped with diagnostic computers, air compressors, welding equipment, and extensive parts inventory. Most repairs are completed on-site, getting you back on the road quickly. For major work requiring shop facilities, we coordinate towing to trusted Phoenix-area diesel shops and provide transparent repair estimates.",
      details: "Licensed, insured, and experienced with all major diesel engine brands and fleet specifications."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting Your Truck Back on the Road Is Simple With Our Streamlined Process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12" style={{gridTemplateRows: 'repeat(1, 1fr)'}}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col" style={{ height: '100%' }}>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-black">
                    {step.number}
                  </div>
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <div className="flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-grow">
                    {step.description}
                  </p>
                  <div className="bg-accent/10 rounded-lg p-3 mt-auto">
                    <p className="text-xs text-accent font-semibold">
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            Photos or Fault Codes Help Us Bring the Right Parts the First Time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;