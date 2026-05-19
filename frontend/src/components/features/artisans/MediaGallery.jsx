/* MediaGallery.jsx */

import GalleryMain from "../../ui/media/GalleryMain";
import GalleryList from "../../ui/media/GalleryList";
import { useState } from "react";

export default function MediaGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!images.length) return null;

  return (
    <div className="media-gallery">
      <GalleryMain image={activeImage} onClick={() => setIsImageOpen(true)} />
      <GalleryList
        images={images}
        activeImage={activeImage}
        onSelect={setActiveImage}
      />
      {isImageOpen && (
        <div onClick={() => setIsImageOpen(false)} className="gallery-lightbox">
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="gallery-lightbox__image"
          />
        </div>
      )}
    </div>
  );
}
