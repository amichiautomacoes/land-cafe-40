import { BRAND } from '../content';

export function Footer() {
  return (
    <footer className="site-footer wrap">
      <a className="brand" href="#conteudo" aria-label="Café 40 — voltar ao início"><img src="/static/images/brand/logo.jpg" alt="Café 40" width="150" height="150" loading="lazy" /></a>
      <div className="footer-column"><p className="footer-title">À mesa</p><a href={BRAND.menu} target="_blank" rel="noopener noreferrer">Cardápio</a><a href="#espaco">O espaço</a><a href="#reservas">Reservas</a></div>
      <div className="footer-column"><p className="footer-title">Por perto</p><a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">Instagram</a><a href="/contato?motivo=cafe">WhatsApp</a><a href={BRAND.maps} target="_blank" rel="noopener noreferrer">Localização</a></div>
      <div className="footer-column"><p className="footer-title">Café 40</p><p>Centro de Nova Iguaçu</p><p>Todos os dias · 9h às 21h</p></div>
      <p className="footer-close">Uma pausa na rotina. Um encontro no Café 40.</p>
      <p className="photo-credit">Imagens: Café 40 e colaboradores no <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
    </footer>
  );
}
