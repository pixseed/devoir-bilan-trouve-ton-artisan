/**
 * ================================================================================================
 * USE ESCAPE KEY
 * ================================================================================================
 * Rôle :
 * - Déclencher une action lors de l'appuie sur la touche Escape.
 * ================================================================================================
 */

import { useEffect } from "react";

export function useEscapeKey(isActive, handler) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, handler]);
}
