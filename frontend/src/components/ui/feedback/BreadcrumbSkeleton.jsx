/**
 * ================================================================================================
 * BREADCRUMB SKELETON
 * ================================================================================================
 * Rôle :
 * - Afficher l'état de chargement du fil d'Ariane.
 * ================================================================================================
 */

import { Link } from "react-router-dom";
import ArrowIcon from "../../../assets/icons/Right_Arrow.svg?react";

const skeletonItems = [
  { label: "Accueil", path: "/" },
  { skeleton: "skeleton--breadcrumb-md" },
  { skeleton: "skeleton--breadcrumb-sm" },
  { skeleton: "skeleton--breadcrumb-lg" },
];

export default function BreadcrumbSkeleton() {
  return (
    <nav aria-hidden="true">
      <ol className="breadcrumb reset-list">
        {skeletonItems.map((item, index) => {
          const isLast = index === skeletonItems.length - 1;

          return (
            <li key={item.label ?? item.skeleton} className="breadcrumb__item">
              {item.label ? (
                <Link to={item.path} className="breadcrumb__current">
                  {item.label}
                </Link>
              ) : (
                <div className={`skeleton ${item.skeleton} skeleton--text`} />
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