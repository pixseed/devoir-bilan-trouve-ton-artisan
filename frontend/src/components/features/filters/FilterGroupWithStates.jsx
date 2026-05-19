/**
 * ================================================================================================
 * FEATURE : FilterGroupWithStates
 * ================================================================================================
 * Rôle :
 * - Wrapper du composant FilterGroup
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → success (items normaux)
 *
 * Ojectif :
 * - Centraliser la logique loading/error pour tous les FilterGroup
 * - Éviter d'intégrer de la logique au composant natif (FilterGroup.jsx)
 * ================================================================================================
 */

import FilterGroup from "../../ui/filters/FilterGroup";

export default function FilterGroupWithStates({
  data = [], // Données brutes
  loading,
  error,
  mapItem, // Fonction de transformation data → option
  title,
  onSelect,
  value,
  SkeletonCount = 4,
}) {
  /**
   * Construction des options
   * - loading → skeleton
   * - success → mapping des données
   */
  const items = loading
    ? Array.from({ length: SkeletonCount }).map((_, i) => ({
        value: `skeleton-${i}`,
        isSkeleton: true, // Utilisé dans FilterItem
      }))
    : data.map(mapItem);

  const isDisabled = Boolean(error);

  return (
    <>
      <FilterGroup
        title={title}
        items={items}
        onSelect={onSelect}
        selectedValue={value}
        error={error}
        disabled={isDisabled}
      />
    </>
  );
}
