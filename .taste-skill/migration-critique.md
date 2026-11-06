# Migração Flask → Next.js — 05/11/2026

ROUND 1
Seen in one second: título Café 40, fachada real e bebida; o botão abre o cardápio.
Idea (one sentence): o endereço e os encontros do Café 40 conduzem a sequência Grain escolhida pelo usuário.
Live thing: seleção de café, coworking ou encontro atualiza foto e descrição; o formulário nativo prepara a conversa pelo WhatsApp.
Layout words by section: hero=split / intro=statement / features=alternating-split / moments=alternating-editorial / plan=interactive-split / categories=photographic-grid / visit=full-field / footer=columns.
Scores: design 7.4 · usability 8.1 · creativity 7.0 · content 7.7 → overall 7.6
Caps applied: criatividade limitada a 7 pela composição conhecida e pelo conceito compartilhado com a categoria. Nenhuma regressão identificada na migração.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. `migration-after/desktop-fold.jpg`: fachada e bebida ampliam miniaturas de reels. Melhorar com originais autorizados de maior resolução; preservadas nesta migração.
2. `migration-after/desktop-page-02.jpg`: fotografias reaparecem na sequência longa. Mais registros próprios podem variar a narrativa; a referência e o conteúdo existente foram preservados.
3. `migration-after/mobile-page-01.jpg`: a sequência alternada é extensa no celular. Revisar o volume seria uma decisão editorial posterior, fora da migração autorizada.

As dez capturas finais listadas pelo inspector foram abertas, incluindo desktop,
tablet e celular. Nenhum conteúdo ficou oculto por animações; títulos permanecem
em até duas linhas. Sem alterações de identidade, redação, imagens ou créditos.
Nenhum novo arquivo visual foi criado ou obtido.

| Medição | Flask | Next.js |
| --- | --- | --- |
| Altura em 1440px | 9092px | 9092px |
| Altura em 768px | 7106px | 7106px |
| Altura em 390px | 10378px | 10378px |
| Imagens no documento | 16 | 16 |
| Overflow horizontal | 0 | 0 |
| Inspector | 0 FAIL, 1 WARN | 0 FAIL, 1 WARN |

O aviso é a ausência de vídeo, já justificada em `docs/qa.md`; nenhum vídeo
próprio adicional foi fornecido. O lint segue com 0 FAIL e quatro avisos dos pesos
da Poppins prevista no design system. A aplicação não usa exportação estática;
o Next.js pré-renderiza a página e executa `/contato` no servidor Node.js.
