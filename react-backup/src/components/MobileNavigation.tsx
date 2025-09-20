import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavigationProps {
  onCallClick?: () => void;
}

const MobileNavigation = ({ onCallClick }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: "HOME", href: "#", section: "home" },
    { label: "SERVICES", href: "#services", section: "services" },
    { label: "ABOUT", href: "#about", section: "about" },
    { label: "CONTACT", href: "#contact", section: "contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCallClick = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      window.location.href = "tel:+14803077434";
    }
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80">
        <SheetHeader>
          <SheetTitle className="text-left text-2xl font-black text-primary">
            AZ MOBILE
          </SheetTitle>
          <SheetDescription className="text-left">
            Professional Mobile Diesel Repair Services
          </SheetDescription>
        </SheetHeader>
        
        <nav className="mt-8 space-y-4" role="navigation" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              aria-label={`Navigate to ${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50 rounded-lg">
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-bold text-gray-900">(480) 307-7434</span>
          </div>
          
          <Button 
            onClick={handleCallClick}
            variant="default" 
            size="lg" 
            className="w-full font-bold bg-accent hover:bg-accent/90"
            aria-label="Call AZ Mobile Diesel Repair now"
          >
            <Phone className="w-4 h-4 mr-2" />
            CALL NOW
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              setIsOpen(false);
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Get a free quote"
          >
            GET FREE QUOTE
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;