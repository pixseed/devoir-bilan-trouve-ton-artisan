/**
 * ================================================================================================
 * API ERROR HANDLER
 * ================================================================================================
 * Rôle :
 * - Centraliser la gestion globale des erreurs Express.
 * - Retourner une réponse JSON normalisée.
 * - Masquer les détails internes en production.
 * ================================================================================================
 */

import { ApiError } from "../utils/apiError.js";

export const apiErrorHandler = (error, req, res, _next) => {
  const statusCode = error.statusCode || 500;

  const response = {
    success: false,
    error: {
      message:
        // Si error est une ApiError alors montrer son message, sinon message générique
        error instanceof ApiError ? error.message : "Erreur interne du serveur",
      code: error.code || "INTERNAL_ERROR",
    },
  };

  // Ajout des erreurs de validation si présentes
  if (error.fields) {
    response.error.fields = error.fields;
  }

  // Stack uniquement en développpement
  if (process.env.NODE_ENV === "development") {
    response.error.stack = error.stack;
  }

  // Retourne error dans la console en mide développement
  if (process.env.NODE_ENV === "development") {
    console.error("💥 API error :", error);
  }

  res.status(statusCode).json(response);
};
