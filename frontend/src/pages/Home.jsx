/* Home.jsx */

import { useTopArtisans } from "../hooks/useTopArtisans";
import { VARIANTS } from "../constants/variants";
import ArtisansWithStates from "../components/features/ArtisansWithStates";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function Home() {
  const { artisans, error, loading } = useTopArtisans();
  
  function getVariantCard({ isXS, isMD, isLG }) {
    if (isLG) return VARIANTS.CARD.HORIZONTAL;
    if (isMD) return VARIANTS.CARD.VERTICAL;
    if (isXS) return VARIANTS.CARD.HORIZONTAL;
  }
  
  const variantCard = getVariantCard(useBreakpoint());

  return (
    <div className="home">
      <div className="container">
        <h1 className="visually-hidden">Page d'accueil "Trouve ton artisan"</h1>
        <div className="home__grid">

          {/* Étapes explicatives d'utilisation du site sous forme de liste */}
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

          {/* Liste des artisans du mois (top 3) sous forme de card */}
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
              />
          </section>
        </div>
      </div>
    </div>
  );
}
