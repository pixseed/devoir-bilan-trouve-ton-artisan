/* artisansService.js */

import { apiFetch } from "./apiClient";
import { API_URL } from "../config/api";
import { buildImageUrl } from "../utils/url";

export async function getTopArtisans() {
    const res = await apiFetch(`${API_URL.ENDPOINTS.TOP_ARTISANS}`);
    
    return res.data.map((artisan) => ({
        ...artisan,
        image: buildImageUrl(artisan.image),
    }));
}

export async function getArtisans({ search, category }) {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (category) params.append("category", category);

    const res = await apiFetch(`${API_URL.ENDPOINTS.ARTISANS}?${params.toString()}`)

    return res.data.map((artisan) => ({
        ...artisan,
        image: buildImageUrl(artisan.image)
    }));
}

export async function getArtisanById(id) {
    const res = await apiFetch(`${API_URL.ENDPOINTS.ARTISANS}/${id}`);
    
    return {
        ...res.data,
        image: buildImageUrl(res.data.image),
    };
}

export async function sendArtisanContactMessage(id, payload) {
    const res = await apiFetch(`${API_URL.ENDPOINTS.ARTISANS}/${id}/contact`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return res;
}