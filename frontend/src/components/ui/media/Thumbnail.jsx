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
        aria-current={isActive ? "true" : undefined}
        aria-label={`Afficher ${image.alt}`}
      >
        <img src={image.src} alt="" aria-hidden="true" className="thumbnail__image" />
      </button>
    </li>
  );
}
