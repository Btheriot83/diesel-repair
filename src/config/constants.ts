// Business Configuration for AZ Mobile Diesel Repair
// Centralized configuration to ensure consistency across all components

export const COMPANY_CONFIG = {
  // Business Information
  companyName: "AZ Mobile Diesel Repair",
  phoneNumber: "(480) 307-7434",
  phoneLink: "tel:+14803077434",
  email: "info@azmobilediesel.com",
  
  // Service Areas
  primaryCity: "Phoenix",
  state: "Arizona",
  stateAbbr: "AZ",
  serviceRadius: "50 miles",
  
  // Service Area Cities (Complete 21-City Phoenix Metro Coverage)
  serviceAreas: [
    "Phoenix",
    "Tempe", 
    "Mesa",
    "Chandler",
    "Gilbert",
    "Scottsdale",
    "Glendale",
    "Peoria",
    "Avondale",
    "Goodyear",
    "Surprise",
    "Tolleson",
    "Buckeye",
    "Laveen",
    "Queen Creek",
    "Apache Junction",
    "Cave Creek",
    "Anthem",
    "Sun City",
    "El Mirage",
    "Fountain Hills"
  ],
  
  // Major Highways/Corridors
  majorCorridors: [
    "I-10",
    "I-17", 
    "Loop 101",
    "Loop 202",
    "Loop 303"
  ],
  
  // Business Hours
  businessHours: {
    emergency: "24/7",
    regular: "Monday - Sunday: 6 AM - 10 PM",
    emergencyNote: "24/7 Emergency Roadside Assistance Available"
  },
  
  // SEO Information
  seo: {
    businessType: "Mobile Diesel Repair Service",
    description: "Professional Mobile Diesel Repair Services for Phoenix Metro and Corridor Highways",
    keywords: "mobile diesel repair, Phoenix diesel mechanic, truck repair, emergency roadside assistance",
    serviceArea: "Phoenix Metro Area and Surrounding Corridors"
  },
  
  // Social/Web
  website: "https://azmobilediesel.com",
  
  // Fleet Experience
  experience: {
    years: "15+",
    background: "Fleet Manager Experience",
    specialization: "Diesel Trucks and Heavy Equipment"
  }
} as const;

// Utility functions for common operations
export const getPhoneLink = () => COMPANY_CONFIG.phoneLink;
export const getServiceAreasText = () => COMPANY_CONFIG.serviceAreas.join(", ");
export const getCorridorsText = () => COMPANY_CONFIG.majorCorridors.join(", ");