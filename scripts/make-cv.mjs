/**
 * Gera o currículo em PDF a partir da página já construída.
 *
 * O site inteiro já vira um currículo limpo quando impresso (ver o bloco
 * `@media print` em `src/styles/globals.css`: fora cabeçalho, navegação,
 * rodapé e figuras). Este script só automatiza esse caminho: sobe um
 * servidor estático para `dist/` e pede ao Chrome headless que "imprima"
 * a página em `public/curriculo-maicon-gomes-messias.pdf`.
 *
 * Uso: `npm run cv` (que roda `npm run build` antes).
 */
import { createServer } from "node:http";
import { readFile, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";

const root = path.resolve("dist");
const output = path.resolve("public/curriculo-maicon-gomes-messias.pdf");
const port = 4399;

if (!existsSync(root)) {
  console.error("dist/ não encontrado. Rode `npm run build` antes.");
  process.exit(1);
}

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".avif": "image/avif",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

const server = createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, "http://localhost");
    const relative = decodeURIComponent(pathname).replace(/^\/+/, "");
    const file = path.join(root, relative === "" ? "index.html" : relative);
    if (!file.startsWith(root)) {
      res.writeHead(403).end();
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, { "content-type": mime[path.extname(file)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
});

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ];
  return candidates.find((candidate) => candidate && existsSync(candidate)) ?? "chrome";
}

await new Promise((resolve) => server.listen(port, resolve));

const chrome = spawn(
  findChrome(),
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=15000",
    `--print-to-pdf=${output}`,
    `http://localhost:${port}/`,
  ],
  { stdio: "inherit" },
);

chrome.on("exit", async (code) => {
  server.close();
  if (code === 0 && existsSync(output)) {
    // Mantém a cópia do build sincronizada (o `dist/` é gerado antes do PDF).
    const built = path.join(root, path.basename(output));
    if (existsSync(root)) {
      await copyFile(output, built).catch(() => {});
    }
    console.log(`\nCurrículo gerado em ${path.relative(process.cwd(), output)}`);
  }
  process.exit(code ?? 0);
});
