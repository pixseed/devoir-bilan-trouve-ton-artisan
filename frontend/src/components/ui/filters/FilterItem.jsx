/* FilterItem.jsx */

import clsx from "clsx";

export default function FilterItem({ item, onClick, isActive, disabled }) {
  if (item.isSkeleton) {
    return (
      <li className="filter-group__item">
        <div className="skeleton skeleton--text-lg"></div>
      </li>
    );
  }

  return (
    <li
      className={clsx("filter-group__item", {
        "filter-group__item--active": isActive,
      })}
    >
      <button
        type="button"
        className={clsx("filter-group__button", {
          "filter-group__button--active": isActive,
        })}
        onClick={onClick}
        disabled={disabled}
      >
        {item.label}
      </button>
    </li>
  );
}
