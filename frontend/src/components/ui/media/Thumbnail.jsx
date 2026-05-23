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

export default function Thumbnail({ image, isActive, onSelect }) {
  return (
    <li className="gallery-list__item">
      <button
        type="button"
        className={clsx("thumbnail", { "thumbnail--active": isActive })}
        onClick={() => onSelect?.(image)}
        aria-pressed={isActive}
      >
        <img src={image.src} alt={image.alt} className="thumbnail__image" />
      </button>
    </li>
  );
}
