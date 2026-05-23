/**
 * ================================================================================================
 * RATING
 * ================================================================================================
 * Rôle :
 * - Afficher une note visuelle avec étoiles et score numérique.
 * ================================================================================================
 */

import StarIcon from "../../../assets/icons/Fill_Star.svg?react";

export default function Rating({ value = 0, max = 5 }) {
  // Définir le taux de remplissage des étoiles
  const numericValue = Number(value) || 0;
  const safeValue = Math.min(Math.max(numericValue, 0), max);
  const percentage = max > 0 ? (safeValue / max) * 100 : 0;

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
