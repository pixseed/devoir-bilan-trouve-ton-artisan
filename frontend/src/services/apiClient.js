/**
 * ================================================================================================
 * API CLIENT
 * ================================================================================================
 * Rôle :
 * - Centraliser les requêtes HTTP vers l'API backend.
 * - Gérer le parsing des réponses JSON.
 * - Normaliser les erreurs réseau/API.
 * ================================================================================================
 */

import { API_CONFIG } from "../config/api";
import { buildApiError } from "../utils/error";

export async function apiFetch(endpoint, options = {}) {
  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, options);

  let data = null;

  // Fallback si la réponse n'est pas un JSON valide
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw buildApiError(response, data);
  }

  return data;
}
