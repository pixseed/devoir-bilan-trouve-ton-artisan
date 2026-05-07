/**
 * ================================================================================================
 * PAGE : LISTE DES ARTISANS
 * ================================================================================================
 * Rôle :
 * - Afficher la liste des artisans
 * - Gérer les filtres (catégories + recherche)
 * - Synchroniser l'état avec l'URL (searchParams)
 * - Gérer le responsive (variant des cards)
 *
 * Dépendances principales :
 * - useArtisans : récupération des artisans filtrés
 * - useCategories : récupération des catégories pour le dropdown
 * - useBreadcrumb : récupération des paths et des labels pour le breadcrumb
 * ================================================================================================
 */

import Breadcrumb from "../components/ui/Breadcrumb";
import ArtisansWithStates from "../components/features/ArtisansWithStates";
import Filters from "../components/features/Filters";
import { useSearchParams } from "react-router-dom";
import { useArtisans } from "../hooks/useArtisans";
import { useCategories } from "../hooks/useCategories";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useBreadcrumb } from "../hooks/useBreadcrumb";
import { VARIANTS } from "../constants/variants";

function Artisans_List() {
  // ===========================================================================================
  // URL STATE
  // ===========================================================================================

  // Permet de lire et modifier les paramètres dans l'URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Récupération de la catégorie sélectionnée depuis l'URL
  const selectedCategory = searchParams.get("category");

  // Met à jour la catégorie dans l'URL
  const handleCategoryChange = (option) => {
    setSearchParams({ category: option.value });
  };

  // Récupère le texte de recherche
  const searchQuery = searchParams.get("search") || "";

  // Met à jour la recherche dans l'URL
  const handleSearchChange = (value) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      return params.toString();
    });
  };

  // ===========================================================================================
  // DATA FETCHING
  // ===========================================================================================

  // Récupération des catégories (pour le dropdown)
  const { categories, loading: catLoading, error: catError } = useCategories();

  // Récupération des artisans filtrés
  const { artisans, loading, error } = useArtisans({
    search: searchQuery,
    category: selectedCategory,
  });

  // ===========================================================================================
  // CATEGORY ITEMS - Retourner la liste des catégories
  // ===========================================================================================

  const mapCategoryItem = ((c) => ({
    label: c.name,
    value: c.id,
  }));

  // ===========================================================================================
  // DROPDOWN - Transformation des données
  // ===========================================================================================

  // Trouve la catégorie sélectionnée (permet d'afficher son label dans le trigger)
  const selectedOption = categories?.find(
    (c) => c.id?.toString() === selectedCategory,
  );

  // ===========================================================================================
  // BREADCRUMB
  // ===========================================================================================

  const items = useBreadcrumb(categories || []);

  // ===========================================================================================
  // RESPONSIVE - Variant des cards
  // ===========================================================================================

  function getVariantCard({ isXS, isMD }) {
    if (isMD) return VARIANTS.CARD.VERTICAL;
    if (isXS) return VARIANTS.CARD.HORIZONTAL;
  }

  const variantCard = getVariantCard(useBreakpoint());

  // ===========================================================================================
  // RENDER
  // ===========================================================================================

  return (
    <div className="artisans-list">
      <div className="container">
        <h1 className="visually-hidden">Liste des artisans</h1>
        <Breadcrumb items={items} />

        <div className="artisans-list__grid">
          {/* ========== CONTROLS ========== */}
          <aside className="section section--with-bg artisans-list__controls">
            <Filters
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              categories={categories}
              catLoading={catLoading}
              catError={catError}
              selectedOption={selectedOption}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              mapCategoryItem={mapCategoryItem}
            />
          </aside>

          {/* ========== RESULTAT DE LA LISTE DES ARTISANS ========== */}
          <section className="section layout-col--end flow-md artisans-list__results">
            <h2 className="heading-lg heading-lg__accent heading-lg__accent--primary">
              {selectedOption?.name || "Tous les artisans"}
            </h2>
            <ArtisansWithStates
              data={artisans}
              category={selectedCategory}
              search={searchQuery}
              loading={loading}
              error={error}
              variant={variantCard}
              className="artisans-list__result-grid"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Artisans_List;
