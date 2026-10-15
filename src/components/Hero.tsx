import { facts, intro } from "@/content/profile";
import type { Asset } from "@/lib/assets";
import { mailto } from "@/lib/site";

export function Hero({ retrato, heatmap }: { retrato: Asset; heatmap: Asset }) {
  return (
    <section id="inicio" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 pt-12 pb-0 sm:px-8 md:pt-20">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16">
          <div>
            <h1 className="font-display text-display font-semibold text-ink">{intro.headline}</h1>
            <p className="mt-5 font-display text-h3 text-ink-soft">
              Suporte técnico e infraestrutura de TI
            </p>
            <p className="mt-6 max-w-[62ch] text-lead text-ink-soft">{intro.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={mailto}
                className="rounded-[var(--radius-instrument)] bg-ink px-5 py-2.5 text-small font-medium text-paper hover:bg-signal"
              >
                Enviar e-mail
              </a>
              <a
                href="#trajetoria"
                className="rounded-[var(--radius-instrument)] border border-line-strong px-5 py-2.5 text-small font-medium text-ink hover:border-ink"
              >
                Ver trajetória
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="inset-rule w-[200px] overflow-hidden rounded-[var(--radius-instrument)] bg-surface sm:w-[240px]">
              <img
                src={retrato.src}
                width={retrato.attributes.width}
                height={retrato.attributes.height}
                alt="Retrato de Maicon Gomes Messias"
                loading="eager"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>

            <dl className="divide-y divide-line border-y border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-3.5">
                  <dt className="data pt-0.5 text-ink-faint">{fact.label}</dt>
                  <dd className="text-small text-ink-soft">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* O elemento-assinatura: o mapa de calor real do TCC, que mostra o
          sinal de Wi-Fi já presente no ambiente virando leitura de ocupação. */}
      {/* Sem borda inferior: a seção seguinte já traz a régua que fecha a faixa. */}
      <div className="bleed mt-14 border-t border-line bg-paper-deep">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-8 sm:px-8 md:py-10">
          <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)] md:items-end">
            <figure className="inset-rule min-w-0 overflow-hidden rounded-[var(--radius-instrument)] bg-surface">
              <img
                src={heatmap.src}
                width={heatmap.attributes.width}
                height={heatmap.attributes.height}
                alt="Dois mapas de calor de ocupação do TCC: à esquerda com 1 minuto de coleta e à direita com 5 minutos, sobre a mesma planta baixa."
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </figure>
            <p className="max-w-[46ch] text-small text-ink-soft">
              Mapas de calor reais do meu TCC: a mesma planta baixa lida com 1 minuto (à esquerda) e
              com 5 minutos (à direita) de coleta de pacotes Wi-Fi. Os tons quentes marcam as zonas
              com maior presença estimada pela rede neural. A proposta é usar o sinal que já existe
              no ambiente para estimar a ocupação do espaço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
