import { Link } from "react-router-dom";
import ArrowIcon from "../../../assets/icons/Right_Arrow.svg?react";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="breadcrumb__item">
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
