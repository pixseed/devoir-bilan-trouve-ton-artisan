/**
 * ================================================================================================
 * MODAL
 * ================================================================================================
 * Rôle :
 * - Afficher une fenêtre modale accessible.
 * - Gérer la fermeture utilisateur (clic extérieur, Escape, bouton).
 * - Piéger le focus clavier dans la modale.
 * - Bloquer le scroll de fond pendant l'ouverture.
 * ================================================================================================
 */

import { useEffect, useRef, useId } from "react";

import { useClickOutside } from "../../../hooks/ui/useClickOutside";
import { useEscapeKey } from "../../../hooks/ui/useEscapeKey";
import { useFocusTrap } from "../../../hooks/ui/useFocusTrap";

import { VARIANTS } from "../../../constants/variants";
import Button from "../actions/Button";

export default function Modal({
  title = "",
  ariaLabel = "Fenêtre modale",
  onClose,
  children,
}) {
  const modalRef = useRef(null);
  const titleId = useId();

  useClickOutside(modalRef, onClose);
  useEscapeKey(true, onClose);
  useFocusTrap(modalRef, true);

  useEffect(() => {
    // Sauvegarde de l'état initial
    const originalOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";

    return () => {
      // Restauration de l'état initial
      document.documentElement.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="app-modal">
      <div className="app-modal__overlay">
        <div
          ref={modalRef}
          className="app-modal__content"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          aria-label={!title ? ariaLabel : undefined}
        >
          {title && (
            <h2 id={titleId} className="app-modal__title">
              {title}
            </h2>
          )}

          <div className="app-modal__body">{children}</div>

          <div className="app-modal__footer">
            <Button onClick={onClose} variant={VARIANTS.BUTTON.PRIMARY}>
              Fermer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
