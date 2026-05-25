/**
 * ================================================================================================
 * PAGE : DÉTAIL ARTISAN
 * ================================================================================================
 * Rôle :
 * - Afficher les détails d'un artisan.
 * - Gérer le breadcrumb dynamique.
 * - Gérer les états loading / error / success.
 * ================================================================================================
 */

import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { useArtisan } from "../hooks/data/useArtisan";
import { useCategories } from "../hooks/data/useCategories";
import { useBreadcrumb } from "../hooks/features/useBreadcrumb";

import Breadcrumb from "../components/ui/navigation/Breadcrumb";
import ArtisanWithStates from "../components/features/artisans/ArtisanDetailsWithStates";

export default function ArtisanDetails() {
  // ===========================================================================================
  // PARAMS
  // ===========================================================================================
  const { id } = useParams();

  // ===========================================================================================
  // DATA FETCHING
  // ===========================================================================================

  // Récupération des catégories (pour le breadcrumb)
  const { categories } = useCategories();

  // Récupération de l'artisan
  const { artisan, loading, error } = useArtisan(id);

  // ===========================================================================================
  // BREADCRUMB
  // ===========================================================================================
  const items = useBreadcrumb(categories, artisan);

  console.log(artisan);
  // ===========================================================================================
  // RENDER
  // ===========================================================================================
  return (
    <>
      <Helmet>
        <title>
          {artisan
            ? `${artisan.name} - ${artisan.specialty} à ${artisan.city} | Trouve ton artisan`
            : "Détails artisan | Trouve ton artisan"}
        </title>
        <meta
          name="description"
          content={
            artisan
              ? `Découvrez ${artisan.name}, ${artisan.specialty} basé à ${artisan.city} et contactez ce professionnel.`
              : "Consultez le détail d'un artisan et contacter le professionnel."
          }
        />
      </Helmet>
      <div className="artisan-details">
        <div className="container">
          <h1 className="visually-hidden">
            {artisan
              ? `Détails de l'artisan ${artisan.name}`
              : "Détails de l'artisan"}
          </h1>
          <Breadcrumb items={items} />
          <ArtisanWithStates data={artisan} loading={loading} error={error} />
        </div>
      </div>
    </>
  );
}
