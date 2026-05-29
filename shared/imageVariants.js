/**
 * ================================================================================================
 * IMAGE VARIANTS
 * ================================================================================================
 * Rôle :
 * - Centraliser les largeurs utilisées pour les variantes responsives.
 * - Partager les mêmes valeurs entre le frontend et les scripts Node.js.
 * - Garantir la cohérence entre les imgaes générées et les balises srcSet.
 * 
 * Utilisé par :
 * - optimize-images.js
 * - buildImageSrcSet()
 * - Les composants affichant des images responsives
 * ================================================================================================
 */

export const THUMBNAIL_WIDTHS = {
  SM: 320,
  MD: 480,
  LG: 560,
};
