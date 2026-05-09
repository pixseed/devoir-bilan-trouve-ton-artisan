/* FilterGroup.jsx */

import FilterItem from "./FilterItem";
import clsx from "clsx";
import { VARIANTS } from "../../constants/variants";
import Alert from "./Alert";
import Divider from "./Divider";

export default function FilterGroup({
  title,
  items,
  onSelect,
  selectedValue,
  error,
  disabled
}) {
  return (
    <div className="filter-group">
      <h2 className="filter-group__title heading-xs">{title}</h2>
      <Divider />
      { error ? (
        <Alert message={error} variant={VARIANTS.ALERT.ERROR} />
      ) :
      <ul
        className={clsx(
          "filter-group__list",
          { "filter-group__list--loading": items.some((item) => item.isSkeleton)}
        )}
        role="list"
      >
        {items.map((item) => (
          <FilterItem
            key={item.value}
            item={item}
            onClick={() => onSelect(item)}
            isActive={item.value === selectedValue}
            disabled={disabled}
          />
        ))}
      </ul>
      }
    </div>
  );
}
