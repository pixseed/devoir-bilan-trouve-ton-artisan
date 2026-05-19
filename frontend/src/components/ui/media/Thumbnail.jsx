/* Thumbnail.jsx */

import clsx from "clsx";

export default function Thumbnail({ image, isActive, onSelect }) {
  return (
    <button
      className={clsx(
        "thumbnail",
        { "thumbnail--active": isActive }
      )}
      onClick={() => onSelect(image)}
    >
      <img src={image.src} alt={image.alt} className="thumbnail__image" />
    </button>
  );
}
