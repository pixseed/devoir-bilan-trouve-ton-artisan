/**
 * ================================================================================================
 * FEATURE : ArtisanDetailsWithStates
 * ================================================================================================
 * Rôle :
 * - Wrapper du composant ArtisanDetailsContent
 * - Gère les états :
 *      → loading (skeleton)
 *      → error (message + désactivation)
 *      → success (affichage normale)
 *
 * Ojectif :
 * - Centraliser la logique loading/error
 * - Éviter d'intégrer de la logique au composant métier
 * ================================================================================================
 */

import Artisan from "./ArtisanDetails";
import ArtisanDetailsSkeleton from "../../ui/feedback/ArtisanDetailsSkeleton";
import Alert from "../../ui/feedback/Alert";
import { VARIANTS } from "../../../constants/variants";

export default function ArtisanWithStates({ data, loading, error }) {
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

  return <Artisan artisan={data} />;
}
