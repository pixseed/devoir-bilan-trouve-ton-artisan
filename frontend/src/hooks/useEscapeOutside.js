/**
 * ================================================================================================
 * useEscapeOutside.js
 * ================================================================================================
 */

import { useEffect } from "react";

/**
 * Hook : ferme un panel via la touche Escape.
 * ------------------------------------------------------------------------------------------------
 * @param {string|null} activePanel
 * @param {function} closePanel
 * 
 * @return {void}
 */
export function useEscapeOutside(activePanel, closePanel) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape" && activePanel) {
                closePanel();
            }
        };

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [activePanel, closePanel]);
}