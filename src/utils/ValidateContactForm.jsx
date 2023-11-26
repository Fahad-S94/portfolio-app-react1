export const validateContactForm = (values) => {
  const errors = {};

  // Validate Name
  if (!values.user_name || values.user_name.trim().split(' ').length < 2) {
    errors.user_name = 'Please enter your full name (first and last).';
  }

  // Validate Email
  if (!values.user_email || !values.user_email.includes('@')) {
    errors.user_email = 'Please enter a valid email address.';
  }

  // Validate Message
  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please enter a message with at least 10 characters.';
  }

  return errors;
};
