/**
 * ================================================================================================
 * useClickOutside.js
 * ================================================================================================
 */

import { useEffect } from "react";

/**
 * Hook : détecte un clic en dehors d'un élément.
 * ------------------------------------------------------------------------------------------------
 * @param {ref} ref - élément à surveiller
 * @param {function} handler - callback exécuté en dehors
 * 
 * @return {void}
 */
export function useClickOutside(ref, handler) {
    useEffect(() => {
        const handleClick = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return
            }

            handler();
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref,handler])
}