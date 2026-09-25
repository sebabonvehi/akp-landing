import { useState } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import SpecialtyPills from './SpecialtyPills';
import Button from './Button';

const initialState = {
  doctorName: '',
  clinicName: '',
  clinicalEmail: '',
  clinicPhone: '',
  caseSubject: '',
  caseMessage: '',
  sendGuide: true,
};

const Form = () => {
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío: acá iría la llamada a tu backend / servicio de email
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormState(initialState);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="flex items-start gap-3 rounded-sm bg-surface-container-highest p-4 text-on-surface">
        <span className="material-symbols-outlined text-[24px] text-primary">check_circle</span>
        <div>
          <span className="block font-label text-label-md font-semibold tracking-wider text-primary uppercase">
            Consulta Transmitida con Éxito
          </span>
          <p className="font-sans text-sm text-on-surface-variant">
            Hemos notificado a la mesa de ceramistas de guardia. En breve recibirá un correo de
            confirmación y el dictamen técnico detallado.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" id="clinicalInquiryForm" onSubmit={handleSubmit}>
      {/* Fila 1: odontólogo y clínica */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Dr. / Nombre del Odontólogo"
          hint="Requerido"
          placeholder="Ej. Dr. Alejandro Vives"
          name="doctorName"
          required
          value={formState.doctorName}
          onChange={handleChange}
          iconLeft="badge"
        />
        <Input
          label="Nombre de la Clínica Dental"
          hint="Requerido"
          placeholder="Ej. Clínica Dental Art & Care"
          name="clinicName"
          required
          value={formState.clinicName}
          onChange={handleChange}
          iconLeft="domain"
        />
      </div>

      {/* Fila 2: canales de contacto */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Email Clínico de Contacto"
          hint="Donde enviaremos el análisis"
          placeholder="doctor@clinicavives.es"
          name="clinicalEmail"
          required
          value={formState.clinicalEmail}
          onChange={handleChange}
          type="email"
          iconLeft="mail"
        />
        <Input
          label="Teléfono / WhatsApp de Urgencia"
          hint="Opcional"
          placeholder="+34 600 000 000"
          name="clinicPhone"
          value={formState.clinicPhone}
          onChange={handleChange}
          type="tel"
          iconLeft="chat"
        />
      </div>

      <SpecialtyPills />

      <Input
        label="Asunto del Caso Clínico"
        placeholder="Ej. Rehabilitación estética 13 a 23 con sustrato oscurecido"
        name="caseSubject"
        required
        value={formState.caseSubject}
        onChange={handleChange}
      />

      <Textarea
        label="Mensaje & Consulta Detallada"
        hint="Detalle sustratos, espesores o fechas límite"
        placeholder="¿Tienen disponibilidad para un caso de carillas de canino a canino con entrega para el próximo jueves? ¿Qué parámetros de preparación axial recomiendan para disilicato inyectado con sustrato ND2?"
        name="caseMessage"
        required
        value={formState.caseMessage}
        onChange={handleChange}
        rows={4}
      />

      <label className="group flex cursor-pointer items-start gap-2 select-none">
        <input
          checked={formState.sendGuide}
          onChange={handleChange}
          name="sendGuide"
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-sm accent-primary"
          type="checkbox"
        />
        <span className="font-sans text-body-sm text-on-surface-variant transition-colors group-hover:text-on-surface">
          Deseo recibir además la{' '}
          <strong className="font-medium text-primary">
            Guía de Preparación Clínica &amp; Tabla de Precios 2025
          </strong>{' '}
          en PDF a mi dirección de correo.
        </span>
      </label>

      <div className="flex flex-col items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <Button
          variant="primary"
          size="lg"
          type="submit"
          disabled={isSubmitting}
          className={`w-full sm:w-auto ${isSubmitting ? 'opacity-70' : ''}`}
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined animate-spin">sync</span>
              Procesando Envío...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">mark_email_read</span>
              Enviar Consulta por Email
            </>
          )}
        </Button>
        <div className="flex items-center gap-1.5 font-label text-label-sm tracking-wider text-outline uppercase">
          <span className="material-symbols-outlined text-[16px] text-secondary">
            verified_user
          </span>
          Cifrado SSL 256-Bit para datos clínicos
        </div>
      </div>
    </form>
  );
};

export default Form;
