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
import clsx from "clsx";
import { VARIANTS } from "../../constants/variants";

export default function SearchBar({
  placeholder = "Rechercher",
  variant = VARIANTS.SEARCHBAR.DEFAULT,
}) {
  return (
    <div className={clsx(
      "searchbar",
      `searchbar--${variant}`,
    )}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="searchbar__input"
      />

      <IconButton icon={SearchIcon} size={VARIANTS.SIZE.MD} className="searchbar__button" />
    </div>
  );
}
