/**
 * ================================================================================================
 * useEscapeKey.js
 * ================================================================================================
 */

import { useEffect } from "react";

/**
 * Hook : ferme un élément via la touche Escape.
 * ------------------------------------------------------------------------------------------------
 * @param {boolean} isActive
 * @param {function} closeElement
 * 
 * @return {void}
 */
export function useEscapeKey(isActive, closeElement) {
    useEffect(() => {
        if (!isActive) return;

        const handleKey = (e) => {
            if (e.key === "Escape") {
                closeElement();
            }
        };
        
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);

    }, [isActive, closeElement]);
}