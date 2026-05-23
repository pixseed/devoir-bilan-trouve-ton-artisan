/**
 * ================================================================================================
 * ARTISAN CARD SKELETON
 * ================================================================================================
 * Rôle :
 * - Afficher l'état de chargement d'une carte artisan.
 * ================================================================================================
 */

import clsx from "clsx";
import { VARIANTS } from "../../../constants/variants";
import Divider from "../display/Divider";

export default function ArtisanCardSkeleton({
  variant = VARIANTS.CARD.VERTICAL,
}) {
  return (
    <article className={clsx("artisan-card", `artisan-card--${variant}`)} aria-hidden="true">
      <div className="artisan-card__content">
        {/* ===============================================================
          HEADER
        =================================================================== */}
        <div className="artisan-card__header">
          <div className="artisan-card__media">
            <div className="skeleton skeleton--image" />
          </div>
          <div className="artisan-card__header-meta">
            <div className="skeleton skeleton--title skeleton--w-60" />
            <div className="skeleton skeleton--rating skeleton--w-40" />
          </div>
        </div>

        <Divider />

        {/* ===============================================================
          BODY
        =================================================================== */}
        <div className="artisan-card__body">
          <div className="artisan-card__body-meta">
            <div className="skeleton skeleton--text skeleton--w-80" />
            <div className="skeleton skeleton--text skeleton--w-50" />
          </div>
          <div className="skeleton skeleton--button" />
        </div>
      </div>
    </article>
  );
}
