/**
 * ================================================================================================
 * SearchBar.jsx (component UI)
 * ================================================================================================
 * Barre de recherche avec bouton intégré.
 * 
 * Responsabilités :
 * - Gérer l'affichage du champ input
 * - Afficher une bouton d'action (loupe)
 * 
 * Variants :
 * - default
 * - navbar
 * ================================================================================================
 */

import { IconButton } from "./IconButton";
import SearchIcon from "../../assets/icons/Search.svg?react";

export default function SearchBar({
  placeholder = "Rechercher",
  variant = "default",
}) {
  return (
    <div className={`searchbar searchbar--${variant}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="searchbar__input"
      />

      <IconButton icon={SearchIcon} size="md" className="searchbar__button" />
    </div>
  );
}
