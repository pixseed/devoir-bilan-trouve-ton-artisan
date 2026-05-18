/**
 * ================================================================================================
 * Header.jsx
 * ================================================================================================
 * Responsabilités :
 * - Affiche le logo et la navigation principale
 * - Gère l'ouverture/fermeture des panels (menu/search)
 * - Supporte interactions utilisateur :
 *    - click (toggle)
 *    - click (outside)
 *    - touche Escape (keyboard access)
 *    - mouseleave (UX desktop)
 *
 * Accessibilité :
 * - aria-expanded / aria-controls pour les panels
 * - aria-haspopup pour indiquer le type d'interaction
 *
 * Dépendances :
 * - useHeaderPanels (state global des panels)
 * - useClickOutside (fermeture externe)
 * - useEscapeKey (keyboard)
 * - useFocusTrap (blocage du focus clavier)
 * ================================================================================================
 */

import { Link, useNavigate } from "react-router-dom";

import ChevronIcon from "../../assets/icons/Down_Chevron.svg?react";
import SearchIcon from "../../assets/icons/Search.svg?react";
import MenuIcon from "../../assets/icons/Menu.svg?react";

import MenuWithStates from "../features/MenuWithStates";
import SearchBar from "../ui/SearchBar";
import Trigger from "../ui/Trigger";

import { useRef } from "react";
import { useHeaderPanels } from "../../hooks/useHeaderPanels";
import { useCategories } from "../../hooks/useCategories";
import { useCloseSearchOnBreakpoint } from "../../hooks/useCloseSearchOnBreakpoint";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useFocusTrap } from "../../hooks/useFocusTrap";

import { VARIANTS } from "../../constants/variants";

export default function Header() {
  // Gestion centralisée de l'état des panels (menu / search)
  const { activePanel, togglePanel, closePanel } = useHeaderPanels();

  // Récupération des catégories
  const { categories, loading, error } = useCategories();

  // Ferme le panel 'search' automatiquement en desktop
  useCloseSearchOnBreakpoint(activePanel, closePanel);

  // État des panels
  const isMenuOpen = activePanel === "menu";
  const isSearchOpen = activePanel === "search";

  // Réf. pour détecter les clics en dehors du menu
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (activePanel) closePanel();
  });
  useEscapeKey(activePanel, closePanel);
  useFocusTrap(menuRef, isMenuOpen || isSearchOpen);

  const navigate = useNavigate();

  function handleSearch(query) {
    navigate(`/artisans?search=${encodeURIComponent(query)}`);
  }

  // ===========================================================================================
  // CATEGORY ITEMS - Retourner la liste des catégories
  // ===========================================================================================

  const mapCategoryItem = (c) => ({
    label: c.name,
    value: c.id,
  });

  return (
    <header className="header">
      <div className="container header__inner">
        {/* ===============================================================
        Logo → Redirection vers l'accueil
        =================================================================== */}
        <Link to="/" aria-label="Accueil" className="header__logo-wrapper">
          <img
            className="header__logo"
            src="/logos/logo-trouve-ton-artisan.png"
            alt="Logo - Trouve ton Artisan"
          />
        </Link>

        {/* ===============================================================
        Navigation principale + gestion des panels (menu / search)
        =================================================================== */}
        <nav
          className="header__nav"
          onMouseLeave={() => closePanel()}
          aria-label="Navigation principale"
        >
          <div ref={menuRef} className="header__menu-wrapper">
            {/* ===============================================================
            Trigger du menu catégories (desktop uniquement)
            =================================================================== */}
            <Trigger
              label="Catégories"
              icon={ChevronIcon}
              isOpen={isMenuOpen}
              onClick={() => togglePanel("menu")}
              hasPopup="menu"
              controls="menu-panel"
              variant={VARIANTS.TRIGGER.UNDERLINED}
            />

            {/* ===============================================================
            Boutons d'accès en mode mobile (menu + search)
            =================================================================== */}
            <div className="header__actions">
              <button
                onClick={() => togglePanel("search")}
                aria-label="Ouvrir la recherche"
                aria-haspopup="dialog"
                aria-controls="search-panel"
                aria-expanded={isSearchOpen}
              >
                <SearchIcon className="header__icon" />
              </button>
              <button
                onClick={() => togglePanel("menu")}
                aria-label="Ouvrir le menu"
                aria-haspopup="menu"
                aria-controls="menu-panel"
                aria-expanded={isMenuOpen}
              >
                <MenuIcon className="header__icon" />
              </button>
            </div>

            {/* ===============================================================
            Panel menu (dropdown 'catégories')
            =================================================================== */}
            {isMenuOpen && (
              <div
                id="menu-panel"
                className={`header__menu-panel ${isMenuOpen ? "is-open" : ""}`}
              >
                <MenuWithStates
                  data={categories}
                  loading={loading}
                  error={error}
                  mapItem={mapCategoryItem}
                />
              </div>
            )}

            {/* ===============================================================
            Panel search
            =================================================================== */}
            {isSearchOpen && (
              <div
                id="search-panel"
                className={`header__search-panel ${isSearchOpen ? "is-open" : ""}`}
              >
                <div className="container">
                  <SearchBar onSearch={handleSearch} variant={VARIANTS.SEARCHBAR.NAVBAR} />
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ===============================================================
        Searchbar (uniquement tablet / desktop → sinon bouton d'action mobile)
        =================================================================== */}
        <div className="header__search">
          <SearchBar onSearch={handleSearch} variant={VARIANTS.SEARCHBAR.NAVBAR} />
        </div>
      </div>
    </header>
  );
}
