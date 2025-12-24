// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_l0cjpdb',
  TEMPLATE_ID: 'template_r0l0e38',
  PUBLIC_KEY: 'y7RZHk8iIqIfltVbq'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Send email function
function sendEmail(formData) {
  const templateParams = {
    from_name: formData.get('name'),
    from_email: formData.get('email'),
    business_name: formData.get('business_name') || 'Non spécifié',
    business_type: formData.get('business_type') || 'Non spécifié',
    message: formData.get('message')
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams
  );
}

// Export for use in main.ts
window.sendEmailJS = sendEmail;