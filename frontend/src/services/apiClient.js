/* apiClient.js */

import { API_URL } from "../config/api";
import { APP_MESSAGES } from "../constants/messages";
import { buildApiError } from "../utils/error";

export async function apiFetch(endpoint, options = {}) {
    const res = await fetch(`${API_URL.BASE_URL}${endpoint}`, options);

    let data = null;

    // Sécurité en cas de crash HTML
    try {
        data = await res.json();
    } catch {
        data = {};
    }

    if(!res.ok) {
        throw buildApiError(res, data);
    }

    return data;
}