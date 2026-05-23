/**
 * ================================================================================================
 * FILTER GROUP WITH STATES
 * ================================================================================================
 * Rôle :
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → success (items normaux)
 * ================================================================================================
 */

import FilterGroup from "../../ui/filters/FilterGroup";

export default function FilterGroupWithStates({
  data = [],
  loading,
  error,
  mapItem,
  title,
  onSelect,
  value,
  skeletonCount = 4,
}) {
  const items = loading
    ? Array.from({ length: skeletonCount }).map((_, i) => ({
        value: `skeleton-${i}`,
        isSkeleton: true,
      }))
    : data.map(mapItem);

  const isDisabled = loading || Boolean(error);

  return (
    <FilterGroup
      title={title}
      items={items}
      onSelect={onSelect}
      selectedValue={value}
      error={error}
      disabled={isDisabled}
    />
  );
}
