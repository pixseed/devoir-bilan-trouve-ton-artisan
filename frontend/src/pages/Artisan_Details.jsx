import Breadcrumb from "../components/ui/Breadcrumb";
import { useCategories } from "../hooks/useCategories";
import { useBreadcrumb } from "../hooks/useBreadcrumb";
import Rating from "../components/ui/Rating";
import Button from "../components/ui/Button";
import { VARIANTS } from "../constants/variants";
import ThumbnailGallery from "../components/ui/ThumbnailGallery";
import ContactForm from "../components/features/ContactForm";

function Artisan_Details() {
  const name = "John Smith";
  const rating = 4;
  const specialty = "Boucher";
  const city = "Erdeven";

  const images = [
    {
      id: 1,
      src: "http://localhost:3000/images/amitee-lecuyer-main-picture.jpg",
      alt: "Image numéro 1",
    },
    {
      id: 2,
      src: "http://localhost:3000/images/au-pain-chaud-main-picture.jpg",
      alt: "Image numéro 2",
    },
    {
      id: 3,
      src: "http://localhost:3000/images/boucherie-dumont-main-picture.jpg",
      alt: "Image numéro 3",
    },
    {
      id: 4,
      src: "http://localhost:3000/images/boutot-et-fils-main-picture.jpg",
      alt: "Image numéro 4",
    },
  ];

  // ===========================================================================================
  // DATA FETCHING
  // ===========================================================================================

  // Récupération des catégories (pour le dropdown)
  const { categories, loading: catLoading, error: catError } = useCategories();

  // ===========================================================================================
  // BREADCRUMB
  // ===========================================================================================

  const items = useBreadcrumb(categories || []);

  // ===========================================================================================
  // RENDER
  // ===========================================================================================

  return (
    <div className="artisan-details">
      <div className="container">
        <h1 className="visually-hidden">{`Détails de l'artisan ${name}`}</h1>
        <Breadcrumb items={items} />
        <div className="section section--with-bg artisan-details__header">
          <div className="artisan-details__header-content">
            <div className="artisan-details__header-media">
              <img
                src="http://localhost:3000/images/boutot-et-fils-main-picture.jpg"
                alt=""
                className="artisan-details__header-image"
              />
            </div>
            <div className="artisan-detail__header-meta">
              <h2 className="heading-xl artisan-details__header-meta-name">
                {name}
              </h2>
              <Rating value={rating} />
            </div>
            <div className="artisan-details__header-submeta">
              <p className="artisan-details__header-submeta-specialty">
                {specialty}
              </p>
              <p className="artisan-details__header-submeta-localisation">
                {city}
              </p>
            </div>
            <Button
              variant={VARIANTS.BUTTON.PRIMARY}
              size={VARIANTS.SIZE.MD}
              className="artisan-details__header-button"
            >
              Visiter le site
            </Button>
          </div>
        </div>

        <div className="section artisan-details__about flow-md">
          <h3 className="heading-xl heading-xl__accent heading-xl__accent--primary">
            À propos
          </h3>
          <p className="artisan-details__about-text">Lorem Ipsum</p>
        </div>

        <div className="section artisan-details__gallery flow-md">
          <h3 className="heading-xl heading-xl__accent heading-xl__accent--secondary">
            Galerie
          </h3>
          <ThumbnailGallery images={images} />
        </div>

        <div className="section artisan-details__form flow-md">
          <h3 className="heading-xl heading-xl__accent heading-xl__accent--tertiary">
            Contact
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Artisan_Details;
