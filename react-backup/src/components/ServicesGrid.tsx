// Professional diesel service icons - using public folder URLs

// Function to get appropriate icon size based on the service name
const getIconSize = (serviceName: string) => {
  switch (serviceName) {
    case 'MOBILE DIESEL REPAIR':
      return { width: '96px', height: '96px' }; // Reference size
    case 'EMERGENCY ROADSIDE ASSISTANCE':
      return { width: '88px', height: '88px' }; // Slightly smaller
    case 'ENGINE DIAGNOSTICS (COMPUTER & ECM)':
      return { width: '88px', height: '88px' }; // Slightly smaller
    case 'BRAKES & AIR SYSTEMS (INCL. WHEEL SEALS)':
      return { width: '108px', height: '108px' }; // Larger to match visual size with Mobile Diesel Repair
    case 'SUSPENSION & STEERING':
      return { width: '84px', height: '84px' }; // Moderately smaller
    case 'HYDRAULICS (HOSES & CYLINDERS)':
      return { width: '96px', height: '96px' }; // Match reference size
    case 'ELECTRICAL & BATTERIES (ALTERNATORS & STARTERS)':
      return { width: '88px', height: '88px' }; // Slightly smaller
    case 'A/C & COOLING SYSTEMS':
      return { width: '96px', height: '96px' }; // Match reference size
    case 'FUEL SYSTEM REPAIR':
      return { width: '108px', height: '108px' }; // Larger to compensate for smaller visual content
    case 'PREVENTIVE MAINTENANCE (PM SERVICES)':
      return { width: '84px', height: '84px' }; // Moderately smaller
    default:
      return { width: '88px', height: '88px' }; // Default fallback
  }
};

const services = [
  { icon: "/images/Mobile Diesel Repair.png", name: "MOBILE DIESEL REPAIR", description: "Full-service on-site diesel repair covering engines, electrical, brakes, and cooling—saves tows and downtime." },
  { icon: "/images/Emergency Roadside Assistance.png", name: "EMERGENCY ROADSIDE ASSISTANCE", description: "24/7 jumpstarts, fuel delivery, tire issues, urgent breakdowns." },
  { icon: "/images/Engine Diagnostics.png", name: "ENGINE DIAGNOSTICS (COMPUTER & ECM)", description: "Mobile ECM scans, check-engine, emissions troubleshooting." },
  { icon: "/images/Brakes-removebg-preview.png", name: "BRAKES & AIR SYSTEMS (INCL. WHEEL SEALS)", description: "Pads, rotors, air leaks, chambers, valves, wheel seals." },
  { icon: "/images/Suspension and Steering.png", name: "SUSPENSION & STEERING", description: "Shocks, leaf springs, bushings, steering component repairs." },
  { icon: "/images/Hydraulic_and_Suspension-removebg-preview.png", name: "HYDRAULICS (HOSES & CYLINDERS)", description: "Hose replacement, fittings, pumps and cylinder repairs." },
  { icon: "/images/Electrical and Batteries.png", name: "ELECTRICAL & BATTERIES (ALTERNATORS & STARTERS)", description: "Jumpstarts, charging system faults, wiring repairs." },
  { icon: "/images/AC Cooling icon.png", name: "A/C & COOLING SYSTEMS", description: "Compressors, condensers, radiators, hoses, leak checks." },
  { icon: "/images/Fuel_Systems-removebg-preview.png", name: "FUEL SYSTEM REPAIR", description: "Filters, injection, pumps, flow issues and hard starts." },
  { icon: "/images/Preventitive Maintenance.png", name: "PREVENTIVE MAINTENANCE (PM SERVICES)", description: "Oil & filters, inspections, DOT pre-checks, fleet PM schedules." },
];

const ServicesGrid = () => {
  const handleViewAllClick = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Mobile Truck Repair Services
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Complete Diesel Repair Services at Your Location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            return (
              <article
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center hover:shadow-xl hover:border-primary transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                  <img 
                    src={service.icon}
                    alt={`${service.name} service icon`}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      width: getIconSize(service.name).width, 
                      height: getIconSize(service.name).height,
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                </div>
                <h3 className="font-black text-gray-900 mb-3 text-lg tracking-tight">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={handleViewAllClick}
            className="bg-accent text-accent-foreground px-12 py-4 rounded-xl font-black text-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 tracking-tight"
            aria-label="View all services and get a quote"
          >
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;