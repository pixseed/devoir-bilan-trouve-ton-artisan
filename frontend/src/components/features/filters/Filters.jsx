/* Filters.jsx */

import SearchBar from "../../ui/form/SearchBar";
import DropdownWithStates from "./DropdownWithStates";
import FilterGroupWithStates from "./FilterGroupWithStates";
import { useBreakpoint } from "../../../hooks/ui/useBreakpoint";
import Alert from "../../ui/feedback/Alert";
import { VARIANTS } from "../../../constants/variants";

export default function Filters({
  searchQuery,
  onSearchChange,
  categories,
  catLoading,
  catError,
  selectedOption,
  selectedCategory,
  onCategoryChange,
  mapCategoryItem,
}) {
  const { isLG } = useBreakpoint();

  return (
    <>
      <div className="filters__controls">
        {/* Barre de recherche */}
        <SearchBar value={searchQuery} onChange={onSearchChange} />

        {/* Dropdown avec gestion loading/error */}
        {!isLG && (
          <DropdownWithStates
            label={selectedOption?.name || "Catégories"}
            data={categories || []}
            loading={catLoading}
            error={catError}
            mapItem={mapCategoryItem}
            onChange={onCategoryChange}
            value={Number(selectedCategory)}
          />
        )}

        {isLG && (
          <FilterGroupWithStates
            title="Catégories"
            data={categories || []}
            loading={catLoading}
            error={catError}
            mapItem={mapCategoryItem}
            onSelect={onCategoryChange}
            value={Number(selectedCategory)}
          />
        )}
      </div>

      {catError && !isLG && (
        <Alert message={catError} variant={VARIANTS.ALERT.ERROR} />
      )}
    </>
  );
}
