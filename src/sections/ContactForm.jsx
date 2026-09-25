import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';
import { Input } from '../components/Input.jsx';
import { Textarea } from '../components/Textarea.jsx';
import { FORM_COPY, FORM_FIELDS, SPECIALTIES } from '../data/contact.js';
import { SEND_CHANNEL, useContactForm } from '../hooks/useContactForm.js';
import { SpecialtyPills } from './SpecialtyPills.jsx';

const SENT_MESSAGE = {
  [SEND_CHANNEL.email]: FORM_COPY.sentEmail,
  [SEND_CHANNEL.whatsapp]: FORM_COPY.sentWhatsApp,
};

function getStatusMessage({ hasErrors, sentChannel }) {
  if (hasErrors) return FORM_COPY.invalid;
  return sentChannel ? SENT_MESSAGE[sentChannel] : '';
}

export function ContactForm() {
  const form = useContactForm();
  const { values, errors } = form;
  const statusMessage = getStatusMessage(form);

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
        <Input type="tel" autoComplete="tel" {...fieldProps('phone')} />
      </div>

      <SpecialtyPills
        label={FORM_FIELDS.specialty.label}
        options={SPECIALTIES}
        selectedId={values.specialty}
        onSelect={form.handleSpecialtySelect}
      />

      <Input required {...fieldProps('subject')} />
      <Textarea required {...fieldProps('message')} />

      <label className="checkbox-row">
        <input
          type="checkbox"
          name="sendGuide"
          checked={values.sendGuide}
          onChange={form.handleChange}
          className="checkbox"
        />
        <span>
          {FORM_FIELDS.sendGuide.labelStart}{' '}
          <strong className="font-medium text-gold">{FORM_FIELDS.sendGuide.labelHighlight}</strong>{' '}
          {FORM_FIELDS.sendGuide.labelEnd}
        </span>
      </label>

      <p className="body-sm flex items-start gap-2">
        <Icon name="drive_folder_upload" size="sm" className="mt-0.5 text-gold" />
        {FORM_COPY.attachments}
      </p>

      <div className="form-actions">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button type="submit" icon="mail">
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

      <p aria-live="polite" className={form.hasErrors ? 'input-error' : 'form-status'}>
        {statusMessage}
      </p>
    </form>
  );
}
