import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';
import { Input } from '../components/Input.jsx';
import { Textarea } from '../components/Textarea.jsx';
import { FORM_COPY, FORM_FIELDS } from '../data/contact.js';
import { SEND_CHANNEL, SEND_STATUS, useContactForm } from '../hooks/useContactForm.js';

const SENT_MESSAGE = {
  [SEND_CHANNEL.email]: FORM_COPY.sentEmail,
  [SEND_CHANNEL.whatsapp]: FORM_COPY.sentWhatsApp,
};

function getStatusMessage({ hasErrors, sentChannel, status }) {
  if (hasErrors) return FORM_COPY.invalid;
  if (status === SEND_STATUS.sending) return FORM_COPY.sendingEmail;
  if (status === SEND_STATUS.error) return FORM_COPY.errorEmail;
  return status === SEND_STATUS.sent ? SENT_MESSAGE[sentChannel] : '';
}

export function ContactForm() {
  const form = useContactForm();
  const { values, errors } = form;
  const statusMessage = getStatusMessage(form);
  const isSending = form.status === SEND_STATUS.sending;
  const isError = form.hasErrors || form.status === SEND_STATUS.error;

  function handleSubmit(event) {
    event.preventDefault();
    form.send(SEND_CHANNEL.email);
  }

  function fieldProps(id) {
    return {
      id,
      value: values[id],
      error: errors[id],
      onChange: form.handleChange,
      ...FORM_FIELDS[id],
    };
  }

  return (
    <form noValidate className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="form-row">
        <Input required autoComplete="name" {...fieldProps('doctorName')} />
        <Input required autoComplete="organization" {...fieldProps('clinicName')} />
      </div>

      <div className="form-row">
        <Input required type="email" autoComplete="email" {...fieldProps('email')} />
        <Input required type="tel" autoComplete="tel" {...fieldProps('phone')} />
      </div>

      <Input required {...fieldProps('subject')} />
      <Textarea required {...fieldProps('message')} />

      <p className="body-sm flex items-start gap-2">
        <Icon name="drive_folder_upload" size="sm" className="mt-0.5 text-gold" />
        <span>
          {FORM_COPY.attachments}{' '}
          <a
            href={FORM_COPY.attachmentsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {FORM_COPY.attachmentsLinkLabel}
          </a>
        </span>
      </p>

      <div className="form-actions">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button type="submit" icon="mail" disabled={isSending} aria-busy={isSending}>
            {FORM_COPY.submitEmail}
          </Button>
          <Button variant="secondary" icon="chat" onClick={() => form.send(SEND_CHANNEL.whatsapp)}>
            {FORM_COPY.submitWhatsApp}
          </Button>
        </div>
        <p className="caption flex items-center gap-1.5">
          <Icon name="verified_user" size="sm" className="text-champagne" />
          {FORM_COPY.privacy}
        </p>
      </div>

      <p aria-live="polite" className={isError ? 'input-error' : 'form-status'}>
        {statusMessage}
      </p>
    </form>
  );
}
