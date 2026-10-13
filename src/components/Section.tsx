import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  /** Nota curta alinhada ao título, para dar contexto sem virar rótulo decorativo. */
  note?: string;
};

/**
 * Estrutura editorial: o título da seção ocupa uma coluna estreita e o
 * conteúdo corre ao lado. Repetida em todas as seções para dar ritmo.
 */
export function Section({ id, title, note, children }: SectionProps) {
  return (
    <section id={id} className="defer-render scroll-mt-20 border-t border-line">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-[minmax(0,210px)_minmax(0,1fr)] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <h2 className="font-display text-h2 text-ink">{title}</h2>
            {note ? <p className="mt-3 max-w-[26ch] text-small text-ink-faint">{note}</p> : null}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
