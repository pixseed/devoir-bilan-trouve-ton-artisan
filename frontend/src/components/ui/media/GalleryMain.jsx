/* GalleryMain.jsx */

export default function GalleryMain({ image, onClick }) {
  if (!image) return null;

  return (
    <div className="gallery-main">
      <img
        src={image.src}
        alt={image.alt}
        className="gallery-main__image"
        onClick={onClick}
      />
    </div>
  );
}
