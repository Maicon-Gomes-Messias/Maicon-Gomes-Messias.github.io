import { site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-8 sm:px-8">
        <p className="data text-ink-faint">{site.name}</p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="data link-underline text-ink-soft hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="data text-ink-faint">Desenvolvido com Astro e React</p>
      </div>
    </footer>
  );
}
