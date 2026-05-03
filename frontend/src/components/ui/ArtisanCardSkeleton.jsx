/* SkeletonCard.jsx */

import clsx from "clsx";
import { VARIANTS } from "../../constants/variants";

export default function SkeletonCard({ variant = VARIANTS.CARD.HORIZONTAL }) {
  return (
    <div className="home__top-artisans-grid">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className={clsx("artisan-card", `artisan-card--${variant}`)}>
          <div className="artisan-card__content">
            {/* ===============================================================
            En-tête de card
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

            <div className="artisan-card__divider"></div>

            {/* ===============================================================
            Corps de card avec bouton de redirection vers la page de l'artisan
            =================================================================== */}
            <div className="artisan-card__body">
              <div className="artisan-card__body-meta">
                <div className="skeleton skeleton--text skeleton--w-80" />
                <div className="skeleton skeleton--text skeleton--w-50" />
              </div>
              <div className="skeleton skeleton--button" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
