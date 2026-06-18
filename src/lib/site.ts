/* =================================================================== */
/*  SITE CONFIG — edite este arquivo para ajustar links e contatos.    */
/* =================================================================== */

export const SITE = {
  name: "Casa do Hip Hop de Brazlândia",
  shortName: "Casa do Hip Hop",
  tagline: "Transformando vidas através da cultura",
  url: "https://casadohiphopbrazlandia.org.br",

  address: {
    line1: "Quadra 35, Conjunto H, Loja 01",
    line2: "Brazlândia — Distrito Federal",
    full: "Quadra 35 Conj. H, Loja 01 — Brazlândia/DF",
  },

  links: {
    /* Instagram oficial */
    instagram: "https://www.instagram.com/casadohiphopbrazlandia",

    /* Formulário de pré-inscrição (Google Forms) — link oficial da bio. */
    inscricao:
      "https://docs.google.com/forms/d/e/1FAIpQLScRGwD1IivcU2cHEb1xje-L7byIn1DL8m-n3SK4M3tJ66gZzA/viewform",

    /* Opcionais — preencha se desejar exibir */
    whatsapp: "",
    email: "",

    /* Mapa (gerado a partir do endereço, não requer chave de API) */
    maps: "https://www.google.com/maps/search/?api=1&query=Casa+do+Hip+Hop+de+Brazl%C3%A2ndia",
    mapsEmbed:
      "https://www.google.com/maps?q=Quadra%2035%20Conjunto%20H%20Loja%2001%2C%20Brazl%C3%A2ndia%2C%20DF&output=embed",
  },

  support:
    "Projeto realizado com apoio do Ministério da Cultura (MINC) — Termo de Fomento nº 976084/2025.",
} as const;

/* Navegação principal (âncoras das seções) */
export const NAV = [
  { label: "Sobre", href: "#sobre" },
  { label: "Elementos", href: "#elementos" },
  { label: "Oficinas", href: "#oficinas" },
  { label: "Cronograma", href: "#cronograma" },
  { label: "Inscrição", href: "#inscricao" },
  { label: "Contato", href: "#contato" },
] as const;
