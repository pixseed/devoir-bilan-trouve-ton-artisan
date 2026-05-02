/* categoryService.js */

import { apiFetch } from "./apiClient";
import { API_URL } from "../config/api";
import { buildImageUrl } from "../utils/url";

export async function getTopArtisans() {
    const json = await apiFetch(`${API_URL.ENDPOINTS.TOP_ARTISANS}`);
    
    return json.data.map((artisan) => ({
        ...artisan,
        image: buildImageUrl(artisan.image),
    }));
}