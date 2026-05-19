/**
 * ================================================================================================
 * useCloseSearchOnBreakpoint.js
 * ================================================================================================
 */

import { useEffect } from "react";

/**
 * Hook : ferme le search panel lors du passage en desktop
 * ------------------------------------------------------------------------------------------------
 * @param {string|null} activePanel - panel actuellement ouvert
 * @param {function} closePanel - fonction pour ferme les panels
 * 
 * @return {void}
 */
export function useCloseSearchOnBreakpoint(activePanel, closePanel) {
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

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