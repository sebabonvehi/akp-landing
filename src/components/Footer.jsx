const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant pt-8 md:pt-12">
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                alt="AKP Digital Dental Lab Luxury Logo"
                className="h-6 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XMdOPUrTozpadQIo0ndZ2Ej1948iJL-7yam1jTuE3Rez-DBH4FzjkP3KeWqmU010pbDevonNcUSF83gBVLSicsWHz5bAiz4MmJoQKlHdDyBBslx4jLZNm-MRRLi7w7_DCHGkTaPgjW8Hp4nttxRzwk6CPbMK-KNtKNRpBXCRn2FMvWXKsz-_BnMGiNfe8sllMLvLUJAgLd3S5pFPEZbgmVbdGPsVXukBNDVnhfDShY1vfUlheG8qvI-A7K"
              />
              <span className="text-xs font-Geist uppercase tracking-wider text-primary">
                AKP Lab
              </span>
            </div>
            <p className="text-sm font-Hanken_Grotesk text-on-surface-variant mb-3">
              Laboratorio de alta precisión odontológica y artesanía cerámica de vanguardia. Ingeniería CAD/CAM y personalización anatómica sub-micrónica.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-surface-container-high text-on-surface px-1.5 py-0 text-xs font-Geist uppercase rounded">
                ISO 13485:2016
              </span>
              <span className="bg-surface-container-high text-on-surface px-1.5 py-0 text-xs font-Geist uppercase rounded">
                Biocompatible CE
              </span>
              <span className="bg-surface-container-high text-on-surface px-1.5 py-0 text-xs font-Geist uppercase rounded">
                5-Axis Milling
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-Geist uppercase tracking-wider text-primary mb-1">
              Formatos & Archivos
            </h3>
            <p className="text-sm font-Hanken_Grotesk text-on-surface-variant mb-1">
              Recepción abierta de escaneos intraorales y de mesa:
            </p>
            <ul className="space-y-0.5 font-Hanken_Grotesk text-body-sm">
              <li className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Archivos STL Abiertos (3D Mesh)
              </li>
              <li className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                PLY con textura y color digital
              </li>
              <li className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                OBJ alta definición geométrica
              </li>
              <li className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                Sistemas iTero, 3Shape, Medit, PrimeScan
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-Geist uppercase tracking-wider text-primary mb-1">
              Contacto Clínico Directo
            </h3>
            <ul className="space-y-0.5 font-Hanken_Grotesk text-body-sm">
              <li className="flex items-start gap-1">
                <span className="material-symbols-outlined text-secondary text-[18px]">phone_in_talk</span>
                <div>
                  <span className="block text-xs font-Geist uppercase">Línea Directa Maestros Ceramistas:</span>
                  <span className="text-sm font-Hanken_Grotesk">+34 910 240 890</span>
                </div>
              </li>
              <li className="flex items-start gap-1">
                <span className="material-symbols-outlined text-secondary text-[18px]">schedule</span>
                <div>
                  <span className="block text-xs font-Geist uppercase">Horario de Recepción:</span>
                  <span className="text-sm font-Hanken_Grotesk">Lun - Vie: 08:00 - 19:30 CET</span>
                </div>
              </li>
              <li className="flex items-start gap-1">
                <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
                <div>
                  <span className="block text-xs font-Geist uppercase">Casos y Envíos:</span>
                  <span className="text-sm font-Hanken_Grotesk">casos@akpdentallab.com</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-Geist uppercase tracking-wider text-primary mb-1">
              Área Quirúrgica & Estética
            </h3>
            <p className="text-sm font-Hanken_Grotesk text-on-surface-variant mb-1">
              Servicio exprés de sinterizado y estratificación en 24h para rehabilitaciones anteriores y guías quirúrgicas guiadas.
            </p>
            <div className="pt-1 bg-surface-container rounded">
              <span className="block text-xs font-Geist uppercase text-secondary mb-0.5">Calibración de Color</span>
              <span className="block text-sm font-Hanken_Grotesk text-on-surface">Espectrofotometría digital e-LAB y protocolo VITA 3D-Master®</span>
            </div>
          </div>
        </div>
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-Geist uppercase text-outline">
          <p>© 2025 AKP Digital Dental Lab. Todos los derechos reservados. Exactitud biomédica & maestría estética.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-primary transition-colors">Privacidad Clínica</a>
            <a href="#" className="hover:text-primary transition-colors">Garantía de Restauración</a>
            <a href="#" className="hover:text-primary transition-colors">Trazabilidad de Materiales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;