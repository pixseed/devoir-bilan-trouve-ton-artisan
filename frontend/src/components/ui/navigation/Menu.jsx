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

import NavItem from "./NavItem";
import Alert from "../feedback/Alert";
import { VARIANTS } from "../../../constants/variants";
import clsx from "clsx";

export default function Menu({ items, loading, error, onSelect }) {
  return (
    <div className="menu" aria-label="Catégories">
      <div className="container">
        <div className="menu__content">
          {/* Titre du menu */}
          <div className="menu__header">
            <h2 className="menu__title heading-xl">Catégories</h2>
          </div>

          {/* Liste des catégories */}
          <div
            className={clsx("menu__body", {
              "menu__body--loading": loading,
              "menu__body--error": error,
            })}
          >
            {error ? (
              <Alert message={error} variant={VARIANTS.ALERT.ERROR} />
            ) : (
              <ul className="menu__list" role="list">
                {items.map((item) => (
                  <NavItem key={item.value} item={item} onSelect={onSelect} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
