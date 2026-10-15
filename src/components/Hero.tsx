import { facts, intro } from "@/content/profile";
import type { Asset } from "@/lib/assets";
import { mailto } from "@/lib/site";

export function Hero({ retrato }: { retrato: Asset }) {
  return (
    <section id="inicio" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 pt-12 pb-14 sm:px-8 md:pt-20 md:pb-20 print:py-6">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16">
          <div>
            <h1 className="font-display text-display font-semibold text-ink">{intro.headline}</h1>
            <p className="mt-5 font-display text-h3 text-ink-soft">
              Suporte técnico e infraestrutura de TI
            </p>
            <p className="mt-6 max-w-[62ch] text-lead text-ink-soft">{intro.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
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
              <a
                href="/curriculo-maicon-gomes-messias.pdf"
                download
                className="rounded-[var(--radius-instrument)] border border-line-strong px-5 py-2.5 text-small font-medium text-ink hover:border-ink"
              >
                Baixar currículo (PDF)
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="inset-rule w-[200px] overflow-hidden rounded-[var(--radius-instrument)] bg-surface sm:w-[240px]">
              <img
                src={retrato.src}
                srcSet={retrato.srcSet}
                sizes="(min-width: 640px) 240px, 200px"
                width={retrato.width}
                height={retrato.height}
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
    </section>
  );
}
