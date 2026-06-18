/* =================================================================== */
/*  CONTEÚDO DO SITE — oficinas, cronograma, elementos, números.       */
/*  Baseado nos materiais oficiais da Casa do Hip Hop de Brazlândia.    */
/* =================================================================== */

export type Workshop = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  schedule: string;
};

/* As 8 oficinas oferecidas (cartaz "OFICINAS CASA DO HIP HOP") */
export const WORKSHOPS: Workshop[] = [
  {
    slug: "graffiti",
    name: "Graffiti",
    emoji: "🎨",
    tagline: "Arte urbana",
    description:
      "Spray, traço e letra. A arte que dá cor à cidade e voz à periferia — do bisic ao mural autoral.",
    schedule: "Quinta · 9h e 14h",
  },
  {
    slug: "mc",
    name: "MC / Rap",
    emoji: "🎤",
    tagline: "A voz das ruas",
    description:
      "Escrita de rimas, flow, métrica e presença de palco. Transforme sua história em música nos encontros do Papo de MC.",
    schedule: "Encontros e batalhas",
  },
  {
    slug: "break",
    name: "Break",
    emoji: "🤸",
    tagline: "B.boys & B.girls",
    description:
      "Toprock, footwork, freezes e power moves. A dança que nasceu nas ruas e move corpo e mente.",
    schedule: "Terça 18h30 · Quarta 9h e 14h",
  },
  {
    slug: "dj",
    name: "DJ",
    emoji: "🎧",
    tagline: "A batida",
    description:
      "Beatmatching, scratch e a arte de comandar a pista. O coração sonoro da cultura Hip Hop.",
    schedule: "Terça · 9h e 14h",
  },
  {
    slug: "capoeira",
    name: "Capoeira",
    emoji: "🥷",
    tagline: "Ginga e raiz",
    description:
      "Movimento, música e ancestralidade. Força e cultura brasileira na roda, com o grupo G'balá.",
    schedule: "Sábado · 17h30",
  },
  {
    slug: "teatro",
    name: "Teatro",
    emoji: "🎭",
    tagline: "Arte contemporânea",
    description:
      "Expressão corporal, voz e cena. O palco como espaço de criação, escuta e transformação.",
    schedule: "Segunda · 19h",
  },
  {
    slug: "ballet",
    name: "Ballet",
    emoji: "🩰",
    tagline: "Técnica e dança",
    description:
      "Disciplina, postura e movimento. A dança clássica como base para todas as expressões corporais.",
    schedule: "Quarta · 18h30",
  },
  {
    slug: "artesanato",
    name: "Artesanato",
    emoji: "🧵",
    tagline: "Mãos que criam",
    description:
      "Criatividade aplicada às mãos: reciclagem, costura e arte manual que geram renda e autoestima.",
    schedule: "Sexta · 9h e 14h",
  },
];

/* Cronograma semanal (cartaz "CRONOGRAMA DAS OFICINAS") */
export type ScheduleSlot = { activity: string; time: string };
export type ScheduleDay = { day: string; short: string; slots: ScheduleSlot[] };

export const SCHEDULE: ScheduleDay[] = [
  { day: "Segunda", short: "SEG", slots: [{ activity: "Teatro", time: "19h" }] },
  {
    day: "Terça",
    short: "TER",
    slots: [
      { activity: "DJ", time: "9h e 14h" },
      { activity: "Break", time: "18h30" },
    ],
  },
  {
    day: "Quarta",
    short: "QUA",
    slots: [
      { activity: "Break", time: "9h e 14h" },
      { activity: "Ballet", time: "18h30" },
    ],
  },
  {
    day: "Quinta",
    short: "QUI",
    slots: [
      { activity: "Graffiti", time: "9h e 14h" },
      { activity: "Dança", time: "19h" },
    ],
  },
  {
    day: "Sexta",
    short: "SEX",
    slots: [
      { activity: "Artesanato", time: "9h e 14h" },
      { activity: "Dança", time: "19h" },
    ],
  },
  { day: "Sábado", short: "SAB", slots: [{ activity: "Capoeira", time: "17h30" }] },
];

/* Os 5 elementos da cultura Hip Hop */
export type Element = { name: string; role: string; description: string; emoji: string };

export const ELEMENTS: Element[] = [
  {
    name: "MC",
    role: "A palavra",
    description: "O rap como crônica da realidade: rima, mensagem e atitude.",
    emoji: "🎤",
  },
  {
    name: "DJ",
    role: "O som",
    description: "A batida que sustenta a cultura, do scratch ao beat.",
    emoji: "🎧",
  },
  {
    name: "Break",
    role: "O movimento",
    description: "A dança que transforma o corpo em expressão e resistência.",
    emoji: "🤸",
  },
  {
    name: "Graffiti",
    role: "A arte",
    description: "A cor que ocupa os muros e marca a identidade da quebrada.",
    emoji: "🎨",
  },
  {
    name: "Conhecimento",
    role: "A consciência",
    description: "O 5º elemento: educação, história e protagonismo social.",
    emoji: "✊",
  },
];

/* Números de impacto */
export const STATS: { value: string; label: string }[] = [
  { value: "8", label: "oficinas gratuitas" },
  { value: "100%", label: "gratuito, sempre" },
  { value: "3 meses", label: "de curso + certificado" },
  { value: "+2 mil", label: "na nossa comunidade" },
];

/* Passos da inscrição */
export const STEPS: { title: string; text: string }[] = [
  {
    title: "Faça a pré-inscrição online",
    text: "Preencha o formulário e escolha a oficina que mais combina com você.",
  },
  {
    title: "Compareça à Casa do Hip Hop",
    text: "No dia da aula, vá até a nossa sede em Brazlândia com um documento.",
  },
  {
    title: "Assine a inscrição presencial",
    text: "O aluno ou responsável assina para garantir e confirmar a vaga.",
  },
  {
    title: "Comece a transformar sua história",
    text: "Aulas gratuitas, professores qualificados e certificado ao final.",
  },
];

/* Palavras para o letreiro (marquee) */
export const TICKER = [
  "RAP",
  "BREAK",
  "GRAFFITI",
  "DJ",
  "MC",
  "CAPOEIRA",
  "TEATRO",
  "BALLET",
  "CULTURA",
  "PERIFERIA",
  "RESISTÊNCIA",
];
