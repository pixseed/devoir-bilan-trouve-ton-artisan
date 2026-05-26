/**
 * ================================================================================================
 * SEARCH BAR
 * ================================================================================================
 * Rôle :
 * - Afficher une barre de recherche interactive.
 * - Gérer la saisie utilisateur en mode contrôlé ou non contrôlé.
 * - Déclencher une recherche via soumission du formulaire.
 * ================================================================================================
 */

import { useState } from "react";
import clsx from "clsx";

import { VARIANTS } from "../../../constants/variants";

import IconButton from "../actions/IconButton";
import SearchIcon from "../../../assets/icons/Search.svg?react";

import CloseIcon from "../../../assets/icons/Cross.svg?react";

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
    onSearch?.(inputValue.trim());
  }

  function handleClear() {
    handleChange("")
    onClear?.("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("searchbar", `searchbar--${variant}`)}
    >
      {inputValue && (
        <IconButton
          type="button"
          icon={CloseIcon}
          aria-label="Effacer la recherche"
          variant={VARIANTS.ICON_BUTTON.GHOST}
          size={VARIANTS.SIZE.SM}
          className="searchbar__clear"
          onClick={handleClear}
        />
      )}

      <input
        type="text"
        aria-label="Rechercher un artisan"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        className={clsx("searchbar__input", {
          "searchbar__input--with-clear": inputValue,
        })}
      />

      <IconButton
        type="submit"
        aria-label="Lancer la recherche"
        icon={SearchIcon}
        size={VARIANTS.SIZE.MD}
        className="searchbar__submit"
      />
    </form>
  );
}
