/* Rating.jsx */

import StarIcon from "../../../assets/icons/Fill_Star.svg?react";

export default function Rating({ value = 0, max = 5 }) {
  // Définir le taux de remplissage des étoiles
  const percentage = (value / max) * 100;

  return (
    <div className="rating" aria-label={`Note : ${value} sur ${max}`}>
      <div className="rating__stars">

        {/* Étoiles vides */}
        <div className="rating__stars-bg">
          {Array.from({ length: max }).map((_, i) => (
            <StarIcon
              key={`bg-${i}`}
              className="rating__star rating__star--empty"
            />
          ))}
        </div>

        {/* Étoiles pleines (simulation du remplissage avec la constante 'percentage') */}
        <div className="rating__stars-fill" style={{ width: `${percentage}%` }}>
          {Array.from({ length: max }).map((_, i) => (
            <StarIcon
              key={`fill-${i}`}
              className="rating__star rating__star--fill"
            />
          ))}
        </div>
      </div>

      {/* Badges contenant la valeur de la note (1 chiffre après la virgule) */}
      <div className="rating__value-wrapper">
        <span className="rating__value">
        {value.toFixed(1)} / {max}
        </span>
      </div>
    </div>
  );
}
