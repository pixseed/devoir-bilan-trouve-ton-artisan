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

import { buildStatusPageSrcSet } from "../utils/buildImageSrcSet";
import {
  STATUS_PAGE_IMAGE_SIZES,
  STATUS_PAGE_IMAGES,
} from "../constants/images";

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
            src={STATUS_PAGE_IMAGES.notFound.thumbLg}
            srcSet={buildStatusPageSrcSet(STATUS_PAGE_IMAGES.notFound)}
            alt="Illustration Erreur 404"
            sizes={STATUS_PAGE_IMAGE_SIZES}
            loading="eager"
            fetchPriority="high"
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
