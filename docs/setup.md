# Instalação e execução

Execute os comandos a partir da raiz do projeto com **Node 22.x**. A aplicação
usa Next.js, React e TypeScript. Python não é necessário para instalar,
desenvolver ou publicar a aplicação.

## Instalar a aplicação

```powershell
npm.cmd ci --no-audit --no-fund
```

O `package-lock.json` fixa Next.js, React, TypeScript e Playwright. O cache npm
usa `.cache/npm/`, conforme `.npmrc`. A Vercel usa o mesmo `npm ci`.

## Variáveis de ambiente

Para personalizar o WhatsApp, crie o arquivo local `.env.local`:

```powershell
Copy-Item -LiteralPath config/.env.example -Destination .env.local
```

Faça essa cópia apenas na configuração inicial. Depois, edite o arquivo
existente. O Next.js carrega `.env.local` e também aceita o `.env` anterior;
arquivos locais de ambiente são ignorados pelo Git. A variável
`WHATSAPP_NUMBER` é lida somente no servidor pela rota `/contato`.
Reinicie a prévia após alterar o ambiente. Na Vercel, configure a variável
no painel e faça outro deploy.

## Prévia local

Para executar no terminal e encerrar com Ctrl+C:

```powershell
npm.cmd run dev
```

Para iniciar e abrir o navegador:

```powershell
npm.cmd run dev:open
```

A porta padrão é **5021**: `http://127.0.0.1:5021/`. O comando `dev:open`
inicia o Next.js em segundo plano, reutiliza uma prévia Next.js disponível e
abre o navegador. Seu iniciador é `scripts/development/dev.ts`; logs e PID
ficam em `.taste-skill/runtime/`. O comando `dev` fica no terminal e recarrega
a interface durante a edição.

## Conferir o build de produção

```powershell
npm.cmd run build
npm.cmd run start
```

Encerre o servidor de desenvolvimento antes de usar a mesma porta em produção.
O build gera `.next/`, usado pelo `next start` e pela integração da Vercel.
Instruções de publicação: [vercel.md](vercel.md).

## Verificação

```powershell
npm.cmd run typecheck
npm.cmd test
npm.cmd run qa:http
npm.cmd run qa:browser
npm.cmd run taste:lint -- app
```

Os comandos `qa:http` e de navegador precisam da aplicação iniciada. Para usar outra
URL no QA, defina `QA_URL` no ambiente do processo. Relatórios e capturas
permanecem em `.taste-skill/`.

Para instalar o Chromium local necessário ao QA e à Taste:

```powershell
npm.cmd run skillui:setup
```

O navegador fica em `node_modules/playwright-core/.local-browsers/`.

## Usar as ferramentas de pesquisa visual

A SkillUI 1.3.4 fica isolada em `config/research/`, com seu próprio lockfile,
porque suas ferramentas de terminal usam React 18. A aplicação usa React 19.
A instalação de produção não depende da SkillUI.

```powershell
npm.cmd run research:install
npm.cmd run skillui -- --help
```
