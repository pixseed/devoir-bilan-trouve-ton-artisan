/* useArtisan.js */

import { useState, useEffect } from "react";
import { getArtisanById } from "../services/artisansService";
import { APP_MESSAGES } from "../constants/messages";

export function useArtisan(id) {
    const [artisan, setArtisan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        getArtisanById(id)
            .then(setArtisan)
            .catch((err) => {
                console.error(err);
                setError(APP_MESSAGES.ERROR.FETCH.ARTISAN);
            })
            .finally(() => {
                setLoading(false);
            })
        }, [id]);

    return {artisan, loading, error};
}