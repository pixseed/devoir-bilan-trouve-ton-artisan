/**
 * ================================================================================================
 * DROPDOWN ITEM
 * ================================================================================================
 * Rôle :
 * - Afficher une option du dropdown.
 * - Gérer l'état actif.
 * ================================================================================================
 */

import clsx from "clsx";

export default function DropdownItem({ option, onSelect, isActive }) {
  if (option.isSkeleton) {
    return (
      <li
        className="dropdown__item skeleton skeleton--text-lg"
        aria-hidden="true"
      />
    );
  }

  return (
    <li
      className={clsx("dropdown__item", { "dropdown__item--active": isActive })}
    >
      <button
        type="button"
        className="dropdown__button"
        onClick={() => onSelect?.(option)}
      >
        {option.label}
      </button>
    </li>
  );
}
