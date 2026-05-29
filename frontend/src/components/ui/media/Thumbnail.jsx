/**
 * ================================================================================================
 * THUMBNAIL
 * ================================================================================================
 * Rôle :
 * - Afficher une miniature sélectionnable.
 * - Indiquer visuellement et sémantiquement l'état actif.
 * ================================================================================================
 */

import clsx from "clsx";
import { buildImageSrcSet } from "../../../utils/buildImageSrcSet";
import { GALLERY_THUMBNAIL_IMAGE_SIZES } from "../../../constants/images";

export default function Thumbnail({ image, isActive, onSelect }) {
  return (
    <li className="gallery-list__item">
      <button
        type="button"
        className={clsx("thumbnail", { "thumbnail--active": isActive })}
        onClick={() => onSelect?.(image)}
        aria-current={isActive ? "true" : undefined}
        aria-label={`Afficher ${image.alt}`}
      >
        <img
          src={image.thumbSm}
          srcSet={buildImageSrcSet({
            thumbnailSm: image.thumbSm,
            thumbnailMd: image.thumbMd,
            thumbnailLg: image.thumbLg,
          })}
          sizes={GALLERY_THUMBNAIL_IMAGE_SIZES}
          alt=""
          aria-hidden="true"
          className="thumbnail__image"
          width="320"
          height="180"
          loading="lazy"
        />
      </button>
    </li>
  );
}
