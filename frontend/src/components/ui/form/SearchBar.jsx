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

import { useState } from "react";
import { IconButton } from "../actions/IconButton";
import SearchIcon from "../../../assets/icons/Search.svg?react";
import clsx from "clsx";
import { VARIANTS } from "../../../constants/variants";

export default function SearchBar({
  placeholder = "Rechercher",
  variant = VARIANTS.SEARCHBAR.DEFAULT,
  value,
  onChange,
  onSearch,
}) {
  const [internalValue, setInternalValue] = useState("");
  const inputValue = value ?? internalValue;

  function handleChange(newValue) {
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue.trim()) return;

    onSearch?.(inputValue.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("searchbar", `searchbar--${variant}`)}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleChange?.(e.target.value)}
        className="searchbar__input"
      />

      <IconButton
        icon={SearchIcon}
        size={VARIANTS.SIZE.MD}
        className="searchbar__button"
      />
    </form>
  );
}
