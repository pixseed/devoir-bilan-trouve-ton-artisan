/* apiClient.js */

import { API_URL } from "../config/api";

export async function apiFetch(endpoint) {
    const res = await fetch(`${API_URL.BASE_URL}${endpoint}`);

    if(!res.ok) {
        switch (res.status) {
            case 404: throw new Error("Ressource introuvable");
            case 500: throw new Error("Erreur serveur");
            default: throw new Error(`Erreur API : ${res.status}`);
        }
    }

    return res.json();
}