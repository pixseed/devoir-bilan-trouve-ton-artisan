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
  if (!name) {
    fields.name = "Le nom est requis.";
  } else if (name.length < 2 || name.length > 100) {
    fields.name = "Le nom doit contenir entre 2 et 100 caractères.";
  }

  // Validation email
  if (!email) {
    fields.email = "L'email est requis.";
  } else if (!emailRegex.test(email)) {
    fields.email = "Format d'email invalide.";
  } else if (email.length > 255) {
    fields.email = "L'email ne peut pas dépasser 255 caractères."
  }

  // Validation objet
  if (!object) {
    fields.object = "L'objet est requis.";
  } else if (object.length < 3 || object.length > 150) {
    fields.object = "L'objet doit contenir entre 3 et 150 caractères.";
  }

  // Validation message
  if (!message) {
    fields.message = "Le message est requis.";
  } else if (message.length < 10 || message.length > 2000) {
    fields.message = "Le message doit contenir entre 10 et 2000 caractères.";
  }

  return {
    isValid: Object.keys(fields).length === 0,
    fields,
  };
};