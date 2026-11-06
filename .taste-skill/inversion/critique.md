# Inversão da paleta — Café 40 — 27/10/2026

## ROUND 1

Seen in one second: Café 40 em branco sobre preto, fachada real e botão branco
para consultar o cardápio.

Idea (one sentence): a fachada de vidro do Café 40 continua sendo a janela da
sequência de pausas à mesa, agora com a base monocromática invertida.

Live thing: seleção entre café, coworking e encontro, com foto, descrição e
motivo de contato correspondentes; o formulário nativo funciona sem JavaScript.

Layout words by section: hero=split photographic window / intro=statement and band /
features=alternating splits / moments=dark editorial field / plan=interactive panel /
categories=photographic columns / visit=white field / footer=columns.

Scores: design 7.5 · usability 8.1 · creativity 7.0 · content 7.7 → overall 7.6

Caps applied: criatividade limitada a 7 pela execução de uma composição de
referência e de uma ideia de categoria. Nenhum FAIL no inspector; a sequência
Grain e suas alternâncias são requisitos do usuário.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. `after/desktop-fold.jpg`: fachada diurna e bebida ainda mostram a resolução
   limitada das miniaturas. Melhoria pendente: arquivos originais do mesmo
   material, conforme `docs/attributions.md`. A inversão não altera as fotos.
2. `after/desktop-page-02.jpg`: bebida, bolo e fachada se repetem na sequência
   editorial. Melhoria pendente: ampliar as fotografias próprias disponíveis;
   preservada a estrutura solicitada, sem acrescentar imagens de outro local.
3. `after/mobile-page-01.jpg`: a sequência longa repete o formato texto/foto e
   exige bastante rolagem. Uma edição futura poderia condensar os assuntos;
   nesta revisão a composição Grain continua sendo o requisito.

Não foi identificado defeito visual novo que exija outra rodada. A alteração
resolveu os três cuidados específicos da paleta: logo legível no cabeçalho e no
rodapé, seleção de texto com tinta preta sobre cobre e foco mais escuro no CTA
branco. O hover dos botões mantém 21:1 e usa deslocamento discreto para feedback.

## Direção e verificação

- Direção preservada: Grain escolhida pelo usuário, sem sorteio, seed ou redraw.
- Paleta definida pelo pedido: branco vira preto e preto vira branco. Os painéis
  claros passam a `#0b0b0d`; textos auxiliares passam a `#aaaaaa`.
- Fonte Poppins e cores das fotografias preservadas; nenhum conteúdo de exemplo
  ou novo material visual foi introduzido. Créditos e origens continuam em
  `docs/attributions.md`, com crédito resumido no rodapé.
- Inspector antes e depois: 0 FAIL, 1 WARN (sem vídeo), em 1440, 768 e 390px.
- Lint antes e depois: 0 FAIL, 4 WARN (Poppins, prevista no design system).
- QA de navegador aprovado em 320, 390, 768, 1440 e 1920px, incluindo menu,
  escolhas, formulário, imagens, fontes, âncoras, sem JS e movimento reduzido.
- Paleta, hover e foco medidos em três larguras: `palette.json`.
- Foram abertas as dez capturas finais listadas pelo inspector: três dobras,
  três folhas desktop, duas folhas tablet e duas folhas mobile. As três dobras
  anteriores também foram abertas para comparar os mesmos tamanhos.
- Foram abertas ainda `mobile-menu.png`, `plan-panel.png` e `visit-focus.png`.

O relatório em `docs/qa.md` registra as medições anteriores e finais lado a lado.
