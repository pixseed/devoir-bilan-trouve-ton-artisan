/**
 * ================================================================================================
 * ARTISANS LIST
 * ================================================================================================
 * Rôle :
 * - Afficher la liste des artisans sous forme de grille de cartes.
 * ================================================================================================
 */

import ArtisanCard from "../../ui/display/ArtisanCard";

export default function ArtisansList({
  artisans,
  variant,
  className,
  priority = false,
}) {
  return (
    <div className={className}>
      {artisans.map((a, index) => (
        <ArtisanCard
          key={a.id}
          variant={variant}
          priority={priority && index === 0}
          {...a}
        />
      ))}
    </div>
  );
}
