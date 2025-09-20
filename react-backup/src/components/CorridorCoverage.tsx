import { Navigation, Clock } from "lucide-react";

const CorridorCoverage = () => {
  const corridors = [
    {
      name: "I-10 East/West",
      description: "California ↔ New Mexico"
    },
    {
      name: "I-17 North/South", 
      description: "Phoenix ↔ Flagstaff"
    },
    {
      name: "Loop 101",
      description: "Scottsdale, Tempe, Chandler, Glendale"
    },
    {
      name: "Loop 202",
      description: "East Valley connector"
    },
    {
      name: "Loop 303",
      description: "West Valley connector"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Coverage Corridors We Serve
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {corridors.map((corridor, index) => (
            <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:border-primary">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Navigation className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-black text-gray-900 mb-2 text-lg">
                {corridor.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {corridor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-accent/10 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-accent" />
            <p className="text-lg font-semibold text-accent">
              Staged mobile techs provide typical 60–90 minute metro response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorridorCoverage;