/**
 * ================================================================================================
 * GALLERY MAIN
 * ================================================================================================
 * Rôle :
 * - Afficher l'image principale sélectionnée.
 * - Permettre l'ouverture de la lightbox.
 * ================================================================================================
 */

import { buildImageSrcSet } from "../../../utils/buildImageSrcSet";
import { ARTISAN_DETAILS_MAIN_IMAGE_SIZES } from "../../../constants/images";

export default function GalleryMain({ image, onClick }) {
  if (!image) return null;

  return (
    <div className="gallery-main">
      <button
        type="button"
        className="gallery-main__trigger"
        onClick={onClick}
        aria-label={`Agrandir l'image ${image.alt}`}
      >
        <img
          src={image.thumbnailLg}
          srcSet={buildImageSrcSet({
            thumbnailSm: image.thumbSm,
            thumbnailMd: image.thumbMd,
            thumbnailLg: image.thumbLg,
          })}
          sizes={ARTISAN_DETAILS_MAIN_IMAGE_SIZES}
          alt=""
          aria-hidden="true"
          className="gallery-main__image"
          width="560"
          height="315"
          fetchPriority="high"
        />
      </button>
    </div>
  );
}
