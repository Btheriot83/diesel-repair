import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Phone } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { COMPANY_CONFIG } from '@/config/constants';
import { handleNavigation, scrollToTop } from '@/utils/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: 'SERVICES', href: '#services' },
    { label: 'LOCATIONS', href: '#service-area' },
    { label: 'BLOG', href: '#recent-jobs' },
    { label: 'ABOUT', href: '#why-choose-us' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    handleNavigation(href);
  };

  const handleCallClick = () => {
    window.location.href = COMPANY_CONFIG.phoneLink;
  };

  const handleLogoClick = () => {
    scrollToTop();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mt-6 ml-4">
            <button onClick={handleLogoClick} className="flex items-center">
              <img 
                src="/lovable-uploads/89296262-e00f-4a4b-a2cf-bfbc1db441ce.png"
                alt={`${COMPANY_CONFIG.companyName} Logo`} 
                className="h-36 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 font-bold text-sm uppercase tracking-wider hover:text-orange-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call Now Button */}
          <div className="hidden lg:block">
            <Button
              onClick={handleCallClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium text-xs uppercase tracking-wide px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-1"
            >
              <Phone className="h-3 w-3" />
              CALL NOW
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex flex-col items-start mb-6">
                    <img 
                      src="/lovable-uploads/89296262-e00f-4a4b-a2cf-bfbc1db441ce.png" 
                      alt={`${COMPANY_CONFIG.companyName} Logo`} 
                      className="h-36 w-auto"
                    />
                  </div>
                  
                  {navigationItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-lg font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 py-2 uppercase tracking-wider"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="pt-4">
                    <Button
                      onClick={handleCallClick}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2.5 text-sm uppercase tracking-wide rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      CALL NOW
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;