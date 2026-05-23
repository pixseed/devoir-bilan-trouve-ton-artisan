/**
 * ================================================================================================
 * MENU
 * ================================================================================================
 * Rôle :
 * - Afficher le menu de navigation des catégories artisan.
 * - Gérer les états d'affichage normaux ou erreur.
 * - Structurer le layout (header + contenu)
 * ================================================================================================
 */

import { VARIANTS } from "../../../constants/variants";

import NavItem from "./NavItem";
import Alert from "../feedback/Alert";

import clsx from "clsx";

export default function Menu({ items = [], loading, error, onSelect }) {
  return (
    <nav className="menu" aria-labelledby="menu-title">
      <div className="container">
        <div className="menu__content">
          {/* ===============================================================
            HEADER
          =================================================================== */}
          <div className="menu__header">
            <h2 id="menu-title" className="menu__title heading-xl">
              Catégories
            </h2>
          </div>

          {/* ===============================================================
            BODY
          =================================================================== */}
          <div
            className={clsx("menu__body", {
              "menu__body--loading": loading,
              "menu__body--error": error,
            })}
          >
            {error ? (
              <Alert message={error} variant={VARIANTS.ALERT.ERROR} />
            ) : (
              <ul className="menu__list reset-list">
                {items.map((item) => (
                  <NavItem key={item.value} item={item} onSelect={onSelect} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
