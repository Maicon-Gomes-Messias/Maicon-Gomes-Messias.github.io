/**
 * Configuração central do site.
 *
 * Ao publicar, defina NEXT_PUBLIC_SITE_URL com o domínio final para que
 * canonical, sitemap, robots e Open Graph apontem para o endereço correto.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://maicon-gomes-messias.github.io";

export const siteTitle = "Maicon Gomes Messias — Suporte técnico e infraestrutura de TI";

export const description =
  "Técnico de TI na PUC Minas e bacharel em Engenharia de Computação. Atuo com suporte a usuários, infraestrutura de rede, Windows e AWS, com projetos em IoT, dados e machine learning.";

/** Data da última atualização do conteúdo. Atualize ao editar o site. */
export const contentUpdated = "2026-10-13";

/**
 * Imagem de compartilhamento (Open Graph / Twitter).
 * Gerada em `src/app/og.png/route.tsx`. A extensão `.png` no caminho importa:
 * o GitHub Pages define o Content-Type pela extensão do arquivo.
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
  email: "maiconmessias@pucminas.br",
  phone: "+55 31 3319-4310",
  phoneHref: "+553133194310",
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
