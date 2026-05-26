/**
 * ================================================================================================
 * ICON BUTTON
 * ================================================================================================
 * Rôle :
 * - Afficher un bouton icon-only interactif.
 * - Supporter différents rendus HTML et états visuels.
 * - Permettre un rendu polymorphique via la prop `as` (ex: <button>, <a>, etc.).
 * ================================================================================================
 */

import clsx from "clsx";
import { VARIANTS } from "../../../constants/variants";

export default function IconButton({
  icon: Icon,
  as: Component = "button",
  ariaLabel,
  variant = VARIANTS.ICON_BUTTON.ROUNDED,
  size = VARIANTS.SIZE.MD,
  isActive = false,
  className = "",
  ...props
}) {
  if (!Icon) return null;

  return (
    <Component
      className={clsx(
        "icon-button",
        `icon-button--${variant}`,
        `icon-button--${size}`,
        {
          "is-active": isActive,
        },
        className,
      )}
      aria-label={ariaLabel}
      {...(Component === "button" && { type: "button" })}
      {...props}
    >
      <Icon className="icon-button__icon" aria-hidden="true" />
    </Component>
  );
}
