/**
 * Metadados de imagem já processada pelo `astro:assets` (`getImage`).
 *
 * Declarado aqui, e não importado do módulo virtual do Astro, porque o
 * Astro 7 mudou esse tipo (`srcSet` deixou de ser string e virou
 * `{ values, attribute }`). Os componentes só usam `src` e as dimensões
 * intrínsecas, então manter o tipo enxuto evita acoplamento desnecessário.
 */
export type Asset = {
  src: string;
  attributes: Record<string, number>;
};
