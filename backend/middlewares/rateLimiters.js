/**
 * ================================================================================================
 * RATE LIMITERS
 * ================================================================================================
 * Rôle :
 * - Centraliser les limiteurs de requêtes HTTP.
 * - Appliquer des seuils différents selon la sensibilité des endpoints.
 * 
 * Stratégie :
 * - globalLimiter: protection générale de l'API contre flood / scraping.
 * - contactLimiter : protection renforcée du formulaire de contact contre spam.
 * ================================================================================================
 */

import { rateLimit } from "express-rate-limit";

// ================================================================================================
// GLOBAL API LIMITER
// Protection générale de l'API
// ================================================================================================
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limite chaque IP à 300 requêtes
  message: {
    success: false,
    error: {
      message: "Trop de requêtes exécutées. Veuillez réessayer ultérieurement.",
      code: "RATE_LIMIT_EXCEEDED",
    },
  },
});

// ================================================================================================
// CONTACT FORM LIMITER
// Protection spécifique contre le spam formulaire de contact
// ================================================================================================
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limite chaque IP à 10 requêtes
  message: {
    success: false,
    error: {
      message: "Trop de tentatives d'envoi du formulaire. Veuillez réessayer ultérieurement.",
      code: "CONTACT_RATE_LIMIT_EXCEEDED",
    },
  },
});