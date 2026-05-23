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

import StatusPage from "../components/templates/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      title="Erreur 404"
      description="Cette page n'existe pas. Elle n'a jamais franchi la ligne d'arrivée."
      media={<img src="/images/ERREUR-404.jpg" />}
      copyright="© Région Auvergne-Rhône-Alpes"
      modalContent={
        <p>
          Erreur 404 - Cette page n'existe pas. Elle n'a jamais franchi la ligne
          d'arrivée.
        </p>
      }
      breadcrumbItems={[
        { label: "Accueil", path: "/" },
        { label: "Page introuvable" },
      ]}
    />
  );
}
