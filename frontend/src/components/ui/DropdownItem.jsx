/* DropdownItem.jsx */

import clsx from "clsx";

export default function DropdownItem({ option, onSelect, isActive }) {
  return (
    <li
      className={clsx(
        "dropdown__item",
        { "dropdown__item--active": isActive }
      )}
      role="option"
      onClick={() => onSelect(option)}
    >
      {option.label}
    </li>
  );
}
