/**
 * ================================================================================================
 * USE HEADER PANELS
 * ================================================================================================
 * Rôle :
 * - Gérer l'ouverture et la fermeture des panels du header.
 * ================================================================================================
 */

import { useState } from "react";

export function useHeaderPanels() {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  return {
    activePanel,
    togglePanel,
    closePanel,
  };
}
