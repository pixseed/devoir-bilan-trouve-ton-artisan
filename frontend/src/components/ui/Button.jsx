/* Button.jsx */

import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  to,
  onClick,
}) {
  const className = `button button--${variant} button--${size}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="button__icon" />}
      <span className="button__label">{children}</span>
      {Icon && iconPosition === "right" && <Icon className="button__icon" />}
    </>
  );

  // Bouton de navigation
  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  // Bouton d'action
  if (onClick) {
    return (
      <Link className={className} onClick={onClick}>
        {content}
      </Link>
    );
  }
}
