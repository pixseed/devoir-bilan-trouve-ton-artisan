/**
 * ================================================================================================
 * ARTISAN VALIDATOR
 * ================================================================================================
 * Rôle :
 * - Centraliser les validations liées aux artisans.
 * ================================================================================================
 */

// ================================================================================================
// CONTACT FORM VALIDATION
// ================================================================================================
export const validateContactPayload = (payload) => {
  const { name, email, object, message } = payload;

  const allowedFields = ["name", "email", "object", "message"];
  const receivedFields = Object.keys(payload);

  const invalidFields = receivedFields.filter(
    (field) => !allowedFields.includes(field),
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fields = {};

  // Vérifie les champs non autorisés
  if (invalidFields.length > 0) {
    fields.invalidFields = `Champs invalides : ${invalidFields.join(", ")}. Seuls les champs suivants sont autorisés : ${allowedFields.join(", ")}.`;
  }

  // Validation nom
  if (!name?.trim()) {
    fields.name = "Le nom est requis.";
  } else if (name.trim().length < 2) {
    fields.name = "Le nom doit contenir au moins 2 caractères.";
  }

  // Validation email
  if (!email?.trim()) {
    fields.email = "L'email est requis.";
  } else if (!emailRegex.test(email)) {
    fields.email = "Format d'email invalide.";
  }

  // Validation objet
  if (!object?.trim()) {
    fields.object = "L'objet est requis.";
  } else if (object.trim().length < 3) {
    fields.object = "L'objet doit contenir au moins 3 caractères";
  }

  // Validation message
  if (!message?.trim()) {
    fields.message = "Le message est requis.";
  } else if (message.trim().length < 10) {
    fields.message = "Le message doit contenir au moins 10 caractères";
  }

  return {
    isValid: Object.keys(fields).length === 0,
    fields,
  };
};