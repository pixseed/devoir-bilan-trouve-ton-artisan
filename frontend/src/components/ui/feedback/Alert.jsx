/**
 * ================================================================================================
 * ALERT
 * ================================================================================================
 * Rôle :
 * - Afficher un message de feedback (succès, erreur, information).
 * - Supporter un message simple ou un contenu personnalisé.
 * ================================================================================================
 */

import clsx from "clsx";
import { VARIANTS } from "../../../constants/variants";

export default function Alert({
  message = "",
  variant = VARIANTS.ALERT.INFO,
  children,
}) {
  return (
    <div
      className={clsx("alert", `alert--${variant}`)}
      role={variant === VARIANTS.ALERT.ERROR ? "alert" : "status"}
    >
      {message && <p className="alert__text">{message}</p>}
      {children}
    </div>
  );
}
