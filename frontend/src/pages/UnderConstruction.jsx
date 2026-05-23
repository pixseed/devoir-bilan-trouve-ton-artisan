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

import StatusPage from "../components/templates/StatusPage";

export default function UnderConstruction() {
  return (
    <StatusPage
      title="En cours de construction"
      description="Cette page sera bientôt disponible."
      media={<img src="/images/UNDER-CONSTRUCTION.jpg"></img>}
      modalContent={
        <p>
          Cette page est actuellement en cours de construction et sera bientôt
          disponible.
        </p>
      }
    />
  );
}
