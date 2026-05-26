/**
 * ================================================================================================
 * ARTISAN CARD
 * ================================================================================================
 * Rôle :
 * - Afficher un résumé d'un artisan.
 * - Présenter ses informations principales et un accès à sa fiche détail.
 * ================================================================================================
 */

import { Link } from "react-router-dom";

import Rating from "./Rating";
import Divider from "./Divider";
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
    <article>
      <Link
        to={`/artisans/${id}`}
        className={clsx("artisan-card", `artisan-card--${variant}`)}
      >
        <div className="artisan-card__content">
          {/* ===============================================================
          HEADER
        =================================================================== */}
          <div className="artisan-card__header">
            <div className="artisan-card__media">
              <img
                src={image}
                alt={`Photo de ${name}`}
                className="artisan-card__image"
              />
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

            <span className="artisan-card__button" aria-hidden="true">
              <span className="button button--secondary button--md">
                <span className="button__label">À propos</span>
                <ArrowIcon className="button__icon" aria-hidden="true" />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
