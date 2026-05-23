/**
 * ================================================================================================
 * BUTTON
 * ================================================================================================
 * Rôle :
 * - Afficher un bouton d'action, un lien interne ou externe.
 * - Supporter variantes visuelles, tailles et icônes.
 * - Adapter automatiquement le rendu selon le type d'interaction
 * ================================================================================================
 */

import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  to = null,
  href = null,
  onClick,
  type = "button",
  disabled = false,
  className: customClassName,
  ...props
}) {
  // ================================================================================================
  // CONSTANTS
  // ================================================================================================
  const className = clsx(
    "button",
    `button--${variant}`,
    `button--${size}`,
    customClassName,
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="button__icon" aria-hidden="true" />}
      <span className="button__label">{children}</span>
      {Icon && iconPosition === "right" && <Icon className="button__icon" aria-hidden="true" />}
    </>
  );

  // ================================================================================================
  // INTERNAL NAVIGATION BUTTON
  // ================================================================================================
  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {content}
      </Link>
    );
  }

  // ================================================================================================
  // EXTERNAL REDIRECTION BUTTON
  // ================================================================================================
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {content}
      </a>
    );
  }

  // ================================================================================================
  // ACTIONS BUTTON
  // ================================================================================================
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
