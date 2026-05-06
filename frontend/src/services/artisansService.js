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

export async function getArtisans({ search, category }) {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (category) params.append("category", category);

    const json = await apiFetch(`${API_URL.ENDPOINTS.ARTISANS}?${params.toString()}`)

    return json.data.map((artisan) => ({
        ...artisan,
        image: buildImageUrl(artisan.image)
    }));
}