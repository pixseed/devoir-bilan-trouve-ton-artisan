import Breadcrumb from "../components/ui/Breadcrumb";
import ArtisanWithStates from "../components/features/ArtisanWithStates";

import { useCategories } from "../hooks/useCategories";
import { useBreadcrumb } from "../hooks/useBreadcrumb";
import { useArtisan } from "../hooks/useArtisan";

import { useParams } from "react-router-dom";

function Artisan_Details() {
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
  
  const items = useBreadcrumb(categories || [], artisan);

  // ===========================================================================================
  // RENDER
  // ===========================================================================================

  return (
    <div className="artisan-details">
      <div className="container">
        <h1 className="visually-hidden">{`Détails de l'artisan ${artisan?.name || ""}`}</h1>
        <Breadcrumb items={items} />
        <ArtisanWithStates
          data={artisan}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default Artisan_Details;
