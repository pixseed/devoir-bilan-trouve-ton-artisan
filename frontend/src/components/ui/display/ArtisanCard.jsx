/**
 * ================================================================================================
 * ARTISAN CARD
 * ================================================================================================
 * Rôle :
 * - Afficher un résumé d'un artisan.
 * - Présenter ses informations principales et un accès à sa fiche détail.
 * ================================================================================================
 */

import Rating from "./Rating";
import Divider from "./Divider";
import Button from "../actions/Button";
import ArrowIcon from "../../../assets/icons/Right_Arrow.svg?react";

import clsx from "clsx";

import { VARIANTS } from "../../../constants/variants";

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
    <article className={clsx("artisan-card", `artisan-card--${variant}`)}>
      <div className="artisan-card__content">
        {/* ===============================================================
          HEADER
        =================================================================== */}
        <div className="artisan-card__header">
          <div className="artisan-card__media">
            <img src={image} alt={`Photo de ${name}`} className="artisan-card__image" />
          </div>
          <div className="artisan-card__header-meta">
            <h3 className="heading-md artisan-card__header-meta-name">
              {name}
            </h3>
            <Rating value={rating} />
          </div>
        </div>

        <Divider />

        {/* ===============================================================
          BODY
        =================================================================== */}
        <div className="artisan-card__body">
          <div className="artisan-card__body-meta">
            <p className="artisan-card__body-meta-specialty">{specialty}</p>
            <p className="artisan-card__body-meta-localisation">{city}</p>
          </div>
          <Button
            to={`/artisans/${id}`}
            variant={VARIANTS.BUTTON.SECONDARY}
            size={VARIANTS.SIZE.MD}
            icon={ArrowIcon}
            className="artisan-card__button"
          >
            À propos
          </Button>
        </div>
      </div>
    </article>
  );
}
