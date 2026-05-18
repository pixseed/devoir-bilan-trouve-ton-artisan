/* MediaGallery.jsx */

import GalleryMain from "./GalleryMain";
import GalleryList from "./GalleryList";
import { useState } from "react";

export default function MediaGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isImageOpen, setIsImageOPen] = useState(false);

  return (
    <div className="media-gallery">
      <GalleryMain image={activeImage} onClick={() => setIsImageOPen(true)} />
      <GalleryList images={images} activeImage={activeImage} onSelect={setActiveImage}/>
      {isImageOpen && (
        <div onClick={() => setIsImageOPen(false)} className="gallery-lightbox">
          <img src={activeImage.src} alt={activeImage.alt} className="gallery-lightbox__image" />
        </div>
      )}
    </div>
  );
}
