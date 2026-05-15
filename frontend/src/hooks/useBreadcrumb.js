/* useBreadcrumb.js */

import { useSearchParams, useLocation } from "react-router-dom";

export function useBreadcrumb(categories = [], artisan = null) {
    const [searchParams] = useSearchParams();
    const location = useLocation();

    const isArtisanList = location.pathname === "/artisans";
    const isArtisanDetails = location.pathname.startsWith("/artisans/");
    const isUnderConstruction = location.pathname === "/under-construction";
    const isNotFound = location.pathname === "*";

    const selectedCategory = searchParams.get("category");
    const searchQuery = searchParams.get("search");

    // Trouver la catégorie sélectionnée
    const selectedOption = categories.find(
        (c) => c.id?.toString() === selectedCategory
    );

    const items = [{ label: "Accueil", path: "/" }];

    // ================================================================================================
    // PAGE ARTISANS LIST
    // ================================================================================================

    if (isArtisanList) {
        items.push({
            label: "Artisans",
            path: "/artisans"
        });
        
        if (selectedOption) {
            items.push({
                label: selectedOption.name,
                path: `/artisans?category=${selectedOption.id}`
            });
        }
        
        if (searchQuery) {
            items.push({
                label: `Recherche : ${searchQuery}`,
            });
        }
    }

    // ================================================================================================
    // PAGE ARTISAN DETAILS
    // ================================================================================================
    
    if (isArtisanDetails && artisan) {
        items.push({
            label: "Artisans",
            path: "/artisans",
        });

        const artisanCategory = categories.find(
            (c) => c.id?.toString() === artisan.categoryId?.toString()
        );

        if (artisanCategory) {
            items.push({
                label: artisanCategory.name,
                path: `/artisans?category=${artisanCategory.id}`,
            });
        }

        items.push({
            label: artisan.name,
        })
    }

    // ================================================================================================
    // PAGE STATUS
    // ================================================================================================

    if (isUnderConstruction) {
        items.push({
            label: "En cours de construction",
        });
    }

    return items;
}