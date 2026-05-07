/**
 * ================================================================================================
 * FEATURE : DropdownWithStates
 * ================================================================================================
 * Rôle :
 * - Wrapper du composant Dropdown
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → success (options normales)
 *
 * Ojectif :
 * - Centraliser la logique loading/error pour tous les dropdowns
 * - Éviter d'intégrer de la logique au composant natif (Dropdown.jsx)
 * ================================================================================================
 */

import Dropdown from "../ui/Dropdown";

export default function DropdownWithStates({
  data = [], // Données brutes
  loading,
  error,
  mapItem, // Fonction de transformation data → items
  label,
  onChange,
  value,
  SkeletonCount = 4,
}) {
  /**
   * Construction des options
   * - loading → skeleton
   * - success → mapping des données
   */
  const options = loading
    ? Array.from({ length: SkeletonCount }).map((_, i) => ({
        value: `skeleton-${i}`,
        isSkeleton: true, // Utilisé dans DropdownItem
      }))
    : data.map(mapItem);

  const isDisabled = Boolean(error);

  return (
    <>
      <Dropdown
        options={options}
        label={label}
        onChange={!loading && !error ? onChange : undefined}
        value={value}
        disabled={isDisabled}
      />
    </>
  );
}
