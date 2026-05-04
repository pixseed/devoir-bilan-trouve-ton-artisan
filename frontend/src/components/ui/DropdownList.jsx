/* DropdownList.jsx */

import DropdownItem from "./DropdownItem";
import clsx from "clsx";

export default function DropdownList({
  options,
  isOpen,
  onSelect,
  selectedValue,
}) {
  return (
    <ul
      className={clsx("dropdown__list", { "dropdown__list--open": isOpen })}
      role="listbox"
      id="dropdown-list"
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
