/* MediaGallery.jsx */

import GalleryMain from "./GalleryMain";
import GalleryList from "./GalleryList";
import { useState } from "react";

export default function MediaGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="media-gallery">
      <GalleryMain image={activeImage} />
      <GalleryList images={images} activeImage={activeImage} onSelect={setActiveImage}/>
    </div>
  );
}
