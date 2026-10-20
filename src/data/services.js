export const SERVICES_HEADING = {
  title: 'Materiales y servicios',
  description:
    'Nuestro laboratorio dental cuenta con un sistema CAD/CAM de última generación, que nos permite ofrecer una amplia variedad de materiales y servicios para la fabricación de restauraciones dentales de alta calidad. Trabajamos con materiales cerámicos, polímeros y resinas, adaptándonos a las necesidades de cada paciente y profesional.',
};

export const SERVICES = [
  {
    id: 'zirconia',
    icon: 'diamond',
    name: 'Zirconio',
    description:
      'Material cerámico de alta resistencia a la fractura, fresado a partir de discos presinterizados y sinterizado en horno. Puede trabajarse monolítico o con estratificación cerámica.',
    indications: ['Coronas', 'Puentes', 'Férulas'],
  },
  {
    id: 'lithium-disilicate',
    icon: 'auto_awesome',
    name: 'Disilicato de litio',
    description:
      'Vitrocerámica con muy buena translucidez y resistencia, adecuada cuando la estética es prioritaria. Permite cementado adhesivo.',
    indications: ['Coronas', 'Carillas', 'Incrustaciones (inlays / onlays)', 'Endocoronas'],
  },
  {
    id: 'pmma',
    icon: 'layers',
    name: 'PMMA',
    description: 'Polímero acrílico fresado de forma digital, liviano y fácil de ajustar en boca.',
    indications: [
      'Provisorios de corta y mediana duración',
      'Prototipos para probar forma y función antes de la restauración definitiva',
      'Férulas',
      'Placas miorrelajantes',
    ],
  },
  {
    id: 'splints',
    icon: 'shield',
    name: 'Placas miorrelajantes',
    description:
      'Férulas oclusales diseñadas digitalmente a partir del escaneo o modelo, impresas o fresadas en material rígido.',
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
      'Guías quirúrgicas',
      'Maquetas (Mock-up)',
      'Modelos parciales y completos',
      'Restauraciones definitivas (Bioceramic)',
      'Restauraciones provisorias',
    ],
  },
  {
    id: 'others',
    icon: 'more_horiz',
    name: 'Otros',
    description: 'Servicios complementarios de nuestro laboratorio dental.',
    indications: ['Realizamos vaciados', 'Escaneos de modelos analógicos'],
  },
];
