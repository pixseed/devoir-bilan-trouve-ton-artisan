/**
 * ================================================================================================
 * DROPDOWN WITH STATES
 * ================================================================================================
 * Rôle :
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (désactivation)
 *      → success (options normales)
 * ================================================================================================
 */

import Dropdown from "../../ui/navigation/Dropdown";

export default function DropdownWithStates({
  data = [],
  loading,
  error,
  mapItem,
  label,
  onChange,
  value,
  skeletonCount = 4,
}) {
  const options = loading
    ? Array.from({ length: skeletonCount }).map((_, i) => ({
        value: `skeleton-${i}`,
        isSkeleton: true,
      }))
    : data.map(mapItem);

  const isDisabled = loading || Boolean(error);

  return (
    <Dropdown
      options={options}
      label={label}
      onChange={onChange}
      value={value}
      disabled={isDisabled}
    />
  );
}
