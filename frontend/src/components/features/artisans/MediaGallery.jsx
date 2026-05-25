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

import { useState, useEffect } from "react";

import Lightbox from "../../ui/overlay/Lightbox";
import GalleryMain from "../../ui/media/GalleryMain";
import GalleryList from "../../ui/media/GalleryList";

export default function MediaGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(null);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    setActiveImage(images.length ? images[0] : null);
  }, [images]);

  return (
    <div className="media-gallery">
      <GalleryMain image={activeImage} onClick={() => activeImage && setIsImageOpen(true)} />
      <GalleryList
        images={images}
        activeImage={activeImage}
        onSelect={setActiveImage}
      />
      {isImageOpen && activeImage && (
        <Lightbox
          image={activeImage}
          onClose={() => setIsImageOpen(false)}
        />
      )}
    </div>
  );
}
