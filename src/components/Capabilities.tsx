import { Section } from "@/components/Section";
import { capabilities, softSkills } from "@/content/profile";

export function Capabilities() {
  return (
    <Section
      id="competencias"
      title="Competências"
      note="O que eu faço, na ordem em que isso costuma aparecer no dia a dia."
    >
      <div className="grid gap-x-14 gap-y-9 sm:grid-cols-2">
        {capabilities.map((item) => (
          <div key={item.title} className="border-t border-line pt-5">
            <h3 className="font-display text-h3 text-ink">{item.title}</h3>
            <p className="mt-2.5 max-w-[46ch] text-small text-ink-soft">{item.body}</p>
            {item.tools ? (
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                {item.tools.map((tool) => (
                  <li key={tool} className="data text-ink-faint">
                    {tool}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-3 border-t border-line pt-6 sm:grid-cols-[210px_minmax(0,1fr)] sm:gap-16">
        <h3 className="font-display text-h3 text-ink">{softSkills.title}</h3>
        <p className="max-w-[62ch] text-small text-ink-soft">{softSkills.body}</p>
      </div>
    </Section>
  );
}
