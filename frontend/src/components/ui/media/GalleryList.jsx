/**
 * ================================================================================================
 * GALLERY LIST
 * ================================================================================================
 * Rôle :
 * - Afficher la liste des miniatures de galerie.
 * - Gérer l'état actif de l'image sélectionnée.
 * ================================================================================================
 */

import Thumbnail from "./Thumbnail";

export default function GalleryList({ images, activeImage, onSelect }) {
  return (
    <ul className="gallery-list reset-list" aria-label="Miniatures de la galerie">
      {images.map((i) => (
        <Thumbnail
          key={i.id}
          image={i}
          isActive={activeImage?.id === i.id}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
