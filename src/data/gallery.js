// Photos live in src/assets/gallery/. Add an entry per file (name must match exactly);
// entries whose file is missing are skipped.
const FILES = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

export const GALLERY_HEADING = {
  title: 'Casos',
};

export const GALLERY_LABELS = {
  region: 'Galería de trabajos',
  previous: 'Foto anterior',
  next: 'Foto siguiente',
  goTo: (index, total) => `Ir a la foto ${index} de ${total}`,
  slide: (index, total) => `${index} de ${total}`,
};

const GALLERY_ITEMS = [
  { file: 'case-1.jpg' },
  { file: 'case-2.jpg' },
  { file: 'case-3.jpg' },
  { file: 'case-4.jpg' },
];

export const GALLERY_PHOTOS = GALLERY_ITEMS.map((item) => ({
  ...item,
  src: FILES[`../assets/gallery/${item.file}`],
})).filter((item) => item.src);
