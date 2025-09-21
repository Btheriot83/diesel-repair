// public/js/forms.js
// Simple form submission handler
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const submitButton = document.getElementById('submit-button');
  if (submitButton) {
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
  }

  // Basic validation
  const name = document.getElementById('name')?.value;
  const phone = document.getElementById('phone')?.value;
  const location = document.getElementById('location')?.value;

  if (!name || !phone || !location) {
    alert('Please fill in all required fields (Name, Phone, Location)');
    if (submitButton) {
      submitButton.textContent = 'Request On-Site Services';
      submitButton.disabled = false;
    }
    return;
  }

  // Simulate form submission
  setTimeout(() => {
    alert('Quote Request Sent! We\'ll Contact You Within 24 Hours With Your Free Quote.');

    // Reset form
    document.getElementById('contact-form')?.reset();

    if (submitButton) {
      submitButton.textContent = 'Request On-Site Services';
      submitButton.disabled = false;
    }
  }, 1500);
});

// Other form-related interactive scripts
document.getElementById('dispatch-button')?.addEventListener('click', () => {
  const element = document.querySelector("#contact");
  element?.scrollIntoView({
    behavior: "smooth"
  });
});