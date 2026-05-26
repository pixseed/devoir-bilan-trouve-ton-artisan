/**
 * ================================================================================================
 * FILTER GROUP
 * ================================================================================================
 * Rôle :
 * - Afficher un groupe de filtres interactifs.
 * - Gérer les états d'affichage de la liste ou d'une erreur.
 * ================================================================================================
 */

import { useId } from "react";
import FilterItem from "./FilterItem";
import clsx from "clsx";
import { VARIANTS } from "../../../constants/variants";
import Alert from "../feedback/Alert";
import Divider from "../display/Divider";

export default function FilterGroup({
  title,
  items = [],
  onSelect,
  selectedValue,
  error,
  disabled,
}) {
  const isLoading = items.some((item) => item.isSkeleton);
  const titleId = useId();
  
  return (
    <section className="filter-group" aria-labelledby={titleId}>
      <h2 id={titleId} className="filter-group__title heading-xs">{title}</h2>
      <Divider />
      {error ? (
        <Alert message={error} variant={VARIANTS.ALERT.ERROR} />
      ) : (
        <ul
          className={clsx("filter-group__list reset-list", {
            "filter-group__list--loading": isLoading,
          })}
        >
          {items.map((item) => (
            <FilterItem
              key={item.value}
              item={item}
              onClick={() => onSelect?.(item)}
              isActive={item.value === selectedValue}
              disabled={disabled}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
