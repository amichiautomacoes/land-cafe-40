# Café 40 — landing page

Landing page em **Next.js, React e TypeScript**, com deploy nativo na Vercel,
a composição **Grain / Full page / Landing Page** e a
identidade do cliente documentada em [assets/design.md](assets/design.md).

A interface usa fundo preto e texto branco, com faixa de horários e seção final
em branco e preto, conforme a inversão solicitada em 27/10/2026.

## Abrir no Windows

Use Node **22.x** e instale as dependências com `npm.cmd ci`.

```powershell
npm.cmd run dev:open
```

Prévia local: **http://127.0.0.1:5021/**. O comando inicia o servidor em segundo
plano, reutiliza uma prévia já disponível e abre o navegador. Logs e PID ficam
em `.taste-skill/runtime/`.

Para executar no terminal e encerrar com Ctrl+C:

```powershell
npm.cmd run dev
```

O Next.js atualiza a prévia durante a edição. O WhatsApp pode ser definido em
`.env.local`, conforme `config/.env.example`; reinicie após alterar o ambiente.
Para testar o build de produção: `npm.cmd run build` e `npm.cmd run start`.

## Publicar na Vercel

Importe o repositório, selecione **Next.js**, use Node **22.x** e mantenha a
pasta de saída padrão. O [vercel.json](vercel.json) define `npm ci` e
`npm run build`. O projeto usa App Router e uma rota TypeScript para contato;
não usa exportação HTML estática nem precisa de servidor Python.

Passos, variável de contato e conferência pós-deploy: [docs/vercel.md](docs/vercel.md).

## Organização e edição

- Conteúdo, experiências e destinos: `app/content.ts`.
- Documento e metadados: `app/layout.tsx`; seções: `app/page.tsx`.
- Contato: `app/contato/route.ts` e `app/lib/contact.ts`.
- Cores, fontes e medidas: `app/styles/tokens.css`.
- Composição e responsivo: `app/styles/landing.css`.
- Menu, seleção de visita e movimento: `app/components/`.
- Imagens e fontes públicas: `public/static/`.

Detalhes em [docs/project-structure.md](docs/project-structure.md).
As evidências da marca e a captura Grain ficam em `assets/references/`; as
extrações automáticas, em `assets/research/skillui/`.

## Referência e comportamento

Apenas a captura Full page / Landing Page desktop foi extraída do Landingfolio.
O [mapa de correspondência](docs/reference-map.md) descreve cada adaptação.

O visitante pode consultar o cardápio, abrir o mapa ou selecionar café,
coworking ou encontro para conversar pelo WhatsApp. A escolha preenche uma
mensagem; o site não envia mensagens nem cria reservas automaticamente.
O formulário e a navegação também funcionam sem JavaScript.

Fontes das imagens e limites: [docs/attributions.md](docs/attributions.md).
Revisão visual e testes: [docs/qa.md](docs/qa.md).

## Ambiente

Instalação, configuração de ambiente e comandos de execução estão em
[docs/setup.md](docs/setup.md). As ferramentas de pesquisa visual ficam em
`config/research/`; os arquivos de configuração do navegador, em `config/browser/`.
O repositório Git contém a implementação Next.js atual; os arquivos e ambientes
Flask obsoletos foram removidos após a migração.

## Verificação

Com a aplicação iniciada:

```powershell
npm.cmd run typecheck
npm.cmd test
npm.cmd run qa:http
npm.cmd run qa:browser
npm.cmd run taste:lint -- app
npm.cmd run taste:inspect -- http://127.0.0.1:5021 --out .taste-skill/final
```

O QA de navegador usa 320, 390, 768, 1440 e 1920px; a Taste usa 1440, 768 e 390px.

Para extrair outra referência com a SkillUI:

```powershell
npm.cmd run research:install
npm.cmd run skillui -- --help
```
