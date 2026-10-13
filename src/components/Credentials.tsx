import { Section } from "@/components/Section";
import { awards, certifications } from "@/content/profile";

export function Credentials() {
  return (
    <Section id="certificados" title="Certificados" note="Cursos, certificações e reconhecimentos.">
      <h3 className="font-display text-h3 text-ink">Licenças e certificados</h3>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {certifications.map((item) => (
          <li
            key={item.title}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-3.5"
          >
            <div className="min-w-0">
              <p className="text-ink">{item.title}</p>
              <p className="text-small text-ink-faint">{item.issuer}</p>
            </div>
            <time className="data text-ink-faint" dateTime={item.dateTime}>
              {item.date}
            </time>
          </li>
        ))}
      </ul>

      <h3 className="mt-14 font-display text-h3 text-ink">Premiações e reconhecimentos</h3>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {awards.map((item) => (
          <li
            key={item.title}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-3.5"
          >
            <p className="text-ink">{item.title}</p>
            <p className="data text-ink-faint">{item.meta}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
