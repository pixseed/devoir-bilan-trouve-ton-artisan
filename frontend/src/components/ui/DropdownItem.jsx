/* DropdownItem.jsx */

import clsx from "clsx";

export default function DropdownItem({ option, onSelect, isActive }) {
  if (option.isSkeleton) {
    return <li className="dropdown__item skeleton skeleton--text-lg"></li>
  }

  return (
    <li
      className={clsx(
        "dropdown__item",
        { "dropdown__item--active": isActive }
      )}
      role="option"
      onClick={() => {
        if (!option.isSkeleton) {
          onSelect(option)
        }
      }}
    >
      {option.label}
    </li>
  );
}
