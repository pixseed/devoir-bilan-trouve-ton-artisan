/**
 * ================================================================================================
 * GALLERY MAIN
 * ================================================================================================
 * Rôle :
 * - Afficher l'image principale sélectionnée.
 * - Permettre l'ouverture de la lightbox.
 * ================================================================================================
 */

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
        <img src={image.src} alt="" aria-hidden="true" className="gallery-main__image" />
      </button>
    </div>
  );
}
