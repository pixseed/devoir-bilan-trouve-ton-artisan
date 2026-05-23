/**
 * ================================================================================================
 * MENU WITH STATES
 * ================================================================================================
 * Rôle :
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → success (items normaux)
 * ================================================================================================
 */

import Menu from "../../ui/navigation/Menu";

export default function MenuWithStates({
  data = [],
  loading,
  error,
  mapItem,
  skeletonCount = 4,
  onSelect,
}) {
  const items = loading
    ? Array.from({ length: skeletonCount }).map((_, i) => ({
        value: `skeleton-${i}`,
        isSkeleton: true,
      }))
    : data.map(mapItem);

  return (
    <Menu items={items} loading={loading} error={error} onSelect={onSelect} />
  );
}
