/**
 * ================================================================================================
 * IMAGE SIZES
 * ================================================================================================
 * Valeurs utilisées par l'attribut sizes des balises <img>.
 * Permettent au navigateur de sélectionner la variante la plus adaptée depuis le srcSet.
 * ================================================================================================
 */

import { BREAKPOINTS } from "../config/breakpoints";

export const ARTISAN_CARD_IMAGE_SIZES = `(max-width: ${BREAKPOINTS.md}) 100vw, 450px`;
export const ARTISAN_DETAILS_MAIN_IMAGE_SIZES = `(max-width: ${BREAKPOINTS.md}) 100vw, 560px`;
export const GALLERY_THUMBNAIL_IMAGE_SIZES = "82px";
export const STATUS_PAGE_IMAGE_SIZES = `
  (max-width: ${BREAKPOINTS.md}) 100vw,
  (max-width: ${BREAKPOINTS.xl}) 720px,
  1112px
`;

/**
 * ================================================================================================
 * STATUS PAGE IMAGES
 * ================================================================================================
 * Ressources utilisées par les pages de statut :
 * - 404
 * - Page en construction
 *
 * Chaque entrée contient :
 * - Les variantes thumbnail utilisées pour l'affichage responsive.
 * - L'image principale utilisées pour les grands écrans.
 * ================================================================================================
 */

export const STATUS_PAGE_IMAGES = {
  notFound: {
    thumbSm: "/images/thumbnails/ERREUR-404-thumb-sm.webp",
    thumbMd: "/images/thumbnails/ERREUR-404-thumb-md.webp",
    thumbLg: "/images/thumbnails/ERREUR-404-thumb-lg.webp",
    main: "/images/mains/ERREUR-404-main-picture.webp",
  },
  
  underConstruction: {
    thumbSm: "/images/thumbnails/UNDER-CONSTRUCTION-thumb-sm.webp",
    thumbMd: "/images/thumbnails/UNDER-CONSTRUCTION-thumb-md.webp",
    thumbLg: "/images/thumbnails/UNDER-CONSTRUCTION-thumb-lg.webp",
    main: "/images/mains/UNDER-CONSTRUCTION-main-picture.webp",
  },
};
