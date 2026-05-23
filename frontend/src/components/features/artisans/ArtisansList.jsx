/**
 * ================================================================================================
 * ARTISANS LIST
 * ================================================================================================
 * Rôle :
 * - Afficher la liste des artisans sous forme de grille de cartes.
 * ================================================================================================
 */

import ArtisanCard from "../../ui/display/ArtisanCard";

export default function ArtisansList({ artisans, variant, className }) {
  return (
    <div className={className}>
      {artisans.map((a) => (
        <ArtisanCard key={a.id} variant={variant} {...a} />
      ))}
    </div>
  );
}
