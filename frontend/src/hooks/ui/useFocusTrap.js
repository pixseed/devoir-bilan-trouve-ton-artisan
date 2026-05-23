/**
 * ================================================================================================
 * USE FOCUS TRAP
 * ================================================================================================
 * Rôle :
 * - Maintenir le focus clavier à l'intérieur d'un conteneur actif.
 * - Améliorer l'accessibilité des modales, menus et panneaux interactifs.
 * ================================================================================================
 */

import { useEffect } from "react";

export function useFocusTrap(ref, isActive) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const focusableElements = ref.current.querySelectorAll(
      `button,
      a[href],
      input,
      select,
      textarea,
      [tabindex]:not([tabindex="-1"])`,
    );

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus initial
    firstElement.focus();

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

      // Shift + Tab sur premier => Boucle vers dernier
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }

      // Tab sur dernier => Boucle vers premier
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [ref, isActive]);
}
