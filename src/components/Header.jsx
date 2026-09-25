import { useState, useEffect } from 'react';
import Button from './Button';

const LOGO_SRC =
  'https://lh3.googleusercontent.com/aida/AEtjO1XMdOPUrTozpadQIo0ndZ2Ej1948iJL-7yam1jTuE3Rez-DBH4FzjkP3KeWqmU010pbDevonNcUSF83gBVLSicsWHz5bAiz4MmJoQKlHdDyBBslx4jLZNm-MRRLi7w7_DCHGkTaPgjW8Hp4nttxRzwk6CPbMK-KNtKNRpBXCRn2FMvWXKsz-_BnMGiNfe8sllMLvLUJAgLd3S5pFPEZbgmVbdGPsVXukBNDVnhfDShY1vfUlheG8qvI-A7K';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-margin-mobile shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-colors md:px-margin ${
        isScrolled ? 'bg-surface-container-lowest/95' : 'bg-surface-container-lowest/90'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 md:h-20">
        <div className="flex min-w-0 items-center gap-3">
          <img
            alt="AKP Digital Dental Lab Luxury Logo"
            className="h-8 w-64 max-w-[38vw] bg-on-surface object-contain"
            src={LOGO_SRC}
          />
          <div className="hidden flex-col lg:flex">
            <span className="font-label text-label-md font-semibold tracking-widest text-primary uppercase">
              AKP Digital Dental Lab
            </span>
            <span className="font-label text-label-sm font-medium tracking-wider text-on-surface uppercase">
              Haute Esthétique &amp; CAD/CAM
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-4 md:flex">
          <a
            className="px-2 py-1 font-label text-label-sm font-medium tracking-wider text-on-surface uppercase transition-colors hover:text-primary"
            data-path="el-atelier"
            href="#"
          >
            El Atelier &amp; Maestría
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button href="#formulario-consulta">
              <span className="material-symbols-outlined">cloud_upload</span>
              Enviar Caso / Cotizar
            </Button>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-on-primary">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
