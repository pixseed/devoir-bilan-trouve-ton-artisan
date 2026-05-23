/**
 * ================================================================================================
 * USE BREADCRUMB
 * ================================================================================================
 * Rôle :
 * - Générer dynamiquement les élements du fil d'Ariane selon la route active.
 * - Prendre en compte les catégories, recherches et détails artisan.
 * ================================================================================================
 */

import { useSearchParams, useLocation } from "react-router-dom";

export function useBreadcrumb(categories = [], artisan = null) {
  // ================================================================================================
  // ROUTE CONTEXT
  // Informations liées à la page actuellement affichée
  // ================================================================================================
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const isArtisanList = pathname === "/artisans";
  const isArtisanDetails = pathname.startsWith("/artisans/");
  const isUnderConstruction = pathname === "/under-construction";

  // ================================================================================================
  // QUERY PARAMETERS
  // Lecture des filtres présents dans l'URL :
  // Exemple : /artisans?category=2&search=plombier
  // ================================================================================================
  const selectedCategory = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  // ================================================================================================
  // LOOKUPS
  // Recherche des données utiles à partir des paramètres ou de l'artisan courant
  // ================================================================================================
  const selectedCategoryItem = categories.find(
    (c) => c.id?.toString() === selectedCategory,
  );

  const artisanCategory = categories.find(
    (category) => category.id?.toString() === artisan?.categoryId?.toString(),
  );

  // ================================================================================================
  // BASE BREADCRUMB
  // Point de départ commun à toutes les pages
  // ================================================================================================
  const items = [{ label: "Accueil", path: "/" }];

  // ================================================================================================
  // PAGE : ARTISANS LIST
  // ================================================================================================
  if (isArtisanList) {
    items.push({
      label: "Artisans",
      path: "/artisans",
    });

    if (selectedCategoryItem) {
      items.push({
        label: selectedCategoryItem.name,
        path: `/artisans?category=${selectedCategoryItem.id}`,
      });
    }

    if (searchQuery) {
      items.push({
        label: `Recherche : ${searchQuery}`,
      });
    }
  }

  // ================================================================================================
  // PAGE : ARTISAN DETAILS
  // ================================================================================================
  else if (isArtisanDetails && artisan) {
    items.push({
      label: "Artisans",
      path: "/artisans",
    });

    if (artisanCategory) {
      items.push({
        label: artisanCategory.name,
        path: `/artisans?category=${artisanCategory.id}`,
      });
    }

    items.push({
      label: artisan.name,
    });
  }

  // ================================================================================================
  // PAGE STATUS
  // ================================================================================================
  else if (isUnderConstruction) {
    items.push({
      label: "En cours de construction",
    });
  }

  // ================================================================================================
  // RETURN
  // ================================================================================================
  return items;
}
