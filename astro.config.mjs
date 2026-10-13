import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

/**
 * O site é 100% estático e não tem nenhum componente hidratado: todo o
 * JavaScript que chega ao navegador é zero. Por isso a folha de estilo é
 * embutida no HTML — elimina uma requisição que bloqueia a renderização.
 */
export default defineConfig({
  site: "https://maicon-gomes-messias.github.io",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "always",
  },
});
