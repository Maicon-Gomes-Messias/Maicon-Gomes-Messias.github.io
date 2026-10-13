import { ogContentType, renderOgImage } from "@/lib/og";

/**
 * Gera a imagem de compartilhamento em `/og.png`.
 *
 * O caminho inclui a extensão de propósito: no GitHub Pages o Content-Type é
 * deduzido da extensão do arquivo, então um PNG sem `.png` seria servido como
 * `application/octet-stream` e as prévias de link nos aplicativos quebrariam.
 */
export const dynamic = "force-static";
export const contentType = ogContentType;

export function GET() {
  return renderOgImage();
}
