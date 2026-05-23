/**
 * ================================================================================================
 * MEDIA GALLERY SKELETON
 * ================================================================================================
 * Rôle :
 * - Afficher l'état de chargement d'une galerie média.
 * ================================================================================================
 */

export default function MediaGallerySkeleton({ thumbnailCount = 4 }) {
  return (
    <div className="media-gallery" aria-hidden="true">
      <div className="gallery-main">
        <div className="skeleton gallery-main__image" />
      </div>

      <div className="gallery-list">
        {Array.from({ length: thumbnailCount }).map((_, index) => (
          <div key={index} className="skeleton thumbnail">
            <div className="skeleton thumbnail__image" />
          </div>
        ))}
      </div>
    </div>
  );
}
