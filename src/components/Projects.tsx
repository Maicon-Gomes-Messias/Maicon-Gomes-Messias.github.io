import { HeatVisual } from "@/components/ProjectVisual";
import { Section } from "@/components/Section";
import { projects } from "@/content/profile";

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

export function Projects() {
  const [thesis, glasses] = projects;

  return (
    <Section
      id="projetos"
      title="Projetos"
      note="Dois trabalhos em que a medição vira algo que alguém consegue usar."
    >
      <article className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <div className="inset-rule overflow-hidden rounded-[var(--radius-instrument)] bg-surface">
          <HeatVisual className="block w-full" />
        </div>
        <div className="min-w-0">
          <p className="data text-signal">{thesis.subtitle}</p>
          <h3 className="mt-3 font-display text-h2 text-ink">{thesis.title}</h3>
          <p className="mt-1 text-small text-ink-faint">{thesis.context}</p>
          <p className="mt-5 max-w-[58ch] text-small text-ink-soft">{thesis.summary}</p>
          <Points items={thesis.points} />
          <StackRow items={thesis.stack} />
        </div>
      </article>

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
