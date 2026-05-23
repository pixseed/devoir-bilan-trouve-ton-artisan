/**
 * ================================================================================================
 * FILTER ITEM
 * ================================================================================================
 * Rôle :
 * - Afficher un élément de filtre interactif.
 * - Gérer son état actif, désactivé ou skeleton.
 * ================================================================================================
 */

import clsx from "clsx";

export default function FilterItem({ item, onClick, isActive, disabled }) {
  if (item.isSkeleton) {
    return (
      <li className="filter-group__item" aria-hidden="true">
        <div className="skeleton skeleton--text-lg" />
      </li>
    );
  }

  return (
    <li className="filter-group__item">
      <button
        type="button"
        className={clsx("filter-group__button", {
          "filter-group__button--active": isActive,
        })}
        onClick={onClick}
        disabled={disabled}
        aria-pressed={isActive}
      >
        {item.label}
      </button>
    </li>
  );
}
