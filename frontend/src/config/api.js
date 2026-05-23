/**
 * ================================================================================================
 * API CONFIG
 * ================================================================================================
 * Rôle :
 * - Centraliser les URLs de l'API backend.
 * - Définir les endpoints de l'application.
 * ================================================================================================
 */

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL,
  ENDPOINTS: {
    CATEGORIES: "/categories",
    TOP_ARTISANS: "/artisans/top",
    ARTISANS: "/artisans",
  },
};
