'use client';

import { useEffect, useRef, useState } from 'react';

export function Header() {
  const [small, setSmall] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 700px)');
    const update = () => { setSmall(media.matches); setExpanded(false); };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!small || !expanded) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setExpanded(false); toggle.current?.focus(); }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [small, expanded]);

  return (
    <>
      <header className="site-header wrap">
        <a className="brand" href="/" aria-label="Café 40 — início"><img src="/static/images/brand/logo.jpg" alt="Café 40" width="150" height="150" /></a>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={expanded} aria-controls="main-nav" hidden={!small} onClick={() => setExpanded(!expanded)}>Menu</button>
        <nav className="main-nav" id="main-nav" aria-label="Navegação principal" hidden={small && !expanded} onClick={(event) => { if ((event.target as HTMLElement).closest('a') && small) setExpanded(false); }}>
          <a href="#sabores">Sabores</a><a href="#espaco">O espaço</a><a href="#reservas">Reservas</a><a href="#visita">Visite</a>
        </nav>
        <a className="header-contact" href="/contato?motivo=cafe">WhatsApp</a>
      </header>
      <div className="visit-strip wrap"><p>Estamos no Centro de Nova Iguaçu, todos os dias, das 9h às 21h.</p></div>
    </>
  );
}
