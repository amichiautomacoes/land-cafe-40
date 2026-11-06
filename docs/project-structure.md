# Organização do projeto

Cada pasta tem uma responsabilidade. Execute os comandos a partir da raiz e
consulte [setup.md](setup.md) para instalar as dependências e iniciar a prévia.

```text
app/
  layout.tsx                 Documento, metadados e estilos globais
  page.tsx                   Ordem e conteúdo das seções
  content.ts                 Conteúdo tipado, experiências e destinos públicos
  contato/route.ts           Rota Next.js GET /contato
  lib/contact.ts             Validação e destino do WhatsApp
  components/                Cabeçalho, rodapé, seleção de visita e movimento
  styles/
    tokens.css               Fontes, cores, medidas e movimento
    base.css                 Fundamentos, acessibilidade e controles
    landing.css              Composição e responsivo
public/
  static/
    fonts/                   Poppins local e licença OFL
    images/brand/            Logo utilizado pelo site
    images/cafe40/           Fotografias utilizadas pelo site
assets/
  design.md                  Design system e composição aplicada
  brand/                     Avatar original obtido na pesquisa da marca
  originals/cafe40/          Imagens de publicações, sem tratamento
  references/cafe40/         Capturas e metadados de origem da marca
  references/grain/          Somente a captura completa e sua origem
  research/instagram/        Coletas de dados e origens de mídia
  research/skillui/          Relatórios e capturas das extrações
config/
  .env.example               Modelo das variáveis de ambiente
  research/
    package.json             SkillUI isolada da aplicação
    package-lock.json        Versões fixadas das ferramentas de pesquisa
  browser/
    skillui-env.mjs          Chromium local para SkillUI e Playwright
    browser-env.mjs          Chromium e perfis temporários da Taste
docs/
  setup.md                   Instalação, configuração e execução
  vercel.md                  Procedimento de publicação na Vercel
  project-structure.md       Responsabilidades e regras desta estrutura
  reference-map.md           Correspondência com a referência Grain
  attributions.md            Fontes, créditos e limites das imagens
  qa.md                      Resultados das verificações
scripts/
  development/
    dev.ts                   Inicia ou reutiliza a prévia e abre o navegador
  review/
    qa-browser.mjs           Verifica a página no Chromium
    qa-http.ts               Verifica rotas, arquivos públicos e redirecionamentos
tests/                       Testes de rotas e contato
.taste-skill/                 Briefing, crítica, relatórios e capturas de QA
  runtime/                   Logs, PID e arquivos temporários de execução
.cache/
  npm/                       Cache local do npm
.agents/                     Skills disponíveis neste projeto
.next/                       Build gerado pelo Next.js
.vercel/                     Estado local da CLI Vercel, quando utilizada
node_modules/                Dependências Node e Chromium locais
```

## Arquivos que permanecem na raiz

| Arquivo | Responsabilidade |
| --- | --- |
| `README.md` | Apresentação, comandos principais e links para a documentação. |
| `AGENTS.md` | Instruções descobertas pelos agentes ao trabalhar neste diretório. |
| `package.json` | Manifesto Node e comandos executados com `npm.cmd run`. |
| `package-lock.json` | Versões fixadas das dependências Node. |
| `skills-lock.json` | Registro das skills instaladas e de suas origens. |
| `.gitignore` | Exclusões de arquivos locais e gerados no Git. |
| `.gitattributes` | Normalização de arquivos de texto para LF no Git. |
| `.npmrc` | Configuração npm descoberta automaticamente, incluindo o cache local. |
| `tsconfig.json`, `next-env.d.ts` | Configuração TypeScript e tipos gerados do Next.js. |
| `next.config.ts` | Configuração nativa do Next.js. |
| `vercel.json`, `.vercelignore` | Preset de deploy e exclusões para a CLI Vercel. |
| `.env.local` ou `.env`, quando criado | Valores locais carregados pelo Next.js. |

## Regras para novos arquivos

- Código da aplicação fica em `app/`; comandos auxiliares ficam em `scripts/`.
- Imagens prontas para servir ficam em `public/static/images/`; arquivos da marca
  e originais de pesquisa ficam em `assets/brand/` e `assets/originals/`.
- Capturas de referências e seus metadados ficam em `assets/references/`.
  Coletas e extrações automáticas ficam em `assets/research/`.
- Configurações que aceitam caminho explícito ficam em `config/`.
- Relatórios e capturas de revisão ficam em `.taste-skill/`; logs e dados
  temporários de execução ficam em `.taste-skill/runtime/`.
- Use nomes em minúsculas e hífens para novos arquivos, respeitando os nomes
  exigidos pelas ferramentas, como `AGENTS.md`, `page.tsx` e `route.ts`.
- Crie subpastas quando houver conteúdo. Por exemplo, `public/static/icons/` e
  `scripts/assets/` poderão ser criadas quando existirem ícones ou automações
  de preparo de mídia próprios.
- Ao mover um arquivo, atualize seus imports, URLs, comandos e links de documentação.

Dependências, caches, builds, arquivos locais de ambiente e dados de execução são
ignorados pelo Git. Relatórios de revisão e evidências de pesquisa são mantidos
nas pastas indicadas acima.

Somente `public/` e os bundles gerados pelo Next.js são servidos como arquivos
públicos. A rota `/contato` executa TypeScript no servidor. Referências, relatórios,
configuração, testes e design system não ficam expostos pela aplicação.

Imagens utilizadas no site têm arquivos próprios em `public/static/images/`; as
evidências e os arquivos de pesquisa em `assets/` ficam preservados para conferência.

Para editar textos, comece por `app/content.ts`. Para mudar a ordem,
use `app/page.tsx`. Decisões globais de estilo ficam em `app/styles/tokens.css`.
O número de contato pode ser definido por `WHATSAPP_NUMBER` no ambiente.
