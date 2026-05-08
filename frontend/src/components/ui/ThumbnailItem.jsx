/* ThumbnailItem.jsx */

import clsx from "clsx";

export default function ThumbnailItem({ image, isActive, onSelect }) {
  return (
    <button
      className={clsx(
        "thumbnail-item",
        { "thumbnail-item--active": isActive }
      )}
      onClick={() => onSelect(image)}
    >
      <img src={image.src} alt={image.alt} className="thumbnail-item__image" />
    </button>
  );
}
