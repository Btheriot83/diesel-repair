import { Shield, Clock, Star, Users, Wrench, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "QUALITY OF WORK",
    description: "Professional Service by Experienced Diesel Mechanics"
  },
  {
    icon: Clock,
    title: "ATTENTION TO DETAIL",
    description: "Thorough Inspections"
  },
  {
    icon: Star,
    title: "TRANSPARENCY & HONESTY",
    description: "Upfront Pricing, No Surprises, No Hidden Fees"
  },
  {
    icon: Users,
    title: "SPEED & EFFICIENCY",
    description: "We Work Hard to Get You Back on the Road Fast"
  },
  {
    icon: Wrench,
    title: "ALWAYS RESPONSIVE",
    description: "We Communicate With You Every Step of the Way"
  },
  {
    icon: CheckCircle,
    title: "SATISFACTION GUARANTEED",
    description: "We Stand Behind Our Work and Your Complete Satisfaction is Our Priority"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
            QUALITY, SPEED & TRANSPARENCY
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium mb-4">
            Licensed and insured technicians, DOT-compliant parts, and clear communication from dispatch to invoice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <article
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent 
                    className="w-10 h-10 text-white" 
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-black text-gray-900 mb-4 text-lg tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fleet Management Experience</h3>
              <p className="mb-4">
                At AZ Mobile Diesel Repair, we understand the critical importance of fleet uptime and operational efficiency. Our leadership team brings direct trucking industry experience, with our lead mechanic having <strong>over 15 years</strong> as a fleet manager specializing in diesel trucks and heavy equipment across Arizona's challenging desert conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Partnership Approach</h3>
              <p className="mb-4">
                We're not just mechanics—we're strategic partners who understand delivery schedules, maintenance budgets, and the true cost of downtime.
              </p>
              <div className="text-left max-w-2xl mx-auto">
                <p className="font-semibold text-gray-800 mb-3">Our fleet management approach includes:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>After-hours emergency scheduling</strong> for minimal disruption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Consolidated monthly billing systems</strong> for simplified accounting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span><strong>Comprehensive service history reports</strong> for maintenance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">•</span>
                    <span>Component failure prediction and <strong>DOT compliance documentation</strong></span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border-l-4 border-primary">
              <p className="text-lg font-semibold text-gray-800">
                Whether you're managing local Phoenix delivery routes or long-haul operations across the Southwest, we provide the technical expertise and business understanding that keeps your fleet profitable and compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;