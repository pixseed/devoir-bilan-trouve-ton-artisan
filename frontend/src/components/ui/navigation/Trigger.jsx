/**
 * ================================================================================================
 * TRIGGER
 * ================================================================================================
 * Rôle :
 * - Afficher un bouton déclencheur interactif.
 * - Gérer l'état visuel ouvert / fermé.
 * - Fournir les attributs ARIA nécessaires à l'accessibilité.
 * ================================================================================================
 */

import { VARIANTS } from "../../../constants/variants";
import clsx from "clsx";

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
      aria-expanded={hasPopup ? isOpen : undefined}
      aria-haspopup={hasPopup || undefined}
      aria-controls={controls || undefined}
    >
      <span className="trigger__content">
        <span className="trigger__label">{label}</span>

        {Icon && <Icon className="trigger__icon" aria-hidden="true" />}
      </span>
    </button>
  );
}
