/* Artisan.jsx */

import Rating from "../ui/Rating";
import Button from "../ui/Button";
import MediaGallery from "../ui/MediaGallery";
import ContactForm from "./ContactForm";
import Divider from "../ui/Divider";

import { VARIANTS } from "../../constants/variants";
import { galleryImages } from "../../mocks/GalleryImages";

function Artisan({ artisan }) {
  // ===========================================================================================
  // GALLERY
  // ===========================================================================================

  const artisanGalleryImages = [
    {
      id: 1,
      src: artisan.image,
      alt: artisan.name,
    },
    ...galleryImages,
  ];

  // ===========================================================================================
  // RENDER
  // ===========================================================================================

  return (
    <>
      <div className="section artisan-details__header">
        <div className="artisan-details__header-media">
          <img
            src={artisan.image}
            alt={artisan.name}
            className="artisan-details__header-image"
          />
        </div>
        <div className="artisan-details__header-meta">
          <div className="artisan-details__header-main-meta">
            <h2 className="heading-xl artisan-details__header-meta-name">
              {artisan.name}
            </h2>
            <Rating value={artisan.rating} />
          </div>
          <Divider size="medium" />
          <div className="artisan-details__header-submeta">
            <p className="artisan-details__header-submeta-specialty">
              {artisan.specialty}
            </p>
            <p className="artisan-details__header-submeta-localisation">
              {artisan.city}
            </p>
          </div>
        </div>
        {artisan.website && (
          <Button
            href={artisan.website}
            variant={VARIANTS.BUTTON.PRIMARY}
            size={VARIANTS.SIZE.MD}
            className="artisan-details__header-button"
          >
            Visiter le site
          </Button>
        )}
      </div>

      <div className="artisan-details__content">
        <div className="section artisan-details__about flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--primary">
            À propos
          </h3>
          <p className="artisan-details__about-text">{artisan.about}</p>
        </div>

        <div className="section artisan-details__gallery flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--secondary">
            Galerie
          </h3>
          <MediaGallery images={artisanGalleryImages} />
        </div>

        <div className="section artisan-details__form flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--tertiary">
            Contact
          </h3>
          <ContactForm artisanId={artisan.id}/>
        </div>
      </div>
    </>
  );
}

export default Artisan;
