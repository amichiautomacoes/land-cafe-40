# Validação da landing page

**Estado atual:** aplicação migrada para Next.js e TypeScript em 05/11/2026.
Os resultados anteriores abaixo são históricos. Consulte a seção
[Migração para Next.js](#migração-para-nextjs--05112026) para os testes atuais.

Validação local realizada em 23/10/2026, com a aplicação em
`http://127.0.0.1:5021/`.

## Resultados

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Testes de rotas Flask | 4 testes aprovados. | `tests/test_routes.py` |
| Navegador Chromium | Aprovado em 320, 390, 768, 1440 e 1920px. | [.taste-skill/qa/functional.json](../.taste-skill/qa/functional.json) |
| Taste inspector | **0 FAIL, 1 WARN** em 1440, 768 e 390px. | [Relatório final](../.taste-skill/final/report.json) |
| Taste lint | **0 FAIL, 4 WARN** de fonte Poppins. | Comando reproduzível no README. |
| Dependências Python | `pip check` sem conflitos. | `config/python/requirements.lock.txt` |

No navegador foram conferidos: ausência de overflow horizontal e erros JS,
imagens carregadas após scroll, fontes locais, âncoras existentes, menu mobile,
fechamento por Escape com retorno de foco, escolha de três motivos e submissão
do formulário com o motivo selecionado.

Uma sessão com JavaScript desativado confirmou a disponibilidade do conteúdo,
navegação e formulário nativo. Uma sessão com movimento reduzido confirmou
conteúdo visível e nenhuma animação ativa. A navegação real até WhatsApp foi
interceptada no QA; nenhuma mensagem foi enviada.

Os testes Flask verificam a renderização, proteção dos caminhos de pesquisa,
mensagens correspondentes a cada motivo, rejeição de motivo inválido e ausência
de redirecionamento quando o contato não está configurado.

## Revisão visual

Todas as capturas finais de desktop, tablet e celular foram abertas e revisadas
após o último ajuste visual. O título principal permanece em duas linhas nos três
tamanhos da Taste. Menu, fotografias e formulário se recompõem em uma coluna no
celular. O alinhamento dos blocos foi consolidado e os recortes preservam o produto
e a expressão da pessoa fotografada.

- [Desktop](../.taste-skill/final/desktop-fold.jpg).
- [Tablet](../.taste-skill/final/tablet-fold.jpg).
- [Celular](../.taste-skill/final/mobile-fold.jpg).
- [Crítica da Taste](../.taste-skill/critique.md).

Avaliação visual própria, sem representar certificação externa: design 7,4;
usabilidade 8,1; criatividade 7,0; conteúdo 7,7. Média ponderada: **7,6/10**.

## Avisos aceitos e limites

- **Vídeo:** o inspector avisa que não há `<video>`. As fontes acessíveis
  forneceram fotografias e miniaturas de reels; nenhum arquivo original de vídeo
  foi obtido para esta versão. A foto da abertura tem movimento sutil, desativado
  com movimento reduzido, e a demonstração da referência virou a seleção de
  visita. Não se utilizou filmagem de outro estabelecimento como substituta.
- **Poppins:** os quatro avisos de lint correspondem aos quatro pesos locais.
  A família foi preservada porque está prevista no design system do projeto,
  com continuidade ao cardápio existente.
- **Imagens:** bolo e equipe têm originais públicos de 1440px; fachada diurna,
  bebida e pessoa à mesa continuam sendo miniaturas de reels. Mais fotografias
  próprias em alta resolução podem melhorar nitidez e variedade; os arquivos
  atuais e suas autorias estão em [attributions.md](attributions.md).
- **Conteúdo:** a sequência longa e as alternâncias seguem a Grain solicitada;
  algumas fotografias se repetem. Não foram inventadas avaliações ou preços para
  preencher a composição. Produtos e valores ficam no cardápio oficial.

Não foi realizado deploy. A prévia de QA é local e pode ser iniciada com
`npm.cmd run dev:open`.

## Reorganização de arquivos — 24/10/2026

Após a separação de aplicação, configurações, scripts, pesquisa e caches:

- Os quatro testes Flask passaram, e a nova entrada `python -m app` foi iniciada
  em um processo temporário e respondeu com HTTP 200.
- Os 19 arquivos movidos sem edição conservaram seus hashes SHA-256, incluindo
  imagens e arquivos de dependências. Os 41 links locais da documentação e os
  10 caminhos de imagens nos metadados de pesquisa foram conferidos.
- Todos os 15 arquivos estáticos responderam com HTTP 200; configurações e
  arquivos de pesquisa continuaram fora das rotas públicas.
- O QA Chromium passou em 320, 390, 768, 1440 e 1920px, incluindo carregamento
  de imagens, fontes, menu, seleção de visita e formulário.
- A Taste registrou **0 FAIL, 1 WARN** no inspector e **0 FAIL, 4 WARN** no lint.
  Os avisos existentes de ausência de vídeo e uso de Poppins permanecem com
  as justificativas registradas acima.

O [relatório desta conferência](../.taste-skill/reorganization/report.json)
e as dez capturas de desktop, tablet e celular ficam em
`.taste-skill/reorganization/`. Todas essas capturas foram abertas após a
mudança dos caminhos; as imagens, os textos e as seções foram preservados.

A estrutura atual está documentada em [project-structure.md](project-structure.md),
e os comandos atualizados estão em [setup.md](setup.md).

## Inversão de cores — 27/10/2026

A paleta foi invertida conforme solicitação do usuário, preservando a composição
Grain. A skill `design-taste-frontend` orientou o registro anterior, os ajustes de
contraste e estados e a revisão das capturas finais.

| Medição | Antes | Depois |
| --- | --- | --- |
| Fundo / texto principal | `#ffffff` / `#000000` | `#000000` / `#ffffff` |
| Superfícies | `#f4f4f2` | `#0b0b0d` |
| Botão principal / texto | Preto / branco | Branco / preto |
| Faixa de horários e CTA final | Preto / branco | Branco / preto |
| Taste inspector, 1440 / 768 / 390px | 0 FAIL, 1 WARN | 0 FAIL, 1 WARN |
| Taste lint | 0 FAIL, 4 WARN | 0 FAIL, 4 WARN |
| Maior título | 2 linhas | 2 linhas |

O aviso do inspector continua sendo a ausência de vídeo; os quatro avisos do
lint continuam sendo os pesos locais de Poppins. As justificativas anteriores
permanecem válidas. Nenhuma imagem ou fonte nova foi acrescentada.

O QA Chromium passou em **320, 390, 768, 1440 e 1920px**, com verificação de
overflow, imagens, fontes, âncoras, menu, Escape e retorno do foco, seleção de
visita e envio nativo do motivo. Conteúdo e navegação também passaram sem
JavaScript e com movimento reduzido. A navegação de contato foi interceptada
durante o QA.

Uma verificação específica da paleta em 1440, 768 e 390px confirmou:

- Contraste principal e de botões, inclusive hover: **21:1**.
- Texto auxiliar sobre preto: **9,04:1**.
- Seleção cobre/preto: **7,98:1**.
- Foco dos botões: **7,98:1** sobre preto e **6,11:1** sobre branco.
- Controles nativos em esquema escuro, com foco e seleção visíveis.
- Logo invertido apenas por CSS; fotografias sem filtro e originais preservados.
- Cor do navegador atualizada para preto.

As dez capturas finais da Taste e três capturas adicionais de estados foram
abertas e revisadas. O resultado visual mantém a avaliação de **7,6/10**, com as
limitações anteriores de resolução e repetição de fotografias na sequência longa.

Evidências:

- [Inspector anterior](../.taste-skill/inversion/before/report.json) e
  [inspector final](../.taste-skill/inversion/after/report.json).
- [Medições de paleta e contraste](../.taste-skill/inversion/palette.json).
- [QA funcional](../.taste-skill/qa/functional.json).
- [Crítica da inversão](../.taste-skill/inversion/critique.md).
- [Desktop](../.taste-skill/inversion/after/desktop-fold.jpg),
  [tablet](../.taste-skill/inversion/after/tablet-fold.jpg) e
  [celular](../.taste-skill/inversion/after/mobile-fold.jpg).
- [Menu mobile](../.taste-skill/inversion/mobile-menu.png),
  [formulário](../.taste-skill/inversion/plan-panel.png) e
  [foco no CTA claro](../.taste-skill/inversion/visit-focus.png).

## Migração para Next.js — 05/11/2026

A aplicação atual usa Next.js 16.4.5, React 19.3.1 e TypeScript 5.9.3.
O build de produção foi executado localmente, seguido da revisão no Chromium.
As rotas e componentes ativos estão em TypeScript. A versão anterior foi
preservada durante a validação e removida na limpeza autorizada de 06/11/2026.

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Build de produção | `npm run build` concluído; página `/` e rota Node.js `/contato`. | [Configuração](../next.config.ts) |
| TypeScript | `npm run typecheck` sem erros. | [tsconfig.json](../tsconfig.json) |
| Testes de contato | 4 testes aprovados: mensagens, padrão, formatação, entradas inválidas e configuração indisponível. | [contact.test.ts](../tests/contact.test.ts) |
| Rotas HTTP reais | 26 URLs verificadas; página, arquivos públicos, redirecionamentos e pesquisa privada. POST em contato retorna 405. | [Relatório HTTP](../.taste-skill/qa/http.json) |
| Chromium | Aprovado em 320, 390, 768, 1440 e 1920px. | [QA funcional](../.taste-skill/qa/functional.json) |
| Taste inspector | 0 FAIL, 1 WARN antes e depois. | [Antes](../.taste-skill/migration-before/report.json), [depois](../.taste-skill/migration-after/report.json) |
| Taste lint | 0 FAIL, 4 WARN dos pesos Poppins já previstos no design system. | `npm run taste:lint -- app` |
| Ferramentas de pesquisa | Instalação isolada da SkillUI e comando `--help` conferidos. | [Manifesto de pesquisa](../config/research/package.json) |

A página manteve a mesma altura nas três larguras da Taste: 9092px em 1440px,
7106px em 768px e 10378px em 390px. Foram preservadas 16 imagens, a contagem de
palavras e a ausência de overflow. O menu fecha por Escape com retorno de foco;
as três escolhas atualizam o planejador e enviam o motivo correto pelo formulário.
Conteúdo, navegação e formulário nativo permanecem disponíveis sem JavaScript.
Com movimento reduzido, não há animações ativas. Nenhuma mensagem foi enviada.

As dez capturas finais foram abertas e revisadas. A avaliação própria permanece
em **7,6/10**, com as limitações anteriores de resolução e repetição de fotos.
Veja a [crítica desta migração](../.taste-skill/migration-critique.md).
O aviso de ausência de vídeo e os avisos Poppins mantêm as justificativas anteriores.

O projeto está configurado para deploy Next.js na Vercel, sem `output: 'export'`.
O Next.js pode pré-renderizar a página como otimização e manter `/contato` como
rota dinâmica. Não foi realizado deploy na conta Vercel. O procedimento está em
[vercel.md](vercel.md).

## Limpeza do legado e início do Git — 06/11/2026

Com autorização do responsável pelo projeto, foram removidos o ambiente
`.venv`, os caches e backups Flask, o lock Node anterior e as pastas vazias de
templates, arquivos estáticos antigos e configuração Python. Referências da
marca, imagens públicas, skills e ferramentas Node atuais foram preservadas.
Os comandos `typecheck`, `test`, `build` e `qa:http` passaram após a limpeza.
Foram conferidos 72 links locais da documentação, sem destinos ausentes.

O repositório Git foi iniciado em `main`, com normalização LF para textos.
O `.env` local foi preservado e está ignorado, assim como dependências,
builds e caches. A conferência dos arquivos preparados para commit não apontou
arquivos de ambiente indevidos nem padrões reconhecíveis de credenciais.
Nenhum repositório remoto foi configurado nesta etapa.
