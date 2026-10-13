import { Section } from "@/components/Section";
import { mailto, site, socialLinks } from "@/lib/site";

export function Contact() {
  return (
    <Section
      id="contato"
      title="Contato"
      note="Aberto a conversas sobre suporte, infraestrutura e projetos."
    >
      <p className="max-w-[58ch] text-lead text-ink-soft">
        Se você precisa de alguém para cuidar da infraestrutura de TI, resolver um problema de rede
        ou conversar sobre um projeto de IoT e dados, me escreva. Respondo por e-mail.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={mailto}
          className="rounded-[var(--radius-instrument)] bg-ink px-5 py-2.5 text-small font-medium text-paper transition-colors hover:bg-signal"
        >
          Enviar e-mail
        </a>
        <a
          href={`tel:${site.phoneHref}`}
          className="rounded-[var(--radius-instrument)] border border-line-strong px-5 py-2.5 text-small font-medium text-ink transition-colors hover:border-ink"
        >
          Ligar
        </a>
      </div>

      <dl className="mt-12 divide-y divide-line border-y border-line">
        <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-4 py-3.5">
          <dt className="data pt-0.5 text-ink-faint">E-mail</dt>
          <dd>
            <a href={mailto} className="link-underline text-ink">
              {site.email}
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-4 py-3.5">
          <dt className="data pt-0.5 text-ink-faint">Telefone</dt>
          <dd>
            <a href={`tel:${site.phoneHref}`} className="link-underline text-ink">
              {site.phone}
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-4 py-3.5">
          <dt className="data pt-0.5 text-ink-faint">Localização</dt>
          <dd className="text-ink-soft">
            {site.location.locality}, {site.location.regionName}, {site.location.countryName}
          </dd>
        </div>
        {socialLinks.map((item) => (
          <div key={item.label} className="grid grid-cols-[104px_minmax(0,1fr)] gap-4 py-3.5">
            <dt className="data pt-0.5 text-ink-faint">{item.label}</dt>
            <dd>
              <a
                href={item.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="link-underline text-ink"
              >
                {item.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
