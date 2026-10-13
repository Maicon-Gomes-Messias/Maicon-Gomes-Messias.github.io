import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";
import { SiteHeader } from "@/components/SiteHeader";
import { Trajectory } from "@/components/Trajectory";
import { awards, certifications } from "@/content/profile";
import { description, site, siteTitle, siteUrl } from "@/lib/site";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: site.shortName,
      jobTitle: "Técnico de TI Nível I",
      description,
      url: siteUrl,
      email: `mailto:${site.email}`,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.locality,
        addressRegion: site.location.region,
        addressCountry: site.location.country,
      },
      worksFor: {
        "@type": "Organization",
        name: "Pontifícia Universidade Católica de Minas Gerais",
        url: "https://www.pucminas.br",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Pontifícia Universidade Católica de Minas Gerais",
        url: "https://www.pucminas.br",
      },
      knowsLanguage: ["pt-BR", "en"],
      sameAs: [site.github, site.linkedin],
      knowsAbout: [
        "Suporte técnico de TI",
        "Infraestrutura de TI",
        "Redes de computadores",
        "Cloud computing",
        "Amazon Web Services",
        "Administração de ambientes Windows",
        "Segurança da informação",
        "Python",
        "Análise de dados",
        "Machine learning",
        "Internet das Coisas",
        "ESP32",
      ],
      award: awards.map((item) => item.title),
      hasCredential: certifications.map((item) => ({
        "@type": "EducationalOccupationalCredential",
        name: item.title,
        recognizedBy: { "@type": "Organization", name: item.issuer },
      })),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#page`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      inLanguage: "pt-BR",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Profile />
        <Trajectory />
        <Projects />
        <Capabilities />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
