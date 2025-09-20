const PhoenixProblems = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-gray-900">
            Common Phoenix Diesel Problems
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Extreme Heat Challenges (Up to 120°F)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>A/C System Overload</strong> - Compressors work overtime, frequent refrigerant leaks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Pavement-Induced Tire Failures</strong> - Hot asphalt causes blowouts and sidewall damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Battery Failure Rates Rise</strong> - Extreme heat shortens battery life significantly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Cooling System Stress</strong> - Radiator and hose failures increase during summer</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Year-Round Desert Conditions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>UV Degradation</strong> - Faster hose and seal deterioration from intense sun exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Dust and Debris Buildup</strong> - Clogged air filters reduce efficiency and cause overheating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Low Humidity Effects</strong> - Static electricity causes electrical faults and parasitic draws</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span><strong>Monsoon Debris Impact</strong> - Sudden storms bring debris that damages cooling systems</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-primary/10 rounded-lg">
            <p className="text-gray-700 text-center">
              <strong className="text-primary">Our Phoenix-based technicians understand these unique challenges.</strong> We carry 
              specialized parts for desert conditions and provide targeted solutions for <a href="#services" className="text-primary hover:underline">A/C & Cooling Systems</a>, 
              <a href="#services" className="text-primary hover:underline ml-1">Electrical & Batteries</a>, 
              <a href="#services" className="text-primary hover:underline ml-1">Engine Diagnostics</a>, and 
              <a href="#services" className="text-primary hover:underline ml-1">Preventive Maintenance</a> to keep your fleet running in Arizona's demanding climate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoenixProblems;