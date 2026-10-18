import { useState } from 'react';

import {
  INQUIRY_LABELS,
  PHONE_E164,
  VALIDATION_MESSAGES,
  WEB3FORMS_ACCESS_KEY,
} from '../data/contact.js';
import { buildInquiry, buildWhatsAppUrl, fitUrlToLimit } from '../lib/buildInquiry.js';
import { sendEmail } from '../lib/sendEmail.js';
import { validateInquiry } from '../lib/validation.js';

export const SEND_CHANNEL = { email: 'email', whatsapp: 'whatsapp' };
export const SEND_STATUS = { idle: 'idle', sending: 'sending', sent: 'sent', error: 'error' };

const INITIAL_VALUES = {
  doctorName: '',
  clinicName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  // Honeypot: hidden from people, bots fill it and Web3Forms drops the submission.
  botcheck: '',
};

function openWhatsApp({ subject, body }) {
  const url = fitUrlToLimit(
    (text) => buildWhatsAppUrl({ phone: PHONE_E164, text }),
    `${subject}\n\n${body}`,
  );
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [sentChannel, setSentChannel] = useState(null);
  const [status, setStatus] = useState(SEND_STATUS.idle);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: undefined }));
  }

  async function send(channel) {
    if (status === SEND_STATUS.sending) return;

    const nextErrors = validateInquiry(values, VALIDATION_MESSAGES);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      setSentChannel(null);
      setStatus(SEND_STATUS.idle);
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    const inquiry = buildInquiry(values, INQUIRY_LABELS);
    setSentChannel(channel);

    if (channel === SEND_CHANNEL.whatsapp) {
      openWhatsApp(inquiry);
      setStatus(SEND_STATUS.sent);
      return;
    }

    setStatus(SEND_STATUS.sending);
    try {
      await sendEmail({
        accessKey: WEB3FORMS_ACCESS_KEY,
        ...inquiry,
        replyTo: values.email.trim(),
        fromName: values.doctorName.trim(),
        botcheck: values.botcheck,
      });
      setValues(INITIAL_VALUES);
      setStatus(SEND_STATUS.sent);
    } catch {
      setStatus(SEND_STATUS.error);
    }
  }

  const hasErrors = Object.values(errors).some(Boolean);

  return { values, errors, hasErrors, sentChannel, status, handleChange, send };
}
