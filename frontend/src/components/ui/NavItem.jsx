/**
 * ================================================================================================
 * NavItem.jsx (component UI)
 * ================================================================================================
 * Élément de navigation d'une catégorie.
 * 
 * Responsabilités :
 * - Afficher un lien vers une catégorie
 * - Inclure une icône (chevron)
 * ================================================================================================
 */

import { Link } from "react-router-dom";
import ChevronIcon from "../../assets/icons/Right_Chevron.svg?react";

export default function NavItem({ id, label }) {
  return (
    <li className="nav-item">
      <Link to={`/artisans?category=${id}`} className="nav-item__link">
        <span className="nav-item__label">{label}</span>
        <ChevronIcon className="nav-item__icon" />
      </Link>
    </li>
  );
}
