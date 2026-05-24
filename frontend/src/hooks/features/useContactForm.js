/**
 * ================================================================================================
 * USE CONTACT FORM
 * ================================================================================================
 * Rôle :
 * - Gérer l'état et la soumission du formulaire de contact artisan.
 * - Gérer les validations backend et les retours utilisateurs.
 * ================================================================================================
 */

import { useState } from "react";
import { sendArtisanContactMessage } from "../../services/artisansService";

// ================================================================================================
// CONSTANTS
// État initial réutilisable du formulaire
// ================================================================================================
const INITIAL_FORM = {
  name: "",
  email: "",
  object: "",
  message: "",
};

export function useContactForm(artisanId) {
  // ================================================================================================
  // STATE
  // ================================================================================================
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  // ================================================================================================
  // HANDLERS
  // ================================================================================================

  // Met à jour un champ du formulaire et nettoie son erreur spécifique
  function handleChange(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [field]: null,
    }));
  }

  // Soumission du formulaire
  async function handleSubmit(e) {
    e.preventDefault();

    // Reset avant nouvelle soumission
    setLoading(true);
    setError(null);
    setSuccess(null);
    setFieldErrors({});

    try {
      const response = await sendArtisanContactMessage(artisanId, formData);

      setSuccess(response.message);
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error(error);

      switch (error.code) {
        case "ARTISAN_NOT_FOUND":
          setError("Cet artisan n'existe pas.");
          break;

        case "VALIDATION_ERROR":
          setError(error.message);
          setFieldErrors(error.fields || {});
          break;

        case "CONTACT_RATE_LIMIT_EXCEEDED":
          setError(error.message || "Limite d'envoi de formulaire atteinte. Veuillez réessayer ultérieurement.");
          break;

        default:
          setError(error.message || "Une erreur est survenue.");
      }
    } finally {
      setLoading(false);
    }
  }

  // ================================================================================================
  // RETURN
  // ================================================================================================
  return {
    formData,
    loading,
    error,
    success,
    fieldErrors,
    handleChange,
    handleSubmit,
  };
}
