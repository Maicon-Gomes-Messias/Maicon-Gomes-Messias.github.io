import type { NextConfig } from "next";

/**
 * O site é publicado no GitHub Pages, que serve apenas arquivos estáticos.
 * Por isso usamos a exportação estática do Next (`out/`), que gera um HTML
 * por rota. O build continua pré-renderizando tudo no momento da compilação.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // O otimizador de imagens do Next precisa de servidor; não existe no Pages.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
