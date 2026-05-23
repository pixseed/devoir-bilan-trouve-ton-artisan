/**
 * ================================================================================================
 * URL UTILS
 * ================================================================================================
 * Rôle :
 * - Construire des URLs complètes à partir de chemins relatifs.
 * - Uniformiser la gestion des assets backend.
 * ================================================================================================
 */

import { API_CONFIG } from "../config/api";

export function buildImageUrl(path) {
  if (!path) return null;

  // Supprimer les slashes à la fin du BASE_URL
  const baseUrl = API_CONFIG.BASE_URL.replace(/\/$/, "");

  // Assurer que le path commence par un slash
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${cleanPath}`;
}
