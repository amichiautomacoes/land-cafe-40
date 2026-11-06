# Café 40 — briefing e argumento

## Leitura do pedido

Implementação local em Flask, com a estrutura da captura **Grain / Full page /
Landing Page / Desktop** e a identidade de `assets/design.md`. A composição
escolhida pelo usuário tem prioridade sobre o sorteio de outra direção.

## Inventário do cliente

1. Nome Café 40 e logotipo de casa em contorno.
2. Endereço cadastral com número 40, no Centro de Nova Iguaçu; não inferir que
   seja a origem do nome.
3. Fachada alta de vidro com a marca aplicada em branco.
4. Perfis metálicos escuros e linhas retas na arquitetura.
5. Luz quente e materiais amadeirados nas imagens do perfil.
6. Equipe fotografada à entrada da cafeteria.
7. Bolo de chocolate publicado pelo próprio perfil.
8. Bebida cremosa com chantilly e croissant na fotografia de uma publicação
   exibida no perfil.
9. Destaque de coworking no Instagram.
10. Publicação do mezanino para encontros e reservas.
11. Horário informado na bio: todos os dias, das 9h às 21h.
12. Cardápio Takeat vinculado na bio.

## Argumento, com prova

- A cafeteria tem um endereço reconhecível no Centro de Nova Iguaçu → a própria
  fachada domina a abertura.
- A pausa pode ser por café, comida ou convivência → categorias reais do cardápio
  e destaques do perfil.
- Bebidas e doces fazem parte da experiência → fotografias de produtos.
- O local recebe encontros → fachada, equipe e publicação de reservas.
- Há maneiras distintas de visitar → seleção café/coworking/encontro e mensagens
  de WhatsApp coerentes com a escolha.
- O visitante consegue continuar → cardápio, mapa e contato reais.

## Ideia

Nesta página, **a fachada de vidro do Café 40** se torna **a janela que abre a
sequência de pausas à mesa**, dentro da composição escolhida da Grain.

O elemento interativo é o planejamento da visita: a escolha muda foto, texto e
mensagem de contato. O formulário GET funciona sem JavaScript, sem criar uma
reserva fictícia ou enviar mensagens automaticamente.

## Direção e exceções registradas

- **Direção:** Grain, escolhida pelo usuário; sem seed aleatória e sem redraw.
- Preservados: hero dividido, alternância dos blocos, quatro momentos editoriais,
  demonstração ampla, três chamadas fotográficas, fechamento em campo inverso e rodapé.
- A paleta e o tipo vêm do design system do Café 40, sem o verde da Grain.
- Depoimentos da referência viraram conteúdo editorial; não foram inventadas
  avaliações, empresas clientes ou métricas.
- O vídeo demonstrativo foi adaptado para o seletor de visita com destino real.
- A referência contém grandes vazios de captura e conteúdo esmaecido de animação;
  esses artefatos não foram reproduzidos.
- Não foram sorteadas cenas de scroll: elas alterariam a composição pedida.
- Poppins é uma continuidade deliberada do design system local, mesmo sendo
  assinalada como fonte comum pelo lint.

## Inversão de cores — 27/10/2026

O usuário solicitou trocar branco por preto e preto por branco. A base fica
preta com texto branco; faixa de horários e fechamento ficam brancos com texto
preto. Os painéis passam a neutro escuro. O logo recebe inversão por CSS, e as
fotografias conservam suas cores. Foco, seleção, estados dos botões, controles
nativos e cor do navegador acompanham a paleta. A composição Grain, a Poppins,
o conteúdo e o seletor de visita continuam sendo a direção desta revisão, sem
novo sorteio ou seed.

## Copy deck

A copy integral está centralizada em `app/content.py` e nos templates de seção;
as alegações e sua ordem foram definidas acima antes do HTML. Os títulos são:

A pausa é no Café 40. / A pausa tem endereço. / Uma pausa com sabor / Fique para
o doce / O encontro é aqui / Reserve um momento / O que fica à mesa. / Como vai
ser sua pausa? / O seu próximo encontro. / Seu tempo, à mesa.
