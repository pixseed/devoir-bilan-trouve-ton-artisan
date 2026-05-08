/* ThumbnailList.jsx */

import ThumbnailItem from "./ThumbnailItem";

export default function ThumbnailList({ images, activeImage, onSelect }) {
  return (
    <div className="thumbnail-list">
      {images.map((i) => (
        <ThumbnailItem
          key={i.id}
          image={i}
          isActive={activeImage?.id === i.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
