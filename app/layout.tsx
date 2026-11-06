import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { RevealMotion } from './components/reveal-motion';
import './styles/tokens.css';
import './styles/base.css';
import './styles/landing.css';

export const metadata: Metadata = {
  title: 'Café 40 — Sua pausa em Nova Iguaçu',
  description: 'Café 40, no Centro de Nova Iguaçu. Cafés, sabores e encontros todos os dias, das 9h às 21h. Veja o cardápio e planeje sua visita.',
  icons: { icon: { url: '/static/images/brand/logo.jpg', type: 'image/jpeg' } },
};

export const viewport: Viewport = { themeColor: '#000000', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="/static/fonts/poppins-400.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/static/fonts/poppins-600.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <RevealMotion />
      </body>
    </html>
  );
}
