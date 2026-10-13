import { Section } from "@/components/Section";
import { experiences } from "@/content/profile";

export function Trajectory() {
  return (
    <Section
      id="trajetoria"
      title="Trajetória"
      note="O ano de entrada marca cada etapa, da mais recente para a mais antiga."
    >
      <ol className="space-y-10 md:space-y-12">
        {experiences.map((item, index) => (
          <li
            key={`${item.company}-${item.startYear}`}
            className={index === 0 ? "" : "border-t border-line pt-10 md:pt-12"}
          >
            <div className="grid gap-4 md:grid-cols-[124px_minmax(0,1fr)] md:gap-10">
              <div>
                <p className="font-display text-[2rem] leading-none font-medium text-signal">
                  {item.startYear}
                </p>
                <p className="data mt-2 text-ink-faint">{item.period}</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-h3 text-ink">{item.role}</h3>
                <p className="mt-0.5 text-ink-soft">{item.company}</p>
                <p className="text-small text-ink-faint">{item.companyFull}</p>
                <p className="mt-4 max-w-[62ch] text-small text-ink-soft">{item.summary}</p>
                {item.current ? (
                  <p className="data mt-4 inline-flex items-center gap-2 text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal-bright" aria-hidden="true" />
                    Em andamento
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
