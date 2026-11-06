---
type: how-to
status: Accepted
date: 2026-11-05
---

# Publicar o Café 40 na Vercel

O projeto usa Next.js com App Router, React e TypeScript. A configuração está em
[vercel.json](../vercel.json), e as versões estão fixadas no
[package-lock.json](../package-lock.json). Você precisa de Node 22.x, um
repositório Git com estes arquivos e acesso à Vercel.

## Valide o build antes de enviar

1. Na raiz do projeto, execute:

   ```powershell
   npm.cmd ci
   npm.cmd run typecheck
   npm.cmd test
   npm.cmd run build
   npm.cmd run start
   ```

   A aplicação deve abrir em `http://127.0.0.1:5021/`. O build cria `.next/`.
   A página pode ser pré-renderizada pelo Next.js como otimização; a rota
   `/contato` continua sendo executada no servidor. Não configure `output: 'export'`.

2. Em outro terminal, confira as rotas:

   ```powershell
   npm.cmd run qa:http
   ```

   O resultado esperado é HTTP 200 na página e nos arquivos públicos, HTTP 303
   nos contatos válidos e HTTP 400 para um motivo inválido.

## Importe o repositório com o preset Next.js

1. Envie o projeto para seu repositório Git. Preserve `package.json`,
   `package-lock.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`,
   `vercel.json`, `app/` e `public/`. Não envie `.env`, `.env.local`,
   `node_modules/` ou `.next/`.
2. Na Vercel, use **Add New → Project** e importe o repositório.
3. Selecione **Next.js** em Framework Preset. Em Root Directory, selecione a
   pasta que contém este `package.json`. Use `.` se este projeto ocupar a raiz
   do repositório; se estiver em um repositório maior, selecione sua subpasta.
4. Use **Node.js 22.x**. O `vercel.json` define Install Command como `npm ci`
   e Build Command como `npm run build`. Mantenha **Output Directory no padrão
   do Next.js**, sem sobrescrever para `public`, `dist` ou `out`.
5. Em Environment Variables, defina `WHATSAPP_NUMBER` se quiser substituir o
   número padrão do projeto. Use código do país, DDD e número, apenas com
   dígitos. A variável é lida no servidor, sem prefixo `NEXT_PUBLIC_`.
   Para valores atuais, consulte [config/.env.example](../config/.env.example).
6. Clique em **Deploy**. O resultado esperado é uma URL HTTPS com a página
   e a rota `/contato` disponíveis. Este procedimento não exige banco de dados,
   servidor Flask nem comandos PowerShell no ambiente de build.

## Confira a publicação e corrija configurações incorretas

Abra a URL gerada, teste o menu no celular, selecione cada motivo e confira a
mensagem aberta no WhatsApp. Abrir uma conversa não envia a mensagem.
Teste também cardápio, Instagram e mapa.

Se houver erro de instalação, confira se o lockfile foi enviado e se a Vercel
usa a pasta correta. Se aparecer 404 na página, confira Root Directory e remova
um eventual Output Directory herdado de uma configuração estática anterior.
Se `/contato` responder 503, corrija `WHATSAPP_NUMBER` e faça outro deploy.

Para voltar a uma publicação anterior, selecione um deployment anterior na Vercel
e use a opção de rollback disponível no painel. Para recuperar código, use o
histórico Git do projeto. Os backups e o ambiente Flask foram removidos após a
validação da migração, com autorização do responsável pelo projeto.

## Referências e limite da validação

A configuração segue a [integração oficial Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
e a [documentação de configuração do build](https://vercel.com/docs/builds/configure-a-build).
Os resultados locais estão em [qa.md](qa.md). A publicação e a configuração da
conta Vercel ainda precisam ser executadas pelo responsável pelo deploy.
