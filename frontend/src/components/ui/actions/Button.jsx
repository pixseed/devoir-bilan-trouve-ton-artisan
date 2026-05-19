/* Button.jsx */

import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  to = "",
  href = "",
  onClick,
  className: customClassName,
}) {
  const className = clsx("button", `button--${variant}`, `button--${size}`, customClassName);

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="button__icon" />}
      <span className="button__label">{children}</span>
      {Icon && iconPosition === "right" && <Icon className="button__icon" />}
    </>
  );

  // Bouton de navigation interne
  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  // Bouton de redirection externe
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  // Bouton d'action
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}
