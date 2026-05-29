/**
 * ================================================================================================
 * PAGE : LISTE DES ARTISANS
 * ================================================================================================
 * Rôle :
 * - Afficher la liste des artisans
 * - Gérer les filtres (catégories + recherche)
 * - Synchroniser l'état avec l'URL (searchParams)
 * - Gérer le responsive (variant des cards)
 * ================================================================================================
 */

import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useArtisans } from "../hooks/data/useArtisans";
import { useCategories } from "../hooks/data/useCategories";
import { useBreakpoint } from "../hooks/ui/useBreakpoint";
import { useBreadcrumb } from "../hooks/features/useBreadcrumb";

import { buildImageSrcSet } from "../utils/buildImageSrcSet";
import { ARTISAN_CARD_IMAGE_SIZES } from "../constants/images";
import { VARIANTS } from "../constants/variants";

import Breadcrumb from "../components/ui/navigation/Breadcrumb";
import ArtisansWithStates from "../components/features/artisans/ArtisansListWithStates";
import Filters from "../components/features/filters/Filters";

export default function ArtisansList() {
  // ===========================================================================================
  // URL STATE
  // ===========================================================================================

  // Permet de lire et modifier les paramètres dans l'URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Récupération de la catégorie sélectionnée depuis l'URL
  const selectedCategory = searchParams.get("category");

  // Met à jour la catégorie dans l'URL
  const handleCategoryChange = (option) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (option?.value) {
        params.set("category", option.value);
      } else {
        params.delete("category");
      }

      return params;
    });
  };

  // Récupère le texte de recherche depuis l'URL
  const searchQuery = searchParams.get("search") || "";

  // State local de saisie
  const [searchInput, setSearchInput] = useState(searchQuery);

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  // Sychronisation différée de la recherche vers l'URL (debounce 400ms après arrêt de saisie)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (searchInput.trim()) {
          params.set("search", searchInput.trim());
        } else {
          params.delete("search");
        }

        return params;
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchInput, setSearchParams]);

  // Déclenche une recherche immédiate (Enter / button)
  function handleSearchSubmit(value) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (value.trim()) {
        params.set("search", value.trim());
      } else {
        params.delete("search");
      }

      return params;
    });
  }

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

  const mapCategoryItem = (c) => ({
    label: c.name,
    value: c.id,
  });

  // Ajout d'une option de reset pour supprimer le filtre catégorie
  const categoriesWithReset = [
    {
      id: null,
      name: "Toutes les catégories",
    },
    ...categories,
  ];

  // ===========================================================================================
  // DROPDOWN - Transformation des données
  // ===========================================================================================

  // Trouve la catégorie sélectionnée (permet d'afficher son label dans le trigger)
  const selectedOption = categoriesWithReset.find(
    (c) => c.id?.toString() === selectedCategory,
  );

  // ===========================================================================================
  // BREADCRUMB
  // ===========================================================================================
  const items = useBreadcrumb(categories || []);

  // ===========================================================================================
  // RESPONSIVE - Variant des cards
  // ===========================================================================================
  const { isSM, isMD } = useBreakpoint();
  const variantCard =
    !isSM || (isMD)
      ? VARIANTS.CARD.VERTICAL
      : VARIANTS.CARD.HORIZONTAL;

  // ===========================================================================================
  // RENDER
  // ===========================================================================================
  return (
    <>
      <Helmet>
        <title>
          {selectedOption?.name
            ? `Liste des artisans : ${selectedOption.name} | Trouve ton artisan`
            : "Liste des artisans | Trouve ton artisan"}
        </title>
        <meta
          name="description"
          content={
            selectedOption?.name
              ? `Consultez les artisans spécialisés en ${selectedOption.name} en Auvergne-Rhône-Alpes et trouvez rapidement le professionnel adapté à vos besoins.`
              : "Consultez la liste des artisans disponibles en Auvergne-Rhône-Alpes et trouvez rapidement le professionnel adapté à vos besoins."
          }
        />
        <link rel="canonical" href="https://mon-domaine.fr/artisans" />

        {/* 
        Pré-chargement de la première image de la liste des artisans.
        Cette image est visible dès le chargement de la page et peut devenir
        l'élément LCP détecté par Lighthouse
        */}
        {artisans?.[0] && (
          <link
            rel="preload"
            as="image"
            imageSrcSet={buildImageSrcSet(artisans[0])}
            imageSizes={ARTISAN_CARD_IMAGE_SIZES}
            fetchPriority="high"
          />
        )}
      </Helmet>
      
      <div className="artisans-list">
        <div className="container">
          <h1 className="visually-hidden">Liste des artisans</h1>
          {/* ===============================================================
          BREADCRUMB
        =================================================================== */}
          <Breadcrumb items={items} />

          {/* ===============================================================
          PAGE LAYOUT
        =================================================================== */}
          <div className="artisans-list__grid">
            {/* ===============================================================
            CONTROLS
          =================================================================== */}
            <aside className="section section--with-bg artisans-list__controls">
              <Filters
                searchInput={searchInput}
                onSearchChange={setSearchInput}
                onSearchSubmit={handleSearchSubmit}
                categories={categoriesWithReset}
                catLoading={catLoading}
                catError={catError}
                selectedOption={selectedOption}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                mapCategoryItem={mapCategoryItem}
              />
            </aside>

            {/* ===============================================================
            RESULT
          =================================================================== */}
            <section className="section layout-col--end flow-md artisans-list__results">
              <h2 className="heading-lg heading-lg__accent heading-lg__accent--primary">
                {selectedOption?.name || "Tous les artisans"}
              </h2>
              <ArtisansWithStates
                data={artisans}
                loading={loading}
                error={error}
                variant={variantCard}
                className="artisans-list__result-grid"
                priority
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
