/* Home.jsx */

import { useTopArtisans } from "../hooks/useTopArtisans";
import ArtisanCard from "../components/ui/ArtisanCard";
import SkeletonCard from "../components/ui/ArtisanCardSkeleton";
import Alert from "../components/ui/Alert";
import { VARIANTS } from "../constants/variants";

export default function Home() {
  const { artisans, error, loading } = useTopArtisans();

  return (
    <div className="home">
      <div className="container">
        <h1 className="visually-hidden">Page d'accueil "Trouve ton artisan"</h1>
        <div className="home__grid">

          {/* Étapes explicatives d'utilisation du site sous forme de liste */}
          <section className="section home__hero flow-md">
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
          <section className="section home__top-artisans flow-md">
            <h2 className="heading-lg heading-lg__accent heading-lg__accent--secondary">
              Top 3 des artisans du mois
            </h2>
            {loading && <SkeletonCard />}
            {error && <Alert message={error} variant={VARIANTS.ALERT.ERROR} />}
            {!loading && !error && (
              <div className="home__top-artisans-grid">
                {artisans.map((artisan) => (
                  <ArtisanCard
                    key={artisan.id}
                    id={artisan.id}
                    name={artisan.name}
                    specialty={artisan.specialty}
                    city={artisan.city}
                    rating={artisan.rating}
                    image={artisan.image}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
