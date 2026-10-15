/**
 * Metadados de imagem já processada pelo `astro:assets`.
 *
 * `srcSet` é opcional: quando presente, o componente o repassa ao `<img>`
 * junto de um atributo `sizes`, permitindo que o navegador baixe só a
 * variante adequada à largura da tela (importante no celular, onde a imagem
 * em tamanho cheio desperdiça banda).
 */
export type Asset = {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
};
