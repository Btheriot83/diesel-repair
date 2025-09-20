import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">AZ Mobile Diesel Repair</h3>
            <p className="text-gray-300 mb-4">
              Professional Mobile Diesel Repair Services for Phoenix Metro and Corridor Highways.
            </p>
            <div className="flex items-center space-x-2 text-primary font-bold">
              <Phone className="w-5 h-5" />
              <span>(480) 307-7434</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Diesel Repair</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Emergency Roadside Assistance</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Engine Diagnostics (Computer & ECM)</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Brakes & Air Systems (Incl. Wheel Seals)</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Suspension & Steering</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Hydraulics (Hoses & Cylinders)</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Electrical & Batteries (Alternators & Starters)</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">A/C & Cooling Systems</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Fuel System Repair</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Preventive Maintenance (PM Services)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-300 text-sm">
              <a href="#service-area" className="hover:text-primary transition-colors">Phoenix, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Tempe, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Mesa, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Chandler, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Gilbert, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Scottsdale, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Glendale, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Peoria, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Avondale, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Goodyear, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Surprise, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Tolleson, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Buckeye, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Laveen, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Queen Creek, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Apache Junction, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Cave Creek, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Anthem, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Sun City, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">El Mirage, AZ</a>
              <a href="#service-area" className="hover:text-primary transition-colors">Fountain Hills, AZ</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(480) 307-7434</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Phoenix Metro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@azmobilediesel.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AZ Mobile Diesel Repair. All rights reserved. | Professional Mobile Diesel Repair Services</p>
          <p className="mt-2 text-sm">Coverage Corridors: I-10 · I-17 · Loop 101 · Loop 202 · Loop 303</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#fleet" className="hover:text-primary transition-colors">Fleet Services</a>
            <a href="#service-area" className="hover:text-primary transition-colors">Service Areas</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;