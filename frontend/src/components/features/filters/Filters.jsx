/**
 * ================================================================================================
 * FILTERS
 * ================================================================================================
 * Rôle :
 * - Afficher les contrôles de recherche et filtrage des artisans.
 * - Adapter l'interface selon le breakpoint.
 * ================================================================================================
 */

import { useBreakpoint } from "../../../hooks/ui/useBreakpoint";
import { VARIANTS } from "../../../constants/variants";

import SearchBar from "../../ui/form/SearchBar";
import DropdownWithStates from "./DropdownWithStates";
import FilterGroupWithStates from "./FilterGroupWithStates";
import Alert from "../../ui/feedback/Alert";

export default function Filters({
  searchInput,
  onSearchChange,
  onSearchSubmit,
  categories,
  catLoading,
  catError,
  selectedOption,
  selectedCategory,
  onCategoryChange,
  mapCategoryItem,
}) {
  const { isLG } = useBreakpoint();
  const sharedCategoryProps = {
    data: categories || [],
    loading: catLoading,
    error: catError,
    mapItem: mapCategoryItem,
    value: selectedCategory ? Number(selectedCategory) : null,
  };

  return (
    <>
      <div className="filters__controls">
        <SearchBar value={searchInput} onChange={onSearchChange} onSearch={onSearchSubmit} />

        {!isLG && (
          <DropdownWithStates
            {...sharedCategoryProps}
            label={selectedOption?.name || "Catégories"}
            onChange={onCategoryChange}
          />
        )}

        {isLG && (
          <FilterGroupWithStates
            {...sharedCategoryProps}
            title="Catégories"
            onSelect={onCategoryChange}
          />
        )}
      </div>

      {catError && !isLG && (
        <Alert message={catError} variant={VARIANTS.ALERT.ERROR} />
      )}
    </>
  );
}
