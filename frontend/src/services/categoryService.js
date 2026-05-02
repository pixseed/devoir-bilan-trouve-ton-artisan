/* categoryService.js */

import { apiFetch } from "./apiClient";
import { API_URL } from "../config/api";

export async function getCategories() {
    const json = await apiFetch(`${API_URL.ENDPOINTS.CATEGORIES}`);
    
    return json.data;
}