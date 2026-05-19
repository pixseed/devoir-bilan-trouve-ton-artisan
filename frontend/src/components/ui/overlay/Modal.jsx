/* Modal.jsx */

import { useClickOutside } from "../../../hooks/ui/useClickOutside";
import { useEscapeKey } from "../../../hooks/ui/useEscapeKey";
import { useFocusTrap } from "../../../hooks/ui/useFocusTrap";
import Button from "../actions/Button";
import { useEffect, useRef, useId } from "react";

export default function Modal({
  title = "",
  ariaLabel = "",
  onClose,
  children,
}) {
  const modalRef = useRef(null);
  const titleId = useId();

  useClickOutside(modalRef, onClose);
  useEscapeKey(true, onClose);
  useFocusTrap(modalRef, true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    return () => (document.documentElement.style.overflow = "");
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
            <Button onClick={onClose} variant="primary">
              Fermer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
