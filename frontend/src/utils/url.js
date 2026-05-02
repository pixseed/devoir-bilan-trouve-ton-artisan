/* url.js */

import { API_URL } from "../config/api";

export function buildImageUrl(path) {
    if (!path) return null;

    return `${API_URL.BASE_URL}${path}`;
}