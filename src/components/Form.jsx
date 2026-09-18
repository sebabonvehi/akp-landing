import { useState } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import SpecialtyPills from './SpecialtyPills';
import Button from './Button';

const Form = () => {
  const [formState, setFormState] = useState({
    doctorName: '',
    clinicName: '',
    clinicalEmail: '',
    clinicPhone: '',
    caseSubject: '',
    caseMessage: '',
    sendGuide: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In a real app, you would send this data to a backend or email service
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form after success
      setFormState({
        doctorName: '',
        clinicName: '',
        clinicalEmail: '',
        clinicPhone: '',
        caseSubject: '',
        caseMessage: '',
        sendGuide: true
      });
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="p-4 bg-surface-container-highest rounded text-on-surface flex items-start gap-2 mt-4">
        <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
        <div>
          <span className="text-xs font-Geist uppercase tracking-wider text-primary block">
            Consulta Transmitida con Éxito
          </span>
          <p className="text-sm font-Hanken_Grotesk text-on-surface-variant">
            Hemos notificado a la mesa de ceramistas de guardia. En breve recibirá un correo de confirmación y el dictamen técnico detallado.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      id="clinicalInquiryForm"
      onSubmit={handleSubmit}
    >
      {/* Row 1: Specialist & Clinic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-0.5">
          <Input
            label="Dr. / Nombre del Odontólogo"
            placeholder="Ej. Dr. Alejandro Vives"
            name="doctorName"
            required
            value={formState.doctorName}
            onChange={handleChange}
            iconLeft="badge"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <Input
            label="Nombre de la Clínica Dental"
            placeholder="Ej. Clínica Dental Art & Care"
            name="clinicName"
            required
            value={formState.clinicName}
            onChange={handleChange}
            iconLeft="domain"
          />
        </div>
      </div>

      {/* Row 2: Communication Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-0.5">
          <Input
            label="Email Clínico de Contacto"
            placeholder="doctor@clinicavives.es"
            name="clinicalEmail"
            required
            value={formState.clinicalEmail}
            onChange={handleChange}
            type="email"
            iconLeft="mail"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <Input
            label="Teléfono / WhatsApp de Urgencia"
            placeholder="+34 600 000 000"
            name="clinicPhone"
            value={formState.clinicPhone}
            onChange={handleChange}
            type="tel"
            iconLeft="chat"
          />
        </div>
      </div>

      {/* Specialty Chips Selector */}
      <SpecialtyPills />

      {/* Subject Field */}
      <div className="flex flex-col gap-0.5">
        <Input
          label="Asunto del Caso Clínico"
          placeholder="Ej. Rehabilitación estética 13 a 23 con sustrato oscurecido"
          name="caseSubject"
          required
          value={formState.caseSubject}
          onChange={handleChange}
        />
      </div>

      {/* Detailed Message Area */}
      <div className="flex flex-col gap-0.5">
        <Textarea
          label="Mensaje & Consulta Detallada"
          placeholder="¿Tienen disponibilidad para un caso de carillas de canino a canino con entrega para el próximo jueves? ¿Qué parámetros de preparación axial recomiendan para disilicato inyectado con sustrato ND2?"
          name="caseMessage"
          required
          value={formState.caseMessage}
          onChange={handleChange}
          rows={4}
        />
      </div>

      {/* Checkbox Lead Magnet */}
      <label className="flex cursor-pointer select-none items-start gap-2 group">
        <input
          checked={formState.sendGuide}
          onChange={handleChange}
          name="sendGuide"
          className="mt-1 h-4 w-4 cursor-pointer rounded bg-surface-container-lowest accent-primary"
          type="checkbox"
        />
        <span className="font-Hanken_Grotesk text-[13px] text-on-surface-variant transition-colors group-hover:text-on-surface">
          Deseo recibir además la <strong className="font-medium text-primary">Guía de Preparación Clínica & Tabla de Precios 2025</strong> en PDF a mi dirección de correo.
        </span>
      </label>

      {/* Submit Button & Feedback Area */}
      <div className="flex flex-col items-center justify-between gap-4 pt-1 sm:flex-row">
        <Button
          variant="primary"
          type="submit"
          disabled={isSubmitting}
          className={`w-full sm:w-auto ${isSubmitting ? 'opacity-70' : ''}`}
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
              Procesando Envío...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
              Enviar Consulta por Email
            </>
          )}
        </Button>
        <div className="flex items-center gap-1 text-xs font-Geist uppercase text-outline">
          <span className="material-symbols-outlined text-secondary text-[16px]">verified_user</span>
          Cifrado SSL 256-Bit para datos clínicos
        </div>
      </div>
    </form>
  );
};

export default Form;
