/**
 * ================================================================================================
 * SANITIZERS
 * ================================================================================================
 * Rôle :
 * - Nettoyer les données envoyées par l'utilisateur et reçues par l'API avant la validation.
 * ================================================================================================
 */

// ================================================================================================
// STRING SANITIZATION
// Nettoyage d'une chaîne utilisateur
// ================================================================================================
export const sanitizeString = (value) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// ================================================================================================
// CONTACT PAYLOAD SANITIZATION
// Nettoyage complet du payload formulaire
// ================================================================================================
export const sanitizeContactPayload = (payload) => {
  return {
    name: sanitizeString(payload.name),
    email: sanitizeString(payload.email),
    object: sanitizeString(payload.object),
    message: sanitizeString(payload.message),
  };
};
