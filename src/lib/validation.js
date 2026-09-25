const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{8,20}$/;

export const REQUIRED_FIELDS = ['doctorName', 'clinicName', 'email', 'subject', 'message'];

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidPhone(value) {
  return PHONE_PATTERN.test(value.trim());
}

export function validateInquiry(values, messages) {
  const errors = {};

  for (const field of REQUIRED_FIELDS) {
    if (!values[field].trim()) errors[field] = messages.required;
  }

  if (!errors.email && !isValidEmail(values.email)) errors.email = messages.email;
  if (values.phone.trim() && !isValidPhone(values.phone)) errors.phone = messages.phone;

  return errors;
}
