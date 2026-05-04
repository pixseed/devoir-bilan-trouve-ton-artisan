/**
 * ================================================================================================
 * useEscapeOutside.js
 * ================================================================================================
 */

import { useEffect } from "react";

/**
 * Hook : ferme un élément via la touche Escape.
 * ------------------------------------------------------------------------------------------------
 * @param {string|null} activeElement
 * @param {function} closeElement
 * 
 * @return {void}
 */
export function useEscapeOutside(activeElement, closeElement) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape" && activeElement) {
                closeElement();
            }
        };
        
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
        
    }, [activeElement, closeElement]);
}