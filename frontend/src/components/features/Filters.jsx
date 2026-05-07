/* Filters.jsx */

import SearchBar from "../ui/SearchBar";
import DropdownWithState from "./DropdownWithState";
import FilterGroupWithState from "./FilterGroupWithState";
import { useBreakpoint } from "../../hooks/useBreakpoint";

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

  const {isLG} = useBreakpoint();

  return (
    <>
      {/* Barre de recherche */}
      <SearchBar value={searchQuery} onChange={onSearchChange} />

      {/* Dropdown avec gestion loading/error */}
      {!isLG && (
        <DropdownWithState
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
        <FilterGroupWithState
          title="Catégories"
          data={categories || []}
          loading={catLoading}
          error={catError}
          mapItem={mapCategoryItem}
          onSelect={onCategoryChange}
          value={Number(selectedCategory)}
        />
        )}
    </>
  );
}
