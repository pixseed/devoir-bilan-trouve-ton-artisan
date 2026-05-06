/* Dropdown.jsx */

import { useState, useRef } from "react";
import Trigger from "./Trigger";
import DropdownList from "./DropdownList";
import ChevronIcon from "../../assets/icons/Down_Chevron.svg?react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useEscapeOutside } from "../../hooks/useEscapeOutside";

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
  }

  // Gère la sélection d'une option et ferme le dropdown
  const handleSelect = (option) => {
    if (disabled) return;
    onChange?.(option);
    setIsOpen(false);
  };

  // Ferme le dropdown si clic en dehors ou touche Escape
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));
  useEscapeOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="dropdown" ref={dropdownRef}>
      <Trigger
        className="trigger--outlined"
        icon={ChevronIcon}
        onClick={toggle}
        isOpen={isOpen}
        label={label}
        hasPopup="listbox"
        controls="dropdown-list"
        disabled={disabled}
      />

      <DropdownList
        options={options}
        isOpen={isOpen}
        onSelect={handleSelect}
        selectedValue={value}
      />
    </div>
  );
}
