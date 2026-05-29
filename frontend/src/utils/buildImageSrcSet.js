/**
 * ================================================================================================
 * IMAGE SRCSET
 * ================================================================================================
 * Rôle :
 * - Générer automatiquement des chaînes SrcSet valides.
 * - Réutiliser la même logique dans plusieurs composants.
 * - Éviter la duplication des valeurs de largeur déclarées pour les varaintes d'images.
 * 
 * Fonctions :
 * - buildImageSrcSet() : construit le srcSet des miniatures.
 * - buildStatusPageSrcSet() : construit le srcSet complet des pages de statut.
 * ================================================================================================
 */

import { THUMBNAIL_WIDTHS } from "../../../shared/imageVariants";

// Construire un srcSet à partir des variantes thumbnail
export function buildImageSrcSet({
  thumbnailSm,
  thumbnailMd,
  thumbnailLg,
}) {
  return [
    `${thumbnailSm} ${THUMBNAIL_WIDTHS.SM}w`,
    `${thumbnailMd} ${THUMBNAIL_WIDTHS.MD}w`,
    `${thumbnailLg} ${THUMBNAIL_WIDTHS.LG}w`
  ].join(", ");
}

// Construire le srcSet utilisé par les pages statut (404, page en construction, etc.)
export function buildStatusPageSrcSet(image) {
  return [
    buildImageSrcSet({
      thumbnailSm: image.thumbSm,
      thumbnailMd: image.thumbMd,
      thumbnailLg: image.thumbLg,
    }),
    `${image.main} 1400w`
  ].join(", ");
}