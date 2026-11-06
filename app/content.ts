// Conte?do p?blico da landing page. Edite aqui textos, imagens e destinos.
type Feature = { id: string; title: string; body: string; image: string; alt: string; link: string; destination: 'menu' | 'maps' | 'contact' };
type Moment = { title: string; body: string; image: string; alt: string };
type Intent = { label: string; title: string; description: string; image: string; message: string };
type Category = { title: string; text: string; image: string; alt: string };

export const BRAND = {
  "name": "Café 40",
  "instagram": "https://www.instagram.com/cafe40.ni/",
  "menu": "https://cardapio.takeat.app/cafe40",
  "address": "Rua Mauro de Almeida Flores, 40",
  "city": "Centro, Nova Iguaçu — RJ",
  "hours": "Todos os dias, das 9h às 21h",
  "maps": "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+40+Rua+Mauro+de+Almeida+Flores+40+Nova+Igua%C3%A7u"
} as const;

export const FEATURES = [
  {
    "id": "cafe",
    "title": "Uma pausa com sabor",
    "body": "Do primeiro gole à conversa que se estende. Cafés, bebidas quentes e geladas para acompanhar o seu ritmo.",
    "image": "cappuccino.jpg",
    "alt": "Bebida cremosa com chantilly e croissant à mesa do Café 40",
    "link": "Confira as bebidas",
    "destination": "menu"
  },
  {
    "id": "sabores",
    "title": "Fique para o doce",
    "body": "Uma fatia de bolo, um café e tempo para aproveitar. Encontre os sabores e as opções do dia no nosso cardápio.",
    "image": "bolo-chocolate.webp",
    "alt": "Bolo de chocolate e uma fatia servida em prato no Café 40",
    "link": "Veja o cardápio",
    "destination": "menu"
  },
  {
    "id": "espaco",
    "title": "O encontro é aqui",
    "body": "No Centro de Nova Iguaçu, a fachada de vidro abre espaço para uma pausa entre compromissos e encontros à mesa.",
    "image": "fachada-dia.jpg",
    "alt": "Fachada de vidro e estrutura escura do Café 40, em Nova Iguaçu",
    "link": "Como chegar",
    "destination": "maps"
  },
  {
    "id": "reservas",
    "title": "Reserve um momento",
    "body": "Aniversários, reuniões ou uma ocasião para reunir pessoas. Converse com a equipe sobre o mezanino e a disponibilidade para o seu encontro.",
    "image": "fachada.webp",
    "alt": "Equipe do Café 40 reunida em frente à cafeteria",
    "link": "Conversar sobre reservas",
    "destination": "contact"
  }
] as const satisfies readonly Feature[];

export const MOMENTS = [
  {
    "title": "O primeiro gole",
    "body": "Bebidas quentes, geladas e iced. Escolha o que combina com a sua pausa e confira as opções no cardápio.",
    "image": "cappuccino.jpg",
    "alt": "Cappuccino com chantilly sobre uma mesa da cafeteria"
  },
  {
    "title": "Uma boa companhia",
    "body": "O café acompanha a conversa. As mesas recebem o encontro entre um compromisso e outro no Centro de Nova Iguaçu.",
    "image": "mesa.jpg",
    "alt": "Cliente aproveitando uma pausa à mesa no Café 40"
  },
  {
    "title": "Mais uma fatia",
    "body": "O doce também faz parte do encontro. Consulte os bolos do dia e as outras opções para acompanhar o café.",
    "image": "bolo-chocolate.webp",
    "alt": "Fatia de bolo de chocolate em prato claro"
  },
  {
    "title": "Um lugar para voltar",
    "body": "Vidro, luz quente e o movimento da cidade lá fora. Um endereço para incluir na sua rotina, todos os dias da semana.",
    "image": "fachada-dia.jpg",
    "alt": "Vista da fachada alta de vidro do Café 40"
  }
] as const satisfies readonly Moment[];

export const INTENTS = {
  "cafe": {
    "label": "Tomar um café",
    "title": "Um café, sem pressa",
    "description": "Veja o cardápio ou fale com a equipe para saber mais sobre as opções do dia.",
    "image": "cappuccino.jpg",
    "message": "Olá, Café 40! Quero conhecer a cafeteria e saber mais sobre as opções do dia."
  },
  "trabalho": {
    "label": "Trabalhar por aqui",
    "title": "Uma pausa nas ideias",
    "description": "Converse com a equipe sobre o espaço de coworking e as condições para a sua visita.",
    "image": "fachada-dia.jpg",
    "message": "Olá, Café 40! Gostaria de informações sobre o espaço de coworking e sua disponibilidade."
  },
  "encontro": {
    "label": "Reunir pessoas",
    "title": "O seu próximo encontro",
    "description": "Conte a ocasião para a equipe e consulte a disponibilidade do mezanino.",
    "image": "fachada.webp",
    "message": "Olá, Café 40! Quero conversar sobre uma reserva no mezanino para um encontro."
  }
} as const satisfies Record<string, Intent>;

export const CATEGORIES = [
  {
    "title": "Cafés e bebidas",
    "text": "Quentes, geladas, iced e chás. O seu próximo gole está no cardápio.",
    "image": "cappuccino.jpg",
    "alt": "Bebida cremosa servida no Café 40"
  },
  {
    "title": "Para acompanhar",
    "text": "Bolos do dia, sanduíches e pratos quentes para completar a pausa.",
    "image": "bolo-chocolate.webp",
    "alt": "Bolo de chocolate servido em fatias"
  },
  {
    "title": "Para se encontrar",
    "text": "Uma mesa, uma conversa e um lugar no Centro de Nova Iguaçu.",
    "image": "mesa.jpg",
    "alt": "Momento à mesa na cafeteria"
  }
] as const satisfies readonly Category[];

export type IntentKey = keyof typeof INTENTS;
