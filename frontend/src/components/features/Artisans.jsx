/* Artisans.jsx */

import ArtisanCard from "../ui/ArtisanCard";
import SkeletonCard from "../ui/ArtisanCardSkeleton";
import Alert from "../ui/Alert";
import { VARIANTS } from "../../constants/variants";

export default function Artisans({
    artisans = [],
    category,
    search,
    loading = false,
    error = null,
}) {
    // Applique les filtres de catégorie et de recherche
    const filteredArtisans = artisans
        // Filtre par catégorie si une catégorie est sélectionnée
        .filter((a) => {
            if (!category) return true;
            return a.categoryId === Number(category);
        })
        // Filtre par recherche si une query de recherche est présente
        .filter((a) => {
            if (!search) return true;
            const query = search.toLowerCase();
            return (
                a.name.toLowerCase().includes(query) ||
                a.specialty.toLowerCase().includes(query) ||
                a.city.toLowerCase().includes(query)
            );
        });

    if (loading) {
        return <SkeletonCard />;
    }

    if (error) {
        return <Alert message={error} variant={VARIANTS.ALERT.ERROR} />;
    }

    if (!filteredArtisans.length) {
        return (
            <p className="artisans-list__empty">
                Aucun artisan trouvé pour cette catégorie.
            </p>
        );
    }

    return (
        <div className="artisans-list__result-grid">
            {filteredArtisans.map((a) => (
                <ArtisanCard
                    key={a.id}
                    variant={VARIANTS.CARD.VERTICAL}
                    {...a}
                />
            ))}
        </div>
    );
}