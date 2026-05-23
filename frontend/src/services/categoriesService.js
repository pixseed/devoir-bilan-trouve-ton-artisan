/**
 * ================================================================================================
 * CATEGORIES SERVICE
 * ================================================================================================
 * Rôle :
 * - Gérer les appels API liés aux catégories.
 * ================================================================================================
 */

import { apiFetch } from "./apiClient";
import { API_CONFIG } from "../config/api";

export async function getCategories() {
  const response = await apiFetch(`${API_CONFIG.ENDPOINTS.CATEGORIES}`);

  return response.data;
}
