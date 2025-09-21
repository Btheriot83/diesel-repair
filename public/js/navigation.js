// public/js/navigation.js
// Client-side navigation functionality
function handleNavigation(href) {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
}

// Logo click handler
document.getElementById('logo-button')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Desktop navigation click handlers
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const href = e.target.getAttribute('data-href');
    if (href) handleNavigation(href);
  });
});

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

mobileMenuButton?.addEventListener('click', () => {
  mobileMenu?.classList.remove('hidden');
});

mobileMenuClose?.addEventListener('click', () => {
  mobileMenu?.classList.add('hidden');
});

// Close mobile menu when clicking outside
mobileMenu?.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
});

// Mobile navigation click handlers
document.querySelectorAll('.mobile-nav-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const href = e.target.getAttribute('data-href');
    if (href) {
      handleNavigation(href);
      mobileMenu?.classList.add('hidden');
    }
  });
});