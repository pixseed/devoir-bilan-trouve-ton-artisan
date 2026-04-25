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
 * - useEscapeOutside (keyboard)
 * ================================================================================================
 */

import { Link } from "react-router-dom";

import logo from "../../assets/logos/logo-trouve-ton-artisan.png";
import ChevronIcon from "../../assets/icons/Down_Chevron.svg?react";
import SearchIcon from "../../assets/icons/Search.svg?react";
import MenuIcon from "../../assets/icons/Menu.svg?react";

import Menu from "../ui/Menu";
import SearchBar from "../ui/SearchBar";
import Trigger from "../ui/Trigger";

import { useRef } from "react";
import { useHeaderPanels } from "../../hooks/useHeaderPanels";
import { useCloseSearchOnBreakpoint } from "../../hooks/useCloseSearchOnBreakpoint";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useEscapeOutside } from "../../hooks/useEscapeOutside";

export default function Header() {
  // Gestion centralisée de l'état des panels (menu / search)
  const { activePanel, togglePanel, closePanel } = useHeaderPanels();

  // Ferme le panel 'search' automatiquement en desktop
  useCloseSearchOnBreakpoint(activePanel, closePanel);

  // Réf. pour détecter les clics en dehors du menu
  const menuRef = useRef(null);

  // Ferme les panels si cli extérieur
  useClickOutside(menuRef, () => {
    if (activePanel) closePanel();
  });

  // Permet de fermer via la touche Escape (keyboard access)
  useEscapeOutside(activePanel, closePanel);

  // État des panels
  const isMenuOpen = activePanel === "menu";
  const isSearchOpen = activePanel === "search";

  return (
    <header className="header">
      <div className="container header__inner">

        {/* ===============================================================
        Logo → Redirection vers l'accueil
        =================================================================== */}
        <Link to="/" aria-label="Accueil" className="header__logo-wrapper">
          <img className="header__logo" src={logo} alt="Logo - Trouve ton Artisan" />
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
              className="header__trigger"
              isOpen={isMenuOpen}
              onClick={() => togglePanel("menu")}
              label="Ouvrir le menu des catégories"
              hasPopup="menu"
              controls="menu-panel"
            >
              <span className="header__trigger-content">
                <span className="header__trigger-label">Catégories</span>
                <ChevronIcon className="header__trigger-icon" />
              </span>
            </Trigger>

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
            <div
              id="menu-panel"
              className={`header__menu-panel ${isMenuOpen ? "is-open" : ""}`}
            >
              <Menu />
            </div>

            {/* ===============================================================
            Panel search
            =================================================================== */}
            <div
              id="search-panel"
              className={`header__search-panel ${isSearchOpen ? "is-open" : ""}`}
            >
              <div className="container">
                <SearchBar variant="navbar" />
              </div>
            </div>
          </div>
        </nav>

        {/* ===============================================================
        Searchbar (uniquement tablet / desktop → sinon bouton d'action mobile)
        =================================================================== */}
        <div className="header__search">
          <SearchBar variant="navbar" />
        </div>
      </div>
    </header>
  );
}
