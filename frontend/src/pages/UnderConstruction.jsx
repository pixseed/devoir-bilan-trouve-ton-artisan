/**
 * ================================================================================================
 * PAGE : UNDER CONSTRUCTION
 * ================================================================================================
 * Rôle :
 * - Afficher la page en construction.
 * - Présenter un message indiquant que la page est en cours de développement.
 * - Proposer une navigation vers la page d'accueil.
 * ================================================================================================
 */

import { Helmet } from "react-helmet-async";
import StatusPage from "../components/templates/StatusPage";

export default function UnderConstruction() {
  return (
    <>
      <Helmet>
        <title>Page en cours de construction | Trouve ton artisan</title>
        <meta
          name="description"
          content="Cette page de Trouve ton artisan est actuellement en cours de développement."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <StatusPage
        title="En cours de construction"
        description="Cette page sera bientôt disponible."
        media={
          <img
            src="/images/UNDER-CONSTRUCTION.webp"
            alt="Illustration page en construction"
          />
        }
        modalContent={
          <p>
            Cette page est actuellement en cours de construction et sera bientôt
            disponible.
          </p>
        }
      />
    </>
  );
}
