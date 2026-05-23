/**
 * ================================================================================================
 * SCROLL TO TOP
 * ================================================================================================
 * Rôle :
 * - Réinitialiser le scroll en haut de page à chaque changement de route.
 * ================================================================================================
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}
