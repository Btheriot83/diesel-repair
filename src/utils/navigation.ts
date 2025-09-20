// Navigation Utilities
// Centralized scroll and navigation functions used across components

/**
 * Smoothly scrolls to an element by selector
 * @param selector - CSS selector for the target element
 * @param offset - Optional offset from the top of the element (default: 0)
 */
export const smoothScrollTo = (selector: string, offset: number = 0): void => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Scrolls smoothly to the top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  });
};

/**
 * Scrolls to the Emergency Hub section
 * Used by Hero and other components for emergency CTA
 */
export const scrollToEmergencyHub = (): void => {
  smoothScrollTo('#emergency-hub');
};

/**
 * Scrolls to the Contact Form section
 * Used for "Request Service" CTAs
 */
export const scrollToContact = (): void => {
  smoothScrollTo('#contact');
};

/**
 * Scrolls to the Services section
 * Used for "Learn More" CTAs
 */
export const scrollToServices = (): void => {
  smoothScrollTo('#services');
};

/**
 * Generic navigation handler for header/menu items
 * @param href - The href value (should be a hash like '#services')
 */
export const handleNavigation = (href: string): void => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Export commonly used selectors as constants
export const SELECTORS = {
  EMERGENCY_HUB: '#emergency-hub',
  CONTACT: '#contact',
  SERVICES: '#services',
  SERVICE_AREA: '#service-area',
  WHY_CHOOSE_US: '#why-choose-us',
  RECENT_JOBS: '#recent-jobs'
} as const;