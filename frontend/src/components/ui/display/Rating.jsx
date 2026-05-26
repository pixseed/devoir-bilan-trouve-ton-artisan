/**
 * ================================================================================================
 * RATING
 * ================================================================================================
 * Rôle :
 * - Afficher une note visuelle avec étoiles et score numérique.
 * ================================================================================================
 */

import StarIcon from "../../../assets/icons/Fill_Star.svg?react";

const STAR_SIZE = 32;
const STAR_GAP = 4;

export default function Rating({ value = 0, max = 5 }) {
  const numericValue = Number(value) || 0;
  const safeValue = Math.min(Math.max(numericValue, 0), max);

  const totalWidth = max * STAR_SIZE + (max - 1) * STAR_GAP;
  const fullStars = Math.floor(safeValue);
  const partialStar = safeValue - fullStars;
  const filledWidth =
    fullStars * STAR_SIZE + fullStars * STAR_GAP + partialStar * STAR_SIZE;

  const percentage = max > 0 ? (filledWidth / totalWidth) * 100 : 0;

  return (
    <div
      className="rating"
      role="img"
      aria-label={`Note : ${safeValue} sur ${max}`}
    >
      <div className="rating__stars">
        {/* ===============================================================
          Étoiles vides
        =================================================================== */}
        <div className="rating__stars-bg">
          {Array.from({ length: max }).map((_, i) => (
            <StarIcon
              key={`bg-${i}`}
              className="rating__star rating__star--empty"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* ===============================================================
          Étoiles pleines (simulation du remplissage avec la constante 'percentage')
        =================================================================== */}
        <div className="rating__stars-fill" style={{ width: `${percentage}%` }}>
          {Array.from({ length: max }).map((_, i) => (
            <StarIcon
              key={`fill-${i}`}
              className="rating__star rating__star--fill"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* ===============================================================
        Badges contenant la valeur de la note (1 chiffre après la virgule)
      =================================================================== */}
      <div className="rating__value-wrapper">
        <span className="rating__value">
          {safeValue.toFixed(1)} / {max}
        </span>
      </div>
    </div>
  );
}
