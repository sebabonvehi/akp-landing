const LOGO_SRC =
  'https://lh3.googleusercontent.com/aida/AEtjO1XMdOPUrTozpadQIo0ndZ2Ej1948iJL-7yam1jTuE3Rez-DBH4FzjkP3KeWqmU010pbDevonNcUSF83gBVLSicsWHz5bAiz4MmJoQKlHdDyBBslx4jLZNm-MRRLi7w7_DCHGkTaPgjW8Hp4nttxRzwk6CPbMK-KNtKNRpBXCRn2FMvWXKsz-_BnMGiNfe8sllMLvLUJAgLd3S5pFPEZbgmVbdGPsVXukBNDVnhfDShY1vfUlheG8qvI-A7K';

const heading = 'mb-4 font-Geist text-label-sm font-semibold uppercase tracking-wider text-primary';

const badges = ['ISO 13485:2016', 'Biocompatible CE', '5-Axis Milling'];

const fileFormats = [
  'Archivos STL Abiertos (3D Mesh)',
  'PLY con textura y color digital',
  'OBJ alta definición geométrica',
  'Sistemas iTero, 3Shape, Medit, PrimeScan',
];

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest px-margin-mobile py-10 text-on-surface-variant md:px-margin">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-16 lg:grid-cols-4 lg:gap-gutter">
          {/* Marca */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                alt="AKP Digital Dental Lab Luxury Logo"
                className="h-8 w-56 bg-on-surface object-contain"
                src={LOGO_SRC}
              />
              <span className="font-Geist text-label-md font-semibold tracking-wider text-primary uppercase">
                AKP Lab
              </span>
            </div>
            <p className="mb-4 font-Hanken_Grotesk text-body-sm">
              Laboratorio de alta precisión odontológica y artesanía cerámica de vanguardia.
              Ingeniería CAD/CAM y personalización anatómica sub-micrónica.
            </p>
            <div className="flex flex-wrap gap-1">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-sm bg-surface-container-high px-1.5 py-0.5 font-Geist text-label-sm font-semibold text-on-surface uppercase"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Formatos */}
          <div>
            <h3 className={heading}>Formatos &amp; Archivos</h3>
            <p className="mb-4 font-Hanken_Grotesk text-body-sm">
              Recepción abierta de escaneos intraorales y de mesa:
            </p>
            <ul className="flex flex-col gap-1 font-Hanken_Grotesk text-body-sm">
              {fileFormats.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className={heading}>Contacto Clínico Directo</h3>
            <ul className="flex flex-col gap-2 font-Hanken_Grotesk text-body-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  phone_in_talk
                </span>
                <div>
                  <span className="block font-Geist text-label-sm font-semibold text-on-surface uppercase">
                    Línea Directa Maestros Ceramistas:
                  </span>
                  <span>+34 910 240 890</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  schedule
                </span>
                <div>
                  <span className="block font-Geist text-label-sm font-semibold text-on-surface uppercase">
                    Horario de Recepción:
                  </span>
                  <span>Lun - Vie: 08:00 - 19:30 CET</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
                <div>
                  <span className="block font-Geist text-label-sm font-semibold text-on-surface uppercase">
                    Casos y Envíos:
                  </span>
                  <span>casos@akpdentallab.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Área quirúrgica */}
          <div>
            <h3 className={heading}>Área Quirúrgica &amp; Estética</h3>
            <p className="mb-2 font-Hanken_Grotesk text-body-sm">
              Servicio exprés de sinterizado y estratificación en 24h para rehabilitaciones
              anteriores y guías quirúrgicas guiadas.
            </p>
            <div className="rounded-sm bg-surface-container p-2">
              <span className="block font-Geist text-label-sm font-semibold text-secondary uppercase">
                Calibración de Color
              </span>
              <span className="block font-Hanken_Grotesk text-body-sm text-on-surface">
                Espectrofotometría digital e-LAB y protocolo VITA 3D-Master®
              </span>
            </div>
          </div>
        </div>

        {/* Línea legal */}
        <div className="flex flex-col items-center justify-between gap-4 text-center font-Geist text-label-sm tracking-wider text-outline uppercase md:flex-row md:text-left">
          <p>
            © 2025 AKP Digital Dental Lab. Todos los derechos reservados. Exactitud biomédica &amp;
            maestría estética.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-primary">
              Privacidad Clínica
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Garantía de Restauración
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Trazabilidad de Materiales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
