import { useState } from 'react';

import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';
import { Input } from '../components/Input.jsx';
import { Textarea } from '../components/Textarea.jsx';
import { FORM_COPY, FORM_FIELDS, SPECIALTIES } from '../data/contact.js';
import { SpecialtyPills } from './SpecialtyPills.jsx';

const INITIAL_VALUES = {
  doctorName: '',
  clinicName: '',
  email: '',
  phone: '',
  specialty: SPECIALTIES[1].id,
  subject: '',
  message: '',
  sendGuide: true,
};

export function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setValues((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSpecialtySelect(specialty) {
    setValues((previous) => ({ ...previous, specialty }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    setValues(INITIAL_VALUES);
  }

  if (isSubmitted) {
    return (
      <output className="form-success">
        <Icon name="check_circle" size="lg" className="text-gold" />
        <div>
          <p className="eyebrow">{FORM_COPY.successTitle}</p>
          <p className="body-sm">{FORM_COPY.successMessage}</p>
        </div>
      </output>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="form-row">
        <Input
          id="doctorName"
          required
          value={values.doctorName}
          onChange={handleChange}
          {...FORM_FIELDS.doctorName}
        />
        <Input
          id="clinicName"
          required
          value={values.clinicName}
          onChange={handleChange}
          {...FORM_FIELDS.clinicName}
        />
      </div>

      <div className="form-row">
        <Input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={handleChange}
          {...FORM_FIELDS.email}
        />
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          {...FORM_FIELDS.phone}
        />
      </div>

      <SpecialtyPills
        label={FORM_FIELDS.specialty.label}
        options={SPECIALTIES}
        selectedId={values.specialty}
        onSelect={handleSpecialtySelect}
      />

      <Input
        id="subject"
        required
        value={values.subject}
        onChange={handleChange}
        {...FORM_FIELDS.subject}
      />

      <Textarea
        id="message"
        required
        value={values.message}
        onChange={handleChange}
        {...FORM_FIELDS.message}
      />

      <label className="checkbox-row">
        <input
          type="checkbox"
          name="sendGuide"
          checked={values.sendGuide}
          onChange={handleChange}
          className="checkbox"
        />
        <span>
          {FORM_FIELDS.sendGuide.labelStart}{' '}
          <strong className="font-medium text-gold">{FORM_FIELDS.sendGuide.labelHighlight}</strong>{' '}
          {FORM_FIELDS.sendGuide.labelEnd}
        </span>
      </label>

      <div className="form-actions">
        <Button type="submit" icon="mark_email_read" className="w-full sm:w-auto">
          {FORM_COPY.submit}
        </Button>
        <p className="caption flex items-center gap-1.5">
          <Icon name="verified_user" size="sm" className="text-champagne" />
          {FORM_COPY.security}
        </p>
      </div>
    </form>
  );
}
