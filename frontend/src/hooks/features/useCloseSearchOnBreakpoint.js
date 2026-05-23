/**
 * ================================================================================================
 * USE CLOSE SEARCH ON BREAKPOINT
 * ================================================================================================
 * Rôle :
 * - Fermer automatiquement le panel de recherche lors du passage en desktop.
 * ================================================================================================
 */

import { useEffect } from "react";
import { MEDIA_QUERIES } from "../../config/mediaQueries.js";

export function useCloseSearchOnBreakpoint(activePanel, closePanel) {
  useEffect(() => {
    const mediaQuery = window.matchMedia(MEDIA_QUERIES.md);

    const handleChange = (e) => {
      if (e.matches && activePanel === "search") {
        closePanel();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [activePanel, closePanel]);
}
