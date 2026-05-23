/**
 * ================================================================================================
 * DROPDOWN
 * ================================================================================================
 * Rôle :
 * - Gérer l'ouverture et la fermeture du dropdown.
 * - Gérer la sélection d'une option.
 * - Déléguer l'affichage de la liste au composant DropdownList.
 * ================================================================================================
 */

import { useState, useRef, useId } from "react";

import { useClickOutside } from "../../../hooks/ui/useClickOutside";
import { useEscapeKey } from "../../../hooks/ui/useEscapeKey";

import Trigger from "./Trigger";
import DropdownList from "./DropdownList";

import ChevronIcon from "../../../assets/icons/Down_Chevron.svg?react";

export default function Dropdown({
  options,
  label,
  onChange,
  value,
  disabled,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle d'ouverture du dropdown
  const toggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  // Gère la sélection d'une option et ferme le dropdown
  function handleSelect(option) {
    if (disabled) return;
    onChange?.(option);
    setIsOpen(false);
  }

  // Ferme le dropdown si clic en dehors ou touche Escape
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));
  useEscapeKey(isOpen, () => setIsOpen(false));

  // Gestion des ids par React
  const listId = useId();

  return (
    <div className="dropdown" ref={dropdownRef}>
      <Trigger
        className="trigger--outlined"
        icon={ChevronIcon}
        onClick={toggle}
        isOpen={isOpen}
        label={label}
        hasPopup="listbox"
        controls={listId}
        disabled={disabled}
      />

      <DropdownList
        id={listId}
        options={options}
        isOpen={isOpen}
        onSelect={handleSelect}
        selectedValue={value}
      />
    </div>
  );
}
