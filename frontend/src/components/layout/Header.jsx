/**
 * ================================================================================================
 * APPLICATION HEADER
 * ================================================================================================
 * Rôle :
 * - Afficher la navigation principale.
 * - Gérer les interactions liées aux panels menu et recherche.
 * - Assurer les comportements d'accessibilité clavier et focus.
 *
 * Dépendances :
 * - hooks/features
 * - hooks/ui
 * - hooks/data
 * ================================================================================================
 */

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { BREAKPOINTS } from "../../config/breakpoints";

import ChevronIcon from "../../assets/icons/Down_Chevron.svg?react";
import SearchIcon from "../../assets/icons/Search.svg?react";
import MenuIcon from "../../assets/icons/Menu.svg?react";

import MenuWithStates from "../features/navigation/MenuWithStates";
import SearchBar from "../ui/form/SearchBar";
import Trigger from "../ui/navigation/Trigger";

import { useCategories } from "../../hooks/data/useCategories";
import { useHeaderPanels } from "../../hooks/features/useHeaderPanels";
import { useCloseSearchOnBreakpoint } from "../../hooks/features/useCloseSearchOnBreakpoint";
import { useClickOutside } from "../../hooks/ui/useClickOutside";
import { useEscapeKey } from "../../hooks/ui/useEscapeKey";
import { useFocusTrap } from "../../hooks/ui/useFocusTrap";
import { useScrollToTopOnSameRoute } from "../../hooks/ui/useScrollToTopOnSameRoute";

import { VARIANTS } from "../../constants/variants";

export default function Header() {
  // ================================================================================================
  // STATE
  // ================================================================================================
  const { activePanel, togglePanel, closePanel } = useHeaderPanels();

  // ================================================================================================
  // DATA
  // ================================================================================================
  const { categories, loading, error } = useCategories();

  // ================================================================================================
  // DERIVED STATE
  // ================================================================================================
  const isMenuOpen = activePanel === "menu";
  const isSearchOpen = activePanel === "search";

  // ================================================================================================
  // REFS
  // ================================================================================================
  const menuRef = useRef(null);
  const menuPanelRef = useRef(null);
  const searchPanelRef = useRef(null);

  // ================================================================================================
  // EFFECTS / BEHAVIOR
  // ================================================================================================
  useCloseSearchOnBreakpoint(activePanel, closePanel);
  useClickOutside(menuRef, closePanel);
  useEscapeKey(activePanel, closePanel);

  useFocusTrap(menuPanelRef, isMenuOpen);
  useFocusTrap(searchPanelRef, isSearchOpen);

  const { isCurrentRoute, handleClick } = useScrollToTopOnSameRoute("/");

  // ================================================================================================
  // NAVIGATION
  // ================================================================================================
  const navigate = useNavigate();

  // ================================================================================================
  // HANDLERS
  // ================================================================================================
  function handleSearch(query) {
    closePanel();
    navigate(`/artisans?search=${encodeURIComponent(query)}`);
  }

  // ================================================================================================
  // MAPPERS
  // ================================================================================================
  const mapCategoryItem = (category) => ({
    label: category.name,
    value: category.id,
  });

  // ================================================================================================
  // RENDER
  // ================================================================================================
  return (
    <header className="header">
      <div className="container header__inner">
        {/* ===============================================================
        Logo → Redirection vers l'accueil
        =================================================================== */}
        <Link
          to="/"
          aria-label={
            isCurrentRoute
              ? "Remonter en haut de la page"
              : "Retour à l'accueil"
          }
          onClick={handleClick}
          className="header__logo-wrapper"
        >
          <picture>
            <source
              media={`max-width: ${BREAKPOINTS.md}px`}
              srcSet="/logos/logo-trouve-ton-artisan-mobile.webp"
            />
            <img
              className="header__logo"
              src="/logos/logo-trouve-ton-artisan-desktop.webp"
              alt=""
              width="400"
              height="84"
            />
          </picture>
        </Link>

        {/* ===============================================================
        Navigation principale + gestion des panels (menu / search)
        =================================================================== */}
        <nav
          className="header__nav"
          onMouseLeave={closePanel}
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
                type="button"
                onClick={() => togglePanel("search")}
                aria-label="Ouvrir la recherche"
                aria-haspopup="dialog"
                aria-controls="search-panel"
                aria-expanded={isSearchOpen}
              >
                <SearchIcon className="header__icon" />
              </button>
              <button
                type="button"
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
                ref={menuPanelRef}
                inert={!isMenuOpen}
                aria-hidden={!isMenuOpen}
                className={clsx("header__menu-panel", {
                  "is-open": isMenuOpen,
                })}
              >
                <MenuWithStates
                  data={categories}
                  loading={loading}
                  error={error}
                  mapItem={mapCategoryItem}
                  onSelect={closePanel}
                />
              </div>
            )}

            {/* ===============================================================
            Panel search
            =================================================================== */}
            {isSearchOpen && (
              <div
                id="search-panel"
                ref={searchPanelRef}
                inert={!isSearchOpen}
                aria-hidden={!isSearchOpen}
                className={clsx("header__search-panel", {
                  "is-open": isSearchOpen,
                })}
              >
                <div className="container">
                  <SearchBar
                    onSearch={handleSearch}
                    variant={VARIANTS.SEARCHBAR.NAVBAR}
                  />
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ===============================================================
        Searchbar (uniquement tablet / desktop → sinon bouton d'action mobile)
        =================================================================== */}
        <div className="header__search">
          <SearchBar
            onSearch={handleSearch}
            variant={VARIANTS.SEARCHBAR.NAVBAR}
          />
        </div>
      </div>
    </header>
  );
}
