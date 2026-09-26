# Arquitectura — AKP Digital Dental Lab Landing

Landing estática de una sola página (SPA sin router) construida con React 19 + Vite 8 y
Tailwind CSS v4. No hay backend, estado global ni llamadas de red: todo el contenido se
empaqueta en el build y el único "envío" de datos es abrir `mailto:` o WhatsApp.

## Capas

```
index.html ─► src/main.jsx ─► App.jsx ─► sections/* ─► components/*
                                             │
                                             ├─► data/*   (copy y datos de contacto)
                                             ├─► hooks/*  (estado e interacción)
                                             └─► lib/*    (funciones puras)
```

| Capa          | Responsabilidad                                                                | Depende de                    |
| ------------- | ------------------------------------------------------------------------------ | ----------------------------- |
| `index.html`  | SEO (meta, Open Graph, canonical), JSON-LD `MedicalBusiness`, carga de fuentes | —                             |
| `App.jsx`     | Composición: orden de las secciones dentro de `<main id="content">`            | `sections`                    |
| `sections/`   | Bloques de la página; leen su contenido de `data/` y lo renderizan             | `components`, `data`, `hooks` |
| `components/` | Primitivas de UI genéricas, sin copy propio (Button, Card, Input, FieldShell…) | `lib`                         |
| `data/`       | Todo el texto visible, enlaces, emails y teléfono. Un archivo por sección      | `lib`, `assets`               |
| `hooks/`      | Lógica con estado: `useContactForm`, `useMobileMenu`                           | `data`, `lib`                 |
| `lib/`        | Funciones puras y testeables, sin React ni DOM                                 | —                             |
| `styles/`     | Tokens de diseño y clases semánticas                                           | `DESIGN.md` (fuente)          |

Reglas de dependencia: `components/` no importa de `data/` ni `sections/`; `lib/` no importa
nada del proyecto. Así el copy se cambia sin tocar JSX y las primitivas se reutilizan entre
secciones.

## Orden de la página

`SiteHeader` → `StatusBarSection` → `HeroSection` → `ServicesSection` → `AboutSection` →
`ContactSection` (`ContactForm` + `ContactAside`) → `ValuePropsSection` → `FaqSection` →
`ConversionSection` → `SiteFooter`.

La navegación es por anclas (`#contacto`, etc.) definidas en `data/navigation.js`.
`SiteHeader` usa `useMobileMenu` (abre/cierra, cierra con Escape).

## Flujo del formulario de contacto

```
ContactForm ──(values, handlers)── useContactForm
                                      │ send(channel)
                                      ▼
                      lib/validation.validateInquiry(values, VALIDATION_MESSAGES)
                         │ errores → setErrors + focus en el primer campo inválido (por id)
                         ▼ ok
                      lib/buildInquiry.buildInquiry → { subject, body }
                         ▼
                      fitUrlToLimit (≤ 2000 caracteres)
                         ├─ email    → buildMailtoUrl   → window.location.href
                         └─ whatsapp → buildWhatsAppUrl → window.open (nueva pestaña)
```

- Los `id` de los campos deben coincidir con las claves de `values` para que funcione el foco.
- Accesibilidad: `FieldShell` renderiza label, hint y error; `lib/fieldA11y` genera los ids
  `${id}-hint` / `${id}-error` y el `aria-describedby`.
- `mailto:` no admite adjuntos: el copy deriva los archivos STL/PLY/OBJ a WeTransfer o
  Google Drive.
- Datos de destino (email, teléfono E.164), labels y mensajes: `data/contact.js`.

## Estilos

- Tailwind v4 sin `tailwind.config.js`. `styles/index.css` importa en orden: `tailwindcss`,
  `theme.css` (`@theme`: colores, tipografía, radios, espaciado, sombras), `base.css`
  (fondo, focus-visible, reduced motion) y `components.css` (clases semánticas como
  `.btn-primary`, `.input-field`, `.card`, `.section`, `.container-page`).
- `DESIGN.md` es la fuente de los tokens y es de solo lectura; `theme.css` es su traducción.
- En JSX solo clases semánticas y utilidades basadas en tokens; nada de hex ni valores
  arbitrarios.

## Recursos externos

- Fuentes de Google (EB Garamond, Geist, Hanken Grotesk) cargadas en `index.html`.
- Íconos: Material Symbols Outlined vía `Icon` (`<span>` con ligadura). La URL de
  `index.html` pide un subconjunto con `icon_names=…`: **un ícono nuevo debe agregarse a esa
  lista** o se verá el nombre en texto.
- Imágenes en `src/assets/` (WebP, importadas desde `data/`). Estáticos en `public/`
  (favicon, `robots.txt`, `sitemap.xml`).

## Build y calidad

Vite con `@vitejs/plugin-react`; salida en `dist/`. oxlint (plugins react, jsx-a11y, oxc) y
Prettier con `prettier-plugin-tailwindcss`. No hay tests; antes de cada commit deben pasar
`format:check`, `lint` y `build`.
