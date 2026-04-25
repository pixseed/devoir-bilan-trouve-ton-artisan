/**
 * ================================================================================================
 * useHeaderPanels.js
 * ================================================================================================
 */

import { useState } from "react";

/**
 * Hook : gestion des panels du header.
 * ------------------------------------------------------------------------------------------------
 * @returns {Object}
 * - activePanel {string|null} : panel actuellement ouvert
 * - togglePanel(panel) : ouvre/ferme un panel
 * - closePanel() : ferme tous les panels
 */
export function useHeaderPanels() {
    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panel) => {
        setActivePanel(activePanel === panel ? null : panel);
    };
    
    const closePanel = () => {
        setActivePanel(null);
    };

    return {
        activePanel,
        togglePanel,
        closePanel
    }
}