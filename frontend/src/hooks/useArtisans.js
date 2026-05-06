/* useArtisans.js */

import { useState, useEffect } from "react";
import { getArtisans } from "../services/artisansService";
import { APP_MESSAGES } from "../constants/messages";

export function useArtisans({ search, category }) {
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getArtisans({ search, category })
            .then(setArtisans)
            .catch((err) => {
                console.error(err);
                setError(APP_MESSAGES.ERROR.FETCH.ARTISANS);
            })
            .finally(() => {
                setLoading(false);
            })
        }, [search, category]);

    return {artisans, loading, error};
}