# Referência Grain e adaptação

Fonte: [Grain no Landingfolio](https://www.landingfolio.com/inspiration/post/grain).
Foi extraída apenas a imagem **Full page / Landing Page / Desktop**, de
**1440 × 8834px**, disponível publicamente na galeria.

- [Captura original](../assets/references/grain/full-page-landing-desktop.png).
- [Origem e escopo da extração](../assets/references/grain/source.json).
- [Design system do Café 40](../assets/design.md).

## Correspondência de seções

| Composição na captura | Adaptação Café 40 | Arquivo |
| --- | --- | --- |
| Navegação e faixa de anúncio | Logo, navegação, WhatsApp e informação de visita. | `app/components/header.tsx` |
| Hero dividido com mídia sobreposta | Título à esquerda; fachada e bebida à direita. | `app/page.tsx` |
| Manifesto e faixa de logos | Apresentação do endereço e quatro experiências reais. | `app/page.tsx` |
| Quatro recursos alternando texto e mídia | Bebidas, doces, espaço e reservas. | `app/page.tsx` |
| Quatro depoimentos alternados | Quatro momentos editoriais, sem citações ou avaliações fictícias. | `app/page.tsx` |
| Demonstração ampla | Planejador de visita com seleção e contato por WhatsApp. | `app/components/visit-planner.tsx` |
| Três chamadas com mídia | Bebidas, acompanhamentos e convivência. | `app/page.tsx` |
| CTA em fundo escuro | Cardápio, endereço, horário e mapa; fundo branco após a inversão solicitada em 27/10/2026. | `app/page.tsx` |
| Rodapé em colunas | Links reais para cardápio, reservas, Instagram e localização. | `app/components/footer.tsx` |

A captura é uma referência de composição, sem acesso ao código-fonte original.
O HTML, o CSS, os comportamentos e o responsivo foram implementados neste projeto.
O conteúdo de software da Grain, o verde, as imagens de reuniões, as marcas de
clientes e as peças OG não integram a aplicação.

Em 05/11/2026, a implementação passou de templates Flask para componentes
Next.js em TypeScript. A sequência, os textos, as fotografias e os estilos da
referência foram preservados; não houve sorteio de outra direção.

## Decisões da Taste

A referência explícita substituiu o sorteio de uma direção. A sequência e as
alternâncias têm prioridade sobre a recomendação genérica de variar todos os
layouts. As regras de legibilidade, contraste, hierarquia, ausência de decoração
gratuita e funcionamento no celular foram verificadas pelo inspector.

Os vazios excessivos e os elementos quase transparentes da captura original são
artefatos do registro de uma página animada e foram corrigidos na adaptação.

A inversão de cores solicitada em 27/10/2026 mantém a composição: a base passa
a preto com texto branco, e a faixa de horários e o CTA passam a branco com
texto preto. Fotografias preservam suas cores; apenas o logo recebe inversão
visual por CSS. A paleta aplicada está em `assets/design.md`.

## Responsivo

O desktop mantém as composições alternadas. No celular, título e descrição
precedem a imagem; a navegação vira um menu acionável; as três chamadas e o
planejador passam para uma coluna. Conteúdo e links continuam disponíveis sem JS.
