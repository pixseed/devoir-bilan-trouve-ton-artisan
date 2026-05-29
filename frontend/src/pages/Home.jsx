/**
 * ================================================================================================
 * PAGE : HOME
 * ================================================================================================
 * Rôle :
 * - Afficher la page d'accueil.
 * - Présenter les étapes d'utilisation du site.
 * - Afficher les 3 artisans du mois (top 3) sous forme de cards.
 * ================================================================================================
 */

import { Helmet } from "react-helmet-async";

import { useTopArtisans } from "../hooks/data/useTopArtisans";
import { useBreakpoint } from "../hooks/ui/useBreakpoint";

import { VARIANTS } from "../constants/variants";
import { ARTISAN_CARD_IMAGE_SIZES } from "../constants/images";
import { buildImageSrcSet } from "../utils/buildImageSrcSet";

import ArtisansWithStates from "../components/features/artisans/ArtisansListWithStates";

export default function Home() {
  const { artisans, error, loading } = useTopArtisans();

  const { isSM, isMD, isLG } = useBreakpoint();

  const variantCard =
    !isSM || (isMD && !isLG)
      ? VARIANTS.CARD.VERTICAL
      : VARIANTS.CARD.HORIZONTAL;

  return (
    <>
      <Helmet>
        <title>
          Trouve ton artisan | Trouvez un artisan de confiance en
          Auvergne-Rhône-Alpes
        </title>
        <meta
          name="description"
          content="Trouvez facilement un artisan de confiance selon sa spécialité en Auvergne-Rhône-Alpes. Consultez les profils et contactez les professionnels."
        />
        <link rel="canonical" href="https://mon-domaine.fr/" />

        {/* 
        Pré-chargement de la première image de la liste Top 3 des artisans.
        Cette image est visible dès le chargement de la page et peut devenir
        l'élément LCP détecté par Lighthouse
        */}
        {artisans?.[0] && (
          <link
            rel="preload"
            as="image"
            imageSrcSet={buildImageSrcSet(artisans[0])}
            imageSizes={ARTISAN_CARD_IMAGE_SIZES}
            fetchPriority="high"
          />
        )}
      </Helmet>

      <div className="home">
        <div className="container">
          <h1 className="visually-hidden">
            Page d'accueil "Trouve ton artisan"
          </h1>
          <div className="home__grid">
            {/* ===============================================================
            HERO
          =================================================================== */}
            <section className="section section--with-bg home__hero flow-md">
              <h2 className="heading-lg heading-lg__accent heading-lg__accent--primary">
                Comment trouver mon artisan ?
              </h2>
              <ol className="hero__step-list">
                <li>Choisir la catégorie d'artisanat dans le menu.</li>
                <li>Choisir un artisan.</li>
                <li>Le contacter via le formulaire de contact.</li>
                <li>Une réponse sera apportée sous 48h.</li>
              </ol>
            </section>

            {/* ===============================================================
            TOP ARTISANS
          =================================================================== */}
            <section className="section layout-col--end home__top-artisans flow-md">
              <h2 className="heading-lg heading-lg__accent heading-lg__accent--secondary">
                Top 3 des artisans du mois
              </h2>
              <ArtisansWithStates
                data={artisans}
                loading={loading}
                error={error}
                variant={variantCard}
                skeletonCount={3}
                className="home__top-artisans-grid"
                priority
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
