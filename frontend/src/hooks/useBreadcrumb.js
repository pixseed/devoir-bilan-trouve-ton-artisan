/* useBreadcrumb.js */

import { useSearchParams, useLocation } from "react-router-dom";

export function useBreadcrumb(categories = []) {
    const [searchParams] = useSearchParams();
    const location = useLocation();

    const selectedCategory = searchParams.get("category");
    const searchQuery = searchParams.get("search");

    // Trouver la catégorie sélectionnée
    const selectedOption = categories.find(
        (c) => c.id?.toString() === selectedCategory
    );

    const items = [{ label: "Accueil", path: "/" }];

    // Cas page ArtisansList
    if (location.pathname.startsWith("/artisans")) {
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

    return items;
}