/**
 * ================================================================================================
 * IconButton.jsx (component UI)
 * ================================================================================================
 * Permet d'afficher une icône interactive sous forme de :
 *    - bouton (par défaut)
 *    - lien (via prop `as="a"`)
 *
 * Responsabilités :
 * - Appliquer les styles selon variant / size
 * - Gérer l'état actif
 * - Rendre un composant HTML dynamique
 *
 * Accessibilité :
 * - Repose sur les props passées (aria-label, etc.)
 * ================================================================================================
 */

import clsx from "clsx";
import { VARIANTS } from "../../../constants/variants";

export function IconButton({
  icon: Icon,
  as: Component = "button",
  variant = VARIANTS.ICON_BUTTON.ROUNDED,
  size = VARIANTS.SIZE.MD,
  isActive = false,
  className = "",
  ...props
}) {
  if (!Icon) {
    console.warn("IconButton: No icon provided");
    return null;
  }

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
      {...props}
    >
      <Icon className="icon-button__icon" />
    </Component>
  );
}
