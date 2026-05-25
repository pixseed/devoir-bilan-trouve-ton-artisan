/**
 * ================================================================================================
 * PAGE : NOT FOUND
 * ================================================================================================
 * Rôle :
 * - Afficher la page d'erreur 404.
 * - Présenter un message d'erreur clair.
 * - Proposer une navigation vers la page d'accueil.
 * ================================================================================================
 */

import { Helmet } from "react-helmet-async";
import StatusPage from "../components/templates/StatusPage";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page introuvable (404) | Trouve ton artisan</title>
        <meta
          name="description"
          content="La page demandée est introuvable sur Trouve ton artisan."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <StatusPage
        title="Erreur 404"
        description="Cette page n'existe pas. Elle n'a jamais franchi la ligne d'arrivée."
        media={
          <img
            src="/images/ERREUR-404.jpg"
            alt="Illustration Erreur 404"
          />
        }
        copyright="© Région Auvergne-Rhône-Alpes"
        modalContent={
          <p>
            Erreur 404 - Cette page n'existe pas. Elle n'a jamais franchi la
            ligne d'arrivée.
          </p>
        }
        breadcrumbItems={[
          { label: "Accueil", path: "/" },
          { label: "Page introuvable" },
        ]}
      />
    </>
  );
}
