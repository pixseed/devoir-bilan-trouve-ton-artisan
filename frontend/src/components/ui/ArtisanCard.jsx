/**
 * ================================================================================================
 * ArtisanCard.jsx
 * ================================================================================================
 */

import Button from "./Button";
import Rating from "./Rating";
import ArrowIcon from "../../assets/icons/Right_Arrow.svg?react";
import clsx from "clsx";
import { VARIANTS } from "../../constants/variants";

export default function ArtisanCard({
  id,
  name,
  rating,
  specialty,
  city,
  image,
  variant = VARIANTS.CARD.HORIZONTAL,
}) {
  return (
    <div className={clsx("artisan-card", `artisan-card--${variant}`)}>
      <div className="artisan-card__content">
        {/* ===============================================================
        En-tête de card
        =================================================================== */}
        <div className="artisan-card__header">
          <div className="artisan-card__media">
            <img src={image} alt={name} className="artisan-card__image" />
          </div>
          <div className="artisan-card__header-meta">
            <h3 className="heading-md artisan-meta__name">{name}</h3>
            <Rating value={rating} />
          </div>
        </div>

        <div className="artisan-card__divider"></div>

        {/* ===============================================================
        Corps de card avec bouton de redirection vers la page de l'artisan
        =================================================================== */}
        <div className="artisan-card__body">
          <div className="artisan-card__body-meta">
            <p className="artisan-meta__specialty">{specialty}</p>
            <p className="artisan-meta__localisation">{city}</p>
          </div>
          <Button
            to={`/artisan/${id}`}
            variant={VARIANTS.BUTTON.SECONDARY}
            size={VARIANTS.SIZE.MD}
            icon={ArrowIcon}
            className="artisan-card__button"
          >
            À propos
          </Button>
        </div>
      </div>
    </div>
  );
}
