/* ArtisanDetailsSkeleton.jsx */

import Rating from "./Rating";
import Button from "./Button";
import MediaGallerySkeleton from "./MediaGallerySkeleton";
import ContactForm from "../features/ContactForm";
import Divider from "./Divider";
import SkeletonParagraph from "./SkeletonParagraph";
import FormSkeleton from "./FormSkeleton";

import { VARIANTS } from "../../constants/variants";
import { galleryImages } from "../../mocks/GalleryImages";

function ArtisanDetailsSkeleton({ artisan }) {
  return (
    <>
      <div className="section artisan-details__header">
        <div className="artisan-details__header-media">
          <div
            className="skeleton skeleton--image"
          />
        </div>
        <div className="artisan-details__header-meta">
          <div className="artisan-details__header-main-meta">
            <h2 className="skeleton skeleton--title-lg skeleton--w-60" />
            <div className="skeleton skeleton--text-lg skeleton--w-30" />
          </div>
          <Divider size="medium" />
          <div className="artisan-details__header-submeta">
            <div className="skeleton skeleton--text skeleton--w-20"/>
            <div className="skeleton skeleton--text skeleton--w-30"/>
          </div>
        </div>
        <div className="skeleton skeleton--button" />
      </div>

      <div className="artisan-details__content">
        <div className="section artisan-details__about flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--primary">
            À propos
          </h3>
          <SkeletonParagraph />
        </div>

        <div className="section artisan-details__gallery flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--secondary">
            Galerie
          </h3>
          <MediaGallerySkeleton />
          
        </div>

        <div className="section artisan-details__form flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--tertiary">
            Contact
          </h3>
          <FormSkeleton />
        </div>
      </div>
    </>
  );
}

export default ArtisanDetailsSkeleton;