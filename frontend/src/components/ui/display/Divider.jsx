/**
 * ================================================================================================
 * DIVIDER
 * ================================================================================================
 * Rôle :
 * - Afficher une séparation visuelle horizontale ou verticale.
 * ================================================================================================
 */

import clsx from "clsx";

export default function Divider({ orientation = "horizontal", size = "" }) {
  const className = clsx(
    "divider",
    `divider--${orientation}`,
    size && `divider--${size}`,
  );

  if (orientation === "horizontal") {
    return <hr className={className} />;
  }

  return (
    <div className={className} aria-hidden="true" />
  );
}
