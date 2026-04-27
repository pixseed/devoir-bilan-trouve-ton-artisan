/**
 * ================================================================================================
 * Menu.jsx (component UI)
 * ================================================================================================
 * Menu des catégories (dropdown).
 *
 * Responsabilités :
 * - Afficher une liste de catégories
 * - Structurer le layout (titre + liste)
 *
 * Accessibilité :
 * - Utilise une liste sémantique (ul/li)
 * ================================================================================================
 */

import { useCategories } from "../../hooks/useCategories";
import NavItem from "./NavItem";
import SkeletonMenu from "./SkeletonMenu";

export default function Menu() {
  const { categories, error, loading } = useCategories();

  return (
    <div className="menu" aria-label="Catégories">
      <div className="container">
        <div className="menu__content">
          {/* Bloc gauche = Titre du menu */}
          <div className="menu__header">
            <h2 className="menu__title heading-xl">Catégories</h2>
          </div>

          {/* Bloc droit = Liste des catégories */}
          <div className="menu__body">
            {loading && <SkeletonMenu />}
            {error && <p>{error}</p>}
            {!loading && !error && (
              <ul className="menu__list" role="list">
                {categories.map((c) => (
                  <NavItem key={c.id} id={c.id} label={c.name} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
