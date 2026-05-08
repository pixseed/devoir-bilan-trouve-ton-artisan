/* ThumbnailMain.jsx */

export default function ThumbnailMain({ image }) {
  if (!image) return null;

  return (
    <div className="thumbnail-main">
      <img src={image.src} alt={image.alt} className="thumbnail-main__image" />
    </div>
  );
}
