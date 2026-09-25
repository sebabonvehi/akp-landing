# AKP Digital Dental Lab — Landing

Landing page de una sola página para AKP Digital Dental Lab, laboratorio dental digital CAD/CAM.
Contenido visible en español (Argentina); código, commits y comentarios en inglés.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4 (tokens en `@theme`, sin `tailwind.config.js`)
- oxlint + Prettier (`prettier-plugin-tailwindcss`)
- Node 22 LTS (ver `.nvmrc`)

## Scripts

```bash
npm install
npm run dev           # servidor de desarrollo
npm run build         # build de producción en dist/
npm run preview       # sirve el build
npm run lint          # oxlint
npm run format        # Prettier (escribe)
npm run format:check  # Prettier (verifica)
```

Antes de cada commit: `format:check`, `lint` y `build` sin errores.

## Estructura

```
src/
├── App.jsx            # composición de secciones
├── components/        # UI genérica: Button, Input, Textarea, Select, Card, Chip, Icon…
├── sections/          # bloques de la página: Hero, Services, About, Contact, FAQ…
├── data/              # todo el copy visible y datos de contacto
├── hooks/             # useContactForm, useMobileMenu
├── lib/               # funciones puras: validation, buildInquiry, formatCurrency
├── assets/            # imágenes optimizadas (WebP)
└── styles/
    ├── index.css      # entry: importa Tailwind y las capas
    ├── theme.css      # @theme: colores, tipografía, radios, espaciado, sombras
    ├── base.css       # fondo, focus-visible, reduced motion
    └── components.css # clases semánticas (.btn-primary, .input-field, .card…)
```

Los tokens salen de `DESIGN.md` (solo lectura). Los `className` usan clases semánticas y
utilidades con tokens; nada de hex ni valores arbitrarios en JSX.

## Formulario de contacto

No hay backend: el formulario valida en el cliente y abre el cliente de correo (`mailto:`) o
WhatsApp (`wa.me`) con la consulta armada. Los adjuntos (STL/PLY/OBJ, fotos) se envían por
WeTransfer o Google Drive porque `mailto:` no admite archivos. Las URLs se recortan a
~2000 caracteres.

Datos de contacto: `src/data/contact.js`.

## Pendientes

- Logo definitivo (hoy se usa un monograma de texto) y fotos propias.
- Imagen Open Graph 1200×630 (`og:image`).
- Confirmar dominio (`akpdentallab.com` se usa en canonical, sitemap y JSON-LD).
- Confirmar horario (Lun–Vie 08:30–19:30 ART) y si el PDF de tarifas existe como link.
- Hosting.
