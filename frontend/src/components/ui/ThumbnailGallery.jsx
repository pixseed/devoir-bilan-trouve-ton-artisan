/* ThumbnailGallery.jsx */

import ThumbnailMain from "./ThumbnailMain";
import ThumbnailList from "./ThumbnailList";
import { useState } from "react";

export default function ThumbnailGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="thumbnail-gallery">
      <ThumbnailMain image={activeImage} />
      <ThumbnailList images={images} activeImage={activeImage} onSelect={setActiveImage}/>
    </div>
  );
}
