import { mailto, nav, site } from "@/lib/site";

function SignalMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden="true" className="text-signal">
      <circle cx="3.6" cy="14.2" r="1.6" fill="currentColor" />
      <path
        d="M3.6 9.6a4.6 4.6 0 0 1 4.6 4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M3.6 4.4A9.8 9.8 0 0 1 13.4 14.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Cabecalho sem JavaScript.
 *
 * No desktop a navegacao fica na barra. No celular ela vira uma faixa de
 * ancoras logo abaixo, visivel no topo e rolavel na horizontal; ao rolar a
 * pagina so a barra fina permanece fixa. Nada e escondido atras de um menu,
 * entao a navegacao funciona sem estado e sem hidratacao.
 */
export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#inicio"
            className="flex items-center gap-2.5 font-display text-[0.98rem] font-medium tracking-tight text-ink"
          >
            <SignalMark />
            <span className="hidden sm:inline">{site.name}</span>
            <span className="sm:hidden">{site.shortName}</span>
          </a>

          <nav aria-label="Seções do site" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-small text-ink-soft hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={mailto}
            className="rounded-[var(--radius-instrument)] bg-ink px-3.5 py-2 text-small font-medium whitespace-nowrap text-paper hover:bg-signal"
          >
            Enviar e-mail
          </a>
        </div>
      </header>

      <nav aria-label="Seções do site" className="border-b border-line bg-paper md:hidden">
        <ul className="mx-auto flex w-full max-w-[1180px] gap-6 overflow-x-auto px-5 py-3 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <li key={item.id} className="shrink-0">
              <a href={`#${item.id}`} className="text-small whitespace-nowrap text-ink-soft">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
