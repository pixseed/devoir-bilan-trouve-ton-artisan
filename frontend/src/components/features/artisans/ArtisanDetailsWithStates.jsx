/**
 * ================================================================================================
 * ARTISAN DETAILS WITH STATE
 * ================================================================================================
 * Rôle :
 * - Gérer les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → success (affichage normale)
 * ================================================================================================
 */

import ArtisanDetails from "./ArtisanDetails";
import ArtisanDetailsSkeleton from "../../ui/feedback/ArtisanDetailsSkeleton";
import Alert from "../../ui/feedback/Alert";

import { VARIANTS } from "../../../constants/variants";

export default function ArtisanDetailsWithStates({ data, loading, error }) {
  if (loading) {
    return <ArtisanDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="section">
        <Alert message={error} variant={VARIANTS.ALERT.ERROR} />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return <ArtisanDetails artisan={data} />;
}
