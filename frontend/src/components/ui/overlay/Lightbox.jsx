/**
 * ================================================================================================
 * LIGHTBOX
 * ================================================================================================
 * Rôle :
 * - Afficher une image en plein écran.
 * - Fermer au clic extérieur ou avec Escape.
 * - Bloquer le scroll de fond pendant l'ouverture.
 * ================================================================================================
 */

import { useEffect, useRef } from "react";

import { useClickOutside } from "../../../hooks/ui/useClickOutside";
import { useEscapeKey } from "../../../hooks/ui/useEscapeKey";

import IconButton from "../../ui/actions/IconButton";
import CloseIcon from "../../../assets/icons/Cross.svg?react";

export default function Lightbox({ image, onClose }) {
  const lightboxRef = useRef(null);

  useClickOutside(lightboxRef, onClose);
  useEscapeKey(true, onClose);

  useEffect(() => {
    // Sauvegarde de l'état initial
    const originalOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";

    return () => {
      // Restauration de l'état initial
      document.documentElement.style.overflow = originalOverflow;
    };
  }, []);

  if (!image) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu de l'image ${image.alt}`}
    >
      <div ref={lightboxRef} className="lightbox__content">
        <IconButton
          icon={CloseIcon}
          onClick={onClose}
          variant="lightbox"
          aria-label="Fermer l'aperçu"
          className="lightbox__close"
        />
        <img src={image.src} alt={image.alt} className="lightbox__image" />
      </div>
    </div>
  );
}
