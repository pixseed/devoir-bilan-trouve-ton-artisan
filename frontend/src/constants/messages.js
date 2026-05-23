/**
 * ================================================================================================
 * MESSAGES
 * ================================================================================================
 * Rôle :
 * - Centraliser les messages utilisateurs de l'application.
 * - Uniformiser les messages d'erreur et de feedback à travers l'application.
 * ================================================================================================
 */

export const APP_MESSAGES = {
  ERROR: {
    FETCH: {
      DEFAULT: "Erreur lors du chargement. Veuillez réessayer ultérieurement.",
      CATEGORIES:
        "Erreur lors du chargement des catégories. Veuillez réessayer ultérieurement.",
      ARTISANS:
        "Erreur lors du chargement des artisans. Veuillez réessayer ultérieurement.",
      ARTISAN:
        "Erreur lors du chargement de l'artisan. Veuillez réessayer ultérieurement.",
    },
    SERVER:
      "Une erreur serveur est survenue. Veuillez réessayer ultérieurement.",
    UNKNOWN:
      "Une erreur inattendue est survenue. Veuillez réessayer ultérieurement.",
  },
};
