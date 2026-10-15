import { Section } from "@/components/Section";
import { projects } from "@/content/profile";

function formatAuthors(authors: string[]): string {
  if (authors.length <= 1) return authors.join("");
  return `${authors.slice(0, -1).join(", ")} e ${authors.at(-1)}`;
}

const buttonBase = "rounded-[var(--radius-instrument)] px-5 py-2.5 text-small font-medium";

export function Publications() {
  const published = projects.filter((project) => project.publication);

  return (
    <Section
      id="publicacoes"
      title="Publicações"
      note="Trabalho acadêmico publicado e revisado por pares."
    >
      <ol className="divide-y divide-line border-y border-line">
        {published.map((project) => {
          const publication = project.publication;
          if (!publication) return null;

          return (
            <li
              key={project.title}
              className="grid gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12"
            >
              <div className="min-w-0">
                <p className="data text-signal">
                  Artigo{project.year ? ` · ${project.year}` : ""}
                </p>
                <h3 className="mt-3 font-display text-h3 text-ink">{project.title}</h3>
                <dl className="mt-5 space-y-2">
                  <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-4">
                    <dt className="data pt-0.5 text-ink-faint">Veículo</dt>
                    <dd className="text-small text-ink-soft">
                      {publication.venue} — {publication.detail}
                    </dd>
                  </div>
                  <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-4">
                    <dt className="data pt-0.5 text-ink-faint">Autores</dt>
                    <dd className="max-w-[62ch] text-small text-ink-soft">
                      {formatAuthors(publication.authors)}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-wrap gap-3 print:hidden">
                <a href={publication.pdf} className={`${buttonBase} bg-ink text-paper hover:bg-signal`}>
                  Baixar o artigo (PDF)
                </a>
                <a
                  href={publication.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} border border-line-strong text-ink hover:border-ink`}
                >
                  Ver o código
                </a>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
