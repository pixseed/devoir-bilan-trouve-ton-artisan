/**
 * ================================================================================================
 * ARTISANS SERVICE
 * ================================================================================================
 * Rôle :
 * - Gérer les appels API liés aux artisans.
 * - Transformer les données reçues pour le frontend.
 * ================================================================================================
 */

import { apiFetch } from "./apiClient";
import { API_CONFIG } from "../config/api";
import { buildImageUrl } from "../utils/url";

// ================================================================================================
// HELPERS
// ================================================================================================
function mapArtisanImage(artisan) {
  return {
    ...artisan,
    image: buildImageUrl(artisan.image),
    thumbnailSm: buildImageUrl(artisan.thumbnailSm),
    thumbnailMd: buildImageUrl(artisan.thumbnailMd),
    thumbnailLg: buildImageUrl(artisan.thumbnailLg),
  };
}

// ================================================================================================
// GET TOP ARTISANS
// ================================================================================================
export async function getTopArtisans() {
  const response = await apiFetch(`${API_CONFIG.ENDPOINTS.TOP_ARTISANS}`);
  
  return response.data.map(mapArtisanImage);
}

// ================================================================================================
// GET ARTISANS
// ================================================================================================
export async function getArtisans({ search, category }) {
  const params = new URLSearchParams();
  
  if (search) params.append("search", search);
  if (category) params.append("category", category);

  const response = await apiFetch(
    `${API_CONFIG.ENDPOINTS.ARTISANS}?${params.toString()}`,
  );
  
  return response.data.map(mapArtisanImage);
}

// ================================================================================================
// GET ARTISANS BY ID
// ================================================================================================
export async function getArtisanById(id) {
  const response = await apiFetch(`${API_CONFIG.ENDPOINTS.ARTISANS}/${id}`);
  
  return mapArtisanImage(response.data);
}

// ================================================================================================
// SEND CONTACT MESSAGE
// ================================================================================================
export async function sendArtisanContactMessage(id, payload) {
  const response = await apiFetch(
    `${API_CONFIG.ENDPOINTS.ARTISANS}/${id}/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  return response;
}
