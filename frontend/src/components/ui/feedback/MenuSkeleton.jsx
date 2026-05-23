/**
 * ================================================================================================
 * MENU SKELETON
 * ================================================================================================
 * Rôle :
 * - Afficher l'état de chargement du menu de navigation.
 * ================================================================================================
 */

export default function MenuSkeleton() {
  return (
    <ul className="menu__list" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i} className="skeleton skeleton--text-lg" />
      ))}
    </ul>
  );
}
