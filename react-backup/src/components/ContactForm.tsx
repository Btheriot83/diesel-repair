import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicleType: "",
    timeline: "",
    location: "",
    message: "",
  });

  const serviceOptions = [
    "Emergency Roadside Assistance",
    "Air Conditioning Systems", 
    "DPF Regens & Aftertreatment",
    "Electrical & Diagnostics",
    "Fuel Systems",
    "Brakes & Air",
    "Tires & Wheel Seals",
    "Batteries, Alternators & Starters",
    "Hydraulic Systems & PTO",
    "DOT Inspections",
    "PM Service",
    "Other"
  ];

  const vehicleTypeOptions = [
    "Class A Truck (Semi/Tractor)",
    "Class B Truck (Straight Truck/Box Truck)",
    "Pickup Truck (3/4 Ton or 1 Ton)",
    "Van (Cargo/Service Van)", 
    "RV/Motorhome",
    "Bus/Coach",
    "Construction Equipment",
    "Agricultural Equipment",
    "Other Heavy Equipment"
  ];

  const timelineOptions = [
    "ASAP / Emergency",
    "Within 2 Hours",
    "Same day",
    "Within 24 Hours", 
    "Within 48 Hours",
    "Schedule for Later"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please Fill in All Required Fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Quote Request Sent!",
        description: "We'll Contact You Within 24 Hours With Your Free Quote.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        vehicleType: "",
        timeline: "",
        location: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something Went Wrong. Please Try Again or Call Us Directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request On-Site Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Tell Us About Your Truck and What's Going On—We'll Reply Within 15–30 Minutes During Business Hours.
          </p>
          <p className="text-sm text-muted-foreground">
            99% Same-Day Response • We Come To You
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-foreground font-semibold">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground font-semibold">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="(602) 555-0123"
                  className="border-border focus:border-primary"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-semibold">Email (optional)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="border-border focus:border-primary"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="service" className="text-foreground font-semibold">Service Needed</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a Service</option>
                  {serviceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <Label htmlFor="vehicleType" className="text-foreground font-semibold">Vehicle/Equipment Type</Label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select Vehicle Type</option>
                  {vehicleTypeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="timeline" className="text-foreground font-semibold">When Do You Need Service?</Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select Timeline</option>
                  {timelineOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <Label htmlFor="location" className="text-foreground font-semibold">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  placeholder="Zip Code or Cross-Streets"
                  className="border-border focus:border-primary"
                  aria-describedby="location-help"
                />
                <p id="location-help" className="text-xs text-muted-foreground">
                  Zip Code or Nearest Cross-Streets for Accurate Dispatch
                </p>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground font-semibold">Describe the Problem</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe Symptoms, Fault Codes, What Happened When the Problem Started..."
                rows={5}
                className="border-border focus:border-primary resize-none"
                aria-describedby="message-help"
              />
              <p id="message-help" className="text-xs text-muted-foreground">
                Include Fault/Error Codes, Warning Lights, Symptoms, and When the Problem Started. You Can Also Text Photos to (480) 307-7434 After Submitting This Form.
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="emergency"
                className="rounded border-border text-primary focus:ring-primary"
              />
              <Label htmlFor="emergency" className="text-sm font-medium text-foreground">
                This Is an Emergency / Down at Roadside
              </Label>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              size="lg" 
              className="w-full"
              variant="hero"
            >
              {isSubmitting ? "Sending..." : "Request On-Site Services"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;