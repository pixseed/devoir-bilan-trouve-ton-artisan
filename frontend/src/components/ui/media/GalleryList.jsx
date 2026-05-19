/* GalleryList.jsx */

import Thumbnail from "./Thumbnail";

export default function GalleryList({ images, activeImage, onSelect }) {
  return (
    <div className="gallery-list">
      {images.map((i) => (
        <Thumbnail
          key={i.id}
          image={i}
          isActive={activeImage?.id === i.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
