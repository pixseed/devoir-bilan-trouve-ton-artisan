/**
 * ================================================================================================
 * MEDIA GALLERY
 * ================================================================================================
 * Rôle :
 * - Afficher une galerie d'images avec aperçu principal.
 * - Permettre la sélection d'une miniature.
 * - Gérer l'ouverture d'un aperçu plein écran.
 * ================================================================================================
 */

import GalleryMain from "../../ui/media/GalleryMain";
import GalleryList from "../../ui/media/GalleryList";
import { useState, useEffect } from "react";

export default function MediaGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(null);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (images.length) {
      setActiveImage(images[0]);
    }
  }, [images]);

  return (
    <div className="media-gallery">
      <GalleryMain image={activeImage} onClick={() => setIsImageOpen(true)} />
      <GalleryList
        images={images}
        activeImage={activeImage}
        onSelect={setActiveImage}
      />
      {isImageOpen && (
        <modal
          onClick={() => setIsImageOpen(false)}
          className="gallery-lightbox"
        >
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="gallery-lightbox__image"
          />
        </modal>
      )}
    </div>
  );
}
