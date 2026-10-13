<h1 align="center">Maicon Gomes Messias</h1>

<p align="center">
  <strong>Site pessoal publicado em <a href="https://maicon-gomes-messias.github.io/">maicon-gomes-messias.github.io</a></strong>
</p>

<p align="center">
  <a href="https://maicon-gomes-messias.github.io/">Site</a> &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/maicon-gomes-89a5561ab">LinkedIn</a> &nbsp;·&nbsp;
  <a href="mailto:maiconmessias@pucminas.br">E-mail</a>
</p>

---

Site pessoal em página única, feito com **Next.js 16 (App Router)**, **React 19** e
**TypeScript**, com exportação estática publicada no **GitHub Pages**. O conteúdo é o
currículo de Maicon Gomes Messias: suporte técnico de TI, infraestrutura de rede e
projetos em IoT e dados.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em out/
npm run lint
```

## Publicação

O site é publicado automaticamente no GitHub Pages pelo workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) a cada push na branch `main`
(também é possível disparar manualmente pela aba **Actions**).

O fluxo: `npm ci` → `npm run build` (exportação estática em `out/`) → upload do artefato →
deploy no Pages. Para o Pages funcionar, em **Settings → Pages** a origem precisa estar
definida como **GitHub Actions**.

### Detalhes que fazem a exportação estática funcionar

- `next.config.ts` usa `output: "export"` e `images.unoptimized: true` (não existe
  otimizador de imagens sem servidor).
- Os route handlers (`sitemap.ts`, `robots.ts`, `manifest.ts`) declaram
  `export const dynamic = "force-static"`, exigido pelo modo de exportação.
- A imagem de compartilhamento é gerada em `src/app/og.png/route.tsx`, **com extensão no
  caminho**: no GitHub Pages o `Content-Type` vem da extensão do arquivo, e um PNG sem
  `.png` seria servido como `application/octet-stream`, quebrando as prévias de link.
- `public/.nojekyll` impede que o Jekyll ignore a pasta `_next`.
- O domínio final é definido por `NEXT_PUBLIC_SITE_URL` (veja `.env.example`), usado em
  `canonical`, Open Graph, `sitemap.xml` e `robots.txt`.

## Onde editar o conteúdo

| Arquivo | O que contém |
| --- | --- |
| `src/content/profile.ts` | Perfil, experiências, projetos, competências, formação, certificados e premiações. |
| `src/lib/site.ts` | Nome, e-mail, telefone, localização, perfis (GitHub/LinkedIn), URL do site e imagem de compartilhamento. |

Cada seção da página é um componente em `src/components/`, e `src/app/page.tsx` monta tudo.

## Decisões de projeto

**Direção de design — "Sinal".** O trabalho de Maicon é tornar legível o que é invisível:
mapas de calor de ocupação a partir de Wi-Fi (TCC) e óculos que convertem fala em texto
(Imagine Cup). O site adota o vocabulário de instrumentação de radiofrequência sobre uma
superfície de "papel técnico" clara, com verde-petróleo como cor de instrumento e âmbar
reservado para leitura de calor.

- **Elemento-assinatura:** o campo de sinal no topo (`src/components/SignalField.tsx`),
  desenhado em canvas. Parte de pontos de acesso virtuais, faz uma única varredura na
  abertura e depois responde ao cursor. É o único movimento não provocado pelo usuário.
- **Tipografia:** Space Grotesk (títulos), Instrument Sans (texto) e JetBrains Mono (apenas
  dados: datas, tecnologias, rótulos). Escala baseada em *The Elements of Typographic Style*.
- **Estrutura:** grades editoriais com títulos de seção em coluna fixa, réguas de 1px e listas
  de definição. A numeração aparece só onde o conteúdo é de fato uma sequência: a linha do
  tempo de carreira e as etapas do protótipo.

## Acessibilidade e SEO

- HTML semântico (`header`, `main`, `section`, `article`, `ol`, `dl`, `time`), um único `h1`
  e hierarquia de títulos coerente.
- Link "Pular para o conteúdo", foco visível, contraste mínimo de 4,5:1 no texto e
  `prefers-reduced-motion` respeitado (o campo de sinal vira imagem estática).
- Metadados completos (title, description, canonical, Open Graph, Twitter, robots),
  JSON-LD de `Person`, `WebSite` e `ProfilePage` com `sameAs` para GitHub e LinkedIn,
  `sitemap.xml`, `robots.txt`, `manifest.webmanifest` e imagem Open Graph gerada em código.
- Folha de estilo de impressão: a página vira um currículo limpo em PDF, sem cabeçalho,
  campo de sinal ou rodapé.
