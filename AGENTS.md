# Orientações do projeto

Landing page do Café 40 em Next.js, React e TypeScript, com deploy nativo na
Vercel. As versões estão fixadas nos arquivos de lock.

- A aplicação usa TypeScript e não depende de Python. O ambiente e os backups
  Flask da migração foram removidos; use os comandos Node abaixo.
- Use Node 22.x. Execute `npm.cmd run dev`, `npm.cmd run build` e
  `npm.cmd run start`; não use exportação HTML estática como modelo de deploy.
- As ferramentas de interface usam dependências locais em
  `node_modules/`. No PowerShell, prefira `npm.cmd` para encaminhar argumentos.
- Antes de desenvolver ou revisar a interface, leia
  `.agents/skills/design-taste-frontend/SKILL.md`.
- Para extrair o design de uma referência, leia
  `.agents/skills/skillui/SKILL.md` e use `npm.cmd run skillui -- ...`.
  Instale a ferramenta com `npm.cmd run research:install`; seu lock e suas
  dependências ficam isolados em `config/research/` para evitar conflito de React.
- Os comandos Taste estão no `package.json`; `taste:inspect` recebe a URL da
  aplicação como argumento e usa o Chromium local.
- A identidade visual observada e as propostas para a cafeteria estão em
  `assets/design.md`; leia esse arquivo antes de implementar a landing page.
  Os relatórios automáticos em `assets/research/skillui/` incluem
  estilos das plataformas Instagram e Takeat, e não definem a identidade da marca.
- A composição da landing page vem da captura Grain / Full page / Landing Page
  escolhida pelo usuário. Consulte `docs/reference-map.md`; preserve essa
  referência ao aplicar a Taste, sem substituir sua estrutura por um sorteio.
- A aplicação fica em `app/`, as evidências em `assets/`, a documentação em
  `docs/` e os relatórios de revisão em `.taste-skill/`. Não misture pesquisa com
  os arquivos públicos de `public/`.
- Os arquivos públicos de imagem ficam em `public/static/images/`; materiais da
  marca ficam em `assets/brand/` e imagens de pesquisa sem tratamento em
  `assets/originals/`. Preserve os metadados de origem em `assets/references/`.
- Scripts de execução ficam em `scripts/development/` e os de verificação em
  `scripts/review/`. Configurações de navegador ficam em `config/browser/`.
- Não acrescente scripts ou relatórios soltos na raiz. Ela guarda apenas
  instruções, README, manifestos, locks e configurações com descoberta automática.
  Crie subpastas quando houver conteúdo para elas; caches locais ficam em `.cache/`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
