import { Section } from "@/components/Section";
import { education, softSkills } from "@/content/profile";
import { site } from "@/lib/site";

export function Profile() {
  return (
    <Section
      id="perfil"
      title="Perfil"
      note="Formação, idiomas e o raciocínio que guia o trabalho."
    >
      <div className="max-w-[68ch] space-y-5 text-ink-soft">
        <p>
          Minha base veio primeiro pela formação técnica em Informática e Hardware e depois pelo
          bacharelado em Engenharia de Computação na PUC Minas. Entrei na área de Tecnologia da
          Informação em março de 2023 e, desde então, trabalho onde o sistema precisa continuar de
          pé: atendendo usuários, resolvendo falhas e cuidando da infraestrutura que sustenta a
          rotina da instituição.
        </p>
        <p>
          Gosto do tipo de problema em que o sintoma aparece longe da causa — uma falha de rede que
          só se repete em determinado horário, um equipamento que trava de forma intermitente, um
          chamado que volta porque a primeira solução não bastou. É o mesmo raciocínio que levou ao
          trabalho de conclusão de curso e aos projetos de IoT: observar o sinal, medir e
          transformar a medição em algo que alguém consiga usar.
        </p>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-14">
        <div>
          <h3 className="font-display text-h3 text-ink">Formação</h3>
          <ul className="mt-5 space-y-5">
            {education.map((item) => (
              <li key={item.course} className="border-t border-line pt-4">
                <p className="font-display text-h3 text-ink">{item.institution}</p>
                <p className="mt-1 text-small text-ink-soft">{item.course}</p>
                <p className="data mt-2 flex gap-3 text-ink-faint">
                  <span>{item.period}</span>
                  <span>{item.status}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-h3 text-ink">Idiomas</h3>
          <ul className="mt-5 space-y-5">
            {site.languages.map((language) => (
              <li key={language} className="border-t border-line pt-4 text-small text-ink-soft">
                {language}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-h3 text-ink">{softSkills.title}</h3>
          <p className="mt-4 max-w-[46ch] text-small text-ink-soft">{softSkills.body}</p>
        </div>
      </div>
    </Section>
  );
}
