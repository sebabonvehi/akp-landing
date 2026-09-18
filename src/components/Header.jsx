import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Initialize scroll state on mount
    if (typeof window !== 'undefined') {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty deps array means this effect runs once on mount and unmount

  return (
    <header className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-surface-container-lowest/95' : 'bg-surface-container-lowest/90'} backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] transition-all`}>
      <div className="h-20 w-full px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            alt="AKP Digital Dental Lab Luxury Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XMdOPUrTozpadQIo0ndZ2Ej1948iJL-7yam1jTuE3Rez-DBH4FzjkP3KeWqmU010pbDevonNcUSF83gBVLSicsWHz5bAiz4MmJoQKlHdDyBBslx4jLZNm-MRRLi7w7_DCHGkTaPgjW8Hp4nttxRzwk6CPbMK-KNtKNRpBXCRn2FMvWXKsz-_BnMGiNfe8sllMLvLUJAgLd3S5pFPEZbgmVbdGPsVXukBNDVnhfDShY1vfUlheG8qvI-A7K"
          />
          <div className="flex flex-col">
            <span className="text-xs font-Geist uppercase tracking-widest text-primary">
              AKP Digital Dental Lab
            </span>
            <span className="text-label-sm font-Geist uppercase tracking-wider text-on-surface-variant">
              Haute Esthétique & CAD/CAM
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <a
            className="text-xs font-Geist uppercase text-on-surface-variant hover:text-on-surface transition-colors py-1 px-2"
            data-path="el-atelier"
            href="#"
          >
            El Atelier & Maestría
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#formulario-consulta"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary-container font-Geist text-xs uppercase px-4 py-2 rounded shadow-lg transition-all hover:shadow-[0_0_24px_rgba(242,202,80,0.35)]"
          >
            <span className="material-symbols-outlined">cloud_upload</span>
            Enviar Caso / Cotizar
          </a>
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;