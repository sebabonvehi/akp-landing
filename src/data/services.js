export const SERVICES_HEADING = {
  eyebrow: 'Servicios y materiales',
  title: 'Qué fabricamos y con qué materiales',
  description:
    'Cada caso se diseña de forma digital y se fabrica con el material indicado para su función y su estética.',
};

export const INDICATIONS_LABEL = 'Indicaciones';

export const SERVICES = [
  {
    id: 'zirconia',
    icon: 'diamond',
    name: 'Zirconio',
    description:
      'Material cerámico de alta resistencia a la fractura, fresado a partir de discos presinterizados y sinterizado en horno. Puede trabajarse monolítico o con estratificación cerámica.',
    indications: [
      'Coronas y puentes',
      'Sector posterior y anterior',
      'Estructuras sobre implantes',
    ],
  },
  {
    id: 'lithium-disilicate',
    icon: 'auto_awesome',
    name: 'Disilicato de litio',
    description:
      'Vitrocerámica con muy buena translucidez y resistencia, adecuada cuando la estética es prioritaria. Permite cementado adhesivo.',
    indications: [
      'Coronas unitarias',
      'Carillas',
      'Incrustaciones (inlays / onlays)',
      'Sector anterior',
    ],
  },
  {
    id: 'pmma',
    icon: 'layers',
    name: 'PMMA',
    description: 'Polímero acrílico fresado de forma digital, liviano y fácil de ajustar en boca.',
    indications: [
      'Provisorios de corta y mediana duración',
      'Prototipos para probar forma y función antes de la restauración definitiva',
    ],
  },
  {
    id: 'splints',
    icon: 'shield',
    name: 'Placas miorrelajantes',
    description:
      'Férulas oclusales diseñadas digitalmente a partir del escaneo o modelo, fabricadas en material rígido.',
    indications: [
      'Bruxismo',
      'Protección de restauraciones',
      'Tratamientos oclusales indicados por el profesional',
    ],
  },
  {
    id: '3d-printing',
    icon: 'view_in_ar',
    name: 'Impresiones 3D',
    description: 'Fabricación aditiva en resinas a partir de archivos digitales.',
    indications: [
      'Modelos de trabajo y de estudio',
      'Guías quirúrgicas',
      'Maquetas y piezas auxiliares',
    ],
  },
];

export const PRODUCTS_HEADING = 'Productos';

export const PRODUCTS = [
  {
    id: 'crowns',
    name: 'Coronas',
    materials: 'Zirconio, disilicato de litio, PMMA provisorio',
  },
  { id: 'bridges', name: 'Puentes', materials: 'Zirconio, PMMA provisorio' },
  { id: 'splints', name: 'Férulas', materials: 'Placas miorrelajantes' },
];
