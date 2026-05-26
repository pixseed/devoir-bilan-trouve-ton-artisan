/**
 * ================================================================================================
 * DROPDOWN LIST
 * ================================================================================================
 * Rôle :
 * - Afficher la liste des options du dropdown.
 * - Gérer les états d'ouverture et loading.
 * ================================================================================================
 */

import DropdownItem from "./DropdownItem";
import clsx from "clsx";

export default function DropdownList({
  options = [],
  isOpen,
  onSelect,
  selectedValue,
  id,
}) {
  const isLoading = options.some((option) => option.isSkeleton);

  return (
    <ul
      id={id}
      hidden={!isOpen}
      className={clsx("dropdown__list reset-list", {
        "dropdown__list--open": isOpen,
        "dropdown__list--loading": isLoading,
      })}
    >
      {options.map((option) => (
        <DropdownItem
          key={option.value}
          option={option}
          onSelect={onSelect}
          isActive={option.value === selectedValue}
        />
      ))}
    </ul>
  );
}
