export const NAV_LABEL = 'Principal';

export const MENU_LABELS = { open: 'Abrir menú', close: 'Cerrar menú' };

export const NAV_LINKS = [
  { id: 'services', label: 'Servicios', href: '#servicios' },
  { id: 'about', label: 'Nosotros', href: '#nosotros' },
  { id: 'cases', label: 'Casos', href: '#casos' },
  { id: 'contact', label: 'Contacto', href: '#contacto' },
];

// Buttons render uppercase via CSS, so the label shows as "SOLICITAR PRECIOS".
export const HEADER_CTA = {
  label: 'Solicitar precios',
  href: '#contacto',
  icon: 'cloud_upload',
};
