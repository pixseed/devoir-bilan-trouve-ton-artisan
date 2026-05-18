/**
 * ================================================================================================
 * FEATURE : MenuWithStates
 * ================================================================================================
 * Rôle :
 * - Wrapper du composant Menu
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → success (items normaux)
 *
 * Ojectif :
 * - Centraliser la logique loading/error pour le menu
 * - Éviter d'intégrer de la logique au composant natif (Menu.jsx)
 * ================================================================================================
 */

import Menu from "../ui/Menu";

export default function MenuWithStates({
  data = [], // Données brutes
  loading,
  error,
  mapItem, // Fonction de transformation data → items
  SkeletonCount = 4,
  onSelect,
}) {
  /**
   * Construction des options
   * - loading → skeleton
   * - success → mapping des données
   */
  const items = loading
    ? Array.from({ length: SkeletonCount }).map((_, i) => ({
        value: `skeleton-${i}`,
        isSkeleton: true, // Utilisé dans NavItem
      }))
    : data.map(mapItem);

  return (
    <>
      <Menu
        items={items}
        loading={loading}
        error={error}
        onSelect={onSelect}
      />
    </>
  );
}
