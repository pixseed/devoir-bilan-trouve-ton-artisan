/* categoryService.js */

import { apiFetch } from "./apiClient";
import { API_URL } from "../config/api";

export async function getCategories() {
    const res = await apiFetch(`${API_URL.ENDPOINTS.CATEGORIES}`);
    
    return res.data;
}