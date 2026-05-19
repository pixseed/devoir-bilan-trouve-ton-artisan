/**
 * ================================================================================================
 * Trigger.jsx (component UI)
 * ================================================================================================
 * Bouton déclencheur (menu, dropdown, etc.).
 *
 * Responsabilités :
 * - Gérer l'état ouvert/fermé
 * - Fournir les attributs aria nécessaire
 *
 * Accessibilité :
 * - aria-expanded : état du panel
 * - aria-controls : élément contrôlé
 * - aria-haspopup : type de contenu ouvert
 * ================================================================================================
 */

import clsx from "clsx";
import { VARIANTS } from "../../../constants/variants";

export default function Trigger({
  label,
  icon: Icon,
  onClick,
  isOpen = false,
  hasPopup,
  controls,
  variant = VARIANTS.TRIGGER.OUTLINED,
  disabled,
  className = "",
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        "trigger",
        `trigger--${variant}`,
        {
          "is-open": isOpen,
          "is-disabled": disabled,
        },
        className,
      )}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={label || undefined}
      aria-haspopup={hasPopup || undefined}
      aria-controls={controls || undefined}
      aria-disabled={disabled}
    >
      <span className="trigger__content">
        <span className="trigger__label">{label}</span>

        {Icon && <Icon className="trigger__icon" aria-hidden="true" />}
      </span>
    </button>
  );
}
