/**
 * Configuração central do site.
 *
 * O domínio final vem de `site` em astro.config.mjs e chega aqui como
 * import.meta.env.SITE no momento do build.
 */
export const siteUrl = (
  import.meta.env.SITE ?? "https://maicon-gomes-messias.github.io"
).replace(/\/$/, "");

export const siteTitle = "Maicon Gomes Messias — Suporte técnico e infraestrutura de TI";

export const description =
  "Técnico de TI na PUC Minas, bacharel em Engenharia de Computação. Suporte a usuários, infraestrutura de rede, Windows e AWS, com artigo sobre ocupação por Wi-Fi publicado na Revista Abakós.";

export const keywords = [
  "Maicon Gomes Messias",
  "técnico de TI",
  "suporte técnico",
  "infraestrutura de TI",
  "redes de computadores",
  "administração Windows",
  "AWS",
  "engenharia de computação",
  "PUC Minas",
  "Internet das Coisas",
  "IoT",
  "machine learning",
  "segurança da informação",
  "monitoramento de ocupação",
  "mapas de calor",
  "Wi-Fi",
  "OpenWRT",
  "RSSI",
  "LGPD",
  "Revista Abakós",
  "Betim",
  "Minas Gerais",
];

/** Data da última atualização do conteúdo. Atualize ao editar o site. */
export const contentUpdated = "2026-10-15";

/**
 * Imagem de compartilhamento (Open Graph / Twitter), em public/og.png.
 * É um arquivo estático: para trocar, substitua a imagem.
 */
export const ogImage = {
  path: "/og.png",
  width: 1200,
  height: 630,
  alt: siteTitle,
};

export const site = {
  url: siteUrl,
  name: "Maicon Gomes Messias",
  shortName: "Maicon Messias",
  initials: "MG",
  email: "maicon.gomesmessias@gmail.com",
  phone: "+55 31 99238-1482",
  phoneHref: "+5531992381482",
  github: "https://github.com/Maicon-Gomes-Messias",
  linkedin: "https://www.linkedin.com/in/maicon-gomes-89a5561ab",
  role: "Técnico de TI e engenheiro de computação",
  employer: "PUC Minas",
  location: {
    locality: "Betim",
    region: "MG",
    regionName: "Minas Gerais",
    country: "BR",
    countryName: "Brasil",
  },
  languages: ["Português — nativo", "Inglês — técnico"],
} as const;

export const nav = [
  { id: "perfil", label: "Perfil" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "projetos", label: "Projetos" },
  { id: "competencias", label: "Competências" },
  { id: "certificados", label: "Certificados" },
  { id: "contato", label: "Contato" },
] as const;

export const mailto = `mailto:${site.email}?subject=Contato%20pelo%20site`;

/** Perfis externos. O primeiro item de cada par é o rótulo, o segundo o que aparece. */
export const socialLinks = [
  { label: "GitHub", value: "github.com/Maicon-Gomes-Messias", href: site.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/maicon-gomes-89a5561ab",
    href: site.linkedin,
  },
] as const;
