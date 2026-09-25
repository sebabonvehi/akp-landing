import { useState } from 'react';

import {
  EMAIL_GENERAL,
  INQUIRY_LABELS,
  PHONE_E164,
  SPECIALTIES,
  VALIDATION_MESSAGES,
} from '../data/contact.js';
import {
  buildInquiry,
  buildMailtoUrl,
  buildWhatsAppUrl,
  fitUrlToLimit,
} from '../lib/buildInquiry.js';
import { validateInquiry } from '../lib/validation.js';

export const SEND_CHANNEL = { email: 'email', whatsapp: 'whatsapp' };

const INITIAL_VALUES = {
  doctorName: '',
  clinicName: '',
  email: '',
  phone: '',
  specialty: SPECIALTIES[0].id,
  subject: '',
  message: '',
  sendGuide: false,
};

function findSpecialtyLabel(id) {
  return SPECIALTIES.find((specialty) => specialty.id === id)?.label ?? '';
}

function openChannel(channel, { subject, body }) {
  if (channel === SEND_CHANNEL.whatsapp) {
    const url = fitUrlToLimit(
      (text) => buildWhatsAppUrl({ phone: PHONE_E164, text }),
      `${subject}\n\n${body}`,
    );
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  const url = fitUrlToLimit(
    (text) => buildMailtoUrl({ to: EMAIL_GENERAL, subject, body: text }),
    body,
  );
  window.location.href = url;
}

export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [sentChannel, setSentChannel] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setValues((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: undefined }));
  }

  function handleSpecialtySelect(specialty) {
    setValues((previous) => ({ ...previous, specialty }));
  }

  function send(channel) {
    const nextErrors = validateInquiry(values, VALIDATION_MESSAGES);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      setSentChannel(null);
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    const inquiry = buildInquiry(values, {
      labels: INQUIRY_LABELS,
      specialtyLabel: findSpecialtyLabel(values.specialty),
    });
    openChannel(channel, inquiry);
    setSentChannel(channel);
  }

  const hasErrors = Object.values(errors).some(Boolean);

  return { values, errors, hasErrors, sentChannel, handleChange, handleSpecialtySelect, send };
}
