/* Home.jsx */

import orville from "../assets/images/orville-salmons-main-picture.jpg";
import labbe from "../assets/images/chocolaterie-labbe-main-picture.jpg";
import auPainChaud from "../assets/images/au-pain-chaud-main-picture.jpg";
import ArtisanCard from "../components/ui/ArtisanCard";

const mockArtisans = [
  {
    id: 1,
    name: "Orvilles Salmons",
    specialty: "Chauffagiste",
    city: "Evian",
    rating: 5,
    image: orville,
  },
  {
    id: 2,
    name: "Chocolatrie Labbé",
    specialty: "Chocolatier",
    city: "Lyon",
    rating: 4.9,
    image: labbe,
  },
  {
    id: 3,
    name: "Au Pain Chaud",
    specialty: "Boulanger",
    city: "Montélimar",
    rating: 4.8,
    image: auPainChaud,
  },
];

export default function Home() {
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
            <div className="home__top-artisans-grid">
              {mockArtisans.map((artisan) => (
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
          </section>
        </div>
      </div>
    </div>
  );
}
