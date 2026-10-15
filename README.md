<h1 align="center">Maicon Gomes Messias</h1>

<p align="center">
  <strong>Site pessoal publicado em <a href="https://maicon-gomes-messias.github.io/">maicon-gomes-messias.github.io</a></strong>
</p>

<p align="center">
  <a href="https://maicon-gomes-messias.github.io/">Site</a> &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/maicon-gomes-89a5561ab">LinkedIn</a> &nbsp;·&nbsp;
  <a href="mailto:maicon.gomesmessias@gmail.com">E-mail</a>
</p>

---

Site pessoal em página única, feito com **Astro 7**, **React 19** e **TypeScript**,
publicado no **GitHub Pages**. O conteúdo é o currículo de Maicon Gomes Messias: suporte
técnico de TI, infraestrutura de rede e projetos em IoT e dados.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000 (edição ao vivo)
npm run build    # gera o site estático em dist/
npm run preview  # serve o build localmente
npm run cv       # build + gera o currículo em PDF (public/curriculo-*.pdf)
npm run lint
```

## Publicação

O site é publicado automaticamente no GitHub Pages pelo workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) a cada push na branch `main`
(também dá para disparar manualmente pela aba **Actions**).

O fluxo: `npm ci` → `npm run build` (site estático em `dist/`) → upload do artefato →
deploy no Pages. Em **Settings → Pages**, a origem precisa estar definida como
**GitHub Actions**.

## Por que Astro, e não Next.js

A primeira versão deste site foi feita em Next.js (App Router). Ele funcionava, mas o
Lighthouse ficava em **77–98 de performance**, e a causa era estrutural: o App Router
sempre envia o runtime do React e do roteador para o navegador, **mesmo com zero
componentes cliente**. Eram ~137 KB de JavaScript que não executavam nada útil num site
de uma página, consumindo thread principal (TBT) e atrasando o carregamento das fontes.

A medição que decidiu: o mesmo HTML **sem nenhum JavaScript** dava 100 de performance.
O Astro entrega exatamente isso — os componentes continuam sendo React, mas são
renderizados no build e viram HTML. Nada é hidratado, então nada de JavaScript é enviado.

Resultado medido (Lighthouse 12, mobile, três execuções seguidas):

| | Next.js | Astro |
| --- | --- | --- |
| Performance | 77–98 | **100, 100, 100** |
| Acessibilidade / Boas práticas / SEO | 100 | **100 / 100 / 100** |
| Total blocking time | 140–270 ms | **0 ms** |
| Largest contentful paint | 2,1–2,9 s | **1,4–1,5 s** |
| JavaScript baixado | 137 KB | **0 bytes** |
| Requisições / peso total | 14 / 253 KB | **7 / 105 KB** |

## Onde editar o conteúdo

| Arquivo | O que contém |
| --- | --- |
| `src/content/profile.ts` | Perfil, experiências, projetos, publicação, competências, formação, certificados e premiações. |
| `src/lib/site.ts` | Nome, e-mail, localização, perfis (GitHub/LinkedIn), navegação, título/descrição para SEO e palavras-chave. |
| `src/assets/` | Figuras do artigo do TCC (mapa de calor, fluxograma, layout) e as fotos do protótipo dos óculos. |
| `public/certificados/` | PDFs dos certificados, vinculados na seção de Certificados. |
| `public/artigo-analise-espacial-ocupacao-wifi-abakos-2025.pdf` | PDF do artigo publicado, oferecido para download na seção de Publicações. |
| `public/curriculo-maicon-gomes-messias.pdf` | Currículo em PDF, gerado por `npm run cv`. |
| `scripts/make-cv.mjs` | Sobe `dist/` e usa o Chrome headless para "imprimir" a página no currículo em PDF. |
| `astro.config.mjs` | Domínio final (`site`) e integrações. |

Cada seção da página é um componente React em `src/components/`, e `src/pages/index.astro`
monta tudo. `src/pages/*.ts` geram `sitemap.xml`, `robots.txt` e `manifest.webmanifest`.

## Decisões de projeto

**Direção de design — "Sinal".** O trabalho de Maicon é tornar legível o que é invisível:
mapas de calor de ocupação a partir de Wi-Fi (TCC) e óculos que convertem fala em texto
(Imagine Cup). O site adota o vocabulário de instrumentação de radiofrequência sobre uma
superfície de "papel técnico" clara, com verde-petróleo como cor de instrumento e âmbar
reservado para leitura de calor.

- **Elemento-assinatura:** as figuras reais do artigo em Projetos — o comparativo de mapas de
  calor (`src/assets/tcc-mapa-calor.png`), o fluxograma do método (`src/assets/tcc-fluxograma.png`)
  e o layout do ambiente de testes (`src/assets/tcc-layout.png`), extraídas do artigo publicado
  na Revista Abakós; no projeto dos óculos entram as fotos do protótipo
  (`src/assets/oculos-*.jpg`). Cada figura é processada pelo `astro:assets` em várias larguras,
  formando um `srcSet` responsivo (`src/lib/responsive.ts`), para o celular não baixar a versão
  de desktop.
- **Tipografia:** Space Grotesk (títulos), Instrument Sans (texto) e JetBrains Mono (apenas
  dados: datas, tecnologias, rótulos). Escala baseada em *The Elements of Typographic Style*.
- **Estrutura:** grades editoriais com títulos de seção em coluna fixa, réguas de 1px e listas
  de definição. A numeração aparece só onde o conteúdo é de fato uma sequência: a linha do
  tempo de carreira e as etapas do protótipo.

### Performance

- **Zero JavaScript no cliente.** Nenhum componente usa `client:*`, então nada é hidratado.
  O único `<script>` da página é o JSON-LD, que não é código executável.
- **Nada anima na entrada.** Uma animação de opacidade no `<h1>` atrasa o LCP, porque o
  elemento só conta como pintado quando fica visível. As transições ficam apenas onde
  respondem a uma ação do usuário.
- **CSS embutido no HTML** (`inlineStylesheets: "always"`), eliminando uma requisição que
  bloqueia a renderização.
- **Seções fora da tela não são renderizadas** (`content-visibility: auto` com
  `contain-intrinsic-size`). Numa página longa como esta, o layout do documento inteiro
  dominava o tempo de thread principal; agora o navegador só monta o que está à vista. O
  `contain-intrinsic-size: auto` faz ele lembrar o tamanho real de cada seção depois da
  primeira renderização, então não há salto na rolagem (CLS 0). Na impressão, o
  `content-visibility` volta a `visible` para o PDF sair completo.
- **Sem `text-wrap: pretty`.** É um algoritmo de quebra de linha caro, reexecutado a cada
  relayout; o ganho tipográfico em parágrafos não paga. Nos títulos o `balance` continua,
  porque é barato (o Chromium limita a seis linhas por bloco) e melhora o resultado.
- **Imagens responsivas e preguiçosas.** Cada figura do artigo é gerada em quatro larguras
  (AVIF) e entregue por `srcSet` + `sizes`; o navegador baixa só a variante necessária — o
  retrato incluído. As figuras abaixo da dobra têm `loading="lazy"`, e todas declaram
  `width`/`height` para não deslocar o layout (CLS 0). Medido no Lighthouse 13: **100** em
  mobile e desktop, com ~82 KB de transferência.
- **Fontes auto-hospedadas** em `public/fonts` (subsets latin, licença SIL Open Font
  License). Só as duas fontes usadas acima da dobra são pré-carregadas; a monoespaçada não.
  As famílias `…Fallback` repetem as métricas das originais para o layout não deslocar na
  troca de fonte (CLS igual a zero).
- O build também gera `dist/_astro/client.*.js`, o ponto de entrada do renderizador React.
  Ele **não é referenciado por nenhuma página** e por isso nunca é baixado; existe apenas
  para o caso de algum componente passar a ser hidratado no futuro.

## Acessibilidade e SEO

- HTML semântico (`header`, `main`, `section`, `article`, `ol`, `dl`, `time`), um único `h1`
  e hierarquia de títulos coerente.
- Link "Pular para o conteúdo", foco visível, contraste mínimo de 4,5:1 no texto e
  `prefers-reduced-motion` respeitado.
- Metadados completos (title, description, canonical, Open Graph, Twitter, robots),
  JSON-LD de `Person`, `WebSite`, `ProfilePage` e `ScholarlyArticle` (o artigo publicado) com
  `sameAs` para GitHub e LinkedIn, `sitemap.xml`, `robots.txt`, `manifest.webmanifest` e
  imagem Open Graph.
- **Ícones completos**: `icon.svg` (navegadores modernos), `favicon.ico` (legado),
  `apple-touch-icon.png` e `icon-192/512.png` no manifest (`public/`).
- **Página 404 própria** (`src/pages/404.astro`) com `noindex`, em vez do padrão do GitHub
  Pages.
- `public/og.png` é um arquivo estático (1200×630). Para trocar a imagem de
  compartilhamento, substitua esse arquivo.
- Folha de estilo de impressão: a página vira um currículo em PDF, sem cabeçalho, navegação,
  rodapé, figuras nem botões, com o espaçamento compactado. O botão **Baixar currículo (PDF)**
  (no topo e no contato) aponta para o arquivo gerado por `npm run cv`.
