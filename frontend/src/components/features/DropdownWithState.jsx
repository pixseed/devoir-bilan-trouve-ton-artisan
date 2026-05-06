/**
 * ================================================================================================
 * FEATURE : DropdownWithState
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
import Alert from "../ui/Alert";
import { VARIANTS } from "../../constants/variants";

export default function DropdownWithState({
  data = [], // Données brutes
  loading,
  error,
  mapOption, // Fonction de transformation data → option
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
    : data.map(mapOption);

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

      {error && <Alert message={error} variant={VARIANTS.ALERT.ERROR} />}
    </>
  );
}
