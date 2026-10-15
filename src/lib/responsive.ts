import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";
import type { Asset } from "@/lib/assets";

/**
 * Processa uma imagem em várias larguras e monta um `srcSet` responsivo.
 *
 * O Astro otimiza cada largura individualmente (AVIF) no build; aqui só
 * juntamos o resultado num `srcSet` que o navegador usa com o `sizes` do
 * elemento. É o que evita o celular baixar a imagem em tamanho de desktop.
 */
export async function responsiveImage(
  src: ImageMetadata,
  widths: number[],
  { quality = 80 }: { quality?: number } = {},
): Promise<Asset> {
  const rendered = await Promise.all(
    widths.map((width) => getImage({ src, width, format: "avif", quality })),
  );

  const largest = rendered[rendered.length - 1];

  return {
    src: largest.src,
    srcSet: rendered.map((image, index) => `${image.src} ${widths[index]}w`).join(", "),
    width: Number(largest.attributes.width),
    height: Number(largest.attributes.height),
  };
}
