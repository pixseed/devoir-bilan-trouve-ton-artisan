/**
 * ================================================================================================
 * NAV ITEM
 * ================================================================================================
 * Rôle :
 * - Afficher une entrée de navigation vers une catégorie artisan.
 * - Gérer l'état skeleton de chargement.
 * ================================================================================================
 */

import { Link } from "react-router-dom";
import ChevronIcon from "../../../assets/icons/Right_Chevron.svg?react";

export default function NavItem({ item, onSelect }) {
  if (!item) return null;

  if (item.isSkeleton) {
    return (
      <li className="nav-item skeleton skeleton--text-lg" aria-hidden="true" />
    );
  }
  return (
    <li className="nav-item">
      <Link
        to={`/artisans?category=${item.value}`}
        onClick={onSelect}
        className="nav-item__link"
      >
        <span className="nav-item__label">{item.label}</span>
        <ChevronIcon className="nav-item__icon" aria-hidden="true" />
      </Link>
    </li>
  );
}
