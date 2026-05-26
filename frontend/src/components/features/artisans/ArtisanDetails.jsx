/**
 * ================================================================================================
 * ARTISAN DETAILS
 * ================================================================================================
 * Rôle :
 * - Afficher les informations détaillées d'un artisan.
 * - Composer les sections présentation, galerie, contact.
 * ================================================================================================
 */

import Rating from "../../ui/display/Rating";
import Button from "../../ui/actions/Button";
import MediaGallery from "./MediaGallery";
import ContactForm from "./ContactForm";
import Divider from "../../ui/display/Divider";

import { VARIANTS } from "../../../constants/variants";
import { galleryImages } from "../../../mocks/GalleryImages";

export default function ArtisanDetails({ artisan }) {
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
      {/* ===============================================================
        Header : Informations principales de l'artisans avec bouton de
        redirection (si site web existant en base) vers le site web de l'artisan
        =================================================================== */}
      <header className="section artisan-details__header">
        <div className="artisan-details__header-media">
          <img
            src={artisan.image}
            alt={`Photo de ${artisan.name}, ${artisan.specialty}`}
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
      </header>

      <div className="artisan-details__content">
        {/* ===============================================================
        Section : À PROPOS
        =================================================================== */}
        <section className="section artisan-details__about flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--primary">
            À propos
          </h3>
          <p className="artisan-details__about-text">{artisan.about}</p>
        </section>

        {/* ===============================================================
        Section : GALERIE
        =================================================================== */}
        <section className="section artisan-details__gallery flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--secondary">
            Galerie
          </h3>
          <MediaGallery images={artisanGalleryImages} />
        </section>

        {/* ===============================================================
        Section : CONTACT
        =================================================================== */}
        <section className="section artisan-details__form flow-md">
          <h3 className="heading-lg heading-lg__accent heading-lg__accent--tertiary">
            Contact
          </h3>
          <ContactForm artisanId={artisan.id} />
        </section>
      </div>
    </>
  );
}
