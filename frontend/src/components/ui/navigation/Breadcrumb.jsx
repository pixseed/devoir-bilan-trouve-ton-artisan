/**
 * ================================================================================================
 * BREADCRUMB
 * ================================================================================================
 * Rôle :
 * - Afficher le fil d'Ariane de navigation.
 * - Indiquer la page active.
 * ================================================================================================
 */

import { Link } from "react-router-dom";
import ArrowIcon from "../../../assets/icons/Right_Arrow.svg?react";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className="breadcrumb reset-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path ?? item.label} className="breadcrumb__item">
              {isLast ? (
                <span aria-current="page" className="breadcrumb__current">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="breadcrumb__link">
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <ArrowIcon
                  className="breadcrumb__separator"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
