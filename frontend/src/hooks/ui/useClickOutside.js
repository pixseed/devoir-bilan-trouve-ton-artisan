/**
 * ================================================================================================
 * USE CLICK OUTSIDE
 * ================================================================================================
 * Rôle :
 * - Détecter un clic en dehors d'un élément référencé.
 * ================================================================================================
 */

import { useEffect } from "react";

export function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, handler]);
}
