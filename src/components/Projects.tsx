import { Section } from "@/components/Section";
import { projects } from "@/content/profile";
import type { Asset } from "@/lib/assets";

const pipeline = [
  { title: "Captação", body: "Módulos de microfone recolhem a fala de quem está por perto." },
  { title: "Processamento", body: "A inteligência artificial converte o áudio em texto." },
  { title: "Exibição", body: "As legendas aparecem no visor durante a conversa, em tempo real." },
];

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 max-w-[58ch] space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-small text-ink-soft before:absolute before:top-[0.68em] before:left-0 before:h-px before:w-2.5 before:bg-signal-bright before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function StackRow({ items }: { items: string[] }) {
  return (
    <div className="mt-6 grid grid-cols-[104px_minmax(0,1fr)] gap-4 border-t border-line pt-4">
      <p className="data pt-0.5 text-ink-faint">Tecnologias</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
        {items.map((item) => (
          <li key={item} className="data text-ink-soft">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Figura do artigo: imagem emoldurada com legenda no padrão editorial. */
function Figure({
  asset,
  alt,
  caption,
}: {
  asset: Asset;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="min-w-0">
      <div className="inset-rule overflow-hidden rounded-[var(--radius-instrument)] bg-surface">
        <img
          src={asset.src}
          width={asset.attributes.width}
          height={asset.attributes.height}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="data mt-3 max-w-[70ch] leading-relaxed text-ink-faint">
        {caption}
      </figcaption>
    </figure>
  );
}

function formatAuthors(authors: string[]): string {
  if (authors.length <= 1) return authors.join("");
  return `${authors.slice(0, -1).join(", ")} e ${authors.at(-1)}`;
}

function Publication({ project }: { project: (typeof projects)[number] }) {
  const { publication } = project;
  if (!publication) return null;

  return (
    <div className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12">
      <div className="min-w-0">
        <p className="data text-signal">Publicação</p>
        <h4 className="mt-3 font-display text-h3 text-ink">{publication.venue}</h4>
        <p className="mt-1.5 text-small text-ink-soft">{publication.detail}</p>
        <p className="mt-5 grid gap-1 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-4">
          <span className="data pt-0.5 text-ink-faint">Autores</span>
          <span className="max-w-[62ch] text-small text-ink-soft">
            {formatAuthors(publication.authors)}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={publication.pdf}
          className="rounded-[var(--radius-instrument)] bg-ink px-5 py-2.5 text-small font-medium text-paper hover:bg-signal"
        >
          Baixar o artigo (PDF)
        </a>
        <a
          href={publication.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[var(--radius-instrument)] border border-line-strong px-5 py-2.5 text-small font-medium text-ink hover:border-ink"
        >
          Ver o código
        </a>
      </div>
    </div>
  );
}

export function Projects({
  figures,
}: {
  figures: { heatmap: Asset; fluxograma: Asset; layout: Asset };
}) {
  const [thesis, glasses] = projects;

  return (
    <Section
      id="projetos"
      title="Projetos"
      note="Dois trabalhos em que a medição vira algo que alguém consegue usar."
    >
      <article className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <Figure
          asset={figures.heatmap}
          alt="Comparativo de dois mapas de calor de ocupação sobre a mesma planta baixa: com 1 minuto de coleta e com 5 minutos de coleta de pacotes Wi-Fi."
          caption="Figura 4 — Comparativo dos mapas de calor gerados com cerca de 1 minuto (à esquerda) e 5 minutos (à direita) de coleta. Fonte: os autores."
        />
        <div className="min-w-0">
          <p className="data text-signal">{thesis.subtitle}</p>
          <h3 className="mt-3 font-display text-h2 text-ink">{thesis.title}</h3>
          <p className="mt-1 text-small text-ink-faint">{thesis.context}</p>
          <p className="mt-5 max-w-[58ch] text-small text-ink-soft">{thesis.summary}</p>
          <Points items={thesis.points} />
          <StackRow items={thesis.stack} />
        </div>
      </article>

      <Publication project={thesis} />

      <div className="mt-12 grid gap-8 border-t border-line pt-12 sm:grid-cols-2 lg:gap-12">
        <Figure
          asset={figures.fluxograma}
          alt="Fluxograma do sistema: roteador e ponto de acesso, coleta de pacotes Wi-Fi, tratamento e extração em CSV, dados para treinamento e análise, central de scripts, aprendizado de máquina e geração do mapa de calor."
          caption="Figura 1 — Fluxograma do processo metodológico, da captura dos pacotes à geração do mapa de calor. Fonte: os autores."
        />
        <Figure
          asset={figures.layout}
          alt="Planta baixa do ambiente de testes com os cômodos nomeados e a distribuição de dispositivos e valores de RSSI."
          caption="Figura 2 — Layout do ambiente de testes com a distribuição dos dispositivos monitorados. Fonte: os autores."
        />
      </div>

      <article className="mt-16 border-t border-line pt-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="min-w-0">
            <p className="data text-signal">{glasses.subtitle}</p>
            <h3 className="mt-3 font-display text-h2 text-ink">{glasses.title}</h3>
            <p className="mt-1 text-small text-ink-faint">{glasses.context}</p>
            <p className="mt-5 max-w-[58ch] text-small text-ink-soft">{glasses.summary}</p>
            <Points items={glasses.points} />
            <StackRow items={glasses.stack} />
          </div>
          <div>
            <ol className="grid gap-px overflow-hidden rounded-[var(--radius-instrument)] border border-line bg-line sm:grid-cols-3">
              {pipeline.map((step, index) => (
                <li key={step.title} className="bg-surface p-4">
                  <p className="data text-ink-faint">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-3 font-display text-h3 text-ink">{step.title}</p>
                  <p className="mt-1.5 text-small text-ink-soft">{step.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 max-w-[46ch] text-small text-ink-faint">
              O caminho que o protótipo percorre: do som captado ao texto lido no visor.
            </p>
          </div>
        </div>
      </article>
    </Section>
  );
}
