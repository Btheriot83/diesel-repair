// public/js/forms.js - Optimized form handling
export function initForms() {
  // Contact form submission handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Dispatch button scroll handler
  const dispatchBtn = document.getElementById('dispatch-button');
  if (dispatchBtn) {
    dispatchBtn.addEventListener('click', scrollToContact);
  }

  // Emergency phone click tracking (for analytics)
  document.querySelectorAll('[href^="tel:"]').forEach(tel => {
    tel.addEventListener('click', () => {
      // Could track phone click events for conversion analytics
    });
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('submit-button');
  const formData = {
    name: document.getElementById('name')?.value.trim(),
    phone: document.getElementById('phone')?.value.trim(),
    location: document.getElementById('location')?.value.trim(),
    vehicle: document.getElementById('vehicle')?.value,
    problem: document.getElementById('problem')?.value.trim()
  };

  // Update button state
  if (submitBtn) {
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
  }

  // Enhanced validation
  if (!formData.name || !formData.phone || !formData.location) {
    showAlert('Please fill in all required fields (Name, Phone, Location)', 'error');
    resetButton(submitBtn);
    return;
  }

  // Basic phone validation
  if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
    showAlert('Please enter a valid phone number', 'error');
    resetButton(submitBtn);
    return;
  }

  // Simulate successful submission
  setTimeout(() => {
    showAlert('Quote Request Sent! We\'ll Contact You Within 24 Hours With Your Free Quote.', 'success');
    document.getElementById('contact-form')?.reset();
    resetButton(submitBtn);
  }, 1500);
}

function scrollToContact() {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
}

function showAlert(message, type) {
  // Better UX than alert() - could be replaced with toast notifications
  alert(message);
}

function resetButton(btn) {
  if (btn) {
    btn.textContent = 'Request On-Site Services';
    btn.disabled = false;
  }
}

// Auto-initialize if not imported as module
if (typeof module === 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
  } else {
    initForms();
  }
}